'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const handleDemoClick = () => {
    console.log('Demo scheduled');
    // Here you would typically open a modal or redirect to a demo scheduling page
  };

  const handleAIAgentClick = () => {
    console.log('AI Agent chat initiated');
    // Here you would typically open a chat interface with the AI agent
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 w-full h-full">
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-8 leading-tight">
          <span className="bg-gradient-to-r from-blue-500 to-gray-400 text-transparent bg-clip-text">
            Infraestructura
          </span>{" "}
          <span className="text-white">
            Para Automatizar, Ahorrar Y Medir Con{" "}
          </span>
          <span className="bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text">
            IA.
          </span>
        </h1>

        <p className="text-white text-opacity-80 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          <span>Agentes de IA (</span>
          <span className="font-extrabold">practicamente humanos</span>
          <span>), seguimientos, campañas masivas, </span>
          <span className="font-extrabold">métricas personalizadas, CRM y más.</span>
        </p>

        <p className="text-white text-opacity-80 text-lg md:text-xl mb-12">
          <span>En </span>
          <span className="font-black">Whatsapp, Instagram, Facebook, Telegram, etc.</span>
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
          <Button 
            variant="white" 
            size="large" 
            className="rounded-full w-full md:w-auto"
            onClick={handleDemoClick}
          >
            Agendar Demo
          </Button>
          
          <div className="flex flex-col items-center">
            <Button 
              variant="gradient" 
              size="large" 
              className="rounded-full w-full md:w-auto"
              onClick={handleAIAgentClick}
            >
              Habla con Juancito IA
            </Button>
            <div className="flex justify-center items-center mt-2 text-white text-opacity-80">
              <span>nuestro agente</span>
              <Image 
                src="/images/img_image_9.png" 
                alt="AI Agent" 
                width={28} 
                height={28} 
                className="ml-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;