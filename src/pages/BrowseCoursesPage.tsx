import React, { useState } from 'react';
import { SafeLink } from './HomePage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Users, Clock, Search, Filter, Star, GraduationCap } from 'lucide-react';

const allCourses = [
  {
    id: 'cs101',
    title: 'CS101: Intro to Algorithms',
    description: 'Learn fundamental algorithms and problem-solving techniques used in computer science.',
    instructor: 'Prof. Sarah Chen',
    duration: '12 weeks',
    students: 2847,
    rating: 4.8,
    level: 'Beginner',
    category: 'Computer Science',
    color: 'bg-primary',
    lessons: 24,
    price: 'Free'
  },
  {
    id: 'cs102',
    title: 'CS102: Data Structures',
    description: 'Master essential data structures including arrays, linked lists, trees, and graphs.',
    instructor: 'Dr. Michael Rodriguez',
    duration: '10 weeks',
    students: 1923,
    rating: 4.9,
    level: 'Intermediate',
    category: 'Computer Science',
    color: 'bg-accent',
    lessons: 20,
    price: 'Free'
  },
  {
    id: 'math101',
    title: 'MATH101: Calculus I',
    description: 'Foundation course covering limits, derivatives, and applications of differential calculus.',
    instructor: 'Prof. Emily Watson',
    duration: '16 weeks',
    students: 3456,
    rating: 4.7,
    level: 'Beginner',
    category: 'Mathematics',
    color: 'bg-success',
    lessons: 32,
    price: 'Free'
  },
  {
    id: 'econ101',
    title: 'ECON101: Microeconomics',
    description: 'Introduction to economic principles, market behavior, and decision-making processes.',
    instructor: 'Dr. James Park',
    duration: '14 weeks',
    students: 2134,
    rating: 4.6,
    level: 'Beginner',
    category: 'Economics',
    color: 'bg-warning',
    lessons: 28,
    price: 'Free'
  },
  {
    id: 'cs201',
    title: 'CS201: Advanced Algorithms',
    description: 'Deep dive into advanced algorithmic techniques and complexity analysis.',
    instructor: 'Prof. David Kim',
    duration: '15 weeks',
    students: 1245,
    rating: 4.9,
    level: 'Advanced',
    category: 'Computer Science',
    color: 'bg-primary',
    lessons: 30,
    price: 'Free'
  },
  {
    id: 'math201',
    title: 'MATH201: Linear Algebra',
    description: 'Vector spaces, matrices, eigenvalues, and linear transformations.',
    instructor: 'Dr. Lisa Chen',
    duration: '12 weeks',
    students: 1876,
    rating: 4.8,
    level: 'Intermediate',
    category: 'Mathematics',
    color: 'bg-success',
    lessons: 24,
    price: 'Free'
  }
];

const categories = ['All', 'Computer Science', 'Mathematics', 'Economics'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const BrowseCoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <SafeLink to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </SafeLink>
          
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">Browse Courses</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Discover comprehensive courses designed for your learning journey. 
              Select any text in course descriptions to get instant AI explanations.
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 animate-slide-up">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search courses, instructors, or topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="flex gap-2">
                  <Filter className="w-5 h-5 text-muted-foreground mt-2.5" />
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? "btn-hero" : ""}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Level Filter */}
                <div className="flex flex-wrap gap-2">
                  {levels.map(level => (
                    <Button
                      key={level}
                      variant={selectedLevel === level ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedLevel(level)}
                      className={selectedLevel === level ? "btn-accent" : ""}
                    >
                      {level}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredCourses.length} of {allCourses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <Card key={course.id} className={`course-card animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed mb-3">
                      {course.description}
                    </CardDescription>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${course.color} flex-shrink-0 mt-1`} />
                </div>
                
                {/* Course Stats */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    {course.lessons} lessons
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-warning text-warning" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {course.level}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {course.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Instructor</p>
                    <p className="text-sm font-medium">{course.instructor}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="text-sm font-bold text-success">{course.price}</p>
                  </div>
                </div>
                
                <SafeLink to={`/course/${course.id}`}>
                  <Button className="w-full btn-hero">
                    Start Learning
                    <BookOpen className="w-4 h-4 ml-2" />
                  </Button>
                </SafeLink>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setSelectedLevel('All');
            }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* AI Helper Notice */}
        <Card className="mt-12 border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">AI Learning Assistant</h4>
                <p className="text-muted-foreground text-sm">
                  Select any text in course descriptions above to instantly get AI explanations and examples. 
                  No right-clicking needed - just select and learn!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BrowseCoursesPage;