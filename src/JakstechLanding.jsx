import React from 'react';

const JakstechLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">JAKS Tech SAC</h1>
        </div>
      </header>

      {/* Rumbo Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <img
                  src="/images/rumbo_logo.png"
                  alt="Rumbo Logo"
                  className="h-20 sm:h-24 w-auto"
                />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Aprende y Crece con Rumbo
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                La aplicación educativa que transforma tu forma de aprender. Contenido interactivo, seguimiento personalizado y herramientas que te impulsan al éxito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#planes-rumbo"
                  className="bg-purple-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors duration-300 text-center"
                >
                  Ver Planes
                </a>
                <a
                  href="#rumbo-features"
                  className="bg-white text-purple-600 border-2 border-purple-600 font-medium py-3 px-8 rounded-lg hover:bg-purple-50 transition-colors duration-300 text-center"
                >
                  Conocer Más
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/llamasinfondof.png"
                alt="Mascota Rumbo"
                className="w-full max-w-md h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rumbo Features */}
      <section id="rumbo-features" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué elegir Rumbo?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Contenido de Calidad</h4>
              <p className="text-gray-600">Material educativo creado por expertos, adaptado a tu nivel de aprendizaje</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Seguimiento Personalizado</h4>
              <p className="text-gray-600">Monitorea tu progreso y recibe recomendaciones basadas en tu desempeño</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Aprendizaje Interactivo</h4>
              <p className="text-gray-600">Ejercicios prácticos, quizzes y actividades que hacen el aprendizaje divertido</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rumbo Pricing Section */}
      <section id="planes-rumbo" className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Planes de Rumbo
            </h3>
            <p className="text-gray-600">Comienza gratis o desbloquea todo el potencial con Premium</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan Gratis */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Plan Gratis</h4>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">S/0</span>
                  <span className="text-gray-600 ml-2">/mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Acceso a cursos básicos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Seguimiento de progreso básico</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Ejercicios interactivos limitados</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Comunidad de estudiantes</span>
                </li>
              </ul>

              <button className="w-full bg-gray-900 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                Comenzar Gratis
              </button>
            </div>

            {/* Plan Premium */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-600 p-8 relative hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Recomendado
                </span>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Plan Premium</h4>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">S/29</span>
                  <span className="text-gray-600 ml-2">/mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Acceso ilimitado a todos los cursos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Seguimiento avanzado y estadísticas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Contenido exclusivo y nuevos cursos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Certificados digitales</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Soporte prioritario</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Sin anuncios</span>
                </li>
              </ul>

              <button className="w-full bg-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                Obtener Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* JAKS Tech Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Servicios de JAKS Tech
            </h3>
            <p className="text-gray-600">También ofrecemos desarrollo de software y soluciones tecnológicas para empresas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Desarrollo de Software */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Desarrollo de Software</h4>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">S/149</span>
                  <span className="text-gray-600 ml-2">/mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Soporte técnico básico</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Acceso a funcionalidades esenciales</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Actualizaciones menores incluidas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Documentación completa</span>
                </li>
              </ul>

              <button className="w-full bg-gray-900 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                Consultar
              </button>
            </div>

            {/* Soluciones Empresariales */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Soluciones Empresariales</h4>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">S/299</span>
                  <span className="text-gray-600 ml-2">/mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Soporte prioritario 24/7</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Soluciones personalizadas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Integración de sistemas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Consultoría especializada</span>
                </li>
              </ul>

              <button className="w-full bg-gray-900 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                Consultar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Información de Contacto
            </h3>
            <p className="text-gray-600">Estamos aquí para ayudarte</p>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-8 sm:p-12">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex items-center mb-2 sm:mb-0 sm:w-40">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium text-gray-900">Email:</span>
                </div>
                <a href="mailto:contacto@jakstech.net" className="text-blue-600 hover:text-blue-700 transition-colors">
                  contacto@jakstech.net
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex items-center mb-2 sm:mb-0 sm:w-40">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium text-gray-900">Dirección:</span>
                </div>
                <span className="text-gray-700">Lima, Perú</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex items-center mb-2 sm:mb-0 sm:w-40">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-medium text-gray-900">RUC:</span>
                </div>
                <span className="text-gray-700">20614811804</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex items-center mb-2 sm:mb-0 sm:w-40">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="font-medium text-gray-900">Razón Social:</span>
                </div>
                <span className="text-gray-700">JAKS Tech SAC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="font-bold text-lg mb-4">JAKS Tech SAC</h5>
              <p className="text-gray-400 text-sm">
                Desarrollo de software, automatización y soluciones tecnológicas para empresas en crecimiento.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-4">Enlaces Rápidos</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#rumbo-features" className="text-gray-400 hover:text-white transition-colors">
                    Rumbo
                  </a>
                </li>
                <li>
                  <a href="#planes-rumbo" className="text-gray-400 hover:text-white transition-colors">
                    Planes Rumbo
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-4">Legal</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/politica-privacidad" className="text-gray-400 hover:text-white transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="/terminos-condiciones" className="text-gray-400 hover:text-white transition-colors">
                    Términos y Condiciones
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} JAKS Tech SAC. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              RUC: 20614811804 | Lima, Perú
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JakstechLanding;
