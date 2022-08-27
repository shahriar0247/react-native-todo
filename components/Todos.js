import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Todo from './Todo'

export default function Todos({todos}) {
  return (
    <View>
        {todos.map(todo => {
            return <Todo key={todo} todo={todo}></Todo>
        })}
    </View>
  )
}
