import { useState } from "react";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { InquiryForm } from "./InquiryForm";

export const Hero = () => {
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="mb-12 hero-fade-in">
            <h1 className="text-responsive-xl font-bold text-white mb-6 leading-tight">
              Find Your Dream Home in the Most
              <span className="text-gold-primary"> Prestigious </span>
              Locations
            </h1>
            <p className="text-responsive-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Discover luxury properties that redefine elegance. From stunning penthouses to exclusive estates, 
              we help you find the perfect home that matches your lifestyle.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="btn-gold px-8 py-3 text-lg font-semibold">
                    <Home className="w-5 h-5 mr-2" />
                    Enquire Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <InquiryForm />
                </DialogContent>
              </Dialog>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 text-lg font-semibold border-white text-white hover:bg-white hover:text-navy-deep transition-colors"
                onClick={() => document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Search className="w-5 h-5 mr-2" />
                Browse Properties
              </Button>
            </div>
          </div>

          {/* Property Search Widget */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-luxury max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-navy-deep mb-4 text-center">
              Find Your Perfect Property
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Location Search */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                <Input
                  placeholder="Enter location..."
                  value={searchFilters.location}
                  onChange={(e) => setSearchFilters(prev => ({ ...prev, location: e.target.value }))}
                  className="pl-10 h-12"
                />
              </div>

              {/* Property Type */}
              <Select 
                value={searchFilters.propertyType} 
                onValueChange={(value) => setSearchFilters(prev => ({ ...prev, propertyType: value }))}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent className="bg-background border border-border shadow-lg z-50">
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                </SelectContent>
              </Select>

              {/* Price Range */}
              <Select 
                value={searchFilters.priceRange} 
                onValueChange={(value) => setSearchFilters(prev => ({ ...prev, priceRange: value }))}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent className="bg-background border border-border shadow-lg z-50">
                  <SelectItem value="0-500k">$0 - $500K</SelectItem>
                  <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                  <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                  <SelectItem value="2m-5m">$2M - $5M</SelectItem>
                  <SelectItem value="5m+">$5M+</SelectItem>
                </SelectContent>
              </Select>

              {/* Search Button */}
              <Button 
                className="h-12 btn-luxury"
                onClick={() => document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};