export function useLast4Days() {

  const currentDay = new Date()
  
  return [
    currentDay.getTime() - currentDay.getTimezoneOffset()*60000,
    currentDay.setDate(currentDay.getDate() - 1) - currentDay.getTimezoneOffset()*60000,
    currentDay.setDate(currentDay.getDate() - 1) - currentDay.getTimezoneOffset()*60000,
    currentDay.setDate(currentDay.getDate() - 1) - currentDay.getTimezoneOffset()*60000,
  ]
}