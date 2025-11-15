// Configuración centralizada de la API
// Usa variables de entorno de Vite (VITE_*)

const API_BASE_URL = import.meta.env.VITE_API_URL;

// Endpoints de la API
export const API_ENDPOINTS = {
  // Auth
  sendLoginCode: `${API_BASE_URL}/auth/send-login-code`,
  loginWithCode: `${API_BASE_URL}/auth/login-with-code`,
  register: `${API_BASE_URL}/auth/register`,
  verifyEmail: `${API_BASE_URL}/auth/verify-email`,

  // Culqi/Subscription
  culqiPlans: `${API_BASE_URL}/culqi/plans`,
  culqiCustomers: `${API_BASE_URL}/culqi/customers`,
  culqiCards: `${API_BASE_URL}/culqi/cards`,
  culqiSubscriptions: `${API_BASE_URL}/culqi/subscriptions`,

  // Subscription
  activateSubscription: `${API_BASE_URL}/subscription/activate`,
};

// Helper para construir URLs dinámicas si es necesario
export const buildApiUrl = (path) => {
  return `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};

// Exportar también la URL base
export { API_BASE_URL };

export default API_ENDPOINTS;
