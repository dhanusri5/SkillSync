import { fetchDashboardData } from "../model/dashboardModel";

export async function getDashboardStats() {
  const data = await fetchDashboardData();
  return {
    ...data,
    completionRate: Math.round((data.activeProjects / 10) * 100),
  };
}