import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';



export default function Historia({route}) {


  const history = route.params.history;
  
  return (

    <View style={styles.container}>     
      <FlatList 
      data={history}
      renderItem={({item}) => <Text style={{ fontSize:20,}}>{item.key}</Text>}      
      />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    
  }
 

});