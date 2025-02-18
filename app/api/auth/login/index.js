// app/api/auth/login/route.js
import axios from "axios";

export async function POST(req) {
  const { email, password } = await req.json();
  const response = await axios.post(
    "https://many-weekly-fly.ngrok-free.app/api/v1/participant/auth",
    { email, password }
  );
  return Response.json(response.data);
}
