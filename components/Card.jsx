import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({name, age}) => {
  return (
    <View style={styles.container}>
      <View style={{borderWidth: 2, height: 50, width: 50, borderRadius: 50}}></View>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        // margin: 10,
        borderRadius: 10,
        elevation: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100,
        width: "100",
    }
})