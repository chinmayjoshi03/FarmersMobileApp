import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import * as ImagePicker from 'expo-image-picker';


// Step 4: Enter Price
export default function Step4  ({ navigation, route })  {
    // Step 4: Enter Price

    const { category, name, description, image } = route.params;
    const [price, setPrice] = useState('');
  
    const handleSubmit = () => {
      const newItem = { category, name, description, image, price };
  
      // Navigate back to SellerPage with the new item data
      navigation.navigate('SellerPage', { newItem });
    };
  
    return (
      <View style={styles.container}>
        <Text>Step 4: Enter Price</Text>
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          keyboardType="numeric"
          onChangeText={setPrice}
        />
        <Button title="Finish" onPress={handleSubmit} />
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