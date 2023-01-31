import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function Laskin({navigation}) {
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)
  const [result, setResult] = useState(0)
  const [history, setHistory] = useState([]);
  
  const add = () => {
     let addedInputs = ((+input1) + (+input2))
     setResult(addedInputs)
     setHistory([{key:`${input1} + ${input2} = ${addedInputs}`}, ...history])
  }
  const subtract = () => {
     let subtractedInputs = ((+input1) - (+input2))
     setResult(subtractedInputs)
     setHistory([{key:`${input1} - ${input2} = ${subtractedInputs}`}, ...history])
  }


  
  const listSeparator = () => {
    return(
      <View style={{height: 1, backgroundColor: 'blue'}}/>
    )
  }
  


  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput 
        style={{ width: 150, borderColor: 'gray', borderWidth: 1 }}
        value={input1}
        onChangeText={input1 => setInput1(input1)}
        keyboardType='numeric'
      />
      <TextInput 
      style={{width: 150, borderColor: 'gray', borderWidth: 1}}
      value={input2}
      onChangeText={input2 => setInput2(input2)}
      keyboardType='numeric'
      />
      <View style={styles.button}>
        <Button id="add" title="+" onPress={add} />
        <Button id="subtract" title="-" onPress={subtract}/>
      </View>
      <StatusBar style="auto" />
      
      <Button onPress={() => navigation.navigate('Historia', {history})}      title="Historia" />
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