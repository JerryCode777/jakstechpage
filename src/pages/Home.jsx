import React from 'react';
import { useNavigate } from 'react-router-dom';
import RumboLogo from '../components/RumboLogo';
import LottieAnimation from '../components/LottieAnimation';
import llamaMascot from '../assets/images/illustrations/llamasinfondof.png';

// Importar animaciones
import reading from '../assets/animations/education/reading.lottie';
import progress from '../assets/animations/education/progress.lottie';
import achievement from '../assets/animations/education/achievement.lottie';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-[#0d1117] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Lado izquierdo: Logo creativo con animación */}
            <div className="space-y-12">
              {/* Logo Rumbo con diseño impresionante */}
              <div className="flex justify-center lg:justify-start">
                <RumboLogo />
              </div>

              {/* Descripción */}
              <div className="text-center lg:text-left space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Aprende a tu ritmo
                </h2>

                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  Plataforma educativa con contenido interactivo, seguimiento personalizado y herramientas que impulsan tu aprendizaje.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => navigate('/login')}
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-[#2968FB] hover:bg-[#1e54d4] rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Comenzar Ahora
                  </button>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    Más información
                  </a>
                </div>
              </div>
            </div>

            {/* Lado derecho: Mascota Rumbo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                {/* Efecto de brillo de fondo */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2968FB]/20 to-[#A42EFF]/20 blur-3xl rounded-full"></div>

                {/* Imagen de la llama */}
                <img
                  src={llamaMascot}
                  alt="Rumbo Mascot"
                  className="relative w-full h-auto drop-shadow-2xl animate-bounce-slow"
                />
              </div>
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
                animation: reading,
                title: 'Contenido de Calidad',
                description: 'Material educativo creado por expertos, adaptado a tu nivel'
              },
              {
                animation: progress,
                title: 'Seguimiento Personalizado',
                description: 'Monitorea tu progreso con estadísticas detalladas'
              },
              {
                animation: achievement,
                title: 'Aprendizaje Interactivo',
                description: 'Ejercicios prácticos y quizzes que hacen el aprendizaje efectivo'
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-50 dark:bg-[#1b1d2d] hover:scale-105 transition-transform duration-200">
                <div className="w-24 h-24 mx-auto mb-4">
                  <LottieAnimation
                    src={feature.animation}
                    loop={true}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
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
      <section id="planes" className="py-20 bg-gray-50 dark:bg-[#0d1117]">
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

              <button
                onClick={() => navigate('/login')}
                className="w-full py-3 px-6 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors"
              >
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

              <button
                onClick={() => navigate('/login')}
                className="w-full py-3 px-6 text-white bg-[#2968FB] hover:bg-[#1e54d4] rounded-lg font-medium transition-colors"
              >
                Obtener Premium
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
