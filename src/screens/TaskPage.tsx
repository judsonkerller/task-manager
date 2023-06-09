import React, { useState } from "react";
import { View, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import TaskItem from "../components/TaskItem";
import EditPage from "./EditPage";
import Task from "../interfaces/Task";

const TasksPage: React.FC = () => {
 const [tasks, setTasks] = useState<Task[]>([
  {
   id: "1",
   title: "Tarefa 1",
   description: "Descrição da Tarefa 1",
   state: "NÃO INICIADA",
  },
  {
   id: "2",
   title: "Tarefa 2",
   description: "Descrição da Tarefa 2",
   state: "EM PROGRESSO",
  },
  {
   id: "3",
   title: "Tarefa 3",
   description: "Descrição da Tarefa 3",
   state: "FINALIZADA",
  },
 ]);

 const [editingTask, setEditingTask] = useState<Task | null>(null);

 const handleEditTask = (taskId: string) => {
  const taskToEdit = tasks.find((task) => task.id === taskId);

  if (taskToEdit) {
   setEditingTask(taskToEdit);
  }
 };

 const handleSaveTask = (updatedTask: Task) => {
  setTasks((prevTasks) =>
   prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
  );
  setEditingTask(null);
 };

 const handleCancelEdit = () => {
  setEditingTask(null);
 };

 const handleArchiveTask = (taskId: string) => {
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  setTasks(updatedTasks);
 };

 return (
  <SafeAreaView>
   <View style={styles.container}>
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
  </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
  marginTop: 60,
  padding: 16,
  backgroundColor: "#1e1e1e",
 },
});

export default TasksPage;
