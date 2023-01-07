import React from "react";
import { View, Image } from "react-native";

import { colors } from "../../utils/utils";

const Logo = function(props) {
  if (props.photo) {
    let size = 30;
    if (props.size) size = props.size;

    return (
      <Image
      source={require('../../assets/logo_ch2.png')}
      />
    );
  }
}


export default Logo;
