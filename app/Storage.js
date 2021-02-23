'use strict';
import React, { PureComponent } from 'react';
import {
  Button,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage extends PureComponent {
  state = {
    text: '',
  }

  save() {
    AsyncStorage.setItem('text', this.state.text);
  }

  async load() {
    this.setState({
      text: await AsyncStorage.getItem('text'),
    });
  }

  render() {
    const {text} = this.state;

    return (
      <>
        <View style={{flex: 1, flexDirection: "row", margin: 16}}>
          <TextInput
            placeholder="Type here..."
            textContentType="none"
            style={{flex: 1, borderWidth: 1,  borderRadius: 12, paddingLeft: 10}}
            value={text}
            onChangeText={(text) => this.setState({text: text})}
          />
          <Button
            style={{flex: 1}}
            title="Save"
            onPress={this.save.bind(this)}
          />
        </View>
        <View style={{flex: 1}}>
          <Button title="Load text" onPress={this.load.bind(this)} />
        </View>
      </>
    );
  }
}
