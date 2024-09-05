import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function ChooseLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const languages = [
    { id: '1', name: 'Hindi' },
    { id: '2', name: 'English' },
    { id: '3', name: 'Marathi' },
    { id: '4', name: 'Bengali' },
    { id: '5', name: 'Gujarati' },
    { id: '6', name: 'Punjabi' },
    { id: '7', name: 'Tamil' },
    { id: '8', name: 'Telugu' },
    { id: '9', name: 'Kannada' },
    { id: '10', name: 'Malayalam' },
    { id: '11', name: 'Odia' },
    { id: '12', name: 'Urdu' },
  ];

  const renderLanguage = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.languageButton,
        selectedLanguage === item.name && styles.selectedButton,
      ]}
      onPress={() => setSelectedLanguage(item.name)}
    >
      <Text
        style={[
          styles.languageText,
          selectedLanguage === item.name && styles.selectedText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Your Language</Text>
      <FlatList
        data={languages}
        renderItem={renderLanguage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.languageList}
      />
      {selectedLanguage && (
        <Text style={styles.selectedLanguageText}>
          Selected Language: {selectedLanguage}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  languageList: {
    alignItems: 'center',
  },
  languageButton: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  selectedButton: {
    backgroundColor: '#96d406',
  },
  languageText: {
    fontSize: 18,
    color: '#333',
  },
  selectedText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  selectedLanguageText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4CAF50',
  },
});
