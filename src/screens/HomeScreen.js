import React from 'react';
import { Text, View } from "react-native"

const HomeScreen = () => {
    return (
        <View style={{backgroundColor : 'black',flexGrow : 0.5,flex : 0.2, flexWrap : 'wrap',flexShrink : 2}}>
        <Text style={{fontSize : 45, color : 'purple',justifyContent : 'center'}}>
            Home Screen !
        </Text>
        </View>
    )
}

export default HomeScreen;
