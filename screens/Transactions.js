import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Transactions () {
  const transactions = [
    { id: '1', orderNumber: 'ORD001', status: 'Pending', date: '2024-08-01' },
    { id: '2', orderNumber: 'ORD002', status: 'Paid', date: '2024-08-02' },
    { id: '3', orderNumber: 'ORD003', status: 'Cancelled', date: '2024-08-03' },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending':
        return { color: 'gray' };
      case 'Paid':
        return { color: 'green' };
      case 'Cancelled':
        return { color: 'red' };
      default:
        return { color: 'black' };
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.orderNumber}>Order #: {item.orderNumber}</Text>
        <Text style={[styles.status, getStatusStyle(item.status)]}>{item.status}</Text>
      </View>
      <Text style={styles.date}>Date: {item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction History</Text>
      <FlatList
        data={transactions}
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
  card: {
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
});

