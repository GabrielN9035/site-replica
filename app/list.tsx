import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import dados from "../assets/constants/mock";
import { Header } from "../components/header";

export default function List() {
  return (
    <SafeAreaView style={s.wrap}>
      <Header image={require("../assets/images/45.jpg")} />

      <View style={s.container}>
        <Text style={s.title}>Lista de itens</Text>
      </View>

      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={s.item}>{item.name}</Text>}
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "#090909",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    color: "#ffffff",
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
