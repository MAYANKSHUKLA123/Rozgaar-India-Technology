import * as React from "react";
import {View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from  "@react-navigation/stack";
import HomeScreen from  "./screens/home";
import Details from  "./screens/details";


const Stack=createStackNavigator();

const App=()=>{
  return (

<NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={Details} />

    </Stack.Navigator>

</NavigationContainer>


    );
}
 
export default App;

