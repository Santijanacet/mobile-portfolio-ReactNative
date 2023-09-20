import React from "react";
import { View, ScrollView, Text, TouchableOpacity, Linking, Image, StyleSheet,Alert } from "react-native";
import { FontAwesome,AntDesign } from "@expo/vector-icons";
import Hobbies from "./Hobbies";
import Estudios from "./Estudios";
import Skills from "./Skills"
import Proyectos from "./Proyectos";
import FondoAnimado from "./FondoAnimado";


const Perfil = () => {
  const handleIconPress = (url) => {
    Linking.openURL(url);
  };

  const mostrarAlerta = () => {
    Alert.alert(
      "¡Información!",
      "Estos son solo algunos de mis proyectos, si quieres ver más te invito ir a mi repositorio de github",
      [
        {
          text: "OK",
          onPress: () => console.log("OK presionado"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView>
     <FondoAnimado/>
      <View style={styles.container}>
        <Image
          source={require("../img/yo.jpg")}
          style={styles.imagenPerfil}
        />
        <Text style={styles.nombre}>Santiago Janacet Buelvas</Text>
        
        <Text style={styles.descripcion}>Desarrollador Web y Apps Móviles</Text>
        <View>
          <Text style={styles.biografia}>
            ¡Bienvenido a mi portafolio! Soy un apasionado desarrollador Web y Móvil.
            Aquí puedes encontrar algunos de mis proyectos y logros más recientes.
          </Text>
          <TouchableOpacity style={styles.iconContainer}>
            <FontAwesome
              name="linkedin"
              size={25}
              color="#0A66C2"
              style={styles.icon}
              onPress={() => handleIconPress("https://www.linkedin.com/in/santiago-rafael-janacet-buelvas/")}
            />
            <FontAwesome
              name="github"
              size={25}
              color="black"
              style={styles.icon}
              onPress={() => handleIconPress("https://github.com/Santijanacet")}
            />
            <FontAwesome
              name="instagram"
              size={25}
              color="#C7089A"
              style={styles.icon}
              onPress={() => handleIconPress("https://www.instagram.com/santi_janacet/")}
            />
            <AntDesign 
            name="twitter"
             size={24} 
             color="#249EF0"
             style={styles.icon}
             onPress={() => handleIconPress("https://twitter.com/SantiagoJanace1")}
              />
            
          </TouchableOpacity>
        </View>
        <Skills></Skills>
        <Hobbies></Hobbies>
        <Estudios></Estudios>
        <Proyectos></Proyectos>
        <TouchableOpacity style={styles.button} onPress={mostrarAlerta}>
        <Text style={styles.buttonText}>Información</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  imagenPerfil: {
   
    width: 200,
    height: 200,
    borderRadius: 300,
    marginBottom: 5,
    marginTop:20
   
  },
  nombre: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop:5,
    marginLeft:10
  },
  descripcion: {
    fontSize: 18,
    color: "#2A7AE4",
    marginBottom: 20,
    fontWeight:"bold"
  },
  biografia: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    fontWeight:"bold"
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 10,
    
  },
  button: {
    backgroundColor: "#2A7AE4",
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  }
});

export default Perfil;
