import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SubscriptionForm from '../SubscriptionForm';

const Subscription = () => {
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get('plan');

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Completa tu Suscripción
          </h1>
          <p className="text-xl text-gray-600">
            Estás a un paso de desbloquear todo el potencial de Rumbo
          </p>
          {selectedPlan && (
            <div className="mt-4 inline-block bg-purple-100 text-purple-800 px-6 py-2 rounded-full font-semibold">
              Plan seleccionado: {selectedPlan === 'monthly' && 'Mensual'}
              {selectedPlan === 'quarterly' && 'Trimestral'}
              {selectedPlan === 'semiannual' && 'Semestral'}
              {selectedPlan === 'annual' && 'Anual'}
            </div>
          )}
        </div>

        {/* Security Badges */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center">
              <svg className="w-8 h-8 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-semibold text-gray-700">Pago Seguro SSL</span>
            </div>
            <div className="flex items-center">
              <svg className="w-8 h-8 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="font-semibold text-gray-700">Procesado por Culqi</span>
            </div>
            <div className="flex items-center">
              <svg className="w-8 h-8 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-semibold text-gray-700">Datos Protegidos</span>
            </div>
          </div>
        </div>

        {/* Subscription Form */}
        <SubscriptionForm />

        {/* Garantías */}
        <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-900 mb-4">✅ Garantía de Satisfacción</h3>
          <ul className="space-y-2 text-green-800">
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Puedes cancelar tu suscripción en cualquier momento
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Sin cargos ocultos ni letras pequeñas
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Acceso inmediato después del pago
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Soporte al cliente 24/7
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Preguntas Frecuentes</h3>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm">
              <summary className="p-6 font-semibold cursor-pointer hover:bg-gray-50">
                ¿Cómo cancelo mi suscripción?
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Puedes cancelar tu suscripción en cualquier momento desde la app o contactándonos. No hay penalidades ni cargos adicionales.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm">
              <summary className="p-6 font-semibold cursor-pointer hover:bg-gray-50">
                ¿Qué métodos de pago aceptan?
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Aceptamos todas las tarjetas de crédito y débito (Visa, Mastercard) a través de nuestra pasarela segura Culqi.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm">
              <summary className="p-6 font-semibold cursor-pointer hover:bg-gray-50">
                ¿Cuándo tendré acceso a mi cuenta premium?
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Tu acceso premium se activa inmediatamente después de completar el pago. Solo necesitas reiniciar la app.
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-sm">
              <summary className="p-6 font-semibold cursor-pointer hover:bg-gray-50">
                ¿Puedo cambiar de plan después?
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se reflejarán en tu próximo período de facturación.
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
