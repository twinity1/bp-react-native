
import React from 'react';

import { Button, Modal, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";
import Camera from "./Camera";
import Storage from "./Storage";
import Biometrics from "./Biometrics";

export default class AppInner extends React.Component {
  state = {
    currentModal: null,
  }

  constructor(props: P, context: any, state: { currentModal: any }) {
    super(props, context);
  }

  showModal(modal) {
    this.setState({
      currentModal: modal,
    })
  }

  render() {
    const {currentModal} = this.state;

    return (
      <>
          <Button title="Camera" onPress={this.showModal.bind(this, 'camera')} />
          <Modal
            presentationStyle="pageSheet"
            animationType="slide"
            transparent={false}
            visible={currentModal === 'camera'}>
            <SafeAreaView style={{width: '100%', height: '100%'}}>
              <Button onPress={this.showModal.bind(this, null)} title="Close" />
              <Camera/>
            </SafeAreaView>
          </Modal>
          <Button title="Storage" onPress={this.showModal.bind(this, 'storage')} />
          <Modal
            presentationStyle="pageSheet"
            animationType="slide"
            transparent={false}
            visible={currentModal === 'storage'}>
            <SafeAreaView style={{width: '100%', height: '100%'}}>
              <Button onPress={this.showModal.bind(this, null)} title="Close" />
              <Storage />
            </SafeAreaView>
          </Modal>
          <Button title="Biometrics" onPress={this.showModal.bind(this, 'biometrics')} />
          <Modal
            presentationStyle="pageSheet"
            animationType="slide"
            transparent={false}
            visible={currentModal === 'biometrics'}>
            <SafeAreaView style={{width: '100%', height: '100%'}}>
              <Button onPress={this.showModal.bind(this, null)} title="Close" />
              <Biometrics />
            </SafeAreaView>
          </Modal>
      </>
    )
  }
}
