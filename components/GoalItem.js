import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    //.bind allows you to pre-configure a function for future execution; 1st value sets to 'this', 2nd value is the 1st parament received to the call function
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
  },
  goalText: {
    color: "white",
  },
});
