import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Appbar } from "react-native-paper";

const Header = () => {
  return (
      <Appbar.Header>
        <Appbar.Content title="Calculadora Flex" />
      </Appbar.Header>
  );
};
export default Header;
