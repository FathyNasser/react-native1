import {StatusBar} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';
//const image = require('./src/images');

export default function App() {
  const [name, setName] = useState('');
  const [displayText, setDisplayText] = useState('');
  const handleWelcomeButton = () => {
    setDisplayText(`Welcome, ${name}!`);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#333" />
      <Image source={ronaldo} style={styles.image} />
      <TextInput
        onChangeText={text => setName(text)}
        style={styles.input}
        placeholder="Enter your name please"
      />
      <Text style={styles.displayText}>{displayText}</Text>

      <TouchableOpacity onPress={handleWelcomeButton} style={styles.button}>
        <Text style={styles.buttonText}>Click to see your name</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'top',
  },
  image: {
    width: 360,
    height: 350,
    marginBottom: 40,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    marginBottom: 40,
    color: '#fff',
  },
  displayText: {
    marginBottom: 20,
    color: '#fff',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});
