import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Todo from './Todo'

export default function Todos({todos, delete_todo}) {
  return (
    <View>
        {todos.map(todo => {
            return <Todo key={todo.key} todo={todo} delete_todo={delete_todo}></Todo>
        })}
    </View>
  )
}
