const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  // ������ ���� ����
  const hashedPassword = await bcrypt.hash("admin123", 10);
  await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      password: hashedPassword,
      role: "admin"
    }
  });

  // �������� �ʱ� ������
  const notices = [
    {
      title: "4�� ������ ���� �ȳ�",
      content: "4�� ������ ���� ������ 3�� 25�ϱ����Դϴ�.",
      createdAt: new Date("2024-03-25")
    },
    {
      title: "������ �̿� ���� ���� �ȳ�",
      content: "4������ ������ �̿� ������ ����˴ϴ�.",
      createdAt: new Date("2024-03-20")
    }
  ];

  for (const notice of notices) {
    await prisma.notice.create({ data: notice });
  }

  // ��� �ʱ� ������
  const contracts = [
    {
      period: "2023-01-01 ~ 2025-12-31",
      rent: 2000000,
      deposit: 20000000,
      status: "active",
      notes: "���� ���"
    },
    {
      period: "2020-01-01 ~ 2022-12-31",
      rent: 1800000,
      deposit: 18000000,
      status: "expired",
      notes: "���� ����"
    }
  ];

  for (const contract of contracts) {
    await prisma.contract.create({ data: contract });
  }

  console.log("Seed data created successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
  // ������ �ʱ� ������
  const maintenancePayments = [
    {
      month: "2024�� 3��",
      amount: 450000,
      paymentDate: new Date("2024-03-15"),
      status: "completed",
      details: "����: 150,000��, ����: 50,000��, ����: 100,000��, û��: 150,000��"
    },
    {
      month: "2024�� 2��",
      amount: 430000,
      paymentDate: new Date("2024-02-15"),
      status: "completed",
      details: "����: 140,000��, ����: 45,000��, ����: 95,000��, û��: 150,000��"
    }
  ];

  const rentPayments = [
    {
      dueDate: new Date("2024-04-01"),
      amount: 2000000,
      status: "pending"
    },
    {
      dueDate: new Date("2024-03-01"),
      amount: 2000000,
      paymentDate: new Date("2024-03-01"),
      status: "completed",
      receipt: "202403-rent.pdf"
    }
  ];

  for (const maintenance of maintenancePayments) {
    await prisma.maintenance.create({ data: maintenance });
  }

  for (const rent of rentPayments) {
    await prisma.rentPayment.create({ data: rent });
  }
    await prisma.$disconnect();
  });
