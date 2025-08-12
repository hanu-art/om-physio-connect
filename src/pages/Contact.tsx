import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Navigation,
  Facebook,
  Instagram,
  Twitter,
  Send
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactReasons = [
    "General Inquiry",
    "Appointment Booking",
    "Service Information",
    "Insurance Query",
    "Feedback/Complaint",
    "Partnership Inquiry",
    "Media/Press",
    "Other"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setContactData({
      ...contactData,
      subject: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactData.name || !contactData.email || !contactData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setContactData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with RM Physiotherapy Center. We're here to answer your questions 
            and help you on your journey to better health and recovery.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground text-sm">
                  Kolar Road, Bhopal<br />
                  Madhya Pradesh, India<br />
                  462042
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">
                  Main: +91 9876543210<br />
                  Emergency: +91 9876543211<br />
                  WhatsApp: +91 9876543210
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">
                  info@rmphysio.com<br />
                  appointments@rmphysio.com<br />
                  emergency@rmphysio.com
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Working Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon - Sat: 9:00 AM - 8:00 PM<br />
                  Sunday: Closed<br />
                  Emergency: 24/7
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll respond as soon as possible
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={contactData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={contactData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={contactData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select value={contactData.subject} onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {contactReasons.map((reason) => (
                          <SelectItem key={reason} value={reason}>
                            {reason}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={contactData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your inquiry in detail..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              {/* Google Maps Embed */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Navigation className="h-5 w-5 text-primary" />
                    Find Us on Map
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Navigation className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Interactive map will be embedded here<br />
                        Kolar Road, Bhopal, Madhya Pradesh
                      </p>
                      <Button variant="outline" size="sm" className="mt-4">
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="hero" size="lg" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now: +91 9876543210
                  </Button>
                  <Button variant="secondary" size="lg" className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    WhatsApp Chat
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Stay connected for health tips and updates
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="hover:bg-blue-50 hover:border-blue-300">
                      <Facebook className="h-4 w-4 text-blue-600" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-pink-50 hover:border-pink-300">
                      <Instagram className="h-4 w-4 text-pink-600" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-blue-50 hover:border-blue-400">
                      <Twitter className="h-4 w-4 text-blue-500" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What are your consultation fees?</h3>
                <p className="text-muted-foreground text-sm">
                  Initial consultation: ₹500. Follow-up sessions range from ₹600-1800 
                  depending on the treatment type.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you accept insurance?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we accept most major health insurance plans. Please bring 
                  your insurance card for verification.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How to cancel an appointment?</h3>
                <p className="text-muted-foreground text-sm">
                  Please call us at least 2 hours before your appointment time 
                  to cancel or reschedule.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you provide home visits?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we offer home physiotherapy services for patients who 
                  cannot visit our clinic. Additional charges apply.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-12 bg-red-50 border-t border-red-200">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-red-800 mb-4">Medical Emergency?</h3>
          <p className="text-red-700 mb-6">
            For urgent medical needs, contact us immediately or visit the nearest emergency room.
          </p>
          <Button variant="destructive" size="lg">
            <Phone className="mr-2 h-4 w-4" />
            Emergency: +91 9876543211
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;