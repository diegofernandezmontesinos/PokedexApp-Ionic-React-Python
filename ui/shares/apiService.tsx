import axios from 'axios';

const API_URL = 'http://localhost:8100'; 

export const signUp = async (user: any) => {
  const response = await axios.post(`${API_URL}/signup`, user);
  return response.data;
};

export const signIn = async (credentials: any) => {
  const response = await axios.post(`${API_URL}/signin`, credentials);
  return response.data;
};

export const signOut = async () => {
  const response = await axios.post(`${API_URL}/signout`);
  return response.data;
};

export const getPokemon = async (id: number) => {
  const response = await axios.get(`${API_URL}/pokemon/${id}`);
  return response.data;
};

export const getPokemonFavorites = async () => {
  const response = await axios.get(`${API_URL}/favorites`);
  return response.data;
};

export const sendPokemonFavorites = async (favorites: any) => {
  const response = await axios.post(`${API_URL}/favorites`, { favorites });
  return response.data;
};

export const favorite = async (favoriteItem: any) => {
  const response = await axios.post(`${API_URL}/favorite`, { favorite: favoriteItem });
  return response.data;
};