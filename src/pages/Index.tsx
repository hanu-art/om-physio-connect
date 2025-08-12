import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Users, 
  Award, 
  Clock,
  MapPin,
  Phone,
  Star,
  CheckCircle,
  ArrowRight,
  Calendar,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-physiotherapy.jpg';

const Index = () => {
  const services = [
    {
      title: "Orthopedic Physiotherapy",
      description: "Specialized treatment for musculoskeletal injuries and conditions",
      icon: <Heart className="h-8 w-8 text-primary" />
    },
    {
      title: "Sports Rehabilitation",
      description: "Expert care for sports injuries and performance enhancement",
      icon: <Award className="h-8 w-8 text-secondary" />
    },
    {
      title: "Neurological Therapy",
      description: "Comprehensive treatment for neurological disorders and recovery",
      icon: <Shield className="h-8 w-8 text-primary" />
    }
  ];

  const stats = [
    { number: "5000+", label: "Patients Treated" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Emergency Support" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Dr. Om Dangi's treatment helped me recover from my knee injury completely. The physiotherapy sessions were professional and effective.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      text: "Excellent facility with modern equipment. The personalized treatment plan worked wonders for my back pain.",
      rating: 5
    },
    {
      name: "Anita Singh",
      text: "Highly recommend RM Physiotherapy Center. The staff is caring and the treatment results are outstanding.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            RM Physiotherapy <br />
            <span className="text-secondary">Center</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Professional physiotherapy services in Bhopal under the expert care of 
            <strong> Dr. Om Dangi</strong> - Your path to complete recovery and wellness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/appointment">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/services">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Specialized Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive physiotherapy treatments tailored to your specific needs with 
              modern equipment and proven techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-medium transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Dr. Om Dangi */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Meet Dr. Om Dangi</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of experience in physiotherapy, Dr. Om Dangi is a certified 
                professional dedicated to providing the highest quality care to patients in Bhopal.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Master's in Physiotherapy</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>15+ Years Clinical Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Specialized in Orthopedic & Sports Medicine</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Member of Indian Association of Physiotherapists</span>
                </div>
              </div>
              <Button variant="hero" size="lg" asChild>
                <Link to="/about">Learn More About Dr. Dangi</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-strong">
                <div className="text-white text-center">
                  <Users className="h-16 w-16 mx-auto mb-4" />
                  <div className="text-2xl font-bold">Dr. Om Dangi</div>
                  <div className="text-lg opacity-90">Chief Physiotherapist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Patients Say</h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from real people who found their path to recovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="font-semibold text-primary">
                    {testimonial.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 medical-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Care?</h2>
          <p className="text-xl mb-8 opacity-90">
            We're available for emergency consultations and urgent care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="healing" size="lg" className="text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 9876543210
            </Button>
            <div className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5" />
              <span>Available Mon-Sat, 9 AM - 8 PM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
