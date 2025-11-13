import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:8080/api/v1/culqi';

export default function SubscriptionForm() {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [plans, setPlans] = useState([]);
  const [authToken, setAuthToken] = useState('');

  // Datos del cliente (pre-llenados desde login)
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: 'PE',
    phoneNumber: '',
  });

  // IDs generados
  const [customerId, setCustomerId] = useState('');
  const [cardId, setCardId] = useState('');

  // Obtener token JWT y datos del usuario del sessionStorage
  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    const userEmail = sessionStorage.getItem('userEmail');
    const userName = sessionStorage.getItem('userName');

    console.log('SessionStorage data:', { token: !!token, userEmail, userName });

    if (token) {
      setAuthToken(token);

      // Pre-llenar datos del usuario desde el login
      if (userEmail && userName) {
        const [firstName, ...lastNameParts] = userName.split(' ');
        const lastName = lastNameParts.join(' ') || firstName;

        console.log('Setting customer data:', { firstName, lastName, email: userEmail });

        setCustomerData(prev => ({
          ...prev,
          firstName: firstName,
          lastName: lastName,
          email: userEmail
        }));
      }
    } else {
      setMessage('Por favor inicia sesión primero');
    }
  }, []);

  // Cargar planes al montar el componente
  useEffect(() => {
    if (!authToken) return;

    const loadPlans = async () => {
      try {
        const response = await fetch(`${API_URL}/plans`, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        });
        const data = await response.json();
        if (data.data && Array.isArray(data.data)) {
          setPlans(data.data);
        }
      } catch (error) {
        console.error('Error cargando planes:', error);
        setMessage('Error al cargar planes: ' + error.message);
      }
    };
    loadPlans();
  }, [authToken]);

  // Cargar Culqi.js al montar el componente
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.culqi.com/js/v4';
    script.async = true;
    script.onload = () => {
      if (window.Culqi) {
        window.Culqi.publicKey = 'pk_test_CkaXn5LAdfuueptU';
        window.Culqi.init();

        // Configurar settings requeridos
        window.Culqi.settings({
          currency: 'PEN'
        });

        // Configurar opciones de pago
        window.Culqi.options({
          paymentMethods: {
            tarjeta: true,
            bancaMovil: false,
            agente: false,
            billetera: false,
            cuotealo: false,
            yape: false
          }
        });

        console.log('Culqi.js cargado correctamente');
      }
    };
    script.onerror = () => {
      console.error('Error al cargar Culqi.js');
      setMessage('Error al cargar Culqi.js');
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Crear cliente
  const createCustomer = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/customers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({
          first_name: customerData.firstName,
          last_name: customerData.lastName,
          email: customerData.email,
          address: 'Dirección no especificada', // Valor por defecto
          address_city: 'Lima', // Valor por defecto
          country_code: customerData.countryCode,
          phone_number: customerData.phoneNumber,
        }),
      });
      const data = await response.json();
      if (data.id) {
        setCustomerId(data.id);
        setMessage('Cliente creado exitosamente!');
        setStep(3);
      } else {
        // Mostrar el mensaje de error de Culqi si existe
        const errorMsg = data.merchant_message || data.user_message || 'Error al crear cliente';
        setMessage('Error: ' + errorMsg);
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
    setLoading(false);
  };

  // Generar token y crear tarjeta
  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('Generando token...');

    // Verificar que Culqi esté disponible
    if (!window.Culqi) {
      setMessage('Error: Culqi no está cargado');
      setLoading(false);
      return;
    }

    // Configurar callback de Culqi
    window.culqi = async () => {
      if (window.Culqi.token) {
        const tokenId = window.Culqi.token.id;
        setMessage('Token generado! Creando tarjeta...');

        try {
          // Crear tarjeta
          const cardResponse = await fetch(`${API_URL}/cards`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
              customer_id: customerId,
              token_id: tokenId,
            }),
          });
          const cardResponseData = await cardResponse.json();

          if (cardResponseData.id) {
            setCardId(cardResponseData.id);
            setMessage('Tarjeta creada! Creando suscripción...');

            // Crear suscripción (el backend agrega automáticamente user_id desde el JWT)
            // Incluir información del intervalo del plan para renovaciones automáticas
            const subResponse = await fetch(`${API_URL}/subscriptions`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
              },
              body: JSON.stringify({
                card_id: cardResponseData.id,
                plan_id: selectedPlan.id,
                tyc: true,
                metadata: {
                  // Información del intervalo para renovaciones automáticas
                  interval: selectedPlan.interval || 'meses',
                  interval_count: selectedPlan.interval_count || 1,
                } // user_id se agrega automáticamente desde el JWT en el backend
              }),
            });
            const subData = await subResponse.json();

            if (subData.id) {
              setMessage('¡Suscripción creada! Activando Premium...');

              // NUEVO: Activar Premium inmediatamente (no esperar webhook)
              try {
                const activateResponse = await fetch('http://localhost:8080/api/v1/subscription/activate', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                  },
                  body: JSON.stringify({
                    subscription_id: subData.id,
                    plan_id: selectedPlan.id
                  }),
                });

                const activateData = await activateResponse.json();

                if (activateResponse.ok) {
                  setMessage('¡Éxito! Tu suscripción Premium está activa. ID: ' + subData.id);
                  setStep(4);
                } else {
                  setMessage('Suscripción creada pero error al activar: ' + (activateData.message || 'Error desconocido'));
                }
              } catch (activateError) {
                setMessage('Suscripción creada pero error al activar: ' + activateError.message);
              }
            } else {
              const errorMsg = subData.merchant_message || subData.user_message || JSON.stringify(subData);
              setMessage('Error al crear suscripción: ' + errorMsg);
            }
          } else {
            const errorMsg = cardResponseData.merchant_message || cardResponseData.user_message || JSON.stringify(cardResponseData);
            setMessage('Error al crear tarjeta: ' + errorMsg);
          }
        } catch (error) {
          setMessage('Error: ' + error.message);
        }
        setLoading(false);
      } else if (window.Culqi.error) {
        setMessage('Error Culqi: ' + window.Culqi.error.user_message);
        setLoading(false);
      }
    };

    // Generar token usando la API correcta de Culqi v4
    try {
      window.Culqi.validationPaymentMethods();
      const paymentOptions = window.Culqi.paymentOptionsAvailable;
      if (paymentOptions && paymentOptions.token && paymentOptions.token.available) {
        paymentOptions.token.generate();
      } else {
        setMessage('Método de pago no disponible');
        setLoading(false);
      }
    } catch (error) {
      setMessage('Error al generar token: ' + error.message);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Sistema de Suscripciones Culqi</h1>

      {/* Mensaje de estado */}
      {message && (
        <div className={`mb-4 p-4 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      {/* Paso 1: Seleccionar Plan */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Paso 1: Selecciona tu Plan</h2>

          {plans.length === 0 ? (
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded mb-4">
              <p className="text-sm text-yellow-800">
                <strong>Cargando planes...</strong> Si no aparecen planes, verifica que hayas creado al menos uno en tu panel de Culqi.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => {
                    setSelectedPlan(plan);
                    setStep(2);
                  }}
                  className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-lg hover:border-blue-500 ${
                    selectedPlan?.id === plan.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{plan.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{plan.description}</p>
                      <p className="text-xs text-gray-500 mt-2">ID: {plan.id}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">
                        {plan.currency} {(plan.amount / 100).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">por mes</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Paso 2: Confirmar Datos */}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Paso 2: Confirmar Información</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Plan seleccionado:</strong> {selectedPlan?.name} - {selectedPlan?.currency} {(selectedPlan?.amount / 100).toFixed(2)}/mes
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              createCustomer();
            }}
            className="space-y-4"
          >
            {/* Datos auto-completados - Solo lectura */}
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-3 text-gray-700">Tus Datos</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Nombre</label>
                  <input
                    type="text"
                    value={customerData.firstName}
                    className="w-full border rounded px-3 py-2 bg-white text-gray-700"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Apellido</label>
                  <input
                    type="text"
                    value={customerData.lastName}
                    className="w-full border rounded px-3 py-2 bg-white text-gray-700"
                    disabled
                  />
                </div>
              </div>
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  value={customerData.email}
                  className="w-full border rounded px-3 py-2 bg-white text-gray-700"
                  disabled
                />
              </div>
            </div>

            {/* Solo pedir teléfono si no lo tiene */}
            <div>
              <label className="block text-sm font-medium mb-1">Teléfono</label>
              <input
                type="tel"
                value={customerData.phoneNumber}
                onChange={(e) => setCustomerData({ ...customerData, phoneNumber: e.target.value })}
                className="w-full border rounded px-3 py-2"
                placeholder="987654321"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Necesitamos tu teléfono para confirmar la suscripción</p>
            </div>

            <div className="flex gap-2 pt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400 transition-colors"
              >
                Atrás
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 transition-all font-medium"
              >
                {loading ? 'Procesando...' : 'Continuar al Pago →'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Paso 3: Datos de la Tarjeta */}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Paso 3: Datos de la Tarjeta</h2>
          <form
            onSubmit={handlePayment}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                data-culqi="card[email]"
                defaultValue={customerData.email}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Número de Tarjeta</label>
              <input
                type="text"
                data-culqi="card[number]"
                placeholder="4111111111111111"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Mes</label>
                <input
                  type="text"
                  data-culqi="card[exp_month]"
                  placeholder="12"
                  className="w-full border rounded px-3 py-2"
                  maxLength="2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Año</label>
                <input
                  type="text"
                  data-culqi="card[exp_year]"
                  placeholder="2025"
                  className="w-full border rounded px-3 py-2"
                  maxLength="4"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input
                  type="text"
                  data-culqi="card[cvv]"
                  placeholder="123"
                  className="w-full border rounded px-3 py-2"
                  maxLength="4"
                  required
                />
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
              <p className="text-sm text-yellow-800">
                <strong>Tarjeta de prueba:</strong> 4111111111111111, CVV: 123, Mes: 12, Año: 2025
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400"
              >
                Atrás
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 disabled:bg-gray-400"
              >
                {loading ? 'Procesando...' : 'Suscribirse'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Paso 4: Confirmación */}
      {step === 4 && (
        <div className="text-center">
          <div className="mb-6">
            <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4">¡Suscripción Exitosa!</h2>
          <p className="text-gray-600 mb-4">Tu suscripción ha sido creada correctamente.</p>
          <div className="bg-gray-50 p-4 rounded mb-4 text-left">
            <p><strong>Plan:</strong> {selectedPlan?.name} - {selectedPlan?.currency} {((selectedPlan?.amount || 0) / 100).toFixed(2)}</p>
            <p><strong>Cliente ID:</strong> {customerId}</p>
            <p><strong>Tarjeta ID:</strong> {cardId}</p>
          </div>
          <button
            onClick={() => {
              setStep(1);
              setSelectedPlan(null);
              setCustomerId('');
              setCardId('');
              setMessage('');
              setCustomerData({
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                addressCity: '',
                countryCode: 'PE',
                phoneNumber: '',
              });
            }}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Nueva Suscripción
          </button>
        </div>
      )}
    </div>
  );
}
