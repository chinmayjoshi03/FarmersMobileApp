import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';

// Step 3: Upload Image
export default function Step3 ({ navigation, route })  {
    const { category, name, description } = route.params;
    const [image, setImage] = useState(null);
  
    const pickImage = async () => {
      // Request permission to access the media library
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImage(result.assets[0].uri); // Correctly access the URI of the selected image
      }
    };
  
    return (
      <View style={styles.container}>
        <Text>Step 3: Upload Image</Text>
        <Button title="Pick an image from gallery" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <Button
          title="Next"
          onPress={() => navigation.navigate('Step4', { category, name, description, image })}
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