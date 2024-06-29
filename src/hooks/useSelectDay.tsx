import { HabitProps } from "../controllers/useHabit"
import { useHabit } from "../controllers/useHabit"

export function useSelectDay(){

  const {updateHabit} = useHabit()

  function formatDate(timestamp: number){
    return `${new Date(timestamp).getFullYear()}-${new Date(timestamp).getMonth()+1}-${new Date(timestamp).getDate()}`
  }
  
  function dateExistInArray(date: number, trackedDays: string[]){
  
    if (trackedDays.length > 0){
      const result = trackedDays.find(el => new Date(parseInt(el)).getDate() == new Date(date).getDate())
      return result != undefined
    }
    return false
  }

  async function updateHabitTracker(habit: HabitProps, date: number, isChecked: boolean, setIsChecked: (v: boolean) => void){
    let newHabit = {...habit}

    if (isChecked){
      newHabit.trackedDays = habit.trackedDays.filter((value) => {
        return new Date(parseInt(value)).getDate() != new Date(date).getDate()
      })
    } else {
      const newTrackedDay = new Date(formatDate(date)).getTime() + new Date(formatDate(date)).getTimezoneOffset()*60000
      newHabit.trackedDays.push(newTrackedDay.toString())
    }
    await updateHabit(habit._id, newHabit)
    setIsChecked(!isChecked)
  }


  return {formatDate, dateExistInArray, updateHabitTracker}
}