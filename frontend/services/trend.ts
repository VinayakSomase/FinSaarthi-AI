// import api from "@/lib/api";

// export async function getTrend() {
//   const response = await api.get("/api/trend/");
//   return response.data;
// }

import api from "@/lib/api";

export async function getTrend(msmeId: number) {
  const response = await api.get(`/api/trend/${msmeId}`);
  return response.data;
}