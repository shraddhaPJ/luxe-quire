import { 
  Shield, 
  Car, 
  Waves, 
  Dumbbell, 
  Utensils, 
  Wifi, 
  Camera, 
  Trees, 
  Gamepad2, 
  Users, 
  Baby, 
  Wind 
} from "lucide-react";

const amenities = [
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security service with professional guards and surveillance systems"
  },
  {
    icon: Car,
    title: "Covered Parking",
    description: "Secure underground parking with EV charging stations and valet service"
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Olympic-size swimming pool with heated water and poolside service"
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym with personal trainers and modern equipment"
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "On-site restaurants with world-class cuisine and room service"
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary high-speed internet throughout the property"
  },
  {
    icon: Camera,
    title: "Smart Home Tech",
    description: "Integrated smart home systems with voice control and automation"
  },
  {
    icon: Trees,
    title: "Landscaped Gardens",
    description: "Beautifully maintained gardens and outdoor recreational spaces"
  },
  {
    icon: Gamepad2,
    title: "Entertainment",
    description: "Game rooms, movie theater, and entertainment lounges"
  },
  {
    icon: Users,
    title: "Concierge Service",
    description: "Professional concierge service for all your daily needs"
  },
  {
    icon: Baby,
    title: "Kids Play Area",
    description: "Safe and fun play areas designed specifically for children"
  },
  {
    icon: Wind,
    title: "Climate Control",
    description: "Advanced HVAC systems with individual temperature control"
  }
];

export const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-responsive-xl font-bold text-navy-deep mb-4">
            Premium Amenities
          </h2>
          <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
            Experience luxury living with our comprehensive range of world-class amenities 
            designed to enhance your lifestyle
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-6 border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-gold rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <amenity.icon className="w-8 h-8 text-navy-deep" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-navy-deep mb-2">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-luxury rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Experience Luxury Like Never Before
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our properties come with access to exclusive amenities that redefine modern living. 
              From premium wellness facilities to personalized services, every detail is crafted 
              for your comfort and convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};