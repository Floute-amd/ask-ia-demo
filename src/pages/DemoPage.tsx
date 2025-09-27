import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DemoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Platform Demo</h1>
          </div>
        </div>
      </header>

      {/* Demo Video Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">See LearnHub in Action</h2>
            <p className="text-muted-foreground text-lg">
              Watch how our AI-powered learning platform transforms the way you study
            </p>
          </div>

          {/* YouTube Embed Container */}
          <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/HFmhSAqeOsY"
              title="LearnHub Platform Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Learning?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of students who are already using LearnHub to accelerate their learning.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/courses">
                <Button size="lg">
                  Browse Courses
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DemoPage;
