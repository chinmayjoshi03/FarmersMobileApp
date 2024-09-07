import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native';
import { CartContext } from './cartContex'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Stars from 'react-native-stars';

export default function LoadItem({ route, navigation }) {
  const { image, productName, price, minOrderQty, location, farmerName, starRating = 4, responseRate = '95%' } = route.params;
  const { addToCart } = useContext(CartContext);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddToCart = () => {
    const product = { image, productName, price, minOrderQty, location };
    addToCart(product);
    navigation.navigate('Cart');
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={image} style={styles.productImage} />
      </TouchableOpacity>

      {/* Modal for displaying the image in full screen */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Pressable onPress={() => setModalVisible(false)} style={styles.modalCloseButton}>
            <Icon name="close" size={30} color="#fff" />
          </Pressable>
          <Image source={image} style={styles.modalImage} />
        </View>
      </Modal>

      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.price}>Price: {price}</Text>
        <Text style={styles.minOrderQty}>Minimum Order Quantity: {minOrderQty}</Text>
        <Text style={styles.location}>Location: {location}</Text>

        <View style={styles.separator} />
        <Text style={styles.sectionTitle}>Product Description</Text>
        <Text style={styles.description}>
          This product is sourced from high-quality farms in {location}. Place your order now and enjoy timely delivery.
        </Text>

        <View style={styles.sellerContainer}>
          <Text style={styles.sellerTitle}>About the Seller</Text>
          <Text style={styles.sellerInfo}>Name: {farmerName}</Text>
          <View style={styles.ratingContainer}>
            <Stars
              default={starRating}
              count={5}
              half={true}
              starSize={20}
              fullStar={<Icon name="star" size={20} color="#f5c518" />}
              emptyStar={<Icon name="star-border" size={20} color="#f5c518" />}
              halfStar={<Icon name="star-half" size={20} color="#f5c518" />}
              disabled={true}
            />
          </View>
          <Text style={styles.responseRate}>Response Rate: {responseRate}</Text>
          <Text style={styles.verified}>Verified User</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <FontAwesome name="shopping-cart" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('ChatWithFarmer', { farmerId: '123' })}>
            <Icon name="chat" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.chatButtonText}>Get Best Price</Text>
          </TouchableOpacity>
        </View>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark overlay
  },
  modalImage: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
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
  sellerContainer: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    marginBottom: 20,
  },
  sellerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  sellerInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  verified: {
    fontSize: 16,
    color: '#28a745', // Green color
    fontWeight: 'bold',
    marginTop: 10,
  },
  responseRate: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  addToCartButton: {
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
  addToCartButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  chatButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
