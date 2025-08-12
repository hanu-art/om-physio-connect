import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Phone, MapPin, CheckCircle, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Appointment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const services = [
    "Orthopedic Physiotherapy",
    "Sports Rehabilitation", 
    "Neurological Therapy",
    "Cardiac Rehabilitation",
    "Pediatric Physiotherapy",
    "Pain Management",
    "General Consultation"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.service || !formData.preferredDate || !formData.preferredTime) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Appointment Requested Successfully!",
      description: "We'll contact you within 2 hours to confirm your appointment.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  const handleWhatsAppBooking = () => {
    const message = `Hi! I'd like to book an appointment at RM Physiotherapy Center.
    
Name: ${formData.name || '[Name]'}
Service: ${formData.service || '[Service]'}
Preferred Date: ${formData.preferredDate || '[Date]'}
Preferred Time: ${formData.preferredTime || '[Time]'}

Please confirm my appointment. Thank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Book Your Appointment</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule your physiotherapy session with Dr. Om Dangi and take the first step 
            towards your recovery and better health.
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl">Appointment Request Form</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll contact you to confirm your appointment
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleSelectChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Date *</Label>
                        <Input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Preferred Time *</Label>
                        <Select value={formData.preferredTime} onValueChange={(value) => handleSelectChange('preferredTime', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your condition or any specific requirements..."
                        rows={4}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button type="submit" variant="hero" size="lg" className="flex-1">
                        <Calendar className="mr-2 h-4 w-4" />
                        Request Appointment
                      </Button>
                      <Button 
                        type="button" 
                        variant="healing" 
                        size="lg" 
                        onClick={handleWhatsAppBooking}
                        className="flex-1"
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Book via WhatsApp
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 9876543210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">Kolar Road, Bhopal, Madhya Pradesh</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Working Hours</p>
                      <p className="text-muted-foreground">Mon-Sat: 9 AM - 8 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Appointment Guidelines */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Appointment Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                    <p className="text-sm">Arrive 15 minutes early for new patients</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                    <p className="text-sm">Bring previous medical reports if any</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                    <p className="text-sm">Wear comfortable clothing</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                    <p className="text-sm">Cancellation at least 2 hours prior</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                    <p className="text-sm">Insurance cards accepted</p>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="shadow-soft bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">For urgent medical needs:</p>
                  <Button variant="healing" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Call: +91 9876543210
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;