const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function getRandomDay() {
  const randomDay = Math.floor(Math.random() * days.length);

  return days[randomDay];
}

export function getRandomNumber() {
  return Math.round(Math.random() * 100);
}
