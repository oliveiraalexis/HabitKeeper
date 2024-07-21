import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { HabitListScreen } from "../views/HabitListScreen"
import { HabitDetailScreen } from "../views/HabitDetailScreen"
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from "../views/LoginScreen"

export type RootStackParamList = {
  LoginScreen: undefined,
  HabitListScreen: {
    userId: string
  },
  HabitDetailScreen: {
    userId: string,
    habitId: string
  }
}
export type StackTypes = NativeStackNavigationProp<RootStackParamList>

export function Routes() {

  const Stack = createNativeStackNavigator<RootStackParamList>()
  
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='LoginScreen'>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="HabitListScreen" component={HabitListScreen} />
          <Stack.Screen name="HabitDetailScreen" component={HabitDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}