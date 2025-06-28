
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Clock, Phone, Mail } from "lucide-react";
import { toast } from "@/components/ui/sonner";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  location: string;
  avatar: string;
  availability: string;
  consultationFee: string;
  description: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const handleBookConsultation = () => {
    toast.success(`Consultation request sent to ${doctor.name}. They will contact you within 24 hours.`);
  };

  const handleCall = () => {
    toast.info(`Calling ${doctor.name}...`);
  };

  const handleEmail = () => {
    toast.info(`Opening email to ${doctor.name}...`);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-3">
          <Avatar className="w-16 h-16">
            <AvatarImage src={doctor.avatar} alt={doctor.name} />
            <AvatarFallback className="bg-health-primary text-white text-lg">
              {doctor.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-health-dark">{doctor.name}</h3>
            <Badge variant="secondary" className="mb-2">{doctor.specialty}</Badge>
            <div className="flex items-center gap-1 mb-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{doctor.rating}</span>
              <span className="text-xs text-gray-500">({doctor.experience})</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">{doctor.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span>{doctor.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="text-green-600">{doctor.availability}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Consultation Fee: {doctor.consultationFee}</span>
          </div>
        </div>

        <div className="flex gap-2 pt-4">
          <Button 
            onClick={handleBookConsultation}
            className="flex-1 bg-health-primary hover:bg-health-primary/90"
          >
            Book Consultation
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleCall}
            className="border-health-primary text-health-primary hover:bg-health-primary hover:text-white"
          >
            <Phone className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleEmail}
            className="border-health-primary text-health-primary hover:bg-health-primary hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
