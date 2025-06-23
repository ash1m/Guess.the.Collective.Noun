
import React, { useState, useEffect } from 'react';
import { getRandomQuestion, CollectiveNoun } from '@/data/collectiveNouns';
import GameCard from '@/components/GameCard';
import ScoreBoard from '@/components/ScoreBoard';
import ProgressBar from '@/components/ProgressBar';
import GameOverScreen from '@/components/GameOverScreen';
import SplashScreen from '@/components/SplashScreen';
import { Button } from '@/components/ui/button';

const TOTAL_QUESTIONS = 20;

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<CollectiveNoun | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [attempts, setAttempts] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [usedQuestions, setUsedQuestions] = useState<number[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const loadNewQuestion = () => {
    const { question, index } = getRandomQuestion(usedQuestions);
    setCurrentQuestion(question);
    setUsedQuestions(prev => [...prev, index]);
    setSelectedAnswer(null);
    setCorrectAnswer(null);
    setAttempts(1);
    setIsAnswered(false);
    setShowNextButton(false);
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setCorrectAnswer(currentQuestion!.collective);
    setIsAnswered(true);
    
    if (answer === currentQuestion!.collective) {
      // Correct answer
      if (attempts === 1) {
        setScore(prev => prev + 10);
      }
      setStreak(prev => {
        const newStreak = prev + 1;
        setBestStreak(current => Math.max(current, newStreak));
        return newStreak;
      });
      
      setTimeout(() => {
        setShowNextButton(true);
      }, 2000);
    } else {
      // Wrong answer
      setStreak(0);
      
      if (attempts >= 3) {
        setTimeout(() => {
          setShowNextButton(true);
        }, 3000);
      } else {
        setTimeout(() => {
          setAttempts(prev => prev + 1);
          setIsAnswered(false);
          setSelectedAnswer(null);
          setCorrectAnswer(null);
        }, 2000);
      }
    }
  };

  const handleNextQuestion = () => {
    if (questionNumber >= TOTAL_QUESTIONS) {
      setGameComplete(true);
    } else {
      setQuestionNumber(prev => prev + 1);
      loadNewQuestion();
    }
  };

  const restartGame = () => {
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setQuestionNumber(1);
    setUsedQuestions([]);
    setGameComplete(false);
    setGameStarted(false);
    loadNewQuestion();
  };

  useEffect(() => {
    if (gameStarted) {
      loadNewQuestion();
    }
  }, [gameStarted]);

  if (!gameStarted) {
    return <SplashScreen onStartGame={handleStartGame} />;
  }

  if (gameComplete) {
    return (
      <GameOverScreen
        finalScore={score}
        totalQuestions={TOTAL_QUESTIONS}
        bestStreak={bestStreak}
        onRestart={restartGame}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 py-8">
      <div className="max-w-md mx-auto">
        <ProgressBar current={questionNumber} total={TOTAL_QUESTIONS} />
        
        <ScoreBoard 
          score={score} 
          streak={streak} 
          questionNumber={questionNumber}
        />
        
        {currentQuestion && (
          <GameCard
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            correctAnswer={correctAnswer}
            onAnswerSelect={handleAnswerSelect}
            attempts={attempts}
            isAnswered={isAnswered}
          />
        )}
        
        {showNextButton && (
          <div className="mt-6 text-center animate-fade-in">
            <Button
              onClick={handleNextQuestion}
              className="w-full max-w-md h-12 text-lg font-bold bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              {questionNumber >= TOTAL_QUESTIONS ? 'Finish Game' : 'Next Question'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
