import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Heart, 
  Zap, 
  Shield, 
  Activity, 
  Brain, 
  Bone,
  Dumbbell,
  Users,
  Clock,
  CheckCircle,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Bone className="h-12 w-12 text-primary" />,
      title: "Orthopedic Physiotherapy",
      description: "Specialized treatment for bone, joint, and muscle disorders including fractures, arthritis, and post-surgical rehabilitation.",
      features: ["Post-fracture rehabilitation", "Joint replacement recovery", "Arthritis management", "Spinal disorders"],
      duration: "45-60 minutes",
      price: "₹800-1200"
    },
    {
      icon: <Dumbbell className="h-12 w-12 text-secondary" />,
      title: "Sports Rehabilitation",
      description: "Expert care for sports injuries and performance enhancement for athletes and active individuals.",
      features: ["Sports injury recovery", "Performance enhancement", "Injury prevention", "Return to sport protocols"],
      duration: "60 minutes",
      price: "₹1000-1500"
    },
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "Neurological Therapy",
      description: "Comprehensive treatment for neurological conditions including stroke, Parkinson's, and spinal cord injuries.",
      features: ["Stroke rehabilitation", "Balance training", "Gait training", "Functional recovery"],
      duration: "60-75 minutes",
      price: "₹1200-1800"
    },
    {
      icon: <Heart className="h-12 w-12 text-secondary" />,
      title: "Cardiac Rehabilitation",
      description: "Specialized program for heart patients to improve cardiovascular health and recovery after cardiac events.",
      features: ["Post-cardiac surgery care", "Exercise programs", "Lifestyle counseling", "Risk factor management"],
      duration: "45 minutes",
      price: "₹900-1300"
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Pediatric Physiotherapy",
      description: "Specialized care for children with developmental delays, disabilities, and injuries.",
      features: ["Developmental delays", "Cerebral palsy", "Autism support", "Sports injuries in children"],
      duration: "45 minutes",
      price: "₹700-1000"
    },
    {
      icon: <Shield className="h-12 w-12 text-secondary" />,
      title: "Pain Management",
      description: "Advanced techniques for chronic pain relief and management using modern therapeutic approaches.",
      features: ["Chronic pain relief", "Dry needling", "Manual therapy", "Exercise therapy"],
      duration: "30-45 minutes",
      price: "₹600-900"
    }
  ];

  const specialTreatments = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Dry Needling",
      description: "Advanced technique for muscle pain and trigger point release"
    },
    {
      icon: <Activity className="h-8 w-8 text-secondary" />,
      title: "Manual Therapy",
      description: "Hands-on treatment for joint and soft tissue mobilization"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Electrotherapy",
      description: "Modern electrical stimulation for pain relief and healing"
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Therapeutic Exercise",
      description: "Customized exercise programs for optimal recovery"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Physiotherapy Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive physiotherapy treatments using evidence-based practices and 
            state-of-the-art equipment to help you achieve optimal recovery and wellness.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {service.duration}
                      </div>
                      <div className="font-semibold text-primary">{service.price}</div>
                    </div>
                    <Button variant="hero" size="sm" asChild>
                      <Link to="/appointment">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Treatments */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Specialized Treatment Techniques</h2>
            <p className="text-xl text-muted-foreground">
              Advanced therapeutic approaches for enhanced healing and recovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialTreatments.map((treatment, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {treatment.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{treatment.title}</h3>
                  <p className="text-muted-foreground text-sm">{treatment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Treatment Process</h2>
            <p className="text-xl text-muted-foreground">
              A systematic approach to ensure the best possible outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
              <p className="text-muted-foreground">Comprehensive evaluation of your condition and medical history</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Treatment Plan</h3>
              <p className="text-muted-foreground">Customized treatment plan based on your specific needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Active Treatment</h3>
              <p className="text-muted-foreground">Hands-on therapy sessions with regular progress monitoring</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Home Program</h3>
              <p className="text-muted-foreground">Exercise program and self-care instructions for continued recovery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 medical-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Recovery?</h2>
          <p className="text-xl mb-8 opacity-90">
            Choose the service that's right for you and take the first step towards better health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="healing" size="lg" asChild>
              <Link to="/appointment">
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Get Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;