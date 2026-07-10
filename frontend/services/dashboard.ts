import api from "@/lib/api";

export async function getDashboardStats() {
  const response = await api.get("/api/dashboard/dashboard/stats");
  return response.data;
}