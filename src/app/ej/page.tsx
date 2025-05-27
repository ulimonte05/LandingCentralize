  {/* Clients Section */}
  <div className={`py-16 md:py-24 mt-32 sm:mt-40 md:mt-60 lg:mt-72 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isMounted ? '200ms' : '0ms' }}>
    <h2 className="text-center text-xl sm:text-2xl font-medium mb-10 md:mb-12">
      Confian en nuestra tecnologia:
    </h2>
    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 px-4">
      <img className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain" src="./images/google.png" alt="Client" />
      <img className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain" src="./images/microsoft.png" alt="Client" />
      <img className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain" src="./images/whatsapp.png" alt="Client" />
      <img className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain" src="./images/meta.png" alt="Client" />
    </div>
  </div>

  {/* Features Section */} 