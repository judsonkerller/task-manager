import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import Task from "../interfaces/Task";

interface EditPageProps {
 task: Task;
 onSave: (updatedTask: Task) => void;
 onClose: () => void;
}

const EditPage: React.FC<EditPageProps> = ({ task, onSave, onClose }) => {
 const [editedTask, setEditedTask] = useState<Task>(task);

 const handleSave = () => {
  onSave(editedTask);
  onClose();
 };

 const handleChangeTitle = (title: string) => {
  setEditedTask((prevTask) => ({ ...prevTask, title }));
 };

 const handleChangeDescription = (description: string) => {
  setEditedTask((prevTask) => ({ ...prevTask, description }));
 };

 return (
  <Modal visible={true} animationType="slide">
   <View style={styles.container}>
    <TextInput
     style={styles.input}
     value={editedTask.title}
     onChangeText={handleChangeTitle}
    />
    <TextInput
     style={styles.input}
     value={editedTask.description}
     onChangeText={handleChangeDescription}
    />
    <Button title="Salvar" onPress={handleSave} />
    <Button title="Cancelar" onPress={onClose} />
   </View>
  </Modal>
 );
};

const styles = StyleSheet.create({
 container: {
  padding: 16,
  justifyContent: "center",
  alignItems: "center",
 },
 input: {
  width: "100%",
  marginBottom: 12,
  padding: 8,
  borderBottomColor: "#ccc",
  borderBottomWidth: 1,
 },
});

export default EditPage;
