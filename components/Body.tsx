import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Body = () => {
    const [todoList, setTodoList] = useState([
        {key: 1, text: "Buy me a coffee"},
        {key: 2, text: "Do exercise"},
        {key: 3, text: "Complete Mern"}
    ]);

    return (
        <View style={styles.bodyContainer}>
            {/* <Text style={styles.text}>Body text</Text> */}
            {todoList?.map((item) => (
                <Text key={item?.key} style={styles.text}>{item?.text}</Text>
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
    },
    text: {
        color: "black",
        fontSize: 18,
        fontFamily: "cursive"
    }
});

export default Body;