// NavigationActions.js

import { useNavigation } from '@react-navigation/native';

const NavigationActions = () => {
    const navigation = useNavigation();

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    const pushScreen = (screenName) => {
        navigation.push(screenName);
    };

    const popScreen = () => {
        navigation.pop();
    };

    const goBack = () => {
        navigation.goBack();
    };

    // Add more navigation actions as needed

    const resetStack = (screenName) => {
        navigation.reset({
            index: 0,
            routes: [{ name: screenName }],
        });
    };

    const replaceScreen = (screenName) => {
        navigation.replace(screenName);
    };

    return {
        navigateToScreen,
        pushScreen,
        popScreen,
        goBack,
        resetStack,
        replaceScreen,
    };
};

export default NavigationActions;
