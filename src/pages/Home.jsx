import { Link } from 'react-router-dom';

const Home = () => {
  const plans = [
    {
      id: 'free',
      name: 'Plan Gratuito',
      price: 0,
      period: 'Siempre gratis',
      description: 'Ideal para comenzar tu aprendizaje',
      features: [
        'Acceso a quizzes básicos',
        'Seguimiento de progreso',
        'Planes de estudio personalizados',
        'Acceso limitado a cursos'
      ],
      image: '🎓',
      buttonText: 'Comenzar Gratis',
      popular: false
    },
    {
      id: 'monthly',
      name: 'Plan Mensual',
      price: 30,
      period: 'Por mes',
      description: 'Flexibilidad mes a mes sin compromisos',
      features: [
        'Todo del plan gratuito',
        'Chat con IA ilimitado',
        'Quizzes ilimitados',
        'Exportar progreso',
        'Acceso a todos los cursos',
        'Soporte prioritario'
      ],
      image: '🚀',
      buttonText: 'Suscribirse Ahora',
      popular: false,
      planId: 'pln_live_KPiTxT3KmWgK6Grh' // ID del plan en Culqi
    },
    {
      id: 'quarterly',
      name: 'Plan Trimestral',
      price: 27,
      originalPrice: 30,
      totalPrice: 81,
      period: 'Por mes (pago S/ 81 trimestral)',
      description: 'Ahorra 10% con compromiso de 3 meses',
      features: [
        'Todo del plan gratuito',
        'Chat con IA ilimitado',
        'Quizzes ilimitados',
        'Exportar progreso',
        'Acceso a todos los cursos',
        'Soporte prioritario',
        'Ahorro de S/ 9 cada 3 meses'
      ],
      image: '💎',
      buttonText: 'Suscribirse Ahora',
      popular: false,
      badge: 'Ahorra 10%'
    },
    {
      id: 'semiannual',
      name: 'Plan Semestral',
      price: 24,
      originalPrice: 30,
      totalPrice: 144,
      period: 'Por mes (pago S/ 144 semestral)',
      description: 'Ahorra 20% con compromiso de 6 meses',
      features: [
        'Todo del plan gratuito',
        'Chat con IA ilimitado',
        'Quizzes ilimitados',
        'Exportar progreso',
        'Acceso a todos los cursos',
        'Soporte prioritario',
        'Análisis detallados',
        'Ahorro de S/ 36 cada 6 meses'
      ],
      image: '⭐',
      buttonText: 'Suscribirse Ahora',
      popular: false,
      badge: 'Ahorra 20%'
    },
    {
      id: 'annual',
      name: 'Plan Anual',
      price: 20,
      originalPrice: 30,
      totalPrice: 240,
      period: 'Por mes (pago S/ 240 anual)',
      description: 'Máximo ahorro con compromiso anual',
      features: [
        'Todo del plan gratuito',
        'Chat con IA ilimitado',
        'Quizzes ilimitados',
        'Exportar progreso',
        'Acceso a todos los cursos',
        'Soporte prioritario VIP',
        'Análisis detallados avanzados',
        'Rutas de estudio personalizadas',
        'Ahorro de S/ 120 al año'
      ],
      image: '👑',
      buttonText: 'Suscribirse Ahora',
      popular: true,
      badge: 'Ahorra 33%'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Aprende Sin Límites con Rumbo
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Plataforma educativa con IA que transforma tu manera de estudiar y prepararte para tus exámenes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#planes"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Ver Planes
              </a>
              <a
                href="#caracteristicas"
                className="bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 transition-colors border-2 border-white"
              >
                Conocer Más
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Qué Ofrecemos */}
      <section id="caracteristicas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Qué Ofrecemos?
            </h2>
            <p className="text-xl text-gray-600">
              Herramientas potentes para potenciar tu aprendizaje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-8 rounded-xl">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-3">Chat con IA</h3>
              <p className="text-gray-600">
                Resuelve tus dudas al instante con nuestro asistente de inteligencia artificial especializado en educación
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-3">Quizzes Personalizados</h3>
              <p className="text-gray-600">
                Practica con quizzes adaptados a tu nivel y área de estudio. Prepárate para tus exámenes de manera efectiva
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Seguimiento de Progreso</h3>
              <p className="text-gray-600">
                Analiza tu evolución con estadísticas detalladas y visualiza tu crecimiento académico
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-xl">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Planes de Estudio</h3>
              <p className="text-gray-600">
                Crea planes de estudio personalizados según tus objetivos y calendario académico
              </p>
            </div>

            <div className="bg-red-50 p-8 rounded-xl">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-3">Simulacros de Examen</h3>
              <p className="text-gray-600">
                Prepárate con simulacros completos que replican las condiciones reales de tus evaluaciones
              </p>
            </div>

            <div className="bg-indigo-50 p-8 rounded-xl">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3">Soporte 24/7</h3>
              <p className="text-gray-600">
                Estamos contigo en cada paso de tu aprendizaje con soporte continuo y atención personalizada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planes y Precios */}
      <section id="planes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planes y Precios
            </h2>
            <p className="text-xl text-gray-600">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 ${
                  plan.popular ? 'ring-4 ring-purple-600' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-purple-600 text-white text-center py-2 font-semibold">
                    MÁS POPULAR
                  </div>
                )}
                {plan.badge && !plan.popular && (
                  <div className="bg-green-600 text-white text-center py-2 font-semibold">
                    {plan.badge}
                  </div>
                )}

                <div className="p-6">
                  <div className="text-6xl text-center mb-4">{plan.image}</div>
                  <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-center mb-4 min-h-[48px]">{plan.description}</p>

                  <div className="text-center mb-6">
                    {plan.originalPrice && (
                      <div className="text-gray-400 line-through text-lg">S/ {plan.originalPrice}</div>
                    )}
                    <div className="text-4xl font-bold text-purple-600 mb-1">
                      S/ {plan.price}
                    </div>
                    <div className="text-gray-600 text-sm">{plan.period}</div>
                    {plan.totalPrice && (
                      <div className="text-green-600 font-semibold mt-2">
                        Total: S/ {plan.totalPrice}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.id === 'free' ? (
                    <button
                      disabled
                      className="w-full bg-gray-300 text-gray-600 py-3 rounded-lg font-semibold cursor-not-allowed"
                    >
                      Incluido en App
                    </button>
                  ) : (
                    <Link
                      to={`/suscribirse?plan=${plan.id}`}
                      className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                        plan.popular
                          ? 'bg-purple-600 text-white hover:bg-purple-700'
                          : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                      }`}
                    >
                      {plan.buttonText}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo Que Dicen Nuestros Usuarios
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">María González</h4>
                  <p className="text-gray-600 text-sm">Estudiante de Medicina</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Rumbo me ayudó a aprobar mi examen de admisión. El chat con IA resolvió todas mis dudas al instante. ¡Increíble!"
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  C
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Carlos Fernández</h4>
                  <p className="text-gray-600 text-sm">Ingeniero Civil</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Los simulacros son muy realistas. Me sentí súper preparado para mi examen. Definitivamente lo recomiendo."
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Ana Torres</h4>
                  <p className="text-gray-600 text-sm">Estudiante de Derecho</p>
                </div>
              </div>
              <p className="text-gray-700">
                "El seguimiento de progreso me motiva a estudiar más. Veo cómo mejoro día a día. ¡Excelente plataforma!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Transformar tu Aprendizaje?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Únete a miles de estudiantes que ya están alcanzando sus metas con Rumbo
          </p>
          <Link
            to="/suscribirse"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Comenzar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
