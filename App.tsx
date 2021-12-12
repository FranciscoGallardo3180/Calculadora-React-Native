import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import CalculadoraScreen from "./src/screens/CalculadoraScreen";
import styles from "./src/theme/AppTheme";

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor="black"
        //mostrar status bar en IOS
        barStyle='light-content'
      />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App;
