// utils/dateHelpers.js
export const calculateDuration = (timeFrom, timeTo) => {
  const start = new Date(timeFrom);
  const end = new Date(timeTo);
  const diffInDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return `${diffInDays} Hari`;
};

export const getDayRange = (timeFrom, timeTo) => {
  const start = new Date(timeFrom);
  const end = new Date(timeTo);
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return `${days[start.getDay()]} - ${days[end.getDay()]}`;
};
