import React from 'react';
import { Button, Text, View } from "react-native"
import NavigationActions from '../navigation/NavigationActions';
import Spacer from '../components/Spacer';

const DashboardScreen = ({ navigation }) => {

    // const { goBack } = NavigationActions()
    // const { na } = NavigationActions();
    const na = NavigationActions();
    return (
        <View style={{ backgroundColor: 'black', flexGrow: 0.5, flex: 0.2, flexWrap: 'wrap', flexShrink: 2 }}>

            <Text style={{ fontSize: 45, color: 'pink', justifyContent: 'center' }}>
                Dashboard Screen !
            </Text>
            <Button title='go to KhataBook'
                onPress={() => navigation.navigate('KhataBook')}
            />
            <Spacer />

            <Button title='go Back'
                // onPress={() => goBack()}
                onPress={() => na.goBack()}
            />
            <Spacer size={20} />

            <Button title='replace with Notifications'

                // onPress={() => goBack()}
                onPress={() => na.navigateToScreen('Notifications')}
            />

        </View>
    )
}

export default DashboardScreen;
