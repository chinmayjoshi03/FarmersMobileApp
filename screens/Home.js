import React from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from './Footer';  // Adjust the path as necessary

const categories = [
  { id: '1', name: 'Grains', image: require('../assets/images/categories/Grains.png') },
  { id: '2', name: 'Fruits', image: require('../assets/images/categories/Fruits.png') },
  { id: '3', name: 'Vegetables', image: require('../assets/images/categories/vegetables_2.png') },
  { id: '4', name: 'Dry Fruits', image: require('../assets/images/categories/Dry_fruits.png') },
  { id: '5', name: 'Exotic Fruits', image: require('../assets/images/categories/Exotic_Fruits.png') },
  { id: '6', name: 'Dairy Products', image: require('../assets/images/categories/Dairy_.png') },
  { id: '7', name: 'Honey', image: require('../assets/images/categories/Honey.png') },
  { id: '8', name: 'Flowers', image: require('../assets/images/categories/Flowers.png')  },
  { id: '9', name: 'Animal Food' },
  { id: '10', name: 'Medicinal Plants', image: require('../assets/images/categories/Medicinal_Plants.png') },
  { id: '11', name: 'Spices and Herbs',  image: require('../assets/images/categories/Spices.png')},
  { id: '12', name: 'Poultry Products', image: require('../assets/images/categories/Poultry.png') },
];

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;

export default function HomePage({ navigation }) {
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      {item.image && <Image source={item.image} style={styles.categoryImage} />}
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
     

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={24} color="#ccc" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search for products, brands, and more"
        />
      </View>

      {/* Categories List */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.categoriesList}
      />

      {/* Footer */}
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#3b5998',
    padding: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchIcon: {
    position: 'absolute',
    left: 20,
    zIndex: 1,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 10,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
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
    width: (screenWidth / numColumns) - 20,
    height: (screenWidth / numColumns) - 20,
    borderRadius: 5,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
  },
});
