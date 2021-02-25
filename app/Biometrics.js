'use strict';
import React, { PureComponent } from 'react';
import { Button, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ReactNativeBiometrics from 'react-native-biometrics'

export default class Biometrics extends PureComponent {
  state = {
    success: null
  }

  componentDidMount() {
    ReactNativeBiometrics.simplePrompt({
      promptMessage: 'Testing..'
    }).then((result) => {
      this.setState({
        success: result.success,
      })
    })
  }

  getMessage(success) {
    return success ? 'Success' : 'Failed';
  }

  render() {
    const {success} = this.state;

    if (success !== null) {
      return (
        <>
          <Text>{this.getMessage(success)}</Text>
        </>
      );
    }

    return (<></>);
  }

}
