import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Footer({ navigation }) {
  const currentRoute = navigation.getState().routes[navigation.getState().index].name;

  return (
    <View style={styles.footer}>
      <TouchableOpacity 
        style={styles.footerItem} 
        onPress={() => navigation.navigate('Home')}>
        <Ionicons 
          name="home-outline" 
          size={24} 
          color={currentRoute === 'Home' ? '#009900' : '#b2b0b0'} />
        <Text style={[styles.footerText, { color: currentRoute === 'Home' ? '#009900' : '#b2b0b0' }]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.footerItem} 
        onPress={() => navigation.navigate('Categories')}>
        <Ionicons 
          name="grid-outline" 
          size={24} 
          color={currentRoute === 'Categories' ? '#009900' : '#b2b0b0'} />
        <Text style={[styles.footerText, { color: currentRoute === 'Categories' ? '#009900' : '#b2b0b0' }]}>
          Categories
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.footerItem} 
        onPress={() => navigation.navigate('Cart')}>
        <Ionicons 
          name="cart-outline" 
          size={24} 
          color={currentRoute === 'Cart' ? '#009900' : '#b2b0b0'} />
        <Text style={[styles.footerText, { color: currentRoute === 'Cart' ? '#009900' : '#b2b0b0' }]}>
          Cart
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.footerItem} 
        onPress={() => navigation.navigate('Profile')}>
        <Ionicons 
          name="person-outline" 
          size={24} 
          color={currentRoute === 'Profile' ? '#009900' : '#b2b0b0'} />
        <Text style={[styles.footerText, { color: currentRoute === 'Profile' ? '#009900' : '#b2b0b0' }]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingBottom: 5,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    marginTop: 5,
  },
});
