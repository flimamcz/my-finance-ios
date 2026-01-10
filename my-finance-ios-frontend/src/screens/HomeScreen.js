import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22 }}>🏠 Home</Text>

      <Button
        title="Logout"
        onPress={() => navigation.replace("Login")}
      />
    </View>
  );
}
