import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoItem from "./TodoItem";

const Body = () => {
    const [todoList, setTodoList] = useState([
        {key: 1, text: "Buy me a coffee"},
        {key: 2, text: "Do exercise"},
        {key: 3, text: "Complete Mern"}
    ]);

    return (
        <View style={styles.bodyContainer}>
            {todoList?.map((item) => (
                <TodoItem key={item?.key} item={item} />
            ))}
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