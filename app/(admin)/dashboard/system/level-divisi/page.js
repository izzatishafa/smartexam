import React from "react";
import LevelDivisi from "./ui/LevelDivisi";

export default async function Page() {
  const [levelResponse, divisiResponse] = await Promise.all([fetch("http://localhost:8001/api/v1/company/divisi", { cache: "no-store" }), fetch("http://localhost:8001/api/v1/company/level", { cache: "no-store" })]);

  const [levelData, divisiData] = await Promise.all([levelResponse.json(), divisiResponse.json()]);

  // console.log("Fetched data from API:", JSON.stringify(levelData, null, 2));

  // console.log("Fetched data from API:", JSON.stringify(divisiData, null, 2));

  const transformedLevelData = levelData.data.list.map((item) => ({
    id: item.id,
    label: item.label,
  }));

  const transformedDivisiData = divisiData.data.list.map((item) => ({
    id: item.id,
    label: item.label,
  }));



  return <LevelDivisi levelData={transformedLevelData} divisiData={transformedDivisiData} />;
}
