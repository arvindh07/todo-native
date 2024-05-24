import Body from "@/components/Body";
import Header from "@/components/Header";
import { Text, View, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";

export default function Index() {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Header />
        <Body dismissKeyboard={dismissKeyboard}/>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "antiquewhite"
  }
})
