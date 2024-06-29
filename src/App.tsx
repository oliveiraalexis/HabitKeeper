import React from 'react'
import { Routes } from './routes/Routes'

export type RootStackParamList = {
  HabitListScreen: undefined,
  HabitDetailScreen: {
    habitId: string
  }
}

function App(): React.JSX.Element {

  return (
    <Routes/>
  )
}

export default App;
