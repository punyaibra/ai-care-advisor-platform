
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const HistoryPage = () => {
  const [activeTab, setActiveTab] = useState("consultations");
  
  // Sample data for consultations
  const consultations = [
    {
      id: "c123",
      date: "2025-05-02",
      title: "Headache and Dizziness",
      summary: "Possible causes: dehydration, stress, or migraine. Recommendation: rest, hydration, and OTC pain relievers.",
      severity: "Mild",
      followUp: false,
    },
    {
      id: "c122",
      date: "2025-04-28",
      title: "Sore Throat and Cough",
      summary: "Likely a viral infection. Recommendation: rest, fluids, and throat lozenges. Seek medical attention if symptoms worsen within 3-5 days.",
      severity: "Moderate",
      followUp: true,
    },
    {
      id: "c121",
      date: "2025-04-15",
      title: "Lower Back Pain",
      summary: "Consistent with muscle strain. Recommendation: gentle stretching, OTC pain relievers, and reduced physical activity for 48 hours.",
      severity: "Moderate",
      followUp: false,
    },
  ];
  
  // Sample data for trends
  const healthTrendData = [
    { date: "1 Apr", headache: 7, fatigue: 8, stress: 9 },
    { date: "5 Apr", headache: 5, fatigue: 7, stress: 8 },
    { date: "10 Apr", headache: 6, fatigue: 6, stress: 7 },
    { date: "15 Apr", headache: 4, fatigue: 5, stress: 6 },
    { date: "20 Apr", headache: 3, fatigue: 4, stress: 5 },
    { date: "25 Apr", headache: 2, fatigue: 3, stress: 4 },
    { date: "30 Apr", headache: 1, fatigue: 2, stress: 3 },
    { date: "5 May", headache: 0, fatigue: 1, stress: 2 },
  ];
  
  const sleepData = [
    { date: "1 Apr", hours: 5.5 },
    { date: "5 Apr", hours: 6.0 },
    { date: "10 Apr", hours: 6.5 },
    { date: "15 Apr", hours: 7.0 },
    { date: "20 Apr", hours: 7.5 },
    { date: "25 Apr", hours: 8.0 },
    { date: "30 Apr", hours: 7.5 },
    { date: "5 May", hours: 8.0 },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-health-dark">Your Health History</h1>
        
        <Tabs defaultValue="consultations" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="consultations">Consultations</TabsTrigger>
            <TabsTrigger value="trends">Health Trends</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="consultations">
            <div className="space-y-4">
              {consultations.map((consultation) => (
                <Card key={consultation.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{consultation.title}</CardTitle>
                        <p className="text-sm text-gray-500">
                          {new Date(consultation.date).toLocaleDateString("en-US", { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span 
                          className={`px-2 py-1 text-xs rounded-full ${
                            consultation.severity === "Mild" 
                              ? "bg-green-100 text-green-800" 
                              : consultation.severity === "Moderate"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {consultation.severity}
                        </span>
                        {consultation.followUp && (
                          <span className="px-2 py-1 text-xs rounded-full bg-health-primary text-white">
                            Follow-Up
                          </span>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{consultation.summary}</p>
                  </CardContent>
                </Card>
              ))}
              
              {consultations.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No consultation history available yet.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="trends">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Symptom Trends</CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={healthTrendData}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="headache" stackId="1" stroke="#8884d8" fill="#8884d8" />
                      <Area type="monotone" dataKey="fatigue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                      <Area type="monotone" dataKey="stress" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sleep Tracking</CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sleepData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="hours" 
                        stroke="#3B82F6" 
                        activeDot={{ r: 8 }} 
                        name="Hours of Sleep"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="reports">
            <div className="text-center py-12 bg-white rounded-lg shadow border border-gray-100">
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-semibold mb-4">Generate Health Reports</h3>
                <p className="text-gray-600 mb-6">
                  Compile your health data into comprehensive reports to share with healthcare providers.
                </p>
                <div className="p-8 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
                  <p className="text-gray-500">
                    This feature will be available soon. Stay tuned for updates!
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default HistoryPage;
