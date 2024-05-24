import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.text}>Todo - Get it done TODAY🚀</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "brown",
        borderColor: "black",
        borderRadius: 12
    },
    text: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        paddingVertical: 10,
        paddingHorizontal: 12
    }
})

export default Header;