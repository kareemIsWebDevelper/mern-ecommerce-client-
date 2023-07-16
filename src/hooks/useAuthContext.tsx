import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function useAuthContext() {
  const context = useContext(AuthContext);

  try {
    if (!context) {
      throw new Error('useAuthContext must be used within an AuthProvider');
    }
  }
  catch(error) {
    console.log(error);
  }

  return context;
}
