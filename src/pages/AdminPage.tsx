import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  UserCheck, 
  Activity, 
  FileText, 
  Settings, 
  Shield, 
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";

const AdminPage = () => {
  const stats = [
    { title: "Total Users", value: "1,234", icon: Users, change: "+12%" },
    { title: "Active Doctors", value: "45", icon: UserCheck, change: "+3%" },
    { title: "Daily Consultations", value: "89", icon: Activity, change: "+8%" },
    { title: "Reports Generated", value: "456", icon: FileText, change: "+15%" }
  ];

  const recentActivities = [
    { type: "user", message: "New user registration: Dr. Sarah Wilson", time: "2 minutes ago", status: "success" },
    { type: "consultation", message: "Consultation completed by Dr. Mike Chen", time: "5 minutes ago", status: "success" },
    { type: "alert", message: "System maintenance scheduled", time: "10 minutes ago", status: "warning" },
    { type: "report", message: "Monthly report generated", time: "1 hour ago", status: "info" }
  ];

  const pendingApprovals = [
    { name: "Dr. Emily Rodriguez", specialty: "Cardiology", submitted: "2 days ago" },
    { name: "Dr. James Park", specialty: "Dermatology", submitted: "1 day ago" },
    { name: "Dr. Lisa Thompson", specialty: "Pediatrics", submitted: "3 hours ago" }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-health-dark mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage users, doctors, and system settings</p>
          </div>
          <Badge variant="secondary" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Administrator
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
                    <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                  </div>
                  <div className="p-3 bg-health-primary/10 rounded-lg">
                    <stat.icon className="h-6 w-6 text-health-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="doctors">Doctor Approvals</TabsTrigger>
            <TabsTrigger value="settings">System Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Recent Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                        <div className={`p-1 rounded-full ${
                          activity.status === 'success' ? 'bg-green-100' :
                          activity.status === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                        }`}>
                          {activity.status === 'success' ? 
                            <CheckCircle className="h-4 w-4 text-green-600" /> :
                            activity.status === 'warning' ? 
                            <AlertTriangle className="h-4 w-4 text-yellow-600" /> :
                            <Clock className="h-4 w-4 text-blue-600" />
                          }
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* System Health */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    System Health
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Server Status</span>
                      <Badge variant="outline" className="text-green-600 border-green-600">Online</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Database</span>
                      <Badge variant="outline" className="text-green-600 border-green-600">Healthy</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">API Response Time</span>
                      <span className="text-sm font-medium">245ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Uptime</span>
                      <span className="text-sm font-medium">99.9%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage user accounts and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Button>Add New User</Button>
                    <Button variant="outline">Export Users</Button>
                    <Button variant="outline">Send Notifications</Button>
                  </div>
                  <div className="text-sm text-gray-600">
                    User management functionality would be implemented here with tables for user data,
                    role assignments, and account status management.
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="doctors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Doctor Approval Queue</CardTitle>
                <CardDescription>Review and approve doctor registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingApprovals.map((doctor, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{doctor.name}</h4>
                        <p className="text-sm text-gray-600">{doctor.specialty}</p>
                        <p className="text-xs text-gray-500">Submitted {doctor.submitted}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Approve
                        </Button>
                        <Button size="sm" variant="outline">
                          Review
                        </Button>
                        <Button size="sm" variant="destructive">
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  System Settings
                </CardTitle>
                <CardDescription>Configure platform settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">General Settings</h4>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          Platform Configuration
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          Email Templates
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          Notification Settings
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Security Settings</h4>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          Access Control
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          Audit Logs
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          Backup Configuration
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminPage;