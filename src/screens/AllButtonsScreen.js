// import React from 'react';
// import { Text, View } from "react-native"
// // import { Button, Stack } from '@rneui/themed';
// import { Button } from 'react-native-elements';
// import Stack from 'react-native-elements';



// const AllButtonsScreen = ({ navigation }) => {
//     return (

//     )
// }

// export default AllButtonsScreen;


import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';
// import { Icon } from 'react-native-elements';
// import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient'

// type ButtonsComponentProps = {};

// const Buttons: React.FunctionComponent<ButtonsComponentProps> = () => {
const AllButtonsScreen = () => {
    // const [selectedIndex, setSelectedIndex] = useState(0);
    // const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

    return (

        <ScrollView>
            <View style={styles.contentView}>
                <Text style={styles.subHeader}>Basic Buttons</Text>
                <View style={styles.buttonsContainer}>
                    <Button
                        title={'React Native Elements'}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                    />
                    <Button
                        title="Basic Button"
                        buttonStyle={{
                            backgroundColor: 'rgba(78, 216, 289, 1)',
                            borderRadius: 3,
                        }}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                    />
                    <Button
                        title="Dark"
                        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        titleStyle={{ color: 'white', marginHorizontal: 20 }}
                    />

                    <Button
                        title="Log in"
                        loading={false}
                        loadingProps={{ size: 'small', color: 'white' }}
                        buttonStyle={{
                            backgroundColor: 'rgba(111, 202, 186, 1)',
                            borderRadius: 5,
                        }}
                        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                        containerStyle={{
                            marginHorizontal: 50,
                            height: 50,
                            width: 200,
                            marginVertical: 10,
                        }}
                        onPress={() => console.log('aye')}
                    />
                    <Button
                        title="Secondary"
                        buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }}
                        containerStyle={{
                            height: 40,
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        titleStyle={{
                            color: 'white',
                            marginHorizontal: 20,
                        }}
                    />
                    <Button
                        title="Warning"
                        containerStyle={{
                            height: 40,
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        buttonStyle={{ backgroundColor: 'rgba(255, 193, 7, 1)' }}
                        titleStyle={{
                            color: 'white',
                            marginHorizontal: 20,
                        }}
                    />
                    <Button
                        title="Danger"
                        buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
                        containerStyle={{
                            height: 40,
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        titleStyle={{ color: 'white', marginHorizontal: 20 }}
                    />
                    <Button
                        title="Request an agent"
                        titleStyle={{ fontWeight: '500' }}
                        buttonStyle={{
                            backgroundColor: 'rgba(199, 43, 98, 1)',
                            borderColor: 'transparent',
                            borderWidth: 0,
                        }}
                        containerStyle={{
                            width: 200,
                            height: 45,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                    />
                </View>

                <Text style={styles.subHeader}>Rounded Buttons</Text>
                <View style={styles.buttonsContainer}>
                    <Button
                        title="LOG IN"
                        buttonStyle={{
                            backgroundColor: 'black',
                            borderWidth: 2,
                            borderColor: 'white',
                            borderRadius: 30,
                        }}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        titleStyle={{ fontWeight: 'bold' }}
                    />
                    <Button
                        title="HOME"
                        // icon={{
                        //     name: 'home',
                        //     type: 'font-awesome',
                        //     size: 15,
                        //     color: 'white',
                        // }}
                        // iconRight
                        icon={() => (<Icon
                            style={{ backgroundColor: 'transparent', alignSelf: 'center' }}
                            name={'home'}
                            // onPress={rest.onIconPress} 
                            size={20}
                            color="gray" />)}
                        iconContainerStyle={{ marginRight: 10 }}
                        titleStyle={{ fontWeight: '700' }}
                        buttonStyle={{
                            backgroundColor: 'rgba(90, 154, 230, 1)',
                            borderColor: 'transparent',
                            borderWidth: 0,
                            borderRadius: 30,
                        }}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                    />
                    <Button
                        title="PROFILE"
                        icon={{
                            name: 'user',
                            type: 'font-awesome',
                            size: 15,
                            color: 'white',
                        }}
                        iconRight
                        iconContainerStyle={{ marginLeft: 10 }}
                        titleStyle={{ fontWeight: '700' }}
                        buttonStyle={{
                            backgroundColor: 'rgba(199, 43, 98, 1)',
                            borderColor: 'transparent',
                            borderWidth: 0,
                            borderRadius: 30,
                        }}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                    />
                    <Button
                        title={<CustomTitle />}
                        // title="Issue E Button"
                        titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
                        ViewComponent={LinearGradient} // Don't forget this!
                        linearGradientProps={{
                            colors: ['#FF9800', '#3f5efb'],
                            start: { x: 0, y: 0.5 },
                            end: { x: 1, y: 0.5 },
                        }}
                        buttonStyle={{
                            borderWidth: 0,
                            borderColor: 'transparent',
                            borderRadius: 20,
                        }}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        icon={{
                            name: 'arrow-right',
                            type: 'font-awesome',
                            size: 15,
                            color: 'white',
                        }}
                        // iconRight
                        iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
                    />



                </View>

                <Text style={styles.subHeader}>Light Buttons</Text>
                <View style={styles.buttonsContainer}>
                    <Button
                        title="SIGN UP"
                        disabled={true}
                        titleStyle={{ fontWeight: '700' }}
                        buttonStyle={{
                            backgroundColor: 'rgba(92, 99,216, 1)',
                            borderColor: 'transparent',
                            borderWidth: 0,
                            borderRadius: 5,
                        }}
                        containerStyle={{
                            width: 200,
                            height: 45,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                    />
                    <Button
                        title="Outline Button"
                        buttonStyle={{
                            borderColor: 'rgba(78, 116, 289, 1)',
                        }}
                        type="outline"
                        titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                    />
                    <Button
                        title="Raised Button"
                        buttonStyle={{
                            borderColor: 'rgba(78, 116, 289, 1)',
                        }}
                        type="outline"
                        raised
                        titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                    />
                    <Button
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        title="Clear Button"
                        type="clear"
                        titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                    />
                    <Button
                        title="Light"
                        buttonStyle={{
                            backgroundColor: 'rgba(244, 244, 244, 1)',
                            borderRadius: 3,
                        }}
                        containerStyle={{
                            height: 40,
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        titleStyle={{ marginHorizontal: 20, color: 'black' }}
                    />
                </View>

                <Text style={styles.subHeader}>Loading Buttons</Text>
                <View style={styles.buttonsContainer}>
                    <Button
                        title="HOME"
                        loading
                        titleStyle={{ fontWeight: '700' }}
                        buttonStyle={{
                            backgroundColor: 'rgba(111, 202, 186, 1)',
                            borderColor: 'transparent',
                            borderWidth: 0,
                            borderRadius: 5,
                            paddingVertical: 5,
                        }}
                        containerStyle={{
                            width: 200,
                            height: 40,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                    />
                    <Button
                        title="SIGN UP"
                        loading={true}
                        loadingProps={{
                            size: 'small',
                            color: 'rgba(111, 202, 186, 1)',
                        }}
                        titleStyle={{ fontWeight: '700' }}
                        buttonStyle={{
                            backgroundColor: 'rgba(92, 99,216, 1)',
                            borderColor: 'transparent',
                            borderWidth: 0,
                            borderRadius: 5,
                            paddingVertical: 10,
                        }}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                    />
                </View>
            </View>
        </ScrollView>

    );
};

const CustomTitle = () => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Gradient Button</Text>
            <Text style={{ fontStyle: 'italic', fontSize: 20 }}>
                Minister of Magic
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
    },
    subHeader: {
        backgroundColor: "#2089dc",
        color: "white",
        textAlign: "center",
        paddingVertical: 5,
        marginBottom: 10
    }
});

// export default withTheme(Buttons, '');
export default AllButtonsScreen;

