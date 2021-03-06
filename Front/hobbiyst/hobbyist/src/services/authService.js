import http from "./httpService";
import apiUrl from "../utils/config.json";
import jwtDecode from "jwt-decode";
const apiEndpoint = apiUrl.apiURL + "/auth";
const tokenKey = "token";

http.setJwt(getJwt());
export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}
export function getJwt() {
  localStorage.getItem(tokenKey);
}
export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}
export function logout() {
  localStorage.removeItem(tokenKey);
}
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);

    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}
const auth = {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
};
export default auth;
