import React, { useEffect, useState } from "react"

export function useHabit() {

  const userId = '6649476dac7f48df621de7af'
  const [habits, setHabits] = useState([])

  useEffect(() => {
    getHabits(userId)
  }, [])

  function getHabits(userId: string) {
    fetch(`http://192.168.1.12:3000/user/${userId}/habits`)
      .then(res => res.json())
      .then((data) => setHabits(data))
      .catch((error) => console.log('error:',error.message))
  }

  function getHabit(userId: string, habitId: string) {
    fetch(`http://192.168.1.12:3000/${userId}//habit/${habitId}`)
      .then(res => res.json())
      .then((data) => setHabits(data))
      .catch((error) => console.log('error:',error.message))
  }

  return {habits, getHabits, getHabit}
}