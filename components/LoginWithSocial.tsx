import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface LoginWithSocialParams{
    platform: string;
    // onPress: 
}

export default function LoginWithSocial({platform}: LoginWithSocialParams) {
    // Images à changer pour libre de droit 
    const imageSource = platform === "Google"
    ? require('../assets/images/signInSocials_images/google_logo.webp')
    : platform === "Facebook"
    ? require('../assets/images/signInSocials_images/facebook_logo.webp')
    : null;

  return (
    <TouchableOpacity style={styles.button}>
            <Image source={imageSource}
                    // resizeMode="contain"
                    style={styles.logoPlatform} />
            <Text style={styles.text}>
                Continuer avec {platform}
            </Text>
        {/*<Image source={imageSource}></Image> */}
        
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text: {
        color: "black",
        // textAlign: "center", // might not need after
        fontSize: 14,
        fontWeight: 600,
    },
    logoPlatform: {
        marginRight: 10,
        maxHeight: 18,
        maxWidth: 18,
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 12,
        borderColor: "#EDF1F3",
        borderWidth: 1,
        boxShadow: "0px 1px 2px 0px rgba(228, 229, 231, 0.24)"
    }
})