/**
 * Created by Phuoc Doan on 06/30/2020.
 */

import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FlatlistDropdown from './FlatlistDropdown';


class FlatListPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  showPickerList = () => {
    this.ModalDropdown.show()
  }

  hidePickerList = () => {
    this.ModalDropdown.hide()
  }

  render() {
    const { data, animated, renderItem, disableTouchContainer, renderDropdownIcon, containerStyle, pickerStyle, dropdownStyle, dropdownTextStyle, pickedTextStyle } = this.props;
    return (
      <TouchableOpacity
        style={[styles.container, { ...containerStyle }]}
        onPress={() => this.ModalDropdown.show()}
        disabled={disableTouchContainer || false}
      >
        <FlatlistDropdown
          {...this.props}
          ref={ref => { this.ModalDropdown = ref }}
          options={data}
          animationType={animated}
          style={pickerStyle && pickerStyle}
          dropdownStyle={dropdownStyle && dropdownStyle}
          dropdownTextStyle={dropdownTextStyle && dropdownTextStyle}
          textStyle={pickedTextStyle}
          renderRow={renderItem && renderItem}
        />
        {renderDropdownIcon
          ? renderDropdownIcon()
          : (<AntDesign name="caretdown" size={10} style={{ padding: 15 }} />)

        }
      </TouchableOpacity>
    );
  }
}

export default FlatListPicker;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#CECECE',
    width: 200,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    flexDirection: 'row',
  }
});
