import React from 'react';
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.productName}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <Text style={styles.itemLocation}>{item.location}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryName,
      headerStyle: { backgroundColor: '#96d406' },
      headerTitleStyle: { color: '#ffffff' },
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()} style={{ paddingLeft: 1, paddingRight:7 }}>
          <Ionicons name="arrow-back-outline" size={25} color="#ffffff" />
        </Pressable>
      ),
    });
  }, [navigation, categoryName]);

  return (
    <SafeAreaView style={styles.container}>
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
    flexDirection: 'row',  // Row layout for image and text
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    alignItems: 'center',  // Vertically center image and text
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,  // Allow text to take up remaining space
    marginLeft: 10,  // Add space between image and text
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  itemLocation: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
});
