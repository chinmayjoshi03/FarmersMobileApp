import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function ChatsPage({ navigation }) {
  const chats = [
    { id: '1', name: 'Riya', lastMessage: 'Is the product still available?', status: 'Pending' },
    { id: '2', name: 'Rudra', lastMessage: 'I need 50kg of potatoes.', status: 'Approved' },
    { id: '3', name: 'Sejal', lastMessage: 'Can I get a discount?', status: 'Cancelled' },
    { id: '4', name: 'Danish', lastMessage: 'Delivery by next week?', status: 'Pending' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatCard}
      onPress={() => navigation.navigate('ChatWithCustomer', { name: item.name, status: item.status })}
    >

      <View style={styles.chatHeader}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={[styles.status, 
          item.status === 'Pending' && styles.pending, 
          item.status === 'Approved' && styles.paid, 
          item.status === 'Cancelled' && styles.cancelled]}>
          {item.status}
        </Text>
      </View>
      <Text style={styles.lastMessage}>{item.lastMessage}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chats</Text>
      <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chatCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
    color: '#fff',
  },
  pending: {
    backgroundColor: '#808080', // Grey for Pending
  },
  paid: {
    backgroundColor: '#4CAF50', // Green for Paid
  },
  cancelled: {
    backgroundColor: '#FF5722', // Red for Cancelled
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
  },
});
