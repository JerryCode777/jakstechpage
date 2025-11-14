import React, { useState, useEffect } from 'react';

const JakstechLanding = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0d1117] transition-colors duration-300">
      {/* Header with Theme Toggle */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0d1117] sticky top-0 z-50 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">JAKS Tech</h1>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <img
                  src="/images/rumbo_logo.png"
                  alt="Rumbo"
                  className="h-16 w-auto"
                />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Aprende a tu ritmo
              </h2>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Plataforma educativa con contenido interactivo, seguimiento personalizado y herramientas que impulsan tu aprendizaje.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#planes"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-[#2968FB] hover:bg-[#1e54d4] rounded-lg transition-colors duration-200"
                >
                  Ver Planes
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                >
                  Más información
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/llamasinfondof.png"
                alt="Rumbo Mascot"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-[#0b0e16]">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            ¿Por qué Rumbo?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Contenido de Calidad',
                description: 'Material educativo creado por expertos, adaptado a tu nivel'
              },
              {
                title: 'Seguimiento Personalizado',
                description: 'Monitorea tu progreso con estadísticas detalladas'
              },
              {
                title: 'Aprendizaje Interactivo',
                description: 'Ejercicios prácticos y quizzes que hacen el aprendizaje efectivo'
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-50 dark:bg-[#1b1d2d] hover:scale-105 transition-transform duration-200">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planes" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Planes
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Comienza gratis o desbloquea todo con Premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white dark:bg-[#0b0e16] rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-[#2968FB] dark:hover:border-[#2968FB] transition-colors">
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Gratis</h4>
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">S/0</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">/mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Acceso a cursos básicos',
                  'Seguimiento de progreso',
                  'Ejercicios limitados',
                  'Comunidad de estudiantes'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#2968FB] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-6 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors">
                Comenzar Gratis
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white dark:bg-[#0b0e16] rounded-2xl p-8 border-2 border-[#2968FB] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#2968FB] text-white text-sm font-medium px-4 py-1 rounded-full">
                  Recomendado
                </span>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Premium</h4>
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">S/29</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">/mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Acceso ilimitado a todos los cursos',
                  'Estadísticas avanzadas',
                  'Contenido exclusivo',
                  'Certificados digitales',
                  'Soporte prioritario',
                  'Sin anuncios'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#2968FB] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-6 text-white bg-[#2968FB] hover:bg-[#1e54d4] rounded-lg font-medium transition-colors">
                Obtener Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white dark:bg-[#0b0e16]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contacto
            </h3>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-[#1b1d2d] rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-center">
                <span className="font-medium text-gray-900 dark:text-white w-32">Email</span>
                <a href="mailto:contacto@jakstech.net" className="text-[#2968FB] hover:underline">
                  contacto@jakstech.net
                </a>
              </div>

              <div className="flex items-center">
                <span className="font-medium text-gray-900 dark:text-white w-32">Ubicación</span>
                <span className="text-gray-700 dark:text-gray-300">Lima, Perú</span>
              </div>

              <div className="flex items-center">
                <span className="font-medium text-gray-900 dark:text-white w-32">RUC</span>
                <span className="text-gray-700 dark:text-gray-300">20614811804</span>
              </div>

              <div className="flex items-center">
                <span className="font-medium text-gray-900 dark:text-white w-32">Razón Social</span>
                <span className="text-gray-700 dark:text-gray-300">JAKS Tech SAC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} JAKS Tech SAC. Todos los derechos reservados.
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="/terminos-condiciones" className="text-gray-600 dark:text-gray-400 hover:text-[#2968FB] dark:hover:text-[#2968FB] transition-colors">
                Términos y Condiciones
              </a>
              <a href="/politica-privacidad" className="text-gray-600 dark:text-gray-400 hover:text-[#2968FB] dark:hover:text-[#2968FB] transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JakstechLanding;
