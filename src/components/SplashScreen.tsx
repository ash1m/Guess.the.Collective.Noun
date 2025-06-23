
import React from 'react';
import { Button } from '@/components/ui/button';

interface SplashScreenProps {
  onStartGame: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onStartGame }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-200 via-blue-200 to-yellow-200 flex flex-col items-center justify-center p-4">
      <div className="text-center animate-fade-in">
        <h1 className="font-rubik-moonrocks text-8xl md:text-6xl lg:text-7xl text-gray-800 mb-8 leading-tight">
          Guess the
          <br />
          Collective Noun
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-md mx-auto">
          Test your knowledge of collective nouns in this fun quiz game!
        </p>
        
        <Button
          onClick={onStartGame}
          className="w-full max-w-sm h-14 text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default SplashScreen;
