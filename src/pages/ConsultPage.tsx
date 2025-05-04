
import Layout from "@/components/layout/Layout";
import ChatInterface from "@/components/consult/ChatInterface";
import SymptomTracker from "@/components/consult/SymptomTracker";

const ConsultPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-health-dark">AI Consultation</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ChatInterface />
          </div>
          <div>
            <SymptomTracker />
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">Important Medical Disclaimer</h3>
          <p className="text-sm text-yellow-700">
            The AI Care Advisor provides general information only and is not a substitute for professional medical advice, diagnosis, or treatment. 
            Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. 
            If you think you may have a medical emergency, call your doctor or emergency services immediately.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ConsultPage;
