import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredGoalText) => {
    //best practice to update state; you're updating currentCourseGoals by appending the new course goals (enteredGoalText)
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    //set a function to update the current state; return the updated state; filter returns a new array (old array minus the all the items we filtered out); filter itself takes a function which takes true/false; true: item is kept; false: item is dropped
    setCourseGoals((currentCourseGoals) => {
      //check if goal id !== id, then it returns true items; if there is a match, it'll return false, which it will be dropped and not show on the new array
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler} />
      {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />}
      <View style={styles.goalsContainer}>
        {/* use FlatList when you have dynamic data that is scrollable */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
         
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5,
  },
});
