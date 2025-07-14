import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Stethoscope, 
  Calendar, 
  Users, 
  FileText, 
  Clock, 
  MessageSquare,
  Star,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  User
} from "lucide-react";

const DoctorPage = () => {
  const stats = [
    { title: "Today's Appointments", value: "12", icon: Calendar, change: "+2" },
    { title: "Active Patients", value: "156", icon: Users, change: "+8" },
    { title: "Consultations This Week", value: "47", icon: Stethoscope, change: "+5" },
    { title: "Patient Reviews", value: "4.8", icon: Star, change: "★★★★★" }
  ];

  const todayAppointments = [
    { time: "09:00", patient: "Sarah Johnson", type: "Follow-up", status: "confirmed" },
    { time: "09:30", patient: "Mike Chen", type: "Initial Consultation", status: "confirmed" },
    { time: "10:00", patient: "Emily Davis", type: "Check-up", status: "pending" },
    { time: "10:30", patient: "James Wilson", type: "Consultation", status: "confirmed" },
    { time: "11:00", patient: "Lisa Brown", type: "Follow-up", status: "confirmed" }
  ];

  const recentConsultations = [
    { patient: "Anna Martinez", date: "2024-01-14", diagnosis: "Hypertension follow-up", status: "completed" },
    { patient: "Robert Taylor", date: "2024-01-14", diagnosis: "General check-up", status: "completed" },
    { patient: "Maria Garcia", date: "2024-01-13", diagnosis: "Diabetes consultation", status: "completed" },
    { patient: "David Kim", date: "2024-01-13", diagnosis: "Skin examination", status: "pending-review" }
  ];

  const pendingTasks = [
    { task: "Review lab results for John Doe", priority: "high", due: "Today" },
    { task: "Complete medical report for Jane Smith", priority: "medium", due: "Tomorrow" },
    { task: "Schedule follow-up with Mike Johnson", priority: "low", due: "This week" },
    { task: "Update treatment plan for Sarah Davis", priority: "high", due: "Today" }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-health-dark mb-2">Doctor Dashboard</h1>
            <p className="text-gray-600">Manage your patients and consultations</p>
          </div>
          <Badge variant="secondary" className="flex items-center gap-2">
            <Stethoscope className="h-4 w-4" />
            Dr. Professional
          </Badge>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-health-light">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-health-dark">{stat.value}</p>
                    <p className="text-sm text-health-primary mt-1">{stat.change}</p>
                  </div>
                  <div className="p-3 bg-health-primary/10 rounded-lg">
                    <stat.icon className="h-6 w-6 text-health-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="schedule" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="schedule">Today's Schedule</TabsTrigger>
            <TabsTrigger value="patients">Patient Management</TabsTrigger>
            <TabsTrigger value="consultations">Recent Consultations</TabsTrigger>
            <TabsTrigger value="tasks">Tasks & Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="schedule" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Today's Appointments */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Today's Appointments
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {todayAppointments.map((appointment, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-health-primary/10 rounded-lg">
                              <Clock className="h-4 w-4 text-health-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{appointment.time}</p>
                              <p className="text-sm text-gray-600">{appointment.patient}</p>
                              <p className="text-xs text-gray-500">{appointment.type}</p>
                            </div>
                          </div>
                          <Badge 
                            variant={appointment.status === 'confirmed' ? 'default' : 'outline'}
                            className={appointment.status === 'confirmed' ? 'bg-green-100 text-green-700' : ''}
                          >
                            {appointment.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Appointment
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Create Prescription
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="patients" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Patient Management</CardTitle>
                <CardDescription>Manage your patient records and information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Button>Add New Patient</Button>
                    <Button variant="outline">Search Patients</Button>
                    <Button variant="outline">Export Records</Button>
                  </div>
                  <div className="text-sm text-gray-600">
                    Patient management system would include patient profiles, medical history,
                    treatment plans, and communication tools.
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="consultations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Consultations</CardTitle>
                <CardDescription>Review and manage recent patient consultations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentConsultations.map((consultation, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-health-primary/10 rounded-lg">
                          <User className="h-4 w-4 text-health-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{consultation.patient}</h4>
                          <p className="text-sm text-gray-600">{consultation.diagnosis}</p>
                          <p className="text-xs text-gray-500">{consultation.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={consultation.status === 'completed' ? 'default' : 'outline'}
                          className={consultation.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}
                        >
                          {consultation.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pending Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Pending Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pendingTasks.map((task, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                        <div className={`p-1 rounded-full mt-1 ${
                          task.priority === 'high' ? 'bg-red-100' :
                          task.priority === 'medium' ? 'bg-yellow-100' : 'bg-green-100'
                        }`}>
                          <AlertCircle className={`h-3 w-3 ${
                            task.priority === 'high' ? 'text-red-600' :
                            task.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{task.task}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                task.priority === 'high' ? 'border-red-200 text-red-700' :
                                task.priority === 'medium' ? 'border-yellow-200 text-yellow-700' : 
                                'border-green-200 text-green-700'
                              }`}
                            >
                              {task.priority}
                            </Badge>
                            <span className="text-xs text-gray-500">{task.due}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reports */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Reports & Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Generate Monthly Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Patient Statistics
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Summary
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Star className="h-4 w-4 mr-2" />
                      Performance Metrics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default DoctorPage;