import SesiPage from "./ui/SesiPage";
import { calculateDuration, getDayRange } from "@/app/(admin)/dashboard/sesi/utils/dateHelpers";

export default async function Page() {
  try {
    const response = await fetch("http://localhost:8001/api/v1/company/sesi?page=1&total=10", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    console.log("Fetched data from API:", JSON.stringify(posts, null, 2));

    // Periksa struktur data yang benar
    if (!posts?.list?.sesiRes) {
      console.error("Data structure is invalid:", posts);
      return <div>Data tidak tersedia</div>;
    }

    const transformedData = posts.list.sesiRes.map((item) => ({
      id: item.id,
      title: item.label,
      dateRange: `${new Date(item.timeFrom).toLocaleDateString()} - ${new Date(item.timeTo).toLocaleDateString()}`,
      duration: calculateDuration(item.timeFrom, item.timeTo),
      days: getDayRange(item.timeFrom, item.timeTo),
      time: `${new Date(item.timeFrom).toLocaleTimeString()} - ${new Date(item.timeTo).toLocaleTimeString()} WIB`,
      participants: item.participantCount || 0,
      code: item.code,
      part: item.part,
      greeting: item.greeting,
    }));

    console.log("Transformed data:", transformedData);
    return <SesiPage initialData={transformedData} metadata={posts.metadata} />;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Terjadi kesalahan saat mengambil data</div>;
  }
}