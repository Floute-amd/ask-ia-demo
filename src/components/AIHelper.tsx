import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Lightbulb, BookOpen, Zap, Brain } from 'lucide-react';

interface AIHelperProps {
  selectedText: string;
  position: { x: number; y: number };
  onClose: () => void;
}

interface ContextMenuProps {
  position: { x: number; y: number };
  onAskAI: () => void;
  onClose: () => void;
}

// Fake AI responses based on selected text
const generateAIResponse = (text: string): { explanation: string; followUps: string[] } => {
  const lowerText = text.toLowerCase();
  
  // Simple keyword-based responses for demo
  if (lowerText.includes('algorithm') || lowerText.includes('sort')) {
    return {
      explanation: `An algorithm is a step-by-step procedure for solving a problem. "${text}" refers to a systematic approach where we break down complex problems into smaller, manageable steps that can be executed in sequence.`,
      followUps: ['Show me examples', 'Explain time complexity', 'Compare algorithms']
    };
  }
  
  if (lowerText.includes('data structure') || lowerText.includes('array') || lowerText.includes('linked list')) {
    return {
      explanation: `"${text}" is a data structure - a way of organizing and storing data so it can be accessed and modified efficiently. Different data structures are optimized for different types of operations.`,
      followUps: ['Show visual diagram', 'Compare with other structures', 'When to use this?']
    };
  }
  
  if (lowerText.includes('calculus') || lowerText.includes('derivative') || lowerText.includes('integral')) {
    return {
      explanation: `"${text}" in calculus deals with rates of change and accumulation. It's a fundamental mathematical concept used to analyze how quantities change over time or space.`,
      followUps: ['Show formula', 'Give real-world example', 'Practice problems']
    };
  }
  
  if (lowerText.includes('economics') || lowerText.includes('market') || lowerText.includes('supply')) {
    return {
      explanation: `"${text}" is an economic concept that describes how resources, goods, or services interact in a market system. Understanding these relationships helps predict economic behavior.`,
      followUps: ['Show graph', 'Real-world examples', 'Related concepts']
    };
  }
  
  // Default response
  return {
    explanation: `"${text}" is an important concept in this subject. Let me break it down: this term represents a key idea that builds upon previous knowledge and connects to broader themes in the field.`,
    followUps: ['Explain more simply', 'Give examples', 'Show related topics']
  };
};

export const ContextMenu: React.FC<ContextMenuProps> = ({ position, onAskAI, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);
  
  // Adjust position to stay within viewport
  const adjustedPosition = {
    x: Math.min(position.x, window.innerWidth - 200),
    y: Math.min(position.y, window.innerHeight - 100)
  };
  
  return (
    <div
      ref={menuRef}
      className="ai-context-menu"
      style={{
        left: adjustedPosition.x,
        top: adjustedPosition.y
      }}
    >
      <Button
        onClick={onAskAI}
        className="btn-hero flex items-center gap-2 text-sm font-medium px-3 py-2"
      >
        <Brain className="w-4 h-4" />
        Ask IA
      </Button>
    </div>
  );
};

export const AIModal: React.FC<AIHelperProps> = ({ selectedText, onClose }) => {
  const [response, setResponse] = useState<{ explanation: string; followUps: string[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [followUpResponse, setFollowUpResponse] = useState<string | null>(null);
  
  useEffect(() => {
    // Simulate AI processing time
    const timer = setTimeout(() => {
      setResponse(generateAIResponse(selectedText));
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [selectedText]);
  
  const handleFollowUp = (followUp: string) => {
    setLoading(true);
    
    // Simulate follow-up responses
    setTimeout(() => {
      if (followUp.includes('example')) {
        setFollowUpResponse(`Here's a practical example: Consider how ${selectedText} applies in real-world scenarios. For instance, in software development, this concept helps optimize performance and solve complex problems efficiently.`);
      } else if (followUp.includes('formula') || followUp.includes('diagram')) {
        setFollowUpResponse(`Visual representation: ${selectedText} can be better understood through diagrams and formulas. This visual approach helps connect abstract concepts to concrete implementations.`);
      } else if (followUp.includes('simply') || followUp.includes('simpl')) {
        setFollowUpResponse(`In simple terms: ${selectedText} is like a recipe or instruction manual. It gives you step-by-step directions to achieve a specific goal or solve a particular problem.`);
      } else {
        setFollowUpResponse(`Additional insight: ${selectedText} connects to many other important concepts in this field. Understanding this foundation will help you grasp more advanced topics later.`);
      }
      setLoading(false);
    }, 800);
  };
  
  return (
    <>
      <div className="ai-modal-overlay" onClick={onClose} />
      <Card className="ai-modal p-6 w-full max-w-2xl">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">AI Learning Assistant</h3>
            <span className="text-xs bg-accent/20 text-accent-dark px-2 py-1 rounded-full">Demo Only</span>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="mb-4 p-3 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground mb-1">Selected text:</p>
          <p className="text-foreground font-medium">"{selectedText}"</p>
        </div>
        
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="text-muted-foreground">AI is analyzing your selection...</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {response && (
              <div className="animate-fade-in-scale">
                <div className="flex items-start gap-3 mb-4">
                  <Lightbulb className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-foreground leading-relaxed">{response.explanation}</p>
                </div>
                
                {!followUpResponse && (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">Want to learn more?</p>
                    <div className="flex flex-wrap gap-2">
                      {response.followUps.map((followUp, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handleFollowUp(followUp)}
                          className="btn-accent text-xs"
                        >
                          {followUp}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {followUpResponse && (
              <div className="animate-fade-in border-t pt-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground leading-relaxed">{followUpResponse}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFollowUpResponse(null)}
                  className="mt-2 text-xs"
                >
                  Ask another question
                </Button>
              </div>
            )}
          </div>
        )}
      </Card>
    </>
  );
};

// Custom hook for text selection and AI helper (no right-click needed)
export const useTextSelection = () => {
  const [selectedText, setSelectedText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectionPosition, setSelectionPosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      const text = selection?.toString().trim();
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      if (text && text.length > 3) {
        // Get selection position for modal positioning reference
        const range = selection?.getRangeAt(0);
        const rect = range?.getBoundingClientRect();
        
        if (rect) {
          setSelectionPosition({ 
            x: rect.left + rect.width / 2, 
            y: rect.top 
          });
        }
        
        setSelectedText(text);
        
        // Wait 400ms before showing modal to let user finish selecting
        timeoutRef.current = setTimeout(() => {
          setShowModal(true);
        }, 400);
      } else {
        setShowModal(false);
        setSelectedText('');
      }
    };
    
    // Listen for selection changes
    document.addEventListener('selectionchange', handleSelection);
    
    return () => {
      document.removeEventListener('selectionchange', handleSelection);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedText('');
    // Clear selection when closing modal
    window.getSelection()?.removeAllRanges();
  };
  
  return {
    selectedText,
    showModal,
    selectionPosition,
    handleCloseModal
  };
};