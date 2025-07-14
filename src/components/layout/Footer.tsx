
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3 text-health-dark">CareAdvisor</h3>
            <p className="text-gray-600 text-sm">
              AI-powered medical consultation platform providing preliminary health assessments and guidance.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-health-dark">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-health-primary">Home</Link></li>
              <li><Link to="/consult" className="text-gray-600 hover:text-health-primary">AI Consultation</Link></li>
              <li><Link to="/history" className="text-gray-600 hover:text-health-primary">Health History</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-health-primary">Educational Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-health-dark">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-gray-600 hover:text-health-primary">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-health-primary">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="text-gray-600 hover:text-health-primary">Medical Disclaimer</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-health-dark">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">support@careadvisor.com</li>
              <li className="text-gray-600">1-800-CARE-ADV</li>
              <li><Link to="/admin" className="text-gray-600 hover:text-health-primary">Admin Portal</Link></li>
              <li><Link to="/doctor" className="text-gray-600 hover:text-health-primary">Doctor Dashboard</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} CareAdvisor. All rights reserved.</p>
          <p className="mt-1">
            <strong>Important:</strong> This service provides preliminary information only and is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
