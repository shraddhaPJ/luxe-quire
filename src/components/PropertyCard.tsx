import { MapPin, Bed, Bath, Square, Heart, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { InquiryForm } from "./InquiryForm";

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    price: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    area: string;
    image: string;
    status: "For Sale" | "For Rent" | "Sold";
    featured?: boolean;
  };
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="property-card group overflow-hidden">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay Actions */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <Badge 
            variant={property.status === "For Sale" ? "default" : property.status === "For Rent" ? "secondary" : "destructive"}
            className="bg-white/90 text-navy-deep"
          >
            {property.status}
          </Badge>
          {property.featured && (
            <Badge className="bg-gold-primary text-navy-deep">
              Featured
            </Badge>
          )}
        </div>

        {/* Hover Actions */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col space-y-2">
            <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
              <Heart className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Price Overlay */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-navy-deep/90 text-white px-3 py-1 rounded-lg">
            <span className="text-xl font-bold">{property.price}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-navy-deep mb-2 line-clamp-2">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              <span>{property.area}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button variant="outline" className="flex-1" size="sm">
            View Details
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex-1 btn-luxury" size="sm">
                Inquire
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <InquiryForm propertyId={property.id} propertyTitle={property.title} />
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};