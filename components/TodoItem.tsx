import React from "react";
import { Text, View, StyleSheet, Touchable } from "react-native";

interface TodoProps {
    item: Item
}
export interface Item {
    key: number;
    text: string;
}
const TodoItem = ({ item }: TodoProps) => {
    return (
        <View style={styles.todoContainer}>
            <Text style={styles?.text}>{item?.text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    todoContainer: {
        marginVertical: 7,
        padding: 7,
        paddingHorizontal: 25,
        backgroundColor: "cornflowerblue",
        borderRadius: 6
    },
    text: {
        fontSize: 18,
        color: "white",
        fontWeight: 600,
        letterSpacing: 2,
    }
})

export default TodoItem;