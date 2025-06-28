
import Layout from "@/components/layout/Layout";
import DoctorCard from "@/components/contact/DoctorCard";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    experience: "15 years",
    rating: 4.9,
    location: "New York, NY",
    avatar: "/placeholder.svg",
    availability: "Available today",
    consultationFee: "$150",
    description: "Specialized in heart disease prevention and treatment with extensive experience in cardiac surgery."
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Dermatology",
    experience: "12 years",
    rating: 4.8,
    location: "Los Angeles, CA",
    avatar: "/placeholder.svg",
    availability: "Available tomorrow",
    consultationFee: "$120",
    description: "Expert in skin conditions, cosmetic dermatology, and skin cancer prevention."
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    experience: "18 years",
    rating: 4.9,
    location: "Chicago, IL",
    avatar: "/placeholder.svg",
    availability: "Available in 2 days",
    consultationFee: "$100",
    description: "Dedicated pediatrician with expertise in child development and preventive care."
  },
  {
    id: "4",
    name: "Dr. David Thompson",
    specialty: "Orthopedics",
    experience: "20 years",
    rating: 4.7,
    location: "Houston, TX",
    avatar: "/placeholder.svg",
    availability: "Available today",
    consultationFee: "$180",
    description: "Orthopedic surgeon specializing in joint replacement and sports medicine."
  }
];

const ContactDoctorPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-health-dark">
            Contact Professional Doctors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with licensed healthcare professionals for expert medical consultation and personalized care.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search doctors by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="All Specialties" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Specialties</SelectItem>
              {specialties.map(specialty => (
                <SelectItem key={specialty} value={specialty}>
                  {specialty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredDoctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No doctors found matching your criteria.</p>
          </div>
        )}

        {/* Emergency Notice */}
        <div className="mt-12 p-6 bg-red-50 border border-red-200 rounded-lg max-w-4xl mx-auto">
          <h3 className="font-semibold text-red-800 mb-2">Emergency Medical Situations</h3>
          <p className="text-red-700">
            If you are experiencing a medical emergency, please call 911 or visit your nearest emergency room immediately. 
            This service is for non-emergency consultations only.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactDoctorPage;
