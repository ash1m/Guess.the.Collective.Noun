
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface GameOverScreenProps {
  finalScore: number;
  totalQuestions: number;
  bestStreak: number;
  onRestart: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({
  finalScore,
  totalQuestions,
  bestStreak,
  onRestart
}) => {
  const percentage = Math.round((finalScore / (totalQuestions * 10)) * 100);
  
  const getScoreMessage = () => {
    if (percentage >= 90) return "🏆 Outstanding!";
    if (percentage >= 75) return "🌟 Excellent!";
    if (percentage >= 60) return "👏 Great job!";
    if (percentage >= 40) return "👍 Good effort!";
    return "💪 Keep practicing!";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <Card className="w-full max-w-md p-8 text-center shadow-2xl bg-white rounded-3xl animate-scale-in">
        <div className="text-6xl mb-4">🎯</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Game Complete!</h1>
        <p className="text-gray-600 mb-8">Here's how you did:</p>
        
        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-2xl">
            <div className="text-3xl font-bold">{finalScore}</div>
            <div className="text-sm opacity-90">Final Score</div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-gray-800">{percentage}%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-gray-800 flex items-center justify-center">
                {bestStreak > 0 && <span className="mr-1">🔥</span>}
                {bestStreak}
              </div>
              <div className="text-sm text-gray-600">Best Streak</div>
            </div>
          </div>
        </div>
        
        <div className="text-2xl font-bold text-blue-600 mb-6">
          {getScoreMessage()}
        </div>
        
        <Button 
          onClick={onRestart}
          className="w-full h-14 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
        >
          Play Again
        </Button>
      </Card>
    </div>
  );
};

export default GameOverScreen;
