import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TasksPage from "./src/screens/TaskPage";

export default function App() {
 return (
  <SafeAreaView style={styles.container}>
   <View>
    <TasksPage />
    <StatusBar style="light" />
   </View>
  </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
  backgroundColor: "#1e1e1e",
  alignItems: "center",
  justifyContent: "center",
 },
});
