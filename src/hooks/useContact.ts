import { useState } from 'react'
import { supabase, type ContactMessage } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

export const useContact = () => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const sendMessage = async (messageData: Omit<ContactMessage, 'id' | 'status' | 'created_at'>) => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([{
          ...messageData,
          status: 'unread'
        }])
        .select()
        .single()

      if (error) throw error

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      })

      // Send email notification
      await sendContactNotification(data)

      return data
    } catch (error) {
      console.error('Error sending message:', error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      })
      throw error
    } finally {
      setLoading(false)
    }
  }

  const getMessages = async (status?: string) => {
    try {
      let query = supabase.from('contact_messages').select('*').order('created_at', { ascending: false })
      
      if (status) {
        query = query.eq('status', status)
      }

      const { data, error } = await query

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error fetching messages:', error)
      return []
    }
  }

  const updateMessageStatus = async (id: string, status: ContactMessage['status']) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status })
        .eq('id', id)

      if (error) throw error
    } catch (error) {
      console.error('Error updating message status:', error)
    }
  }

  const sendContactNotification = async (message: ContactMessage) => {
    try {
      const { error } = await supabase.functions.invoke('send-contact-notification', {
        body: { message }
      })

      if (error) throw error
    } catch (error) {
      console.error('Error sending notification:', error)
    }
  }

  return {
    sendMessage,
    getMessages,
    updateMessageStatus,
    loading
  }
}