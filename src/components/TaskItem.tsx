import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Task {
 id: string;
 title: string;
 description: string;
 state: "NÃO INICIADA" | "EM PROGRESSO" | "FINALIZADA" | "ARQUIVADA";
}

interface TaskItemProps {
 task: Task;
 onEdit: (taskId: string) => void;
 onArchive: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onArchive }) => {
 const handleEdit = () => {
  onEdit(task.id);
 };

 const handleArchive = () => {
  onArchive(task.id);
 };

 return (
  <View style={styles.container}>
   <Text style={styles.title}>{task.title}</Text>
   <Text style={styles.description}>{task.description}</Text>
   <Text style={styles.state}>{task.state}</Text>
   {task.state !== "ARQUIVADA" && (
    <TouchableOpacity onPress={handleArchive} style={styles.button}>
     <Text style={styles.buttonText}>Arquivar</Text>
    </TouchableOpacity>
   )}
   <TouchableOpacity onPress={handleEdit} style={styles.button}>
    <Text style={styles.buttonText}>Editar</Text>
   </TouchableOpacity>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  backgroundColor: "#3e3e3e",
  borderRadius: 8,
  padding: 16,
  marginBottom: 16,
 },
 title: {
  color: "#eee",
  fontSize: 18,
  fontWeight: "bold",
  marginBottom: 8,
 },
 description: {
  color: "#bbb",
  fontSize: 16,
  marginBottom: 8,
 },
 state: {
  color: "#cc7722",
  fontSize: 14,
  marginBottom: 8,
  width: 298,
 },
 button: {
  backgroundColor: "#EDEDED",
  borderRadius: 4,
  padding: 8,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 8,
 },
 buttonText: {
  color: "#333",
  fontWeight: "bold",
 },
});

export default TaskItem;
