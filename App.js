import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
      <View style={{ flex: 5, backgroundColor: "teal" }}></View>
      <View style={{ flex: 0.8, backgroundColor: "tomato" }}></View>
    </View>
  );
}
