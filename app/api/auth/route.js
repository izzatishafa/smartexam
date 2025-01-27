import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch("http://localhost:8001/api/v1/company/auth/login");
        return NextResponse.json({ message: "Hello World" });
    } catch (error) {
        
    }
  return Response.json({ message: "Hello World" });
}
