import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import furion from './../assets/furion.png'

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.gretting}>Olá,</Text>
        <Text style={styles.userName}>Arthur</Text>
      </View>

      <Image source={furion} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight()
  },
  gretting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40
  },
  image:{
    width: 80,
    height: 80,
    borderRadius: 40
  }
})