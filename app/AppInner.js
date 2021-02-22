
import React from 'react';

import { Button, Modal, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";
import Camera from "./Camera";

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
      </>
    )
  }
}
