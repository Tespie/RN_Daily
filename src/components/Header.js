import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({ title, leftIcon, rightIcon, onLeftIconClick, onRightIconClick }) => {
    return (
        <View style={styles.container}>
            {leftIcon && (
                <TouchableOpacity onPress={onLeftIconClick} style={styles.iconContainer}>
                    <Icon name={leftIcon} size={24} color="black" />
                </TouchableOpacity>
            )}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            {rightIcon && (
                <TouchableOpacity onPress={onRightIconClick} style={styles.iconContainer}>
                    <Icon name={rightIcon} size={24} color="black" />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 60,
        backgroundColor: 'lightgray',
    },
    iconContainer: {
        paddingHorizontal: 8,
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Header;
