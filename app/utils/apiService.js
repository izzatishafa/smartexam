import https from "https";
import axios, { isAxiosError } from "axios";
const agent = new https.Agent({
  rejectUnauthorized: false, // Disable certificate validation
});
const apiService = axios.create({
  // httpsAgent:agent,
  baseURL: process.env.NEXT_BACKEND_API_HOST,
  // strictSSL: false,
  timeout: 980000,
});
export { isAxiosError };
export default apiService;
