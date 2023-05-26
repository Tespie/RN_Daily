import React from 'react';
import { Button, Text, View } from "react-native"

const DashboardScreen = ({navigation}) => {
    return (
        <View style={{backgroundColor : 'black',flexGrow : 0.5,flex : 0.2, flexWrap : 'wrap',flexShrink : 2}}>
        
        <Text style={{fontSize : 45, color : 'pink',justifyContent : 'center'}}>
            Dashboard Screen !
        </Text>

        <Button title='go' 
        onPress={()=>navigation.navigate('KhataBook')}
        />

        </View>
    )
}

export default DashboardScreen;
