import React from 'react';
import { Button, Text, View } from "react-native"
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions/counterActions';
import Spacer from '../components/Spacer';

const ReduxCounterScreen = ({ count, increment, decrement }) => {
    return (
        <View>
            <Text style={{
                alignSelf: 'center',
                fontSize: 40,
                color: 'purple'
            }}>Count: {count}</Text>
            <Spacer />
            <Button title="Increment" onPress={increment} />
            <Spacer />
            <Button title="Decrement" onPress={decrement} />
        </View>
    );
}


const mapStateToProps = state => {
    return {
        count: state.count
    };
};

export default connect(mapStateToProps, { increment, decrement })(ReduxCounterScreen);

// export default ReduxCounterScreen;
