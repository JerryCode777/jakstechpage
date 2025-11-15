import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '../config/api';

const VerifyCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resending, setResending] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const storedEmail = sessionStorage.getItem('loginEmail');
    if (!storedEmail) {
      navigate('/login');
      return;
    }
    setEmail(storedEmail);
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(API_ENDPOINTS.loginWithCode, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Código inválido');
      }

      sessionStorage.setItem('authToken', data.token);
      sessionStorage.setItem('userId', data.user.id);
      sessionStorage.setItem('userEmail', data.user.email);
      sessionStorage.setItem('userName', `${data.user.firstName} ${data.user.lastName}`);

      navigate('/subscription');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setError('');
    setResending(true);

    try {
      const response = await fetch(API_ENDPOINTS.sendLoginCode, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al reenviar el código');
      }

      alert('Código reenviado exitosamente. Revisa tu correo.');
    } catch (err) {
      setError(err.message);
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0d1117] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-20 w-20 bg-gradient-to-r from-[#2968FB] to-[#5B8DFF] rounded-full flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Verifica tu Código
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Ingresa el código de 6 dígitos enviado a
          </p>
          <p className="text-sm font-semibold text-[#2968FB]">
            {email}
          </p>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-[#0b0e16] rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Código de Verificación
              </label>
              <input
                id="code"
                name="code"
                type="text"
                required
                maxLength="6"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                className="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2968FB] focus:border-transparent transition-all text-center text-2xl tracking-widest font-bold bg-white dark:bg-[#1b1d2d] text-gray-900 dark:text-white"
                placeholder="XXXXXX"
                disabled={loading}
              />
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
                El código expira en 15 minutos
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || code.length !== 6}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#2968FB] hover:bg-[#1e54d4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2968FB] disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02]"
            >
              {loading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verificando...
                </div>
              ) : (
                'Verificar Código'
              )}
            </button>
          </form>

          {/* Resend Code */}
          <div className="mt-6 text-center">
            <button
              onClick={handleResendCode}
              disabled={resending}
              className="text-sm text-[#2968FB] hover:text-[#1e54d4] font-medium disabled:opacity-50 transition-colors"
            >
              {resending ? 'Reenviando...' : '¿No recibiste el código? Reenviar'}
            </button>
          </div>

          {/* Back to Login */}
          <div className="mt-4 text-center">
            <button
              onClick={() => navigate('/login')}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              ← Volver al inicio de sesión
            </button>
          </div>
        </div>

        {/* Help Box */}
        <div className="bg-white dark:bg-[#0b0e16] rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="ml-3">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>¿No encuentras el código?</strong>
              </p>
              <ul className="mt-2 text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Revisa tu carpeta de spam o correo no deseado</li>
                <li>• Espera unos minutos, el correo puede tardar en llegar</li>
                <li>• Verifica que el correo sea correcto: {email}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
