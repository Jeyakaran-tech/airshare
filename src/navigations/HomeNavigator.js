import React from "react"
import { Text,Image } from "react-native"
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native-web";

const Contacts = ()=> {
    return ( 
    <View>
        <Text>
            Hi from HomeNavigator
        </Text>
    </View>

    );
};
const HomeNavigator=()=> {
    const HomeStack = createStackNavigator();
    return (
    <HomeStack.Navigator initialRouteName="Contact">
        <HomeStack.Screen name = "Contact" component={Contacts}></HomeStack.Screen>
    </HomeStack.Navigator>
    );
};

export default HomeNavigator;