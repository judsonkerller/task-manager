import React, { useState } from "react";
import {
 View,
 Text,
 TouchableOpacity,
 StyleSheet,
 Modal,
 Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

interface Task {
 id: string;
 title: string;
 description: string;
 state: "NÃO INICIADA" | "EM PROGRESSO" | "FINALIZADA" | "ARQUIVADA";
 color: string;
}

interface TaskItemProps {
 task: Task;
 onEdit: (taskId: string) => void;
 onArchive: (taskId: string) => void;
 onStateChange: (taskId: string, newState: Task["state"]) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
 task,
 onEdit,
 onArchive,
 onStateChange,
}) => {
 const [modalVisible, setModalVisible] = useState(false);
 const [selectedState, setSelectedState] = useState(task.state);

 const toggleModal = () => {
  setModalVisible(!modalVisible);
 };

 //  const handleEdit = () => {
 //   onEdit(task.id);
 //  };

 const handleArchive = () => {
  onArchive(task.id);
 };

 const handleStateChange = (
  newState: "NÃO INICIADA" | "EM PROGRESSO" | "FINALIZADA"
 ) => {
  onStateChange(task.id, newState);
  setSelectedState(newState);
 };

 const getStateColor = (): string => {
  switch (task.state) {
   case "NÃO INICIADA":
    return "#cc7722"; // Laranja
   case "EM PROGRESSO":
    return "blue"; // Azul
   case "FINALIZADA":
    return "green"; // Verde
   default:
    return "#000000"; // Preto
  }
 };

 return (
  <View style={styles.container}>
   <Text style={styles.title}>{task.title}</Text>
   <Text style={styles.description}>{task.description}</Text>
   <Text style={[styles.state, { color: getStateColor() }]}>{task.state}</Text>
   {task.state !== "ARQUIVADA" && (
    <TouchableOpacity
     onPress={handleArchive}
     style={[styles.button, { backgroundColor: "#EDEDED" }]}
    >
     <Text style={styles.buttonText}>Arquivar</Text>
    </TouchableOpacity>
   )}

   {/* <TouchableOpacity
    onPress={handleEdit}
    style={[styles.button, { backgroundColor: "#EDEDED" }]}
   >
    <Text style={styles.buttonText}>Editar</Text>
   </TouchableOpacity> */}

   {task.state !== "FINALIZADA" && (
    <TouchableOpacity
     onPress={toggleModal}
     style={[styles.button, { backgroundColor: "#EDEDED" }]}
    >
     <Text style={styles.buttonText}>Alterar Estado</Text>
    </TouchableOpacity>
   )}

   <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={toggleModal}
   >
    <View style={styles.modalContainer}>
     <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>{task.title}</Text>
      <Text style={styles.modalDescription}>{task.description}</Text>
      <Picker selectedValue={selectedState} onValueChange={handleStateChange}>
       <Picker.Item
        label="NÃO INICIADA"
        value="NÃO INICIADA"
        color="#cc7722" // Laranja
       />
       <Picker.Item
        label="EM PROGRESSO"
        value="EM PROGRESSO"
        color="blue" // Azul
       />
      </Picker>
      <Pressable onPress={toggleModal} style={styles.modalButton}>
       <Text style={styles.buttonText}>Salvar</Text>
      </Pressable>
     </View>
    </View>
   </Modal>

   {task.state !== "FINALIZADA" && (
    <TouchableOpacity
     onPress={() => handleStateChange("FINALIZADA")}
     style={[styles.button, { backgroundColor: "#EDEDED" }]}
    >
     <Text style={styles.buttonText}>Finalizar</Text>
    </TouchableOpacity>
   )}
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
  fontSize: 14,
  marginBottom: 8,
  width: 298,
 },
 button: {
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
 modalContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
 },
 modalContent: {
  backgroundColor: "#fff",
  padding: 16,
  borderRadius: 8,
  width: 300,
 },
 modalTitle: {
  fontSize: 18,
  fontWeight: "bold",
  marginBottom: 8,
 },
 modalDescription: {
  marginBottom: 16,
 },
 modalButton: {
  backgroundColor: "#EDEDED",
  borderRadius: 4,
  padding: 8,
  alignItems: "center",
 },
});

export default TaskItem;
