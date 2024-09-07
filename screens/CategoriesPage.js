import React from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { fruits, vegetables, flowers, grains, spices, pulses, dairy } from './CategoriesData';  // Import category data
import Footer from './Footer';  // Adjust the path as necessary

const categories = [
  { id: '1', name: 'Grains', image: require('../assets/images/categories/Grains.png'), data: grains },
  { id: '2', name: 'Pulses', image: require('../assets/images/categories/Pulses.jpg'), data: pulses },
  { id: '3', name: 'Fruits', image: require('../assets/images/categories/Fruits.png'), data: fruits },
  { id: '4', name: 'Vegetables', image: require('../assets/images/categories/vegetables_2.png'), data: vegetables },
  { id: '8', name: 'Flowers', image: require('../assets/images/categories/Flowers.png'), data: flowers },
  { id: '7', name: 'Dairy', image: require('../assets/images/categories/Dairy_.png'), data: dairy },
  { id: '11', name: 'Spices and Herbs', image: require('../assets/images/categories/Spices.png'), data: spices },
];

const numColumns = 2; // Updated to 2 columns
const screenWidth = Dimensions.get('window').width;

export default function CategoriesPage({ navigation }) {
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate('CategoryItemsPage', { categoryName: item.name, items: item.data })}
    >
      {item.image && <Image source={item.image} style={styles.categoryImage} />}
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.categoriesList}
      />
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  categoriesList: {
    padding: 10,
    flexGrow: 1,
  },
  categoryItem: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  categoryImage: {
    width: (screenWidth / numColumns) - 20, // Adjusting the width based on the number of columns
    height: (screenWidth / numColumns) - 20, // Adjusting the height based on the number of columns
    borderRadius: 5,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
  },
});
