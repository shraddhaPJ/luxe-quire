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

  // 🟢 Your validateForm stays the same

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save inquiry in Firestore
      await addDoc(
        collection(db, "propertyInquiries"),
        {
          ...formData,
          propertyId: propertyId || null,
          propertyTitle: propertyTitle || null,
          createdAt: serverTimestamp(),
        }
      );

      toast({
        title: "Inquiry Submitted Successfully!",
        description: "Thank you for your interest. Our team will contact you within 24 hours.",
      });

      // Reset form
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
      console.error("Firestore error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // 🟢 Rest of your JSX remains unchanged
};
