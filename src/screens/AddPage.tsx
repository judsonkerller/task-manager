import React, { useState } from "react";
import {
 View,
 StyleSheet,
 TextInput,
 TouchableOpacity,
 Text,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Task from "../interfaces/Task";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type AddPageRouteProps = {
 AddPage: {
  onSave: (updatedTask: Task) => void;
 };
};

type AddPageProps = {
 route: RouteProp<AddPageRouteProps, "AddPage">;
 navigation: StackNavigationProp<AddPageRouteProps, "AddPage">;
};

const AddPage: React.FC<AddPageProps> = ({ route, navigation }) => {
 const [taskTitle, setTaskTitle] = useState("");
 const [taskDescription, setTaskDescription] = useState("");

 const handleSaveTask = () => {
  const newTask: Task = {
   id: Date.now().toString(),
   title: taskTitle,
   description: taskDescription,
   state: "NÃO INICIADA",
  };
  console.log("Nova tarefa: ", newTask);
  route.params?.onSave(newTask);
  navigation.navigate("Tarefas", newTask);
 };

 return (
  <View style={styles.container}>
   <View style={styles.inputContainer}>
    <TextInput
     style={styles.input}
     placeholder="Título"
     placeholderTextColor="#fff"
     value={taskTitle}
     onChangeText={setTaskTitle}
    />
    <TextInput
     style={styles.input}
     placeholder="Descrição"
     placeholderTextColor="#fff"
     value={taskDescription}
     onChangeText={setTaskDescription}
    />
   </View>
   <TouchableOpacity style={styles.addContainer} onPress={handleSaveTask}>
    <Text style={styles.addTask}>Adicionar Tarefa</Text>
    <FontAwesome5 name="save" size={24} color="white" />
   </TouchableOpacity>
  </View>
 );
};

export default AddPage;

const styles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 16,
  alignItems: "center",
  backgroundColor: "#1e1e1e",
 },
 inputContainer: {
  width: "100%",
  borderRadius: 8,
  marginTop: 16,
  padding: 16,
  backgroundColor: "#3e3e3e",
 },
 input: {
  width: "100%",
  marginBottom: 12,
  padding: 8,
  borderRadius: 4,
  color: "#fff",
  borderColor: "#ccc",
  borderWidth: 1,
 },
 addContainer: {
  position: "absolute",
  bottom: 16,
  elevation: 4,
  width: 360,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  gap: 12,
  backgroundColor: "#27C498",
  padding: 14,
  borderRadius: 8,
 },
 addTask: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
 },
});
