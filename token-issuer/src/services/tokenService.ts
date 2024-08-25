import axios from 'axios';

const API_URL = 'http://localhost:5000/';

export interface Token {
  id: number;
  clientName: string;
  serviceCategory: string;
  status: string;
  issueDateTime: string;
}

export const issueToken = async (clientName: string, serviceCategory: string): Promise<Token> => {
  try {
    const response = await axios.get<Token>(`${API_URL}api/tokens/issue-token`, {
      params: { clientName, serviceCategory },
    });
    return response.data;
  } catch (error) {
    console.error('Error issuing token:', error);
    throw error;
  }
};
