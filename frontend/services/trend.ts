import api from "@/lib/api";

export async function getTrend() {
  const response = await api.get("/api/trend/");
  return response.data;
}