import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Droplets,
  CheckCircle,
  AlertCircle,
  Phone,
  UserPlus
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BloodDonation = () => {
  const { toast } = useToast();
  const [registrationData, setRegistrationData] = useState({
    name: '',
    age: '',
    bloodGroup: '',
    phone: '',
    email: '',
    address: '',
    previousDonation: ''
  });

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const upcomingCamps = [
    {
      date: "March 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "RM Physiotherapy Center, Kolar Road",
      organizer: "Red Cross Society Bhopal",
      expectedDonors: 100,
      status: "upcoming"
    },
    {
      date: "April 22, 2024", 
      time: "10:00 AM - 3:00 PM",
      location: "Government Hospital, Bhopal",
      organizer: "State Blood Bank",
      expectedDonors: 150,
      status: "upcoming"
    }
  ];

  const donationRequirements = [
    { requirement: "Age between 18-65 years", met: true },
    { requirement: "Weight minimum 45 kg", met: true },
    { requirement: "Hemoglobin level above 12.5 g/dL", met: true },
    { requirement: "No recent illness or medication", met: true },
    { requirement: "3 months gap from last donation", met: true },
    { requirement: "Valid photo ID required", met: true }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setRegistrationData({
      ...registrationData,
      [name]: value
    });
  };

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!registrationData.name || !registrationData.phone || !registrationData.bloodGroup || !registrationData.age) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Registration Successful!",
      description: "Thank you for registering for blood donation. We'll contact you with camp details.",
    });

    setRegistrationData({
      name: '',
      age: '',
      bloodGroup: '',
      phone: '',
      email: '',
      address: '',
      previousDonation: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Heart className="h-16 w-16 mx-auto mb-6 text-red-300" />
            <h1 className="text-5xl font-bold mb-6">Blood Donation Camp</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Join our mission to save lives through blood donation. Every drop counts, 
              every donation matters. Be a hero in someone's story of survival.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="healing" size="lg" className="text-lg px-8 py-4">
                <UserPlus className="mr-2 h-5 w-5" />
                Register as Donor
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Blood Request
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-muted-foreground">Lives Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">200+</div>
              <div className="text-muted-foreground">Regular Donors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">24</div>
              <div className="text-muted-foreground">Camps Organized</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-muted-foreground">Safe Procedures</div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration and Upcoming Camps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Registration Form */}
            <div>
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <UserPlus className="h-6 w-6 text-red-500" />
                    Blood Donor Registration
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Register to become a voluntary blood donor and save lives
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegistration} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={registrationData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="age">Age *</Label>
                        <Input
                          id="age"
                          name="age"
                          type="number"
                          value={registrationData.age}
                          onChange={handleInputChange}
                          placeholder="18-65"
                          min="18"
                          max="65"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="bloodGroup">Blood Group *</Label>
                        <Select value={registrationData.bloodGroup} onValueChange={(value) => handleSelectChange('bloodGroup', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select blood group" />
                          </SelectTrigger>
                          <SelectContent>
                            {bloodGroups.map((group) => (
                              <SelectItem key={group} value={group}>
                                {group}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={registrationData.phone}
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
                        value={registrationData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={registrationData.address}
                        onChange={handleInputChange}
                        placeholder="Your complete address"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="previousDonation">Previous Donation</Label>
                      <Select value={registrationData.previousDonation} onValueChange={(value) => handleSelectChange('previousDonation', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Have you donated before?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="never">Never donated</SelectItem>
                          <SelectItem value="within-3-months">Within 3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months ago</SelectItem>
                          <SelectItem value="over-6-months">Over 6 months ago</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Heart className="mr-2 h-4 w-4" />
                      Register as Blood Donor
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Camps */}
            <div className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-primary" />
                    Upcoming Blood Donation Camps
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingCamps.map((camp, index) => (
                    <div key={index} className="border border-border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-red-100 text-red-700">
                          {camp.status}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {camp.expectedDonors} expected
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-medium">{camp.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{camp.time}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-primary mt-1" />
                          <span>{camp.location}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Organized by: {camp.organizer}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Register for this Camp
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Donation Requirements */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    Donation Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {donationRequirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{req.requirement}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Blood Request */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <Card className="shadow-soft border-red-200">
            <CardContent className="p-8 text-center">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-red-800">Emergency Blood Requirement?</h3>
              <p className="text-red-700 mb-6">
                If you need blood urgently, contact us immediately. We maintain a network of 
                verified donors who can help in emergency situations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="destructive" size="lg">
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency: +91 9876543210
                </Button>
                <Button variant="outline" size="lg" className="border-red-300 text-red-700 hover:bg-red-50">
                  <Droplets className="mr-2 h-4 w-4" />
                  Find Blood Bank
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BloodDonation;