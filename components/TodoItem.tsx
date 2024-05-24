import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

interface TodoProps {
    item: Item;
    deleteItemHandler: (x: number) => void;
}
export interface Item {
    key: number;
    text: string;
    complete: boolean;
}

const TodoItem = ({ item, deleteItemHandler }: TodoProps) => {
    return (
        <TouchableOpacity onPress={() => deleteItemHandler(item?.key)} >
            <View style={styles.todoContainer}>
                <Text style={item?.complete ? styles?.done : styles?.notDone}>{item?.text}</Text>
            </View>
        </TouchableOpacity>
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
    done: {
        fontSize: 18,
        color: "white",
        fontWeight: 600,
        letterSpacing: 2,
        textDecorationLine: "line-through"
    },
    notDone: {
        fontSize: 18,
        color: "white",
        fontWeight: 600,
        letterSpacing: 2,
        textDecorationLine: "none"
    }
})

export default TodoItem;