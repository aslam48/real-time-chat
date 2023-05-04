import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login'
import Chat from './screens/Chat';
import Signup from './screens/Signup'

const Stack = createNativeStackNavigator();

const ChatStack = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShow: false}}>
        <Stack.Screen name="Signup" component={Signup} />
        {/* <Stack.Screen name="Login" component={Login} /> */}
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

function RootNavigation () {
  return (
    <NavigationContainer>
      <ChatStack/>
    </NavigationContainer>
  )
}


export default function App() {
  return <RootNavigation/>
}