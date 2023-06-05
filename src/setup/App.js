// import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  AsyncStorage,
  Text,
  View,
} from 'react-native';
import AppRouter from '../navigation/AppRouter';
import { PaperProvider } from 'react-native-paper';
// import { AppRouter } from '../navigation/AppRouter';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';

const store = configureStore();

const App = () => {
  return (
    // <PaperProvider>
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeAreaView}>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor={'black'}
            translucent={false}
          />
          {/* <View style={{flex : 1,alignItems: 'center',justifyContent: 'center'}}>
        <Text style={{color: 'red', fontSize: 30}}> Text on App.tjs </Text>
      </View> */}
          <AppRouter />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;
