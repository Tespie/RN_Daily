import React from 'react';
import { View } from 'react-native';

const Spacer = ({ size }) => {
    const spacerSize = size || 10; // Default size is 10

    return <View style={{ height: spacerSize }} />;
    // return <View style={{ height: 10 }}></View>
};

export default Spacer;


