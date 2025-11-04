# Contact API Hook

## Overview
Custom React hook for handling contact form submissions to the backend API.

## Usage

### Import the hook
```javascript
import { useContactAPI } from '../hooks/useContactAPI';
```

### Use in your component
```javascript
const { createContact, loading, error, success } = useContactAPI();

const handleSubmit = async (formData) => {
  const result = await createContact(formData);
  if (result.success) {
    // Handle success
  }
};
```

## API Configuration

### Environment Variables
Create a `.env` file in the root directory:

```bash
# Development
VITE_API_BASE_URL=http://localhost:8000

# Production (in .env.production)
VITE_API_BASE_URL=https://your-production-api-url.com
```

### API Endpoint
- **URL**: `POST /user/contact/create`
- **Content-Type**: `application/json`
- **Credentials**: Included (cookies)

### Request Body Format
```json
{
  "fname": "John",
  "lname": "Doe",
  "email": "user@example.com",
  "mobilNo": "+1 9876543210",
  "company": "Company Name",
  "interested": "Service Name",
  "message": "Message content"
}
```

### Hook Methods

#### `createContact(contactData)`
Submits contact form data to the API.

**Parameters:**
- `contactData` (Object):
  - `firstName` (string) - User's first name
  - `lastName` (string) - User's last name
  - `email` (string) - User's email address
  - `phone` (string) - User's phone number
  - `company` (string) - Company name
  - `service` (string) - Interested service
  - `message` (string) - Message content

**Returns:**
- `{ success: true, data }` - On success
- `{ success: false, error }` - On failure

#### `resetState()`
Resets the hook state (loading, error, success).

### Hook State

- `loading` (boolean) - True when API request is in progress
- `error` (string | null) - Error message if request fails
- `success` (boolean) - True when request succeeds

## Example Implementation

```javascript
import React, { useState } from 'react';
import { useContactAPI } from '../../hooks/useContactAPI';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const { createContact, loading } = useContactAPI();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createContact(formData);
    
    if (result.success) {
      console.log('Form submitted successfully!');
      // Reset form or show success message
    } else {
      console.error('Error:', result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

## Notes

- The hook automatically maps form field names to API field names
- Cookies are included in requests for session management
- Error handling is built-in with user-friendly messages
- Loading states are managed automatically
