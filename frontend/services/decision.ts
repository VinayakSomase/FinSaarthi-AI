import api from "@/lib/api";

export async function getDecision(msmeId: number) {
  const response = await api.get(`/api/decision/${msmeId}`);
  return response.data;
}