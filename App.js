import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import { TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import SplashScreen from './src/screens/Splash/splash_screen';
import LoginScreen from './src/screens/Login/login_screen';


const Stack = createStackNavigator();

const App = () => {
  return (
    
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            transitionSpec: {
              open: TransitionSpecs.RevealFromBottomAndroidSpec,
              close: TransitionSpecs.RevealFromBottomAndroidSpec,
            },
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
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
       
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
