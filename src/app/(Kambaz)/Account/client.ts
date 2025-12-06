import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const ENV_HTTP = process.env.NEXT_PUBLIC_HTTP_SERVER;
const HTTP_SERVER = ENV_HTTP || (process.env.NODE_ENV === "development" ? "http://localhost:4000" : "https://kambaz-node-server-app-s1zx.onrender.com");
const USERS_API = `${HTTP_SERVER}/api/users`;

export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get(`${USERS_API}`);
  return response.data;
};

export const findUsersByRole = async (role: string) => {
  const response = await axiosWithCredentials.get(`${USERS_API}?role=${encodeURIComponent(role)}`);
  return response.data;
};

export const findUsersByPartialName = async (name: string) => {
  const response = await axiosWithCredentials.get(`${USERS_API}?name=${encodeURIComponent(name)}`);
  return response.data;
};

export const findUserById = async (id: string) => {
  const response = await axiosWithCredentials.get(`${USERS_API}/${id}`);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}`, user);
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await axiosWithCredentials.delete(`${USERS_API}/${id}`);
  return response.data;
};
