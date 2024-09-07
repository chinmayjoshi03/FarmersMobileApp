import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import Material Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome Icons

export default function LoadItem({ route, navigation }) {
  const { image, productName, price, minOrderQty, location } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Product Image */}
      <Image source={image} style={styles.productImage} />
      
      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.price}>Price: {price}</Text>
        <Text style={styles.minOrderQty}>Minimum Order Quantity: {minOrderQty}</Text>
        <Text style={styles.location}>Location: {location}</Text>

        <View style={styles.separator} />

        <Text style={styles.sectionTitle}>Product Description</Text>
        <Text style={styles.description}>
          This product is sourced from high-quality farms in {location}. It is grown under optimal conditions to ensure the best quality and freshness. Place your order now and enjoy timely delivery right to your doorstep.
        </Text>

        {/* Button Container with Icons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buyButton}>
            <FontAwesome name="shopping-cart" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.buyButtonText}>Order Now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('Chat')}>
            <Icon name="chat" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.chatButtonText}>Get Best Price</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: '#96d406',
    marginBottom: 10,
  },
  minOrderQty: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#e1e1e1',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: '#96d406',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  chatButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
  },
  buyButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  chatButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#3498db',
    borderWidth: 1,
  },
  backButtonText: {
    fontSize: 18,
    color: '#3498db',
    fontWeight: 'bold',
  },
});