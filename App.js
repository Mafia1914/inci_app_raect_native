import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store'; 
import SplashScreen from './src/screens/Splash/splash_screen';
import LoginScreen from './src/screens/Login/login_screen';
import HomScreen from './src/screens/Home/home'
import SignupScreen from './src/screens/signup/signup';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
        
            }}
          >
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
            name="home"
            component={HomScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;




