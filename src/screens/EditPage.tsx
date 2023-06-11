import React, { useState } from "react";
import {
 View,
 TextInput,
 Button,
 StyleSheet,
 Modal,
 TouchableOpacity,
 Text,
} from "react-native";
import Task from "../interfaces/Task";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

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
    <Text style={styles.headerTitle}>Editar Tarefa</Text>
    <View style={styles.inputContainer}>
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
    </View>
    <View style={styles.buttons}>
     <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
      <Text style={styles.saveText}>Salvar</Text>
      <FontAwesome5 name="save" size={24} color="white" />
     </TouchableOpacity>
     <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
      <Text style={styles.saveText}>Cancelar</Text>
      <MaterialIcons name="cancel" size={24} color="white" />
     </TouchableOpacity>
    </View>
   </View>
  </Modal>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: "center",
  padding: 16,
  backgroundColor: "#1e1e1e",
 },
 headerTitle: {
  color: "#27C498",
  fontSize: 24,
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
 buttons: {
  position: "absolute",
  bottom: 16,
  width: "100%",
 },
 saveButton: {
  width: "100%",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  gap: 12,
  backgroundColor: "#27C498",
  padding: 14,
  borderRadius: 8,
 },
 cancelButton: {
  marginTop: 12,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  gap: 12,
  backgroundColor: "#EC2637",
  padding: 14,
  borderRadius: 8,
 },
 saveText: {
  color: "#fff",
 },
});

export default EditPage;
