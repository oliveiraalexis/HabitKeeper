import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { HabitListScreen } from "../views/HabitListScreen"
import { HabitDetailScreen } from "../views/HabitDetailScreen"
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from "../views/LoginScreen"
import { RegistrationScreen } from "../views/RegistrationScreen"
import { ProfileSettingScreen } from "../views/ProfileSettingScreen"

export type RootStackParamList = {
  LoginScreen: undefined,
  RegistrationScreen: undefined,
  HabitListScreen: {
    userId: string
  },
  HabitDetailScreen: {
    userId: string,
    habitId: string
  },
  ProfileSettingScreen: {
    userId: string
  }
}
export type StackTypes = NativeStackNavigationProp<RootStackParamList>

export function Routes() {

  const Stack = createNativeStackNavigator<RootStackParamList>()
  
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='LoginScreen'>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
          <Stack.Screen name="HabitListScreen" component={HabitListScreen} />
          <Stack.Screen name="HabitDetailScreen" component={HabitDetailScreen} />
          <Stack.Screen name="ProfileSettingScreen" component={ProfileSettingScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}