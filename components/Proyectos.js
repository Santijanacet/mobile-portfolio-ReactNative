import React from "react";
import { View, Image, FlatList, StyleSheet, Dimensions, Text } from "react-native";

const Proyectos = () => {
  const imagenes = [
    require("../img/ecommers.jpeg"),
    require("../img/TodoList.jpg"),
    // Agrega más rutas de imágenes aquí
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Proyectos</Text>
      <FlatList
        data={imagenes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item} style={styles.imagen} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop:50
  },
  slide: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imagen: {
    width: Dimensions.get("window").width * 0.7, // Ancho de la imagen
    height: 250, // Altura de la imagen
    resizeMode: "cover",
    borderRadius: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Proyectos;
