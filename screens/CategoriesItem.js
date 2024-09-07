// CategoryItemsPage.js

import React from 'react';
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function CategoryItemsPage({ route, navigation }) {
  const { categoryName, items } = route.params;

  const renderProduct = ({ item }) => {
    const handlePress = () => {
      const loaditems = {
        id: item.id,
        name: item.name,
        image: item.image,
        productName: item.productName,
        price: item.price,
        minOrderQty: item.minOrderQty,
        location: item.location,
      };
      navigation.navigate('LoadItem', loaditems);  // Pass the product details to the LoadItem page
    };

    return (
      <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.itemName}>{item.productName}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Text style={styles.itemLocation}>{item.location}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>{categoryName}</Text>
      <FlatList
        data={items}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: 'column',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  itemLocation: {
    fontSize: 12,
    color: '#666',
    marginTop: 1,
  },
});
