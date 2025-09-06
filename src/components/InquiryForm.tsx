// src/components/InquiryForm.tsx
import { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

// 🔥 Firestore imports
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface InquiryFormProps {
  propertyId?: string;
  propertyTitle?: string;
}

export const InquiryForm = ({ propertyId, propertyTitle }: InquiryFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    budget: "",
    message: "",
    preferredContact: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // ✅ Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.inquiryType) newErrors.inquiryType = "Please select an inquiry type";
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Submit to Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        propertyId: propertyId || null,
        propertyTitle: propertyTitle || null,
        timestamp: serverTimestamp(),
      });

      toast({
        title: "Inquiry Submitted ✅",
        description: "Thank you! We’ll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        budget: "",
        message: "",
        preferredContact: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Firestore Error:", error);
      toast({
        title: "Submission Failed ❌",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="space-y-6">
      <DialogHeader>
        <DialogTitle className="flex items-center space-x-2 text-navy-deep">
          <Home className="w-5 h-5 text-gold-primary" />
          <span>Property Inquiry</span>
        </DialogTitle>
        {propertyTitle && (
          <p className="text-sm text-muted-foreground">
            Inquiring about: <span className="font-medium">{propertyTitle}</span>
          </p>
        )}
      </DialogHeader>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Inputs here (same as your original form)... */}
        {/* Submit button */}
        <Button type="submit" className="w-full btn-luxury" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : <><Send className="w-4 h-4 mr-2" /> Send Inquiry</>}
        </Button>
      </form>
    </div>
  );
};
