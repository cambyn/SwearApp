import React from 'react';

import {Text,View,StyleSheet} from 'react-native';

export default function Alarm(){
return(
    <View styles={styles.container}>
        <Text>This is the alarm is the page!</Text>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
})
