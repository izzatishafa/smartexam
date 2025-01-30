import React from "react";
import FormasiPage from "./ui/FormasiPage";

export default async function Page() {
  const data = await fetch("http://localhost:8001/api/v1/company/formasi", { cache: "no-store" });
  const posts = await data.json();
  console.log("Fetched data from API:", JSON.stringify(posts, null, 2));

  const transformedData = posts.data.list.map((item) => ({
    id: item.id,
    label: item.label,
    code: item.code,
    posisi: item.posisi,
    tingkatan: item.tingkatan,
  }));
  return <FormasiPage initialData={transformedData} metadata={posts.data.metadata} />;
}
