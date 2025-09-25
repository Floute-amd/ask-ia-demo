import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Clock, Users, CheckCircle, Play, FileText } from 'lucide-react';
import { ContextMenu, AIModal, useTextSelection } from '@/components/AIHelper';
import { SafeLink } from './HomePage';

const courseData = {
  'cs101': {
    title: 'CS101: Introduction to Algorithms',
    description: 'Master fundamental algorithms and problem-solving techniques',
    instructor: 'Prof. Sarah Chen',
    duration: '12 weeks',
    students: 2847,
    lessons: [
      {
        id: 1,
        title: 'What are Algorithms?',
        duration: '45 min',
        content: `
          <h2>Understanding Algorithms</h2>
          <p>An <strong>algorithm</strong> is a step-by-step procedure or formula for solving a problem. Think of it as a recipe in cooking - it provides clear, unambiguous instructions that, when followed, produce a desired result.</p>
          
          <h3>Key Characteristics of Algorithms</h3>
          <ul>
            <li><strong>Definiteness:</strong> Each step must be clearly defined</li>
            <li><strong>Input:</strong> Zero or more quantities are externally supplied</li>
            <li><strong>Output:</strong> At least one quantity is produced</li>
            <li><strong>Effectiveness:</strong> Each operation must be basic enough to be carried out</li>
            <li><strong>Finiteness:</strong> The algorithm must terminate after a finite number of steps</li>
          </ul>
          
          <h3>Example: Finding the Maximum Number</h3>
          <p>Let's consider a simple algorithm to find the maximum number in a list:</p>
          <pre><code>1. Start with the first number as the current maximum
2. Compare each remaining number with the current maximum
3. If a number is larger, update the current maximum
4. Return the final maximum value</code></pre>
          
          <p>This <strong>linear search algorithm</strong> demonstrates how we break down a problem into manageable steps. The time complexity of this approach is O(n), meaning it scales linearly with input size.</p>
          
          <blockquote>
            <p><strong>Real-world application:</strong> Search engines use sophisticated algorithms to find relevant web pages from billions of documents in milliseconds.</p>
          </blockquote>
        `
      },
      {
        id: 2,
        title: 'Sorting Algorithms',
        duration: '60 min',
        content: `
          <h2>Introduction to Sorting</h2>
          <p><strong>Sorting algorithms</strong> arrange data in a particular order (usually ascending or descending). They are fundamental to computer science and form the basis for more complex operations.</p>
          
          <h3>Bubble Sort</h3>
          <p>The <strong>bubble sort algorithm</strong> repeatedly steps through the list, compares adjacent elements, and swaps them if they're in the wrong order. The pass through the list is repeated until the list is sorted.</p>
          
          <h4>How Bubble Sort Works:</h4>
          <ol>
            <li>Compare the first two elements</li>
            <li>If the first is greater than the second, swap them</li>
            <li>Move to the next pair and repeat</li>
            <li>Continue until no swaps are needed</li>
          </ol>
          
          <h3>Quick Sort</h3>
          <p><strong>Quick sort</strong> is a divide-and-conquer algorithm that works by selecting a 'pivot' element and partitioning the array around it. Elements smaller than the pivot go to one side, larger elements to the other.</p>
          
          <p>The <strong>time complexity</strong> of quick sort is O(n log n) on average, making it much more efficient than bubble sort's O(n²) for large datasets.</p>
          
          <h3>When to Use Different Sorting Algorithms</h3>
          <ul>
            <li><strong>Bubble Sort:</strong> Educational purposes, very small datasets</li>
            <li><strong>Quick Sort:</strong> General-purpose sorting when average performance matters</li>
            <li><strong>Merge Sort:</strong> When stable sorting is required</li>
            <li><strong>Heap Sort:</strong> When consistent O(n log n) performance is needed</li>
          </ul>
        `
      }
    ]
  },
  'cs102': {
    title: 'CS102: Data Structures',
    description: 'Learn essential data structures for efficient programming',
    instructor: 'Dr. Michael Rodriguez',
    duration: '10 weeks',
    students: 1923,
    lessons: [
      {
        id: 1,
        title: 'Arrays and Linked Lists',
        duration: '50 min',
        content: `
          <h2>Understanding Data Structures</h2>
          <p>A <strong>data structure</strong> is a particular way of organizing data in a computer so that it can be used effectively. The choice of data structure affects the efficiency of algorithms that manipulate the data.</p>
          
          <h3>Arrays</h3>
          <p>An <strong>array</strong> is a collection of elements stored at contiguous memory locations. Each element can be accessed directly using its index, making arrays perfect for random access operations.</p>
          
          <h4>Array Characteristics:</h4>
          <ul>
            <li><strong>Fixed size:</strong> Size is determined at creation time</li>
            <li><strong>Homogeneous:</strong> All elements are of the same data type</li>
            <li><strong>Indexed access:</strong> O(1) access time using indices</li>
            <li><strong>Cache-friendly:</strong> Elements are stored contiguously in memory</li>
          </ul>
          
          <h3>Linked Lists</h3>
          <p>A <strong>linked list</strong> is a linear data structure where elements are stored in nodes, and each node contains data and a reference (or link) to the next node in the sequence.</p>
          
          <h4>Advantages of Linked Lists:</h4>
          <ul>
            <li><strong>Dynamic size:</strong> Can grow or shrink during runtime</li>
            <li><strong>Efficient insertion/deletion:</strong> O(1) at the beginning</li>
            <li><strong>Memory efficient:</strong> Only allocates memory as needed</li>
          </ul>
          
          <h4>Disadvantages:</h4>
          <ul>
            <li><strong>Sequential access:</strong> Must traverse from head to reach an element</li>
            <li><strong>Extra memory:</strong> Requires additional memory for storing pointers</li>
            <li><strong>No cache locality:</strong> Nodes may be scattered in memory</li>
          </ul>
          
          <h3>When to Use Each</h3>
          <p>Choose <strong>arrays</strong> when you need fast random access and know the size beforehand. Choose <strong>linked lists</strong> when you need frequent insertions/deletions and the size varies significantly.</p>
        `
      }
    ]
  },
  'math101': {
    title: 'MATH101: Calculus I',
    description: 'Foundation course in differential calculus',
    instructor: 'Prof. Emily Watson',
    duration: '16 weeks',
    students: 3456,
    lessons: [
      {
        id: 1,
        title: 'Limits and Continuity',
        duration: '75 min',
        content: `
          <h2>Introduction to Limits</h2>
          <p>The concept of a <strong>limit</strong> is fundamental to calculus. A limit describes the value that a function approaches as the input approaches some value.</p>
          
          <h3>What is a Limit?</h3>
          <p>Mathematically, we write: lim(x→a) f(x) = L, which means "as x approaches a, f(x) approaches L".</p>
          
          <h3>Understanding Continuity</h3>
          <p>A function is <strong>continuous</strong> at a point if:</p>
          <ol>
            <li>The function is defined at that point</li>
            <li>The limit exists at that point</li>
            <li>The limit equals the function value at that point</li>
          </ol>
          
          <h3>Types of Discontinuities</h3>
          <ul>
            <li><strong>Removable discontinuity:</strong> A "hole" in the graph</li>
            <li><strong>Jump discontinuity:</strong> The function "jumps" from one value to another</li>
            <li><strong>Infinite discontinuity:</strong> The function approaches infinity</li>
          </ul>
          
          <h3>The Derivative as a Limit</h3>
          <p>The <strong>derivative</strong> of a function at a point is defined as the limit of the difference quotient:</p>
          <p>f'(x) = lim(h→0) [f(x+h) - f(x)]/h</p>
          
          <p>This limit, when it exists, gives us the instantaneous rate of change of the function at that point.</p>
          
          <blockquote>
            <p><strong>Real-world application:</strong> In physics, the derivative of position with respect to time gives us velocity - the instantaneous rate of change of position.</p>
          </blockquote>
        `
      }
    ]
  },
  'econ101': {
    title: 'ECON101: Microeconomics',
    description: 'Introduction to economic principles and market behavior',
    instructor: 'Dr. James Park',
    duration: '14 weeks',
    students: 2134,
    lessons: [
      {
        id: 1,
        title: 'Supply and Demand',
        duration: '55 min',
        content: `
          <h2>The Foundation of Market Economics</h2>
          <p><strong>Supply and demand</strong> are the fundamental forces that drive market economies. Understanding their interaction is crucial for analyzing how markets work.</p>
          
          <h3>What is Demand?</h3>
          <p><strong>Demand</strong> represents the quantity of a good or service that consumers are willing and able to purchase at different prices during a specific time period.</p>
          
          <h4>Law of Demand:</h4>
          <p>As the price of a good increases, the quantity demanded decreases, all other factors being equal. This creates a downward-sloping demand curve.</p>
          
          <h3>What is Supply?</h3>
          <p><strong>Supply</strong> represents the quantity of a good or service that producers are willing and able to offer at different prices during a specific time period.</p>
          
          <h4>Law of Supply:</h4>
          <p>As the price of a good increases, the quantity supplied increases, all other factors being equal. This creates an upward-sloping supply curve.</p>
          
          <h3>Market Equilibrium</h3>
          <p><strong>Market equilibrium</strong> occurs where supply and demand curves intersect. At this point:</p>
          <ul>
            <li>Quantity supplied equals quantity demanded</li>
            <li>There is no shortage or surplus</li>
            <li>The market "clears" at the equilibrium price</li>
          </ul>
          
          <h3>Factors Affecting Demand</h3>
          <ul>
            <li><strong>Income:</strong> Changes in consumer income</li>
            <li><strong>Price of related goods:</strong> Substitutes and complements</li>
            <li><strong>Consumer preferences:</strong> Tastes and trends</li>
            <li><strong>Expectations:</strong> Future price or income expectations</li>
            <li><strong>Number of buyers:</strong> Market size changes</li>
          </ul>
          
          <h3>Factors Affecting Supply</h3>
          <ul>
            <li><strong>Input costs:</strong> Raw material and labor prices</li>
            <li><strong>Technology:</strong> Production efficiency improvements</li>
            <li><strong>Government policies:</strong> Taxes, subsidies, regulations</li>
            <li><strong>Number of sellers:</strong> Competition level</li>
            <li><strong>Expectations:</strong> Future price expectations</li>
          </ul>
          
          <blockquote>
            <p><strong>Real-world example:</strong> During the COVID-19 pandemic, increased demand for hand sanitizer combined with supply chain disruptions led to higher prices and shortages - a perfect illustration of supply and demand dynamics.</p>
          </blockquote>
        `
      }
    ]
  }
};

