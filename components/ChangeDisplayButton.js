import { Text, View, StyleSheet, Pressable } from "react-native";

export function ChangeDisplayButton({ title, onPress }) {
  return (
    <Pressable style={styles.button} onPress={() => onPress()}>
      <View>
        <Text style={styles.buttonContent}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#480355",
    borderRadius: 15,
    margin: 10,
  },
  buttonContent: {
    color: "white",
    padding: 20,
  },
});
