import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import TodoItem from "./TodoItem";
import InputTodo from "./InputTodo";

interface BodyProps{
    dismissKeyboard: () => void;
}
const Body = ({dismissKeyboard}: BodyProps) => {
    const [todoList, setTodoList] = useState([
        {key: 1, text: "Buy me a coffee", complete: false},
        {key: 2, text: "Do exercise", complete: false},
        {key: 3, text: "Complete Mern", complete: false}
    ]);

    const deleteItemHandler = (key: number) => {
        const newTodoList = todoList?.map((item) => {
            if(item?.key === key){
                item.complete = true;
            }
            return item;
        });
        setTodoList(newTodoList);
    }

    const additemHandler = (text: string) => {
        dismissKeyboard();
        const newTodoItem = {
            key: todoList?.length + 1,
            text: text,
            complete: false
        };
        const newTodoList = [{...newTodoItem}, ...todoList];
        setTodoList(newTodoList);
    }    

    return (
        <View style={styles.bodyContainer}>
            <InputTodo additemHandler={additemHandler} />
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