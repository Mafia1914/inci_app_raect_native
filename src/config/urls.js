export const API_BASE_URL = "http://54.253.23.158:3000";

export const getApiUrl = (endpoint) => `${API_BASE_URL}${endpoint}`;

export const LOGIN = getApiUrl('/api/auth/login');

export const SIGNUP = getApiUrl('/api/auth/register');

export const FORGETPASSWORD = getApiUrl('api/auth/forgot-password');
