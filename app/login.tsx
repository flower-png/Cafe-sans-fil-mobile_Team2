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
import LoginWithSocial from "@/components/LoginWithSocial";

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
      <Text style={styles.logo}>Logo</Text>

      <Text style={styles.connexionTitle}>Connectez-vous à votre compte</Text>

      <Text style={styles.specifiers}>Addresse électronique</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" style={styles.textInputs}></TextInput>
      <Text style={styles.specifiers}>Mot de passe</Text>
      <TextInput value={password} onChangeText={setPassword} placeholder="Password" style={styles.textInputs}></TextInput>
      <TouchableOpacity
       onPress={() => {
        router.push("/resetPwd");
      }}>
        <Text style={styles.forgotPwd}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
      
      <LoginButton 
      title="Se connecter" 
      onPress={() => router.push("/homepage")}
      style={{marginVertical: 8 }}>
      </LoginButton>

      <View style={{flexDirection: "row", alignItems: "center"}}>
        <View style={styles.divider}></View>
        <Text style={{textAlign: "center", margin: 12, color: "#6C7278"}}>Ou</Text>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.socialLogin}>
        <LoginWithSocial 
        platform={"Google"}></LoginWithSocial>
        <LoginWithSocial 
        platform={"Facebook"}></LoginWithSocial>
      </View>

      <View style={{flexDirection:"row", justifyContent: "center", gap: 4,}}>
        <Text style={{color: "#6C7278",fontSize: 12}}>Pas de compter?</Text>
        <Text style={{fontWeight: 600, fontSize: 12}}>Créer un compte</Text>
      </View>

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
  logo: {
    textAlign: "center"
  },
  textInputs:{
    alignItems:'flex-end',
    flexDirection: 'row',
    borderWidth:2,
    padding: 12,
    marginVertical: 8,
    borderColor:'#E4E5E73D',
    // boxShadow: "0px 1px 2px 0px rgba(228, 229, 231, 0.24)",
    borderRadius:10,
    fontSize:16
  },
  loginContainer: {
    /* flex: 1,
    margin: 50, */
    padding: 32,
    backgroundColor: "white",
    /* alignContent: "center",
    justifyContent: "center", */
  },
  connexionTitle: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: 700,
    marginVertical: 20,
  },
  specifiers: {
    color: "#6C7278",
    fontSize: 12,
  },
  forgotPwd: {
    textAlign: "right",
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 12,
  },
  divider: {
    borderColor: "#EDF1F3",
    borderWidth: 1,
    // borderBottomWidth: 1,
    flex: 1,
  },
  socialLogin: {
    marginTop: 8, 
    gap: 12, 
    marginBottom: 24,
  }, 
  hypertext: {
    color: "blue",
    textDecorationLine: "underline",
    fontFamily: FONTS.generalText.fontFamily,
    textAlign: "center",
  },
});

