import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SellerPage = ({ navigation, route }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (route.params && route.params.newItem) {
      const { newItem } = route.params;
      setItems(prevItems => [...prevItems, newItem]);
    }
  }, [route.params]);

  // Render function for each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.category}>Category: {item.category}</Text>
        <Text style={styles.name}>Name: {item.name}</Text>
        <Text style={styles.description}>Description: {item.description}</Text>
        <Text style={styles.price}>Price: ₹{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Current Listings:</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.addNewItem} title="Add New Item" onPress={() => navigation.navigate('Step1')}>
        <Text style={styles.editButtonText}>ADD NEW ITEM</Text>
      </TouchableOpacity>
      
      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="view-grid-outline" size={24} color='#96d406'/>
          <Text style={styles.footerText}>Catalogue</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.footerButton}>
          <Icon name="chart-bar" size={24} color='#96d406' />
          <Text style={styles.footerText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <Icon name="chat-outline" size={24} color='#96d406' />
          <Text style={styles.footerText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="account-outline" size={24} color='#96d406' />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#f1f1ec',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4, // For Android shadow
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardContent: {
    paddingHorizontal: 8,
  },
  category: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2a9d8f',
  },
  addNewItem: {
    backgroundColor: '#fff',
    borderColor: '#96d406',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center', // Center elements horizontally
    flexDirection: 'row', // Arrange icon and text horizontally // Ensure some space between the button and the footer
    marginBottom:10,
    padding:5,
  },
  editButtonText: {
    fontSize: 16,
    color: '#96d406',
    fontWeight: 'bold',
    marginLeft: 5, // Add margin to separate the icon and text
    
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    color: '#96d406',
    fontSize: 12,
    marginTop: 4,
  },
});

export default SellerPage;