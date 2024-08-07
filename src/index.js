import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./components/Header/index";
import { View, StyleSheet, Text } from "react-native";

const App = () => {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Teste</Text>
      </View>
    </SafeAreaProvider>
  );
};
export default App;
