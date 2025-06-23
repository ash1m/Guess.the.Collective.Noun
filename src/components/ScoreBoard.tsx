
import React from 'react';
import { Card } from '@/components/ui/card';

interface ScoreBoardProps {
  score: number;
  streak: number;
  questionNumber: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, streak, questionNumber }) => {
  return (
    <Card className="w-full max-w-md mx-auto p-4 mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg">
      <div className="flex justify-between items-center">
        <div className="text-center">
          <div className="text-2xl font-bold">{score}</div>
          <div className="text-sm opacity-90">Score</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold">{questionNumber}</div>
          <div className="text-sm opacity-90">Question</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold flex items-center">
            {streak > 0 && <span className="mr-1">🔥</span>}
            {streak}
          </div>
          <div className="text-sm opacity-90">Streak</div>
        </div>
      </div>
    </Card>
  );
};

export default ScoreBoard;
