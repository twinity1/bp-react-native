'use strict';
import React, { PureComponent } from 'react';
import { Button, FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const image = require("./image.png");
h
export default class Performance extends PureComponent {
  state = {
    items: {},
  }

  componentWillMount() {
    this.start = new Date();
  }

  componentDidMount() {
    var list = [];

    for (var i = 0; i < 10000; i++) {
      list.push({
        text: "Text .... " + i.toString(),
        key: i.toString(),
      });
    }

    this.setState({
      items: list,
    });
  }

  removeEl(key) {
    var items = [...this.state.items];

    items.splice(key, 1);

    this.setState({
      items: items,
    })
  }

  render() {
    const {items} = this.state;

    console.log(new Date().getTime() - this.start.getTime());

    return (
      <>
        <FlatList
          data={items}
          renderItem={(item) => (
            <View style={{flexDirection: "row"}}>
              <Image style={{flex: 1}} source={image} />
              <Text style={{flex: 1}}>{item.item.text}</Text>
              <Button style={{flex: 1}} title="Tap me" onPress={ev => {
                this.removeEl(item.item.key)
              }}/>
            </View>
          )}
        />
      </>
    );
  }
}
