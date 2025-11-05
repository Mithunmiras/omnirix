import { getAPIUrl } from '../config/configAPIURL';

/**
 * API Request Handler
 * Centralized function for making API requests
 */
export const apiRequest = async (endpoint, options = {}) => {
  const {
    method = 'GET',
    body = null,
    headers = {},
    credentials = 'include',
    ...restOptions
  } = options;

  const url = getAPIUrl(endpoint);
  
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    credentials,
    ...restOptions,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  console.log('API Request:', {
    url,
    method,
    body,
    headers: config.headers,
  });

  try {
    const response = await fetch(url, config);
    
    console.log('API Response:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
    });

    // Try to parse JSON response
    let data;
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    if (!response.ok) {
      console.error('API Error Response:', data);
      throw new Error(
        data?.message || 
        data?.error || 
        `HTTP Error ${response.status}: ${response.statusText}`
      );
    }

    console.log('API Success Response:', data);
    return { success: true, data, status: response.status };
    
  } catch (error) {
    console.error('API Request Failed:', {
      url,
      error: error.message,
      stack: error.stack,
    });

    // Handle network errors
    if (error.message === 'Failed to fetch') {
      throw new Error('Network error: Unable to reach the server. Please check if the backend is running.');
    }

    throw error;
  }
};

/**
 * GET Request
 */
export const apiGet = (endpoint, options = {}) => {
  return apiRequest(endpoint, { ...options, method: 'GET' });
};

/**
 * POST Request
 */
export const apiPost = (endpoint, body, options = {}) => {
  return apiRequest(endpoint, { ...options, method: 'POST', body });
};

/**
 * PUT Request
 */
export const apiPut = (endpoint, body, options = {}) => {
  return apiRequest(endpoint, { ...options, method: 'PUT', body });
};

/**
 * DELETE Request
 */
export const apiDelete = (endpoint, options = {}) => {
  return apiRequest(endpoint, { ...options, method: 'DELETE' });
};

/**
 * PATCH Request
 */
export const apiPatch = (endpoint, body, options = {}) => {
  return apiRequest(endpoint, { ...options, method: 'PATCH', body });
};

export default {
  request: apiRequest,
  get: apiGet,
  post: apiPost,
  put: apiPut,
  delete: apiDelete,
  patch: apiPatch,
};
