import { sendVerificationEmail } from "@/utils/sendEmail"
import { NextRequest } from "next/server"

export async function POST(request : NextRequest) {
  const { name, email, message } = await request.json()
  const res = await sendVerificationEmail(email, name, message)
  return Response.json(res)
}