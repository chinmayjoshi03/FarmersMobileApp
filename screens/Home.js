import React from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from './Footer';  // Adjust the path as necessary

const categories = [
  { id: '1', name: 'Grains', image: require('../assets/images/categories/Grains.png') },
  { id: '2', name: 'Fruits', image: require('../assets/images/categories/Fruits.png') },
  { id: '3', name: 'Vegetables', image: require('../assets/images/categories/vegetables_2.png') },
  { id: '4', name: 'Flowers', image: require('../assets/images/categories/Flowers.png')  },
  { id: '5', name: 'Spices and Herbs',  image: require('../assets/images/categories/Spices.png')},
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
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={24} color="#96d406" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search for products, brands, and more"
        />
      </View>

      {/* Address */}
      <View style={styles.address}>
        <Ionicons name="location-outline" size={20} color="#96d406" style={styles.locationIcon} />
        <Text style={styles.addressText}>Hinjewadi, Pune-411057</Text>
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
  address: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  locationIcon: {
    marginRight: 5,
  },
  addressText: {
    color: "#96d406",
    fontSize: 16,
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
