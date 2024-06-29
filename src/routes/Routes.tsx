import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { HabitListScreen } from "../views/HabitListScreen"
import { HabitDetailScreen } from "../views/HabitDetailScreen"
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'

export type RootStackParamList = {
  HabitListScreen: undefined,
  HabitDetailScreen: {
    habitId: string
  }
}
export type StackTypes = NativeStackNavigationProp<RootStackParamList>

export function Routes() {

  const Stack = createNativeStackNavigator<RootStackParamList>()
  
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='HabitListScreen'>
          <Stack.Screen name="HabitListScreen" component={HabitListScreen} />
          <Stack.Screen name="HabitDetailScreen" component={HabitDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}