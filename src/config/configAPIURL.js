// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  ENDPOINTS: {
    CONTACT_CREATE: '/user/contact/create',
  },
  TIMEOUT: 30000, // 30 seconds
};

// Get full API URL
export const getAPIUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

export default API_CONFIG;
