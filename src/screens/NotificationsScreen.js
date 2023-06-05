import React from 'react';
import { Text, View } from "react-native"
import Header from '../components/Header';

const NotificationsScreen = () => {
    return (
        <View style={{ backgroundColor: 'black', flexGrow: 0.5, flex: 0.2, flexWrap: 'wrap', flexShrink: 2 }}>

            <Header
                leftIcon="arrow-back-outline"
                rightIcon="notifications-outline"
                title='custom header'
            // onLeftIconClick={handleLeftIconClick}
            // onRightIconClick={handleRightIconClick}
            />

            <Text style={{ fontSize: 40, color: 'pink', justifyContent: 'center' }}>
                Notifications Screen !
            </Text>

        </View>
    )
}

export default NotificationsScreen;
