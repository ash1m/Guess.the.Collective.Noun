
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CollectiveNoun } from '@/data/collectiveNouns';

interface GameCardProps {
  question: CollectiveNoun;
  selectedAnswer: string | null;
  correctAnswer: string | null;
  onAnswerSelect: (answer: string) => void;
  attempts: number;
  isAnswered: boolean;
}

const GameCard: React.FC<GameCardProps> = ({
  question,
  selectedAnswer,
  correctAnswer,
  onAnswerSelect,
  attempts,
  isAnswered
}) => {
  const getButtonVariant = (option: string) => {
    if (!isAnswered) return 'outline';
    if (option === correctAnswer && (selectedAnswer === correctAnswer || attempts >= 3)) return 'default';
    if (option === selectedAnswer && selectedAnswer !== correctAnswer) return 'destructive';
    return 'outline';
  };

  const getButtonClass = (option: string) => {
    let baseClass = "w-full h-14 text-lg font-medium transition-all duration-300 transform hover:scale-105";
    
    if (!isAnswered) {
      return `${baseClass} hover:bg-blue-50 active:scale-95`;
    }
    
    if (option === correctAnswer && (selectedAnswer === correctAnswer || attempts >= 3)) {
      return `${baseClass} bg-green-500 hover:bg-green-600 text-white scale-105 shadow-lg`;
    }
    
    if (option === selectedAnswer && selectedAnswer !== correctAnswer) {
      return `${baseClass} bg-red-500 hover:bg-red-600 text-white`;
    }
    
    return `${baseClass} opacity-50`;
  };

  return (
    <Card className="w-full max-w-md mx-auto p-6 shadow-xl bg-white rounded-3xl animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          What is the collective noun for...
        </h2>
        <div className="text-6xl font-bold text-blue-600 mb-4 animate-scale-in">
          {question.noun}
        </div>
        <div className="text-sm text-gray-500">
          Attempt {attempts}/3
        </div>
      </div>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <Button
            key={option}
            onClick={() => !isAnswered && onAnswerSelect(option)}
            className={getButtonClass(option)}
            variant={getButtonVariant(option)}
            disabled={isAnswered}
          >
            {option}
          </Button>
        ))}
      </div>
      
      {isAnswered && (
        <div className="mt-6 text-center animate-fade-in">
          {selectedAnswer === correctAnswer ? (
            <div className="text-green-600 font-bold text-xl">
              🎉 Correct! +{attempts === 1 ? 10 : 0} points
            </div>
          ) : (
            <div className="text-red-600 font-bold text-lg">
              {attempts >= 3 ? (
                <>❌ The answer was "{correctAnswer}"</>
              ) : (
                <>❌ Try again! {3 - attempts} attempts left</>
              )}
            </div>
          )}
        </div>
      )}
    </Card>
  );
};

export default GameCard;
