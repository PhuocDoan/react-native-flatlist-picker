# react-native-flatlist-picker
A cross-platform (iOS / Android), selector/picker component for React Native that is highly customizable and supports sections.

## Demo

<img src="https://github.com/PhuocDoan/react-native-flatlist-picker/blob/master/demo.gif" />

## Install

```sh
npm i react-native-flatlist-picker --save
```

## Usage

You can use this component to create piker

Support custom style, PickerItem, PickerCoponent, Animation

See this Example for an example how to use this component.

Deverlop from react-native-modal-dropdown

```jsx

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';
import FlatListPicker from 'react-native-flatlist-picker';

[..]
const dataPicker = [
  { value: 'Value 1', key: 'key1' },
  { value: 'Value 2', key: 'key2' },
  { value: 'Value 3', key: 'key3' },
  { value: 'Value 4', key: 'key4' }
]

class Example extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    // To show or hide your picker component
    // this.PickerFlatlist.showPickerList()
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => {
          this.FlatListPicker.showPickerList()
          // this.FlatListPicker.hidePickerList()
        }}
        >
          <Text style={{ textDecorationLine: 'underline' }}> Press To Show FlatListPicker</Text>
        </TouchableOpacity>
        <FlatListPicker
          ref={ref => { this.FlatListPicker = ref }}
          data={dataPicker}
          containerStyle={styles.container}
          dropdownStyle={{ width: 180 }}
          dropdownTextStyle={{ fontSize: 15 }}
          pickedTextStyle={{ color: 'black', fontWeight: 'bold' }}
          animated="slide"
          defaultValue="FlatListPicker...."
          renderDropdownIcon={() => (<AntDesign name="caretdown" color="blue" size={15} style={{ padding: 15 }} />)}
          onValueChange={(value, index) => alert(`Selected ${value}`)}
        />
      </View>
    );
  }
}

export default TestPicker;
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#CECECE',
    width: 250,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 5,
  }
});

```

## Props

* `data - []` required, array of objects with a unique value and item
* `containerStyle - object` optional, style definitions for the root element
* `onValueChange - function` optional, callback function, when the users has selected an option
* `defaultValue - string` optional, text that is initially shown on the button
* `renderDropdownIcon - function` optional, to render icon dropdown
* `animated - string` optional, define type of animation to show picker
* `pickedTextStyle - object` style for text in pickerItem 
* `dropdownStyle - object` optional, style for container picker 
* `disableTouchContainer - boolean` optional, to disable container touchable opacity
* `renderItem - function` optional, to custom picker item
* `Props from react-native-modal-dropdown` https://www.npmjs.com/package/react-native-modal-dropdown#api