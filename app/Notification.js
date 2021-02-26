'use strict';
import React, { PureComponent } from 'react';
import { Platform, Button, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Notifications } from 'react-native-notifications';

export default class Notification extends PureComponent {


  componentDidMount() {
    Notifications.registerRemoteNotifications()

    const now = new Date();

    const after10s = new Date();
    after10s.setTime(now.getTime() + 10000);

    if (Platform.OS === 'ios') {
      Notifications.postLocalNotification({
        fireDate: after10s.toISOString(),
        body: "Local notification!",
        title: "Local Notification Title",
        userInfo: { }
      });
    } else if (Platform.OS === 'android') {
      Notifications.postLocalNotification({
        fireDate: after10s.toISOString(),
        body: "Local notification!",
        title: "Local Notification Title",
      });
    }

  }


  render() {
    return (
      <>
        <Text>Notification will be dispatched in 10 seconds (unless it's Android - fireDate doesn't work there)</Text>
      </>
    );
  }
}
