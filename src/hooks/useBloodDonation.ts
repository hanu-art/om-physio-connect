import { useState } from 'react'
import { supabase, type BloodDonation } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

export const useBloodDonation = () => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const registerDonor = async (donorData: Omit<BloodDonation, 'id' | 'status' | 'created_at' | 'updated_at'>) => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('blood_donations')
        .insert([{
          ...donorData,
          status: 'registered'
        }])
        .select()
        .single()

      if (error) throw error

      toast({
        title: "Registration Successful!",
        description: "Thank you for registering. We'll contact you with camp details.",
      })

      // Send email notification
      await sendDonorNotification(data)

      return data
    } catch (error) {
      console.error('Error registering donor:', error)
      toast({
        title: "Error",
        description: "Failed to register. Please try again.",
        variant: "destructive"
      })
      throw error
    } finally {
      setLoading(false)
    }
  }

  const getDonors = async (status?: string) => {
    try {
      let query = supabase.from('blood_donations').select('*').order('created_at', { ascending: false })
      
      if (status) {
        query = query.eq('status', status)
      }

      const { data, error } = await query

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error fetching donors:', error)
      return []
    }
  }

  const updateDonorStatus = async (id: string, status: BloodDonation['status']) => {
    try {
      const { error } = await supabase
        .from('blood_donations')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id)

      if (error) throw error

      toast({
        title: "Donor Status Updated",
        description: `Status changed to ${status}`,
      })
    } catch (error) {
      console.error('Error updating donor status:', error)
      toast({
        title: "Error",
        description: "Failed to update donor status",
        variant: "destructive"
      })
    }
  }

  const sendDonorNotification = async (donor: BloodDonation) => {
    try {
      const { error } = await supabase.functions.invoke('send-donor-notification', {
        body: { donor }
      })

      if (error) throw error
    } catch (error) {
      console.error('Error sending notification:', error)
    }
  }

  return {
    registerDonor,
    getDonors,
    updateDonorStatus,
    loading
  }
}