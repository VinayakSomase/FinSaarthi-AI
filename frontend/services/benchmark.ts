import api from "@/lib/api";

export async function getBenchmark(msmeId: number) {
  const response = await api.get(`/api/benchmark/${msmeId}`);
  return response.data;
}