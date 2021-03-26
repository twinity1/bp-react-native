'use strict';
import React, { PureComponent } from 'react';
import { Button, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Geolocation from '@react-native-community/geolocation';

export default class Geo extends PureComponent {
  state = {
    coords: {latitude: 0, longitude: 0},
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      Geolocation.getCurrentPosition(position => {
        this.setState({
          coords: position.coords,
        })
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
  }


  render() {
    const {coords} = this.state;

    return (
      <>
        <Text>Lat {coords.latitude}</Text>
        <Text>Lng {coords.longitude}</Text>
      </>
    );
  }
}
