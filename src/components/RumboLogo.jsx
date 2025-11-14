import React from 'react';

const RumboLogo = () => {
  return (
    <div className="flex flex-col items-center lg:items-start space-y-4">
      {/* Logo PNG */}
      <div className="mb-2">
        <img
          src={`/images/logos/rumbo_logo.png?v=${Date.now()}`}
          alt="Rumbo Logo"
          className="h-16 w-auto"
        />
      </div>

      {/* Texto "Rumbo" más sutil */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#2968FB] to-[#5B8DFF]">
          Rumbo
        </span>
      </h1>
    </div>
  );
};

export default RumboLogo;
