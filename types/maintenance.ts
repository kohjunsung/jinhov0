export interface MaintenancePayment {
  id: string | number;
  tenant: string | {
    name: string;
    floor: number;
  };
  amount: number;
  month: string;
  dueDate: string;
  status: "�����" | "�Ϸ�";
  floor?: number;
  details: {
    electricity: number;
    water: number;
    gas: number;
    cleaning: number;
  };
}

export interface MaintenanceStats {
  total: number;
  pending: number;
  completed: number;
  pendingPercentage: number;
  completedPercentage: number;
}