const CoursePage: React.FC = () => {
  const { courseId } = useParams();
  const course = courseData[courseId as keyof typeof courseData];
  
  const {
    selectedText,
    showModal,
    selectionPosition,
    handleCloseModal
  } = useTextSelection();

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
          <SafeLink to="/">
            <Button>Return Home</Button>
          </SafeLink>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <SafeLink to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </SafeLink>
          
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-4">{course.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{course.description}</p>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {course.students.toLocaleString()} students
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {course.duration}
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {course.lessons.length} lessons
              </div>
            </div>
            
            <p className="text-foreground font-medium mt-4">
              Instructor: {course.instructor}
            </p>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Lesson List */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Course Content</CardTitle>
                <CardDescription>
                  Select text in any lesson and right-click to ask the AI assistant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {course.lessons.map((lesson, index) => (
                    <div key={lesson.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-primary-foreground font-medium">{index + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-foreground truncate">{lesson.title}</h4>
                        <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                      </div>
                      <CheckCircle className="w-4 h-4 text-success" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {course.lessons.map((lesson, index) => (
                <Card key={lesson.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-sm text-primary-foreground font-medium">{index + 1}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl">{lesson.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4" />
                          {lesson.duration}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div 
                      className="prose prose-sm max-w-none text-foreground"
                      dangerouslySetInnerHTML={{ __html: lesson.content }}
                      style={{
                        '--tw-prose-body': 'hsl(var(--foreground))',
                        '--tw-prose-headings': 'hsl(var(--foreground))',
                        '--tw-prose-links': 'hsl(var(--primary))',
                        '--tw-prose-bold': 'hsl(var(--foreground))',
                        '--tw-prose-code': 'hsl(var(--foreground))',
                        '--tw-prose-pre-bg': 'hsl(var(--muted))',
                        '--tw-prose-quotes': 'hsl(var(--muted-foreground))',
                      } as React.CSSProperties}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Continue to Page 2 */}
            <div className="mt-8 flex justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => alert('Page 2 coming soon! This course has additional advanced content.')}
              >
                Continue to Page 2 →
              </Button>
            </div>

            {/* AI Demo Notice */}
            <Card className="mt-8 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Try the AI Assistant!</h4>
                    <p className="text-muted-foreground text-sm">
                      Select any text in the lessons above and right-click to see "Ask IA" in action. 
                      The AI will provide explanations, examples, and help you understand complex concepts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* AI Helper Modal - No context menu needed */}
      {showModal && (
        <AIModal
          selectedText={selectedText}
          position={selectionPosition}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default CoursePage;