'use client';

import React from 'react';

interface TagProps {
  text: string;
  color?: 'blue' | 'gray' | 'green' | 'red' | 'yellow';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Tag: React.FC<TagProps> = ({
  text,
  color = 'blue',
  size = 'medium',
  className = '',
}) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    gray: 'bg-gray-100 text-gray-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
  };

  const sizeClasses = {
    small: 'text-xs px-2 py-0.5',
    medium: 'text-sm px-2.5 py-0.5',
    large: 'text-base px-3 py-1',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${colorClasses[color]} ${sizeClasses[size]} ${className}`}
    >
      {text}
    </span>
  );
};

export default Tag;