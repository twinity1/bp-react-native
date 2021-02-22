/**
 * Sample React Native AppInner
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import AppInner from './app/AppInner';

const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AppInner/>
      </SafeAreaView>
    </>
  );
};

export default App;
