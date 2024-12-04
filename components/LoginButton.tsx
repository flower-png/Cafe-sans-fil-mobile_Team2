import { View, Text , TouchableOpacity, StyleSheet, StyleProp, ViewStyle} from 'react-native'
import React from 'react'
import { Router } from 'expo-router';

interface LoginButtonParams {
    title: string;
    onPress: () => void;
    style: StyleProp<ViewStyle>;
}

export default function LoginButton ({title, onPress, style}: LoginButtonParams) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
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
        fontSize: 14,
        fontWeight: 600,

    },
    button: {
        backgroundColor: "black",
        borderRadius: 10,
        padding: 12,
    }

});