import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  let location;
  
  try {
    // Try to get location from router context
    location = useLocation();
  } catch {
    // Fallback if router context is not available
    location = { pathname: window.location.pathname };
  }

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary-dark">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
