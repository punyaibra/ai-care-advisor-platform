import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, User, Phone, Calendar, FileText, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  lastVisit: string;
  nextAppointment: string;
  status: 'active' | 'inactive' | 'critical';
  conditions: string[];
  bloodType: string;
  allergies: string[];
}

const PatientList = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const [patients] = useState<Patient[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      age: 34,
      gender: "Female",
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@email.com",
      lastVisit: "2024-01-10",
      nextAppointment: "2024-01-20",
      status: "active",
      conditions: ["Hypertension", "Diabetes Type 2"],
      bloodType: "A+",
      allergies: ["Penicillin", "Shellfish"]
    },
    {
      id: "2",
      name: "Mike Chen",
      age: 28,
      gender: "Male",
      phone: "+1 (555) 234-5678",
      email: "mike.chen@email.com",
      lastVisit: "2024-01-12",
      nextAppointment: "2024-01-18",
      status: "active",
      conditions: ["Asthma"],
      bloodType: "O-",
      allergies: ["Dust mites"]
    },
    {
      id: "3",
      name: "Emily Davis",
      age: 45,
      gender: "Female",
      phone: "+1 (555) 345-6789",
      email: "emily.davis@email.com",
      lastVisit: "2024-01-14",
      nextAppointment: "2024-01-16",
      status: "critical",
      conditions: ["Heart Disease", "High Cholesterol"],
      bloodType: "B+",
      allergies: ["Aspirin"]
    },
    {
      id: "4",
      name: "James Wilson",
      age: 52,
      gender: "Male",
      phone: "+1 (555) 456-7890",
      email: "james.wilson@email.com",
      lastVisit: "2024-01-08",
      nextAppointment: "2024-01-22",
      status: "active",
      conditions: ["Arthritis"],
      bloodType: "AB+",
      allergies: ["None"]
    }
  ]);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.phone.includes(searchTerm)
  );

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700 border-green-200';
      case 'inactive': return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'critical': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleScheduleAppointment = (patientId: string) => {
    toast({
      title: "Appointment Scheduled",
      description: "New appointment has been scheduled successfully",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient List</CardTitle>
        <div className="flex gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button>
            <User className="h-4 w-4 mr-2" />
            Add New Patient
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Next Appointment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell className="font-medium">{patient.name}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{patient.phone}</div>
                      <div className="text-gray-500">{patient.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{patient.lastVisit}</TableCell>
                  <TableCell>{patient.nextAppointment}</TableCell>
                  <TableCell>
                    <Badge className={getStatusBadgeColor(patient.status)}>
                      {patient.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setSelectedPatient(patient)}
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Patient Details</DialogTitle>
                            <DialogDescription>
                              Complete information for {patient.name}
                            </DialogDescription>
                          </DialogHeader>
                          {selectedPatient && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium">Name</label>
                                  <p className="text-sm text-gray-600">{selectedPatient.name}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Age</label>
                                  <p className="text-sm text-gray-600">{selectedPatient.age} years</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Gender</label>
                                  <p className="text-sm text-gray-600">{selectedPatient.gender}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium">Blood Type</label>
                                  <p className="text-sm text-gray-600">{selectedPatient.bloodType}</p>
                                </div>
                              </div>
                              
                              <div>
                                <label className="text-sm font-medium">Conditions</label>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {selectedPatient.conditions.map((condition, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {condition}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <label className="text-sm font-medium">Allergies</label>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {selectedPatient.allergies.map((allergy, index) => (
                                    <Badge key={index} variant="destructive" className="text-xs">
                                      {allergy}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleScheduleAppointment(patient.id)}
                      >
                        <Calendar className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileText className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientList;