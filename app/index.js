/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SampleScreen from './container/Sample';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Sample"
        onPress={() =>
          navigation.navigate('Sample', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Open Modal"
      />
      <Button onPress={() => navigation.toggleDrawer()} title="Open Menu" />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

function ModalScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

function CustomDrawerContent({navigation}) {
  return (
    <View style={{paddingTop: 200}}>
      <Button
        title="Go somewhere"
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          navigation.navigate('Sample');
        }}
      />
    </View>
  );
}

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Main() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
      <MainStack.Screen name="Sample" component={SampleScreen} />
    </MainStack.Navigator>
  );
}

function MainStackScreen() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Main" component={Main} options={{}} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="MyModal" component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
