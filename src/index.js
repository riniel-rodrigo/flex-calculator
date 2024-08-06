import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, StyleSheet, Text } from "react-native";
import { Appbar } from "react-native-paper";

const App = () => {
  return (
    <SafeAreaProvider>
      <Appbar.Header>
        <Appbar.Content title="Calculadora Flex" />
      </Appbar.Header>
    </SafeAreaProvider>
  );
};
export default App;
