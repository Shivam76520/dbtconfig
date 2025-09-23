
'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, XCircle, Star, Coins, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { cn } from '@/lib/utils';

const quizQuestions = [
  {
    question: "What does 'DBT' stand for?",
    options: ["Direct Bank Transfer", "Direct Benefit Transfer", "Digital Banking Transaction", "Double Benefit Transfer"],
    correctAnswer: "Direct Benefit Transfer",
  },
  {
    question: "What is required to receive DBT payments?",
    options: ["A PAN card", "A voter ID card", "An Aadhaar-seeded bank account", "A passport"],
    correctAnswer: "An Aadhaar-seeded bank account",
  },
  {
      question: "Should you share your OTP or PIN with anyone claiming to be from a bank?",
      options: ["Yes, if they promise a reward", "Only if they sound official", "Never", "Only on weekends"],
      correctAnswer: "Never",
  },
];

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  
  const question = quizQuestions[currentQuestionIndex];
  const isCorrect = selectedAnswer === question.correctAnswer;

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % quizQuestions.length);
  };
  
  const getButtonClass = (option: string) => {
      if (!showResult) return "bg-secondary text-secondary-foreground hover:bg-secondary/80";
      if (option === question.correctAnswer) return "bg-green-500 text-white";
      if (option === selectedAnswer) return "bg-destructive text-destructive-foreground";
      return "bg-secondary text-secondary-foreground opacity-50";
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-2xl mx-auto">
            <div className="mb-4">
                <Button asChild variant="outline">
                    <Link href="/student" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Dashboard
                    </Link>
                </Button>
            </div>
            <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold font-headline text-center text-primary">DBT Knowledge Quiz!</CardTitle>
                <CardDescription className="text-center">
                    Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-lg font-semibold text-center">{question.question}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {question.options.map((option) => (
                        <Button
                            key={option}
                            onClick={() => handleAnswerSelect(option)}
                            className={cn("text-base h-auto py-3 justify-start", getButtonClass(option))}
                            disabled={showResult}
                        >
                             {showResult && option === question.correctAnswer && <CheckCircle className="mr-2" />}
                             {showResult && option === selectedAnswer && option !== question.correctAnswer && <XCircle className="mr-2" />}
                            {option}
                        </Button>
                    ))}
                </div>

                {showResult && (
                    <div className="mt-6 space-y-4 animate-in fade-in duration-500">
                        {isCorrect ? (
                             <Alert className="bg-green-500/10 border-green-500/50 text-green-700">
                                <Star className="h-4 w-4 !text-green-700" />
                                <AlertTitle>Correct Answer!</AlertTitle>
                                <AlertDescription className="flex items-center justify-between">
                                    <span>You've unlocked a new badge!</span>
                                    <span className="font-bold flex items-center gap-1"><Coins className="h-4 w-4"/> +3 Coins</span>
                                </AlertDescription>
                            </Alert>
                        ) : (
                            <Alert variant="destructive">
                                <RefreshCw className="h-4 w-4" />
                                <AlertTitle>Wrong Answer!</AlertTitle>
                                <AlertDescription className="flex items-center justify-between">
                                    <span>Better luck next time. Keep learning!</span>
                                    <span className="font-bold flex items-center gap-1"><Coins className="h-4 w-4"/> +1 Coin</span>
                                </AlertDescription>
                            </Alert>
                        )}
                        <Button onClick={handleNextQuestion} className="w-full">
                            Next Question
                        </Button>
                    </div>
                )}

            </CardContent>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
