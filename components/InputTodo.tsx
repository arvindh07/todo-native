import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface AddProps {
    additemHandler: (text: string) => void;
};

const InputTodo = ({additemHandler}: AddProps) => {
    const [text, setText] = useState<string>("");

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="add todo..." />
            <Button title="Add" color={"black"} onPress={() => {
                additemHandler(text);
                setText("");
            }} />
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
    },
    input: {
        borderColor: "black",
        borderWidth: 2,
        paddingHorizontal: 15,
        paddingVertical: 3,
        width: "50%",
    }
})

export default InputTodo;