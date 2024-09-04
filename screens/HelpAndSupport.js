import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HelpAndSupport() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Help and Support Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
