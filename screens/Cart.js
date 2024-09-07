import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { CartContext } from './cartContex'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from './Footer';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For delete icon

export default function Cart({ navigation }) {
  const { cartItems, setCartItems } = useContext(CartContext);  
  const [quantities, setQuantities] = useState({});

  
  const updateQuantity = (productName, increment = true) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productName]: (prevQuantities[productName] || 1) + (increment ? 1 : -1),
    }));
  };

  
  const removeFromCart = (productName) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter(item => item.productName !== productName);
    });
  };

  
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const quantity = quantities[item.productName] || 1;
      return total + (parseFloat(item.price.replace('₹', '').replace('/kg', '')) * quantity);
    }, 0);
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => {
      const quantity = quantities[item.productName] || 1;
      return total + quantity;
    }, 0);
  };

  const renderCartItem = ({ item }) => {
    const quantity = quantities[item.productName] || 1;
    
    return (
      <View style={styles.cartItem}>
        <View style={styles.leftSection}>
          <Image source={item.image} style={styles.cartImage} />
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.productName}>{item.productName}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.inStock}>In stock</Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => updateQuantity(item.productName, false)}
              disabled={quantity === 1}
            >
              <Icon name="remove" size={20} color={quantity === 1 ? '#ddd' : '#000'} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={() => updateQuantity(item.productName, true)}>
              <Icon name="add" size={20} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => removeFromCart(item.productName)}
            >
              <Icon name="delete" size={20} color="#000" />
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveForLaterButton}>
              <Text style={styles.saveForLaterText}>Save for later</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={styles.footer}>
            <Text style={styles.totalPrice}>Total Price: ₹{calculateTotalPrice().toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => navigation.navigate('PaymentOptions', { totalPrice: calculateTotalPrice(),
                totalQuantity: calculateTotalQuantity()
               })}
            >
              <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        </View>
      )}

      <View style={styles.footerContainer}>
        <Footer navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  leftSection: {
    marginRight: 15,
  },
  cartImage: {
    width: 80,
    height: 80,
  },
  rightSection: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  inStock: {
    fontSize: 14,
    color: 'green',
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  deleteText: {
    marginLeft: 5,
  },
  saveForLaterButton: {
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 5,
  },
  saveForLaterText: {
    color: '#000',
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    color: '#999',
  },
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#96d406',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    backgroundColor: '#fff', 
  },

});
