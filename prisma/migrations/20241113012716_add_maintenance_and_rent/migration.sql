-- CreateTable
CREATE TABLE "Maintenance" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "paymentDate" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'pending',
    "details" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Maintenance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RentPayment" (
    "id" SERIAL NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,
    "paymentDate" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'pending',
    "receipt" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RentPayment_pkey" PRIMARY KEY ("id")
);
