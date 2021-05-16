import http from "./httpService";
import apiUrl from "../utils/config.json";

const apiEndpoint = apiUrl.apiURL + "/users";

export async function register(user) {
  return await http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
