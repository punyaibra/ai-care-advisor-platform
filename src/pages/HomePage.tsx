
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Activity, Calendar, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";

const HomePage = () => {
  const features = [
    {
      icon: <CheckCircle className="h-12 w-12 text-health-primary" />,
      title: "AI-Powered Diagnosis",
      description: "Get preliminary assessments based on your symptoms using advanced medical AI."
    },
    {
      icon: <Activity className="h-12 w-12 text-health-primary" />,
      title: "Health Monitoring",
      description: "Track your health metrics and symptoms over time to spot trends and improvements."
    },
    {
      icon: <Calendar className="h-12 w-12 text-health-primary" />,
      title: "Appointment Scheduling",
      description: "Connect with healthcare providers for follow-up consultations when needed."
    },
    {
      icon: <FileText className="h-12 w-12 text-health-primary" />,
      title: "Medical Resources",
      description: "Access educational content about conditions, treatments, and preventive care."
    }
  ];

  const testimonials = [
    {
      quote: "CareAdvisor helped me understand my symptoms before visiting my doctor, making the appointment much more productive.",
      author: "Sarah J."
    },
    {
      quote: "As someone living in a rural area, having access to preliminary medical guidance has been invaluable for my family.",
      author: "Michael T."
    },
    {
      quote: "The emergency detection feature potentially saved my life when it recognized the signs of my stroke.",
      author: "Robert P."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-health-dark mb-4">
                Your AI Health Assistant
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Get preliminary health assessments, track your symptoms, and access medical resources - all powered by advanced AI.
              </p>
              <div className="space-x-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-health-primary hover:bg-health-primary/90"
                >
                  <Link to="/consult">Start Consultation</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-health-primary text-health-primary hover:bg-health-primary/10"
                >
                  <Link to="/resources">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative mx-auto max-w-md">
                <div className="absolute inset-0 bg-health-primary rounded-full blur-3xl opacity-20"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="AI Health Assistant Illustration" 
                  className="relative z-10 w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-health-dark">
            How CareAdvisor Helps You
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-health-dark">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Preview Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-health-dark">
              Intelligent Health Consultations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Describe your symptoms to our medical AI for an initial assessment, follow-up recommendations, and potential emergency alerts.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl border border-gray-100">
              <div className="p-4 bg-health-primary text-white">
                <h3 className="font-semibold">AI Care Advisor</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg max-w-[80%]">
                  <p className="text-gray-700">Hello! I'm your AI Care Advisor. How can I help you today?</p>
                </div>
                <div className="bg-health-primary p-4 rounded-lg text-white ml-auto max-w-[80%]">
                  <p>I've been having headaches and feeling dizzy for the past two days.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg max-w-[80%]">
                  <p className="text-gray-700">I understand you're experiencing headaches and dizziness. Can you tell me:</p>
                  <ul className="list-disc ml-5 mt-2 text-gray-700">
                    <li>Are you also experiencing nausea or vision changes?</li>
                    <li>Are the headaches constant or do they come and go?</li>
                    <li>Have you taken any medication for this?</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 border-t flex justify-center">
                <Button asChild className="bg-health-primary hover:bg-health-primary/90 px-8">
                  <Link to="/consult">Try It Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-health-dark">
            What Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-blue-50 p-6 rounded-xl"
              >
                <svg className="h-8 w-8 text-health-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                <p className="font-semibold text-health-dark">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-health-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to take control of your health?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Start using CareAdvisor today for AI-powered health consultations, symptom tracking, and personalized insights.
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="bg-white text-health-primary hover:bg-gray-100 border-white"
          >
            <Link to="/consult">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
