import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TodoItem, { Item } from "./TodoItem";

const Body = () => {
    const [todoList, setTodoList] = useState([
        {key: 1, text: "Buy me a coffee"},
        {key: 2, text: "Do exercise"},
        {key: 3, text: "Complete Mern"}
    ]);

    const deleteItemHandler = (key: number) => {
        const newTodoList = todoList?.filter((item) => item.key !== key);
        setTodoList(newTodoList);
    }

    return (
        <View style={styles.bodyContainer}>
            <FlatList 
                data={todoList}
                renderItem={({item}: any) => <TodoItem item={item} deleteItemHandler={deleteItemHandler} />} 
                />
        </View>
    )
}

const styles = StyleSheet.create({
    bodyContainer:{
        flex: 1,
        marginTop: 10,
        backgroundColor: "#0000001f",
        padding: 10
    }
});

export default Body;