import React from  "react";
import {View,Text,StyleSheet,Button} from  "react-native";



const HomeScreen=({navigation})=>{
	return (

		<View style={style.container}>
			<Text>Hello from Home</Text>
			<Button title="Go to details"
			onPress={()=>navigation.navigate('Details')} />
		</View>


		)
}

export default HomeScreen;



const style=StyleSheet.create({

  container:{
    flex:1,
  },


});



