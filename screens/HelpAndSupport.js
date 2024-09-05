import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native';

export default function HelpAndSupport() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const faqData = [
    { id: '1', question: 'How do I reset my password?', answer: 'Go to the settings page and select "Reset Password".' },
    { id: '2', question: 'How do I contact support?', answer: 'You can contact support via email at support@example.com.' },
    { id: '3', question: 'How do I track my order?', answer: 'Visit the "My Orders" page to track your orders in real time.' },
  ];

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert("Error", "All fields are required!");
      return;
    }
    // Form submission logic would go here (if connected to backend)
    Alert.alert("Success", "Message submitted!");

    // Clear the form and hide it
    setName('');
    setEmail('');
    setMessage('');
    setShowForm(false);
  };

  const renderFAQ = ({ item }) => (
    <View style={styles.faqItem}>
      <Text style={styles.question}>{item.question}</Text>
      <Text style={styles.answer}>{item.answer}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Help and Support</Text>

      <Text style={styles.subtitle}>Frequently Asked Questions:</Text>
      <FlatList
        data={faqData}
        renderItem={renderFAQ}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.faqList}
      />

      {!showForm && (
        <TouchableOpacity style={styles.otherQueryButton} onPress={() => setShowForm(true)}>
          <Text style={styles.otherQueryText}>Have Another Query? Contact Us</Text>
        </TouchableOpacity>
      )}

      {showForm && (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Message"
            multiline
            value={message}
            onChangeText={setMessage}
          />
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  faqList: {
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  question: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  answer: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
  },
  otherQueryButton: {
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
  },
  otherQueryText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  form: {
    marginTop: 20,
  },
  input: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});
