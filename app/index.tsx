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
      <Text>Edit app/index.tsx to edit this screen.</Text>
      </TouchableOpacity>
    </View>
  );
}
