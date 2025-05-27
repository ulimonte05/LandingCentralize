'use client';

import React, { ReactNode } from 'react';
import Button from '@/components/ui/Button';

interface CardFeature {
  text: string;
  icon?: ReactNode;
}

interface CardProps {
  title: string;
  features: CardFeature[];
  buttonText: string;
  variant?: 'dark' | 'light';
  className?: string;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  features,
  buttonText,
  variant = 'dark',
  className = '',
  onButtonClick = () => console.log('Card button clicked'),
}) => {
  const cardClasses = variant === 'dark' ?'bg-gradient-to-br from-black to-gray-700 text-white' :'bg-white text-gray-800';

  return (
    <div className={`rounded-xl shadow-lg p-8 ${cardClasses} ${className}`}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      
      <div className="w-full h-px bg-white bg-opacity-70 my-6"></div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.icon || (
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-blue-700">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <span className="text-sm md:text-base">{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <Button 
          variant={variant === 'dark' ? 'white' : 'primary'} 
          className="w-full rounded-full"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Card;