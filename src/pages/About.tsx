import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Users, Heart, Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const qualifications = [
    "Master of Physiotherapy (MPT)",
    "Bachelor of Physiotherapy (BPT)",
    "Certified Orthopedic Manual Therapist",
    "Sports Medicine Specialist",
    "Dry Needling Certification",
    "Member of Indian Association of Physiotherapists"
  ];

  const achievements = [
    { icon: <Users className="h-8 w-8 text-primary" />, title: "5000+ Patients Treated", description: "Successfully treated over 5000 patients" },
    { icon: <Award className="h-8 w-8 text-secondary" />, title: "15+ Years Experience", description: "Extensive experience in physiotherapy" },
    { icon: <Heart className="h-8 w-8 text-primary" />, title: "98% Success Rate", description: "High success rate in patient recovery" },
    { icon: <Star className="h-8 w-8 text-secondary" />, title: "Award Winner", description: "Excellence in Healthcare Award 2023" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">About RM Physiotherapy Center</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Established with a mission to provide comprehensive physiotherapy care, 
              RM Physiotherapy Center has been serving the Bhopal community with 
              dedication, expertise, and compassion for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Dr. Om Dangi Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6">Meet Dr. Om Dangi</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Dr. Om Dangi is a highly qualified and experienced physiotherapist with over 15 years 
                of clinical practice. He completed his Master's in Physiotherapy and has specialized 
                training in orthopedic and sports medicine.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                His approach to treatment combines evidence-based practice with personalized care, 
                ensuring each patient receives the most effective treatment tailored to their specific needs.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">Qualifications & Certifications</h3>
              <div className="space-y-3 mb-8">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-lg">{qualification}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" asChild>
                <Link to="/appointment">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Consultation
                </Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-strong">
                <div className="text-white text-center">
                  <Users className="h-20 w-20 mx-auto mb-6" />
                  <div className="text-3xl font-bold mb-2">Dr. Om Dangi</div>
                  <div className="text-xl opacity-90">Chief Physiotherapist</div>
                  <div className="text-lg opacity-75 mt-2">MPT, BPT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Recognition for excellence in healthcare and patient satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-primary">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide comprehensive, evidence-based physiotherapy services that promote 
                  healing, restore function, and improve quality of life for our patients. We are 
                  committed to delivering personalized care with compassion and excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-secondary">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading physiotherapy center in Bhopal, recognized for our innovative 
                  treatment approaches, exceptional patient outcomes, and contribution to the 
                  community's health and wellness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 medical-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Recovery Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the difference of professional physiotherapy care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="healing" size="lg" asChild>
              <Link to="/appointment">Book Your Appointment</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;