import React from 'react'
import { StyleSheet } from 'react-native'
import { HabitListScreen } from './views/HabitListScreen'
import { HabitDetailScreen } from './views/HabitDetailScreen'
import { NavigationContainer } from '@react-navigation/native'
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'

type StackNavigation = {
  HabitListScreen: undefined,
  HabitDetailScreen: undefined
}
export type StackTypes = NativeStackNavigationProp<StackNavigation>

function App(): React.JSX.Element {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='ListsScreen'>
          <Stack.Screen name="HabitListScreen" component={HabitListScreen} />
          <Stack.Screen name="HabitDetailScreen" component={HabitDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161927',
    flex: 1,
    padding: 10
  }
})

export default App;
