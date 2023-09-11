import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  const inputHandler = (todo) => {
    setTodo(todo);
  };

  const viewTodosHandler = () => {
    setTodoArray((currentArray) => {
      return [...currentArray, { text: todo, id: Math.random().toString() }];
    });
  };
  return (
    <View style={styles.outsideContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputText}
          onChangeText={inputHandler}
          value={todo}
          placeholder="enter your item"
        />
        <View style={styles.button}>
          <Button title="Add" onPress={viewTodosHandler} />
        </View>
      </View>

      {todoArray.map((item) => {
        return (
          <FlatList
            data={todoArray}
            renderItem={(item) => {
              console.log(item);
              return (
                <View key={item.id} style={styles.viewTodos}>
                  <Text>{item.text}</Text>
                </View>
              );
            }}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  outsideContainer: {
    flex: 1,
    backgroundColor: "gray",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputText: {
    height: 40,
    width: "auto",
    borderColor: "green",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    marginRight: 0,
  },
  button: {
    height: 40,
    justifyContent: "center",
    padding: 10,
    margin: 10,
    marginLeft: 0,
  },
  viewTodos: {
    borderTopColor: "black",
    borderColor: "gray",
    borderWidth: 1,
    padding: 40,
    marginTop: 40,
    backgroundColor: "red",
  },
});
