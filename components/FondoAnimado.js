import React from "react";
import { View, StyleSheet } from "react-native";

const FondoAnimado = ({ children }) => {
  return <View style={styles.background}>{children}</View>;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "blue", // Cambia este color al que desees para el fondo degradado
  },
});

export default FondoAnimado;

