import { useState } from 'react'
import { supabase, type Appointment } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

export const useAppointments = () => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const createAppointment = async (appointmentData: Omit<Appointment, 'id' | 'status' | 'created_at' | 'updated_at'>) => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('appointments')
        .insert([{
          ...appointmentData,
          status: 'pending'
        }])
        .select()
        .single()

      if (error) throw error

      toast({
        title: "Appointment Requested Successfully!",
        description: "We'll contact you within 2 hours to confirm your appointment.",
      })

      // Send email notification to admin
      await sendAppointmentNotification(data)

      return data
    } catch (error) {
      console.error('Error creating appointment:', error)
      toast({
        title: "Error",
        description: "Failed to submit appointment request. Please try again.",
        variant: "destructive"
      })
      throw error
    } finally {
      setLoading(false)
    }
  }

  const getAppointments = async (status?: string) => {
    try {
      let query = supabase.from('appointments').select('*').order('created_at', { ascending: false })
      
      if (status) {
        query = query.eq('status', status)
      }

      const { data, error } = await query

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error fetching appointments:', error)
      return []
    }
  }

  const updateAppointmentStatus = async (id: string, status: Appointment['status']) => {
    try {
      const { error } = await supabase
        .from('appointments')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id)

      if (error) throw error

      toast({
        title: "Appointment Updated",
        description: `Appointment status changed to ${status}`,
      })
    } catch (error) {
      console.error('Error updating appointment:', error)
      toast({
        title: "Error",
        description: "Failed to update appointment status",
        variant: "destructive"
      })
    }
  }

  const sendAppointmentNotification = async (appointment: Appointment) => {
    try {
      // Call Supabase Edge Function to send email
      const { error } = await supabase.functions.invoke('send-appointment-notification', {
        body: { appointment }
      })

      if (error) throw error
    } catch (error) {
      console.error('Error sending notification:', error)
    }
  }

  return {
    createAppointment,
    getAppointments,
    updateAppointmentStatus,
    loading
  }
}