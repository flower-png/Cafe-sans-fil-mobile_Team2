/* la première page vers laquelle on est redirigé sera celle de onboarding
il faut chercher comment faire qu'au premier log in seulement, on ait le processus d'onboarding
*/

import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import OnBoarding from "./onboarding";

export default function Index() {
  const router = useRouter();
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <TouchableOpacity
    //     onPress={() => {router.push("/homepage")}}>
    //   <Text>Je suis un boutton qui redirige vers homepage</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity
    //     onPress={() => {router.push("/onboarding")}}>
    //   <Text>Je suis un boutton qui redirige vers la page d'onboarding</Text>
    //   </TouchableOpacity>
      
    // </View>
    <OnBoarding/>
  );
}
