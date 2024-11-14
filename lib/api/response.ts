import { NextResponse } from "next/server";

export class ApiError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

export async function handleApiRoute(handler: () => Promise<NextResponse>) {
  try {
    const response = await handler();
    return response || NextResponse.json({ error: "No response data" }, { status: 500 });
  } catch (error) {
    console.error('API Error:', error);

    if (error instanceof ApiError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode }
      );
    }

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}