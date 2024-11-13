/* 
Cette page s'occupe du processus de login. 
Il faut 2 text inputs: email et password. Un boutton login.
Un text pour password oublié --> push vers reset password
un text pour register
Elle envoie ensuite une requête à l'API pour vérifier ces infos.
Si les infos sont bonnes --> router push vers homepage
Sinon, afficher un texte d'erreur en dessous du boutton login
Il faut en dessous du textInput password avoir un texte (hyperlink) vers la page resetPwd
*/

import { Text, View } from "react-native";

export default function Login() {
    return (
        <Text>This is a fully functional login page</Text>
    )
}