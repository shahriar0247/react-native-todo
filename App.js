import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Add_Todo from './components/Add_Todo';
import Header from './components/Header';
import Todos from './components/Todos';


export default function App() {
  const [todos, set_todos] = useState(["todo 1"])

  function add_todo(todo){
    set_todos(old_todos => {
      return [...old_todos, todo]
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header></Header>
      <Todos todos={todos}></Todos>
      <Add_Todo add_todo={add_todo}></Add_Todo>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop: 70,
   marginLeft: 20,
   marginRight: 20,
  },
});
