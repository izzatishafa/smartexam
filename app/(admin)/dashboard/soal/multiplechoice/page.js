import React from 'react'
import MultiplechoicePage from './ui/MultiplechoicePage'

export default async function Page (){
  const data = await fetch("http://localhost:8001/api/v1/company/soal/multiple_choice", { cache: "no-store" });
  const posts = await data.json();
  console.log("Fetched data from API:", JSON.stringify(posts, null, 2));

  const transformedData = posts.data.list.map((item) => ({
    id: item.id,
    jenisSoal: item.jenisSoal,
    sulit: item.sulit,
    nomor: item.nomor,
    question: item.question,
    answer: item.answer,
    parentNomor: item.parentNomor,
    postQuestion: item.postQuestion,
    display: item.display,
    groupName: item.groupName,
    refKesulitanId: item.refKesulitanId,
    multiplechoiceStoryCode: item.multiplechoiceStoryCode,
    multipleCHoiceQUestionCategoryId: item.multipleCHoiceQUestionCategoryId,
  }));
  return <MultiplechoicePage initialData={transformedData} metadata={posts.data.metadata} />;
}

