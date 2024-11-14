const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  // 관리자 계정 생성
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

  // 공지사항 초기 데이터
  const notices = [
    {
      title: "4월 관리비 납부 안내",
      content: "4월 관리비 납부 기한은 3월 25일까지입니다.",
      createdAt: new Date("2024-03-25")
    },
    {
      title: "주차장 이용 규정 변경 안내",
      content: "4월부터 주차장 이용 규정이 변경됩니다.",
      createdAt: new Date("2024-03-20")
    }
  ];

  for (const notice of notices) {
    await prisma.notice.create({ data: notice });
  }

  // 계약 초기 데이터
  const contracts = [
    {
      period: "2023-01-01 ~ 2025-12-31",
      rent: 2000000,
      deposit: 20000000,
      status: "active",
      notes: "현재 계약"
    },
    {
      period: "2020-01-01 ~ 2022-12-31",
      rent: 1800000,
      deposit: 18000000,
      status: "expired",
      notes: "정상 종료"
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
  // 관리비 초기 데이터
  const maintenancePayments = [
    {
      month: "2024년 3월",
      amount: 450000,
      paymentDate: new Date("2024-03-15"),
      status: "completed",
      details: "전기: 150,000원, 수도: 50,000원, 가스: 100,000원, 청소: 150,000원"
    },
    {
      month: "2024년 2월",
      amount: 430000,
      paymentDate: new Date("2024-02-15"),
      status: "completed",
      details: "전기: 140,000원, 수도: 45,000원, 가스: 95,000원, 청소: 150,000원"
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
