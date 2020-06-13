// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import StartingPage from "../screens/startingPage/startingPage";
// import Alarm from "../screens/alarm/alarm"

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="StartingPage"
//           component={StartingPage}
//           options={{ title: 'Welcome' }}
//         />
//         <Stack.Screen name="Alarm" component={Alarm} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default MyStack

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import StartingPage from "../screens/startingPage/startingPage";
import Alarm from "../screens/alarm/alarm";

const screens = {
    StartingPage:{
        screen: StartingPage
    },
    Alarm: {
        screen: Alarm
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
