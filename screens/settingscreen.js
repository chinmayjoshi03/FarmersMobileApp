import React from 'react';
import { View, Text, Switch, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);

  const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setIsDarkModeEnabled(previousState => !previousState);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Notifications */}
      <View style={styles.settingItem}>
        <View style={styles.settingInfo}>
          <Ionicons name="notifications-outline" size={24} color="#555" />
          <Text style={styles.settingText}>Enable Notifications</Text>
        </View>
        <Switch
          onValueChange={toggleNotifications}
          value={isNotificationsEnabled}
        />
      </View>

      {/* Dark Mode */}
      <View style={styles.settingItem}>
        <View style={styles.settingInfo}>
          <Ionicons name="moon-outline" size={24} color="#555" />
          <Text style={styles.settingText}>Dark Mode</Text>
        </View>
        <Switch
          onValueChange={toggleDarkMode}
          value={isDarkModeEnabled}
        />
      </View>

      {/* Edit Profile */}
      <TouchableOpacity style={styles.settingItem} onPress={() => alert('Edit Profile')}>
        <View style={styles.settingInfo}>
          <Ionicons name="person-outline" size={24} color="#555" />
          <Text style={styles.settingText}>Edit Profile</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="#555" />
      </TouchableOpacity>

      {/* Saved Credit & Debit Cards */}
      <TouchableOpacity style={styles.settingItem} onPress={() => alert('Saved Cards')}>
        <View style={styles.settingInfo}>
          <Ionicons name="card-outline" size={24} color="#555" />
          <Text style={styles.settingText}>Saved Credit & Debit Cards</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="#555" />
      </TouchableOpacity>

      {/* Saved Addresses */}
      <TouchableOpacity style={styles.settingItem} onPress={() => alert('Saved Address')}>
        <View style={styles.settingInfo}>
          <Ionicons name="location-outline" size={24} color="#555" />
          <Text style={styles.settingText}>Saved Address</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="#555" />
      </TouchableOpacity>

      {/* Add more settings options here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default SettingsScreen;
