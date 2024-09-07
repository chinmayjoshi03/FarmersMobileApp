import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from './Footer'; // Adjust the path as necessary
const profile_image=require("../assets/images/ramlal.png");

export default function ProfilePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
       
        <View style={styles.profileContainer}>
          <Image source={profile_image} style={styles.profileImage}/>
          <Text style={styles.userName}>Ramlal</Text>
        </View>

        
        <View style={styles.userDetails}>
          <View style={styles.detailRow}>
            <Ionicons name="location-outline" size={20} color="#96d406" style={styles.icon} />
            <Text style={styles.detailText}>Hinjewadi, Pune-411057</Text>
          </View>

          <View style={styles.detailRow}>
            <Ionicons name="call-outline" size={20} color="#96d406" style={styles.icon} />
            <Text style={styles.detailText}>+91 9876543210</Text>
          </View>

          <View style={styles.detailRow}>
            <Ionicons name="mail-outline" size={20} color="#96d406" style={styles.icon} />
            <Text style={styles.detailText}>ramlal@KissanYukt.com</Text>
          </View>
        </View>
      </View>

     
      <TouchableOpacity style={styles.editButton}>
        <Ionicons name="pencil-sharp" size={24} color="#96d406" style={styles.icon} />
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      
      <View style={styles.footerContainer}>
        <Footer navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 20, // Leave space for the edit button above the footer
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  userDetails: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
  },
  editButton: {
    backgroundColor: '#fff',
    borderColor: '#96d406',
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center', // Center elements horizontally
    flexDirection: 'row', // Arrange icon and text horizontally
    marginHorizontal: 20,
    marginBottom: 10, // Ensure some space between the button and the footer
  },
  editButtonText: {
    fontSize: 16,
    color: '#96d406',
    fontWeight: 'bold',
    marginLeft: 5, // Add margin to separate the icon and text
  },
  footerContainer: {
    backgroundColor: '#fff', // Match footer background with button
  },
});