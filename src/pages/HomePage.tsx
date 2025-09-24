import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Clock, Award, ArrowRight, GraduationCap } from 'lucide-react';
import heroImage from '@/assets/hero-learning.jpg';

// Safe Link wrapper that checks for router context
export const SafeLink: React.FC<{ to: string; className?: string; children: React.ReactNode }> = ({ 
  to, 
  className, 
  children 
}) => {
  try {
    // This will throw if router context is not available
    useLocation();
    return <Link to={to} className={className}>{children}</Link>;
  } catch {
    // Fallback to regular anchor if router context is not available
    return <a href={to} className={className}>{children}</a>;
  }
};

const courses = [
  {
    id: 'cs101',
    title: 'CS101: Intro to Algorithms',
    description: 'Learn fundamental algorithms and problem-solving techniques used in computer science.',
    instructor: 'Prof. Sarah Chen',
    duration: '12 weeks',
    students: 2847,
    level: 'Beginner',
    color: 'bg-primary',
    lessons: 24
  },
  {
    id: 'cs102',
    title: 'CS102: Data Structures',
    description: 'Master essential data structures including arrays, linked lists, trees, and graphs.',
    instructor: 'Dr. Michael Rodriguez',
    duration: '10 weeks',
    students: 1923,
    level: 'Intermediate',
    color: 'bg-accent',
    lessons: 20
  },
  {
    id: 'math101',
    title: 'MATH101: Calculus I',
    description: 'Foundation course covering limits, derivatives, and applications of differential calculus.',
    instructor: 'Prof. Emily Watson',
    duration: '16 weeks',
    students: 3456,
    level: 'Beginner',
    color: 'bg-success',
    lessons: 32
  },
  {
    id: 'econ101',
    title: 'ECON101: Microeconomics',
    description: 'Introduction to economic principles, market behavior, and decision-making processes.',
    instructor: 'Dr. James Park',
    duration: '14 weeks',
    students: 2134,
    level: 'Beginner',
    color: 'bg-warning',
    lessons: 28
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Students learning together in a modern university library"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 gradient-hero"></div>
        </div>
        <div className="relative z-10">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto text-center animate-fade-in text-white">
              <div className="flex items-center justify-center mb-6">
                <GraduationCap className="w-12 h-12 mr-3" />
                <h1 className="text-5xl font-bold">LearnHub</h1>
              </div>
              <h2 className="text-2xl font-light mb-6 opacity-90">
                Master New Skills with Interactive AI-Powered Learning
              </h2>
              <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
                Explore comprehensive courses designed for college students. Get instant explanations 
                by selecting any text and asking our AI assistant.
              </p>
              <div className="flex items-center justify-center gap-4">
                <SafeLink to="/courses">
                  <Button size="lg" className="btn-hero bg-white/20 text-white border-white/30 hover:bg-white hover:text-primary">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Browse Courses
                  </Button>
                </SafeLink>
                <SafeLink to="/demo">
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                    Watch Demo
                  </Button>
                </SafeLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-slide-up">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Why Choose LearnHub?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform combines traditional learning with cutting-edge AI assistance 
              to help you understand complex concepts faster.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto mb-4 gradient-hero rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Interactive Content</h4>
              <p className="text-muted-foreground">
                Select any text to get instant AI explanations and examples.
              </p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-4 gradient-accent rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Expert Instructors</h4>
              <p className="text-muted-foreground">
                Learn from university professors and industry professionals.
              </p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-success rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Proven Results</h4>
              <p className="text-muted-foreground">
                Join thousands of students who've mastered new skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Popular Courses
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start your learning journey with our carefully curated courses. 
              Each lesson includes interactive AI assistance for better understanding.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card key={course.id} className={`course-card animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {course.description}
                      </CardDescription>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${course.color} flex-shrink-0 mt-2`} />
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {course.lessons} lessons
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Instructor</p>
                      <p className="font-medium">{course.instructor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Level</p>
                      <span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                        {course.level}
                      </span>
                    </div>
                  </div>
                  
                  <SafeLink to={`/course/${course.id}`} className="block mt-4">
                    <Button className="w-full btn-hero">
                      Start Learning
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </SafeLink>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Learning?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using AI-powered learning 
            to master complex subjects faster than ever before.
          </p>
          <SafeLink to="/courses">
            <Button size="lg" className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-primary">
              Get Started Today
            </Button>
          </SafeLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;