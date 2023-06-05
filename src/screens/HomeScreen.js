import React from 'react';
import { Text, View } from "react-native"
// import { Button, Stack } from '@rneui/themed';
// import { Button } from 'react-native-elements';
// import { Button as RNEButton, ButtonGroup, withTheme } from '@rneui/themed';
import { Button, ButtonGroup, withTheme } from '@rneui/themed';
import Stack from 'react-native-elements';
import NavigationActions from '../navigation/NavigationActions';




// function HomeScreen({ navigation }) {
const HomeScreen = ({ navigation }) => {

    const { navigateToScreen } = NavigationActions();

    const letsgo = (page) => {
        // navigation.navigate(page);
        // NavigationActions.navigateToScreen(page)
        // NavigationActions.na
        // NavigationActions().navigateToScreen(page)
        navigateToScreen(page)
    }

    return (
        // <View style={{ backgroundColor: 'black', flexGrow: 1, flex: 0.2, flexWrap: 'wrap', flexShrink: 2 }}>
        //     <Text style={{ fontSize: 45, color: 'purple', justifyContent: 'center' }}>
        //         Home Screen !
        //     </Text>

        //     <Button title="Solid" />
        //     <Button title="Outline" type="outline" />
        //     <Button title="Clear" type="clear" />

        //     <Stack row align="center" spacing={4}>
        //         <Button title="Solid" />
        //         <Button title="Outline" type="outline" />
        //         <Button title="Clear" type="clear" />
        //     </Stack>


        // </View>
        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ fontSize: 45, color: 'purple', justifyContent: 'center' }}>
                Home Screen !
            </Text>

            <Button title="Buttons Garden" onPress={() => navigation.navigate('AllButtons')} />
            {/* <Button title="KhataBook" onPress={() => navigation.navigate('KhataBook')} /> */}
            {/* <Button title="KhataBook" onPress={letsgo('KhataBook')} /> */}
            <Button title="KhataBook" onPress={() => letsgo('KhataBook')} />


            <Button
                title="Redux - Counter"
                buttonStyle={{ backgroundColor: 'yellow' }}
                containerStyle={{
                    // height: 60,
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                    borderRadius: 10
                }}
                titleStyle={{
                    fontSize: 20,
                    color: 'black',
                    marginHorizontal: 20,
                    fontWeight: '900'
                }}
                onPress={() => navigation.navigate('Redux Counter')}
            />

            <Button title="Dashboard - Button 2" onPress={() => letsgo('Dashboard')} />
            <Button title="Button 3" />
            <Button title="Button 4" />
            <Button title="Button 5" />
            <Button title="Button 6" />


        </View>
    )
}

export default HomeScreen;
