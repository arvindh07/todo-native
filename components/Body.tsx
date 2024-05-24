import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Body = () => {
    return (
        <View style={styles.bodyContainer}>
            <Text>Body text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bodyContainer:{
        flex: 1,
        marginTop: 10,
        backgroundColor: "crimson"
    },

});

export default Body;