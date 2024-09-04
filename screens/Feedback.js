import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Feedback() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feedback Page</Text>
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
