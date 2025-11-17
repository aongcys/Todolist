import axios from "axios";
import { LoginArgs, RegisterArgs } from "./types";

export const register = async (args: RegisterArgs) => {
  try {
    const response = await axios.post('http://localhost:4001/public/register', args);
    return { success: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return { success: false, message: error.response.data.message || 'Registration failed' };
    }
    return { success: false, message: 'An unexpected error occurred' };
  }
};

export const login = async (args: LoginArgs) => { 
  try {
    const response = await axios.post('http://localhost:4001/public/login', args);
    return { success: true, data: response.data };
  } catch (error) { 
    if (axios.isAxiosError(error) && error.response) {
      return { success: false, message: error.response.data.message || 'Login failed' };
    }
    return { success: false, message: 'Login failed' };
  }
};
