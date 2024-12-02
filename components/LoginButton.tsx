import { View, Text , TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { Router } from 'expo-router';

interface LoginButtonParams {
    title: string;
    // onPress: () => Router;
}

export default function LoginButton ({title/*, onPress*/}: LoginButtonParams) {
    return (
        <TouchableOpacity style={styles.button} /*onPress={onPress}*/>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>

    )
}

const styles =  StyleSheet.create({
    text:{
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: 600,

    },
    button: {
        backgroundColor: "black",
        borderRadius: 10,
        padding: 10,
    }

    /* container:{
        color: "red",
        textAlign: "center",
    },

    button:{
        backgroundColor: "black",
        padding: 16
    },*/

});