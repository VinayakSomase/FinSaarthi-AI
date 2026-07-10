import api from "@/lib/api";

export async function getMSMEs() {
  const response = await api.get("/api/msmes/");
  return response.data;
}