import React from 'react';

import { ImageBackground, StyleSheet, Text, View, Button, Alert, SafeAreaView } from "react-native";
import StartingPage from './screens/startingPage/startingPage';

import Routes from "./routes/routes"

const image = { uri: "https://i.imgur.com/fLu6fjt" };




export default function App() {

  return (

<Routes/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#FFB6C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
})