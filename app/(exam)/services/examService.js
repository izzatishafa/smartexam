export const fetchHexacoQuestions = async () => {
  try {
    const response = await fetch(
      "https://many-weekly-fly.ngrok-free.app/api/v1/participant/exam/quiz_soal",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: "english",
        }),
      }
    );

    const data = await response.json();
    console.log(data);

    if (data.status === 200) {
      return data.rows.soal;
    }
    throw new Error("Failed to fetch Hexaco questions");
  } catch (error) {
    console.error("Error fetching Hexaco questions:", error);
    throw error;
  }
};
