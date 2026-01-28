import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  return (
    <SafeAreaView style={s.wrap}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={s.body}>
          <Text style={s.title}>Tela Inicial</Text>
          <Text style={s.paragraph}>Meu primeiro APP usando react</Text>
        </View>
        <View style={s.body2}>
          <Image source={require("../assets/images/react-logo.png")} />
        </View>
        <View style={s.body2}>
          <TouchableOpacity style={s.btn}>
            <Text style={s.btnText}>Ir para lista</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Dentro do const stylesheet fazemos o css
const s = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  body: {
    backgroundColor: "#090909",
  },
  body2: {
    alignItems: "center",
  },
  title: {
    color: "#534d7a",
    textAlign: "center",
    fontSize: 30,
    padding: 20,
  },
  paragraph: {
    color: "gray",
    paddingHorizontal: 30,
    textAlign: "center",
    fontSize: 25,
    paddingBottom: 15,
  },
  btn: {
    shadowColor: "#370841",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.95,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#760c96",
    width: 200,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#090909",
    borderRadius: 999,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 22,
  },
});
