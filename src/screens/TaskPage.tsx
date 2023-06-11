import React, { useState } from "react";
import {
 View,
 Text,
 Image,
 ScrollView,
 StyleSheet,
 SafeAreaView,
 TouchableOpacity,
} from "react-native";
import TaskItem from "../components/TaskItem";
import EditPage from "./EditPage";
import Task from "../interfaces/Task";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const TasksPage: React.FC = () => {
 const navigation = useNavigation();

 const [tasks, setTasks] = useState<Task[]>([]);

 const [editingTask, setEditingTask] = useState<Task | null>(null);

 const handleAddTask = () => {
  navigation.navigate("Adicionar uma tarefa", { onSave: handleSaveTask });
 };

 const handleEditTask = (taskId: string) => {
  const taskToEdit = tasks.find((task) => task.id === taskId);

  if (taskToEdit) {
   setEditingTask(taskToEdit);
  }
 };

 const handleSaveTask = (newTask: Task) => {
  setTasks((prevTasks) => [...prevTasks, newTask]);
 };

 const handleCancelEdit = () => {
  setEditingTask(null);
 };

 const handleArchiveTask = (taskId: string) => {
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  setTasks(updatedTasks);
 };

 return (
  <SafeAreaView style={styles.container}>
   <View style={styles.logo}>
    <Image source={require("../../assets/logo-header.png")} />
   </View>
   <View style={styles.taskContainer}>
    <ScrollView>
     {tasks.map((task) => (
      <TaskItem
       key={task.id}
       task={task}
       onEdit={handleEditTask}
       onArchive={handleArchiveTask}
      />
     ))}
    </ScrollView>

    {editingTask && (
     <EditPage
      task={editingTask}
      onSave={handleSaveTask}
      onClose={handleCancelEdit}
     />
    )}
   </View>
   <TouchableOpacity style={styles.addContainer} onPress={handleAddTask}>
    <Text style={styles.addTask}>Adicionar Tarefa</Text>
    <AntDesign name="addfile" size={24} color="white" />
   </TouchableOpacity>
  </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: "center",
  padding: 16,
  backgroundColor: "#1e1e1e",
 },
 logo: {
  marginTop: 72,
 },
 taskContainer: {
  marginTop: 55,
  width: "100%",
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

export default TasksPage;
