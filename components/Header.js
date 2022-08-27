import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View><Text style={styles.header}>Todos</Text></View>
  )
}

const styles = StyleSheet.create({
    header:{
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,

    }
})