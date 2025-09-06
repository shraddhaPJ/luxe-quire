import { PropertyCard } from "./PropertyCard";

const featuredProperties = [
  {
    id: "1",
    title: "Luxury Penthouse with City Views",
    price: "$2,850,000",
    location: "Manhattan, New York",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,500 sq ft",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
    status: "For Sale" as const,
    featured: true,
  },
  {
    id: "2",
    title: "Modern Villa with Pool & Garden",
    price: "$1,450,000",
    location: "Beverly Hills, California",
    bedrooms: 4,
    bathrooms: 4,
    area: "3,200 sq ft",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    status: "For Sale" as const,
    featured: true,
  },
  {
    id: "3",
    title: "Waterfront Condo with Marina Access",
    price: "$3,200/month",
    location: "Miami Beach, Florida",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,800 sq ft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    status: "For Rent" as const,
  },
  {
    id: "4",
    title: "Historic Brownstone Renovation",
    price: "$4,200,000",
    location: "Brooklyn Heights, New York",
    bedrooms: 5,
    bathrooms: 4,
    area: "4,100 sq ft",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
    status: "For Sale" as const,
  },
  {
    id: "5",
    title: "Contemporary Loft in Arts District",
    price: "$1,890,000",
    location: "Downtown Los Angeles",
    bedrooms: 2,
    bathrooms: 2,
    area: "2,100 sq ft",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    status: "For Sale" as const,
  },
  {
    id: "6",
    title: "Luxury High-Rise with Amenities",
    price: "$5,800/month",
    location: "Chicago Loop, Illinois",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,200 sq ft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    status: "For Rent" as const,
  },
];

export const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-responsive-xl font-bold text-navy-deep mb-4">
            Featured Properties
          </h2>
          <p className="text-responsive-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties in the most sought-after locations
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-luxury px-8 py-3 rounded-lg font-semibold hover:shadow-luxury transition-all duration-300">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};