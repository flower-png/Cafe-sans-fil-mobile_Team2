import { View, Text , TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

export default function Button() {
  return (
    <View style= {styles.button}>
      <Text style= {styles.container}>Button</Text>
    </View>
  )
}

const styles =  StyleSheet.create({
    container:{
        color: "red",
        textAlign: "center",
    },

    button:{
        backgroundColor: "black",
        padding: 16
    }

});