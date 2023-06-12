import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import TasksPage from "./src/screens/TaskPage";
import AddPage from "./src/screens/AddPage";

const Stack = createStackNavigator();

export default function App() {
 return (
  <SafeAreaProvider>
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Tarefas">
     <Stack.Screen
      name="Tarefas"
      component={TasksPage}
      options={{
       headerShown: false,
      }}
     />
     <Stack.Screen
      name="Adicionar uma tarefa"
      component={AddPage}
      options={{
       headerTintColor: "white",
       headerShadowVisible: false,
       headerStyle: {
        backgroundColor: "#1e1e1e",
       },
      }}
     />
    </Stack.Navigator>
    <StatusBar style="light" />
   </NavigationContainer>
  </SafeAreaProvider>
 );
}

const styles = StyleSheet.create({
 container: {
  backgroundColor: "#1e1e1e",
  alignItems: "center",
  justifyContent: "center",
 },
});
