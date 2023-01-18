import * as React from 'react'
import {Image} from 'react-native'

export default function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png'
      }}
    />
  );
}