import { MaintenancePayment, MaintenanceStats } from "@/types/maintenance"

export async function getMaintenanceStats(): Promise<MaintenanceStats> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/maintenance/stats`, {
    cache: "no-store"
  });
  
  if (!response.ok) {
    throw new Error("Failed to fetch maintenance stats");
  }

  return response.json();
}

export async function getMaintenancePayments(): Promise<MaintenancePayment[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/maintenance/payments`, {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Failed to fetch maintenance payments");
  }

  return response.json();
}

export async function getMaintenancePayment(id: string): Promise<MaintenancePayment> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/maintenance/${id}`, {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Failed to fetch maintenance payment");
  }

  return response.json();
}
