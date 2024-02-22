export function getKSTDate() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const kstOffset = 9 * 60 * 60000;
  return new Date(utc + kstOffset);
}

export function getTodayStartKST() {
  const todayKST = getKSTDate();
  todayKST.setHours(0, 0, 0, 0);
  return todayKST;
}
export function getTomorrowStartKST() {
  const todayKST = getKSTDate();
  const tomorrowKST = new Date(todayKST);
  tomorrowKST.setDate(todayKST.getDate() + 1);
  tomorrowKST.setHours(0, 0, 0, 0);
  return tomorrowKST;
}
