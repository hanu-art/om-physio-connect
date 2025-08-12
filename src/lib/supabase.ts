import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Appointment {
  id?: string
  name: string
  phone: string
  email?: string
  service: string
  preferred_date: string
  preferred_time: string
  message?: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  created_at?: string
  updated_at?: string
}

export interface BloodDonation {
  id?: string
  name: string
  phone: string
  email?: string
  age: number
  blood_group: string
  weight: number
  last_donation_date?: string
  medical_conditions?: string
  status: 'registered' | 'approved' | 'rejected'
  created_at?: string
  updated_at?: string
}

export interface GalleryImage {
  id?: string
  title: string
  description?: string
  image_url: string
  category: 'facilities' | 'treatments' | 'events' | 'team'
  is_featured: boolean
  created_at?: string
}

export interface ContactMessage {
  id?: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  status: 'unread' | 'read' | 'replied'
  created_at?: string
}

export interface Testimonial {
  id?: string
  name: string
  treatment: string
  rating: number
  message: string
  is_featured: boolean
  created_at?: string
}