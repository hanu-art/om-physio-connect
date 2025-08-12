import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 medical-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">RM</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">RM Physiotherapy</h3>
                <p className="text-sm text-background/70">Dr. Om Dangi</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Providing professional physiotherapy services in Bhopal with state-of-the-art 
              equipment and personalized treatment plans for optimal recovery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-background/80 hover:text-background transition-smooth">
                About Us
              </Link>
              <Link to="/services" className="block text-background/80 hover:text-background transition-smooth">
                Our Services
              </Link>
              <Link to="/appointment" className="block text-background/80 hover:text-background transition-smooth">
                Book Appointment
              </Link>
              <Link to="/blood-donation" className="block text-background/80 hover:text-background transition-smooth">
                Blood Donation
              </Link>
              <Link to="/gallery" className="block text-background/80 hover:text-background transition-smooth">
                Gallery
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-background/80 text-sm">
                    Kolar Road, Bhopal<br />
                    Madhya Pradesh, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="text-background/80 text-sm">+91 9876543210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <p className="text-background/80 text-sm">info@rmphysio.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-background/80 text-sm">
                    Mon - Sat: 9:00 AM - 8:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Emergency Contact</h4>
            <Button variant="healing" className="w-full">
              <Phone className="h-4 w-4 mr-2" />
              Emergency: +91 9876543210
            </Button>
            
            <div className="pt-4">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 RM Physiotherapy Center. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-background/60 hover:text-background text-sm transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/60 hover:text-background text-sm transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;