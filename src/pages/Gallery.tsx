import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Users, 
  Heart, 
  Award,
  Camera,
  Filter,
  Eye
} from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: <Camera className="h-4 w-4" /> },
    { id: 'facility', name: 'Facility', icon: <Building className="h-4 w-4" /> },
    { id: 'treatments', name: 'Treatments', icon: <Heart className="h-4 w-4" /> },
    { id: 'events', name: 'Events', icon: <Users className="h-4 w-4" /> },
    { id: 'awards', name: 'Awards', icon: <Award className="h-4 w-4" /> }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Modern Treatment Room",
      category: "facility",
      description: "State-of-the-art physiotherapy equipment and clean, comfortable treatment rooms",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Exercise Therapy Area",
      category: "facility",
      description: "Spacious exercise area with modern rehabilitation equipment",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Patient Treatment Session",
      category: "treatments",
      description: "Dr. Om Dangi providing personalized physiotherapy treatment",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      featured: true
    },
    {
      id: 4,
      title: "Blood Donation Camp 2024",
      category: "events", 
      description: "Annual blood donation camp organized at our center",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=500&h=300&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Reception Area",
      category: "facility",
      description: "Welcoming and comfortable reception area for patients",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=300&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Manual Therapy Treatment",
      category: "treatments",
      description: "Hands-on manual therapy techniques for optimal recovery",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      featured: false
    },
    {
      id: 7,
      title: "Healthcare Excellence Award",
      category: "awards",
      description: "Recognition for outstanding service in physiotherapy",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=500&h=300&fit=crop",
      featured: true
    },
    {
      id: 8,
      title: "Community Health Camp",
      category: "events",
      description: "Free health checkup camp for the local community",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop",
      featured: false
    },
    {
      id: 9,
      title: "Electrotherapy Equipment",
      category: "facility",
      description: "Advanced electrotherapy machines for pain relief",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=300&fit=crop",
      featured: false
    },
    {
      id: 10,
      title: "Sports Injury Rehabilitation",
      category: "treatments",
      description: "Specialized treatment for sports-related injuries",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      featured: false
    },
    {
      id: 11,
      title: "Team Achievement",
      category: "awards",
      description: "Our team receiving recognition for community service",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&h=300&fit=crop",
      featured: false
    },
    {
      id: 12,
      title: "Patient Success Story",
      category: "events",
      description: "Celebrating patient recovery milestones",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=300&fit=crop",
      featured: false
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a visual journey through RM Physiotherapy Center - from our modern 
            facilities and advanced equipment to memorable moments and achievements.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "hero" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category.id)}
                className="flex items-center gap-2"
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden shadow-soft hover:shadow-medium transition-smooth cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-smooth flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-smooth" />
                  </div>
                  {item.featured && (
                    <Badge className="absolute top-3 left-3 bg-secondary">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {categories.find(c => c.id === item.category)?.name}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">No images found</h3>
              <p className="text-muted-foreground">
                Try selecting a different category to view more images.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16 medical-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to See More?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a visit to see our facilities in person and meet our team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="healing" size="lg">
              <Building className="mr-2 h-4 w-4" />
              Schedule Facility Tour
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Users className="mr-2 h-4 w-4" />
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-background rounded-lg max-w-4xl max-h-[90vh] overflow-hidden">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[60vh] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-muted-foreground mb-4">{selectedImage.description}</p>
              <Badge variant="outline">
                {categories.find(c => c.id === selectedImage.category)?.name}
              </Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;