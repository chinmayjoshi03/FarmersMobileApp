import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Footer({ navigation }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity 
        style={styles.footerItem} 
        onPress={() => {navigation.navigate("Home")}}>
        <Ionicons name="home-outline" size={24} color="#3b5998" />
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.footerItem} 
        onPress={() => {navigation.navigate("Categories")}}>
        <Ionicons name="grid-outline" size={24} color="#3b5998" />
        <Text style={styles.footerText}>Categories</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.footerItem} 
        onPress={() => {navigation.navigate("Cart")}}>
        <Ionicons name="cart-outline" size={24} color="#3b5998" />
        <Text style={styles.footerText}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.footerItem} 
        onPress={() => {navigation.navigate("Profile")}}>
        <Ionicons name="person-outline" size={24} color="#3b5998" />
        <Text style={styles.footerText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingBottom: 8,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#3b5998',
    marginTop: 5,
  },
});
