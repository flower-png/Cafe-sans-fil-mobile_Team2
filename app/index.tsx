/* la première page vers laquelle on est redirigé sera celle de onboarding*/

import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {router.push("/login")}}>
      <Text>Je suis un boutton qui redirige vers login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {router.push("/onboarding")}}>
      <Text>Je suis un boutton qui redirige vers la page d'onboarding</Text>
      </TouchableOpacity>
      
    </View>
  );
}
