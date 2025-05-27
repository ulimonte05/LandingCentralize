'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/images/img_iconremovebgpreview_2_14.png" 
              alt="Centralize Logo" 
              width={90} 
              height={90} 
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#producto" className="text-white text-base font-normal hover:text-gray-200">
            Producto
          </Link>
          <Link href="#solucion" className="text-white text-base font-normal hover:text-gray-200">
            Solucion
          </Link>
          <Link href="#clientes" className="text-white text-base font-normal hover:text-gray-200">
            Clientes
          </Link>
          <Link href="#precios" className="text-white text-base font-normal hover:text-gray-200">
            Precios
          </Link>
          <Link href="#nosotros" className="text-white text-base font-normal hover:text-gray-200">
            Nosotros
          </Link>
        </nav>

        <Button 
          variant="white" 
          className="hidden md:block rounded-full"
        >
          Ingresar
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black bg-opacity-90 md:hidden">
            <div className="flex flex-col p-4">
              <Link href="#producto" className="text-white py-2 hover:text-gray-200">
                Producto
              </Link>
              <Link href="#solucion" className="text-white py-2 hover:text-gray-200">
                Solucion
              </Link>
              <Link href="#clientes" className="text-white py-2 hover:text-gray-200">
                Clientes
              </Link>
              <Link href="#precios" className="text-white py-2 hover:text-gray-200">
                Precios
              </Link>
              <Link href="#nosotros" className="text-white py-2 hover:text-gray-200">
                Nosotros
              </Link>
              <Button 
                variant="white" 
                className="mt-4 rounded-full"
              >
                Ingresar
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;