'use strict';
import React, { PureComponent } from 'react';
import { Button, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RNCamera } from 'react-native-camera';

export default class Camera extends PureComponent {
  state = {
    cameraType: 'back',
    image: null,
  }

  changeCamera(type) {
    this.setState({
      cameraType: type,
    })
  }

  render() {
    const {cameraType, image} = this.state;

    return (
      <>
        <RNCamera
          type={cameraType}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          style={{
             flex: 5,
          }}
          ref={ref => {
            this.camera = ref
          }}
        />

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
          <Button style={{flex: 1}} title={"Front"} onPress={this.changeCamera.bind(this, 'front')} />
          <Button style={{flex: 1}} title={"Capture"} onPress={this.capture.bind(this)} />
          <Button style={{flex: 1}} title={"Back"} onPress={this.changeCamera.bind(this, 'back')} />
        </View>

        <Modal
        visible={image !== null}
        transparent={false}
        >
          <SafeAreaView style={{flex: 5}}>
            <Button style={{flex: 1}} title={"Take another"} onPress={() => this.setState({image: null})} />
            <Image style={{flex: 1}} source={{uri: image}} />
          </SafeAreaView>
        </Modal>
      </>
    );
  }

  async capture() {
    const options = { quality: 1, base64: true };
    const data = await this.camera.takePictureAsync(options);

    this.setState({
      image: data.uri,
    })
  };
}
