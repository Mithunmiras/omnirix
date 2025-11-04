import { useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const useContactAPI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createContact = async (contactData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${API_BASE_URL}/user/contact/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies
        body: JSON.stringify({
          fname: contactData.firstName,
          lname: contactData.lastName,
          email: contactData.email,
          mobilNo: contactData.phone,
          company: contactData.company,
          interested: contactData.service,
          message: contactData.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit contact form');
      }

      const data = await response.json();
      setSuccess(true);
      setLoading(false);
      return { success: true, data };
    } catch (err) {
      setError(err.message || 'An error occurred while submitting the form');
      setLoading(false);
      return { success: false, error: err.message };
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
