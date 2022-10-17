import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Gradient from './components/Grandient/Gradient';
import logo from "./assets/LogoSangueBom.png";
import Login from './View/Login';
import SignUp from './View/SignUp';
import Menu from './View/Menu';
import Tabs from './View/Tab';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={
        {
          headerShown: false,
          cardStyle: {
            backgroundColor: '#fff',
          },
        }

      }>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Menu" component={Tabs} />
       
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

