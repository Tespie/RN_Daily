import React from 'react';
import { Text, View } from "react-native"

const SettingsScreen = () => {
    return (
        <View style={{borderColor : 'red',borderWidth : 5,backgroundColor : 'black',flexGrow : 0.5,flex : 0.2, flexWrap : 'wrap',flexShrink : 2}}>
        
        <Text style={{fontSize : 35, color : 'brown',justifyContent : 'center'}}>
            Settings Screen !
        </Text>

        </View>
    )
}

export default SettingsScreen;
