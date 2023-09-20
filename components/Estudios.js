import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Estudios = () => {
  return (

   
    <View style={styles.container}>
         <Text style={styles.text}> Formación Académica</Text>
      <View style={styles.card}>
        <Image
          source={require("../img/udc.jpeg")} 
          style={styles.image}
        />
        <Text style={styles.cardTitle}>Universidad de Cartagena</Text>
        <Text style={styles.cardText}>
          Pregado en ingenieria de software
        </Text>
      </View>
      <View style={styles.card}>
        <Image
          source={require("../img/MinTIC.png")} 
          style={styles.image}
        />
        <Text style={styles.cardTitle}>MinTIC</Text>
        <Text style={styles.cardText}>
          Diplomados en desarollo de software y aplicaciones Web
        </Text>
      </View>
      <View style={styles.card}>
        <Image
          source={require("../img/alura.png")} 
          style={styles.image}
        />
        <Text style={styles.cardTitle}>Alura + Oracle</Text>
        <Text style={styles.cardText}>
         Certificado como desarollador frontend.
        </Text>
      </View>
      <View style={styles.card}>
        <Image
          source={require("../img/sena3.png")} 
          style={styles.image}
        />
        <Text style={styles.cardTitle}>SENA</Text>
        <Text style={styles.cardText}>
          Técnologo en Análisis y desarrollo de software
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:50
  },
  card: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    padding: 30,
    width: 300,
    elevation: 100,
    shadowColor: "#2A7AE4",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    marginBottom:10
  },
  image: {
    width: 300, 
    height: 100,
    resizeMode: "cover",
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign:"center"
  },
  cardText: {
    fontSize: 16,
  },
  text:{

    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    
  }
});

export default Estudios;
