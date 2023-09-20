import React, { useState } from "react";
import { View, Button, StyleSheet, } from "react-native";
import { FontAwesome5, Fontisto, Ionicons, FontAwesome } from "@expo/vector-icons";

const Skills = () => {
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  const habilidades = [
    <FontAwesome5 name="react" size={50} color="#14DDFF" style={styles.icono} />,
    <FontAwesome5 name="node-js" size={50} color="#8FC708" style={styles.icono} />,
    <Fontisto name="java" size={50} color="#5283A2" style={styles.icono} />,
    <Fontisto name="python" size={50} color="#FFD448" style={styles.icono} />,
    <Fontisto name="github" size={50} color="black" style={styles.icono} />,
    <Ionicons name="logo-javascript" size={50} color="#F7E018" style={styles.icono} />,
    <Fontisto name="html5" size={50} color="#E5532D" style={styles.icono} />,
    <FontAwesome name="css3" size={50} color="#306AF1" style={styles.icono} />,
    <FontAwesome5 name="bootstrap" size={50} color="#8652D4"  style={styles.icono} />
  ];

  const toggleHabilidades = () => {
    setMostrarHabilidades(!mostrarHabilidades);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button title="Mis Skills" onPress={toggleHabilidades} />
      </View>
    </View>

      {mostrarHabilidades && (
        <View style={styles.habilidadesContainer}>
          <View style={styles.row}>
            {habilidades.slice(0, 3)}
          </View>
          <View style={styles.row}>
            {habilidades.slice(3, 6)}
          </View>
          <View style={styles.row}>
            {habilidades.slice(6, 9)}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 30,
  },
  habilidadesContainer: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  icono: {
    marginHorizontal: 20,
   
    
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    border: "none", // Elimina el borde por defecto del botón
    cursor: "pointer", // Cambia el cursor al pasar el mouse sobre el botón
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", // Efecto de sombra
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonWrapper: {
    backgroundColor: "green",
    borderRadius: 10,
    overflow: "hidden", // Para recortar cualquier contenido que se extienda fuera del contenedor
    elevation: 5,
    width:200,
    },
});

export default Skills;
