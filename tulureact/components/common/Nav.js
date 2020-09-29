import React from 'react';
import {View,StyleSheet,Image} from 'react-native';
const Nav = () => {
  return(
    <View style={styles.nav}>
      <Image source={require('./tulu-logo_white.png')} style={styles.logo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  nav:{
    backgroundColor:'rgb(26,42,51)',
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative',
    zIndex: 5,
    height:50,
    padding:10,
  },
  logo:{
    width:60,
    height:40
  }
})

export default Nav;