import api from "@/lib/api";

export async function getHealth(msmeId: number) {
  const response = await api.get(`/api/health-card/${msmeId}`);
  return response.data;
}