import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome5, FontAwesome, AntDesign, Feather } from '@expo/vector-icons'; 

const Hobbies = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Hobbies</Text>
            <View style={styles.iconContainer}>
                <FontAwesome5 name="running" size={50} color="black" style={styles.icon} />
                <FontAwesome name="tv" size={50} color="black" style={styles.icon} />
                <AntDesign name="camera" size={50} color="black" style={styles.icon} />
                <Feather name="music" size={50} color="black" style={styles.icon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5,
    },
    container: {
        alignItems: "center",
        padding: 30,
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icon: {
       marginHorizontal:10,
       color:"#2A7AE4"
    },
})

export default Hobbies;
