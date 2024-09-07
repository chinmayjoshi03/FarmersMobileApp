
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const messages = [
  { id: '1', title: 'New message from Farmer A', content: 'Check out the latest produce...' },
  { id: '2', title: 'Order update from Retailer B', content: 'Your order has been shipped.' },
  { id: '3', title: 'Message from Admin', content: 'Welcome to KissanYukt!' },
];

const InboxPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Inbox</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  messageCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
});

export default InboxPage;
