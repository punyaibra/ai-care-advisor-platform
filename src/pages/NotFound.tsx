
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="mb-6 text-health-primary">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-health-dark">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            We couldn't find the page you're looking for. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button asChild className="bg-health-primary hover:bg-health-primary/90">
              <Link to="/">Back to Home</Link>
            </Button>
            <Button asChild variant="outline" className="border-health-primary text-health-primary hover:bg-health-primary/10">
              <Link to="/consult">Start Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
