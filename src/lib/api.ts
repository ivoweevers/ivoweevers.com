import { NextResponse } from "next/server";
import type { ZodType } from "zod";

interface HandleApiRouteOptions<T> {
  request: Request;
  schema: ZodType<T>;
  handler: (data: T) => Promise<void>;
  errorMessage: string;
}

export async function handleApiRoute<T>({
  request,
  schema,
  handler,
  errorMessage,
}: HandleApiRouteOptions<T>) {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.error.issues[0].message },
        { status: 400 }
      );
    }

    await handler(result.data);

    return NextResponse.json({ success: true, message: "Success" });
  } catch (error) {
    console.error(errorMessage, error);
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}
