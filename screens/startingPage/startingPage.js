import React from 'react';

import { ImageBackground, StyleSheet, Text, View, Button, Alert, SafeAreaView } from "react-native";

const image = { uri: "https://i.imgur.com/fLu6fjt" };

function Separator() {
  return <View style={styles.separator} />;
}


export default function StartingPage({navigation}) {
  //console.log(props.navigation);

  const pressHandler = () => {
navigation.navigate('Alarm');
  }
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.text}>The Swear App</Text>
      <Separator />
      <Button title="Click here to proceed ->" 
      // onPress={()=>Alert.alert("button pressed!")}
      onPress={pressHandler}
      style={styles.proceedButton}
        color="red"
      />

    </SafeAreaView>
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "red",
    fontSize: 50,
    fontWeight: "bold"
  },
  separator: {
    marginTop:12,
    marginVertical: 8,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 5,

  },
  proceedButton: {
   position:"absolute",
   top:0,
   left:0
  }
});