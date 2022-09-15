// TODO: need to remove
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { useTranslation } from "react-i18next";
import { MonoText } from "../components/StyledText";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const { t } = useTranslation();
  const [count, setCount] = useState("0");

  const API_URL = __DEV__ ? process.env.DEV_API_URL : process.env.PROD_API_URL;

  function onClick() {
    console.log("__DEV__", __DEV__);
    console.log("API_URL", API_URL);
    fetch(API_URL!, {
      method: "POST",
    })
      .then((response) => response.text())
      .then((val) => {
        setCount(val);
      });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <MonoText>{t("actions.goToPage2")}</MonoText>
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      <View style={styles.innerContainer}>
        <StatusBar style="auto" />
        <Text>You clicked me {count} times.</Text>
        <TouchableOpacity style={styles.btn} onPress={onClick}>
          <Text>Click me!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "lightblue",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});
