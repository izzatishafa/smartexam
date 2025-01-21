import SesiPage from "./ui/SesiPage";
import { calculateDuration, getDayRange } from "@/app/(admin)/dashboard/sesi/utils/dateHelpers";

export default async function Page() {
  const data = await fetch("http://localhost:8001/api/v1/company/sesi?page=1&total=10", { cache: "no-store" });
  const posts = await data.json();
  console.log("Fetched data from API:", JSON.stringify(posts, null, 2));

  // Transform data sesuai format yang dibutuhkan CardsList
  const transformedData = posts.data.list.map((item) => ({
    id: item.id,
    title: item.label,
    dateRange: `${new Date(item.timeFrom).toLocaleDateString()} - ${new Date(item.timeTo).toLocaleDateString()}`,
    // dateFrom: item.timeFrom,
    // dateTo: item.timeTo,
    duration: calculateDuration(item.timeFrom, item.timeTo),
    days: getDayRange(item.timeFrom, item.timeTo),
    time: `${new Date(item.timeFrom).toLocaleTimeString()} - ${new Date(item.timeTo).toLocaleTimeString()} WIB`,
    participants: 0, // Sesuaikan jika ada data participants dari API
    code: item.code,
    part: item.part,
    greeting: item.greeting,
  }));

  console.log("Transformed data:", transformedData);

  return <SesiPage initialData={transformedData} metadata={posts.data.metadata} />;
}

// Fungsi helper untuk menghitung durasi
// function calculateDuration(timeFrom, timeTo) {
//   const start = new Date(timeFrom);
//   const end = new Date(timeTo);
//   const diffInDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
//   return `${diffInDays} Hari`;
// }

// // Fungsi helper untuk mendapatkan range hari
// function getDayRange(timeFrom, timeTo) {
//   const start = new Date(timeFrom);
//   const end = new Date(timeTo);
//   const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
//   return `${days[start.getDay()]} - ${days[end.getDay()]}`;
// }
