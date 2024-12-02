/* 
Cette page s'occupe du processus de login. 
Il faut 2 text inputs: email et password. Un boutton login.
Un text pour password oublié --> push vers reset password
un text pour register
Elle envoie ensuite une requête à l'API pour vérifier ces infos.
Si les infos sont bonnes --> redirection vers homepage
Sinon, afficher un texte d'erreur en dessous du boutton login
Il faut en dessous du textInput password avoir un texte (hyperlink) vers la page resetPwd
*/

import { Text, TouchableOpacity, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useState } from 'react';
import { FONTS } from "../static/theme";
import LoginButton from "@/components/LoginButton";

function checkLogs(input_email, input_pwd){

};

export default function Login() {
  //initialisation du router (pour rediriger vers une autre page)
  const router = useRouter();

  // au lieu de tout de suite push vers homepage, il faut d'abord vérifier via l'api que les
  // logs dans les textInputs sont valides. Et afficher une erreur sinon.
  const compteur = 0

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.loginContainer}>
      <Text>Logo</Text>
      <Text style={styles.connexionTitle}>Connectez-vous à votre compte</Text>
      <Text style={styles.specifiers}>Addresse électronique</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" style={styles.textInputs}></TextInput>
      <Text style={styles.specifiers}>Mot de passe</Text>
      <TextInput value={password} onChangeText={setPassword} placeholder="Password" style={styles.textInputs}></TextInput>
      <Text style={styles.forgotPwd}>Mot de passe oublié ?</Text>
      <LoginButton 
      title="Se connecter" 
      /* onPress={router.push("/homepage")}*/ >
      </LoginButton>
      <Text style={{textAlign: "center"}}>Ou</Text>
      <Text>Continuer avec Google</Text>
      <Text>Continuer avec Facebook</Text>
      <Text>Pas de compte? Créer un compte</Text>


      {/* <TouchableOpacity >
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          router.push("/resetPwd");
        }}
      >
        <Text style={styles.hypertext}>
          Well, well, well... password forgotten?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          router.push("/homepage");
        }}
      >
        <Text style={{ ...styles.hypertext, marginTop: 15 }}>
          Login and go to homepage
        </Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textInputs:{
    alignItems:'flex-end',
    flexDirection: 'row',
    borderWidth:2,
    padding: 20,
    margin:10,
    borderColor:'black',
    borderRadius:10,
    fontSize:20
  },
  loginContainer: {
    /* flex: 1,
    margin: 50, */
    padding: 16,
    /* alignContent: "center",
    justifyContent: "center", */
  },

  connexionTitle: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: 700,
  },

  specifiers: {
    color: "#6C7278",
    fontSize: 12,
  },

  forgotPwd: {
    textAlign: "right",
    fontSize: 12,
    fontWeight: 700,

  },

  hypertext: {
    color: "blue",
    textDecorationLine: "underline",
    fontFamily: FONTS.generalText.fontFamily,
    textAlign: "center",
  },
  
});

