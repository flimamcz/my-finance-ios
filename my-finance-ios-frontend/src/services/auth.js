import api from "./api";
import { saveSession } from "./session";

export async function loginRequest(email, password) {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  const data = response.data;

  if (data.error) {
    throw new Error(data.message || "Erro no login");
  }

  // centraliza regra de sessão AQUI
  await saveSession(data.user, data.token);

  return data.user;
}
