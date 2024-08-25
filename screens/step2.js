import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import * as ImagePicker from 'expo-image-picker';

// Step 2: Item Name and Description
export default function Step2 ({ navigation, route })  {
    const { category } = route.params;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
  
    return (
      <View style={styles.container}>
        <Text>Step 2: Item Name and Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Item Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Item Description"
          value={description}
          onChangeText={setDescription}
        />
        <Button
          title="Next"
          onPress={() => navigation.navigate('Step3', { category, name, description })}
        />
      </View>
    );
  };
  
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    input: {
      width: '100%',
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 20,
      borderRadius: 5,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
    footerButton: {
      alignItems: 'center',
    },
    footerText: {
      fontSize: 12,
      marginTop: 4,
    },
  });