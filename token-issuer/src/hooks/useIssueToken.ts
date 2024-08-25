import { useState } from 'react';
import { issueToken, Token } from '../services/tokenService';

export const useIssueToken = () => {
  const [token, setToken] = useState<Token | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleIssueToken = async (clientName: string, serviceCategory: string) => {
    setLoading(true);
    setError(null);
    try {
      const issuedToken = await issueToken(clientName, serviceCategory);
      setToken(issuedToken);
      return true;
    } catch (error) {
      setError('Failed to issue token. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { token, loading, error, handleIssueToken };
};
