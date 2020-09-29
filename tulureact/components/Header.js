import React from 'react';
import {View,Text,Image} from 'react-native';
import { StyleSheet } from "react-native";
const Header = ({title}) => {
  return(
    <View style={styles.Header}>
      <Text style={styles.Text}>
        {title}
      </Text>
    </View>
  )
}

Header.defaultProps={
    title:'shoppingList'
}

const styles = StyleSheet.create({
    Text: {
        color:'red',
        padding:15,
        backgroundColor:'blue'

    },
    Header: {
        color:'red',
        padding:15,
        backgroundColor:'blue'

    }
});
 


export default Header;