import React from 'react';
import { Text, View } from "react-native"

const NotificationsScreen = () => {
    return (
        <View style={{backgroundColor : 'black',flexGrow : 0.5,flex : 0.2, flexWrap : 'wrap',flexShrink : 2}}>
        <Text style={{fontSize : 40, color : 'pink',justifyContent : 'center'}}>
            Notifications Screen !
        </Text>

        </View>
    )
}

export default NotificationsScreen;
