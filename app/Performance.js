'use strict';
import React, { PureComponent } from 'react';
import { Button, FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class Performance extends PureComponent {
  state = {
    items: {},
  }

  componentDidMount() {
    var list = [];

    for (var i = 0; i < 10000; i++) {
      list.push({
        text: "Text .... " + i.toString(),
        key: i,
      });
    }

    this.setState({
      items: list,
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
  }

  render() {
    const {items} = this.state;

    return (
      <>
        <FlatList
          data={items}
          renderItem={(item) => (
            <View style={{flexDirection: "row"}}>
              <Image style={{flex: 1}} source={require("./image.png")} />
              <Text style={{flex: 1}}>{item.item.text}</Text>
              <Button style={{flex: 1}} title="Tap me"/>
            </View>
          )}
        />
      </>
    );
  }
}
