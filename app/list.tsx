import { Header } from "@/componentes/header";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function List() {
  return (
    <SafeAreaView>
      <Header image={require("@/assets/images/gibson.jpg")} />
      <View>
        <Text>TESTE</Text>
      </View>
    </SafeAreaView>
  );
}
