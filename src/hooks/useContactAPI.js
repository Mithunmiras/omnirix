import { useState } from 'react';
import { apiPost } from '../utils/apiRequest';
import API_CONFIG from '../config/configAPIURL';

export const useContactAPI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createContact = async (contactData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const payload = {
      fname: contactData.firstName,
      lname: contactData.lastName,
      email: contactData.email,
      mobilNo: contactData.phone,
      company: contactData.company,
      interested: contactData.service,
      message: contactData.message,
    };

    try {
      const result = await apiPost(API_CONFIG.ENDPOINTS.CONTACT_CREATE, payload);
      
      setSuccess(true);
      setLoading(false);
      return { success: true, data: result.data };
    } catch (err) {
      const errorMessage = err.message || 'An error occurred while submitting the form';
      setError(errorMessage);
      setLoading(false);
      return { success: false, error: errorMessage };
    }
  };

  const resetState = () => {
    setLoading(false);
    setError(null);
    setSuccess(false);
  };

  return {
    createContact,
    loading,
    error,
    success,
    resetState,
  };
};
