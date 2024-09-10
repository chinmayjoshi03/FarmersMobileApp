import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function AboutKissanYukt() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <View style={styles.detail}>
      <Text style={styles.text}> 
About KissanYukt

At KissanYukt, we believe in empowering farmers by bridging the gap between them and the market. Farmers have long been at the mercy of intermediaries, often receiving lower prices for their produce due to the complexities of traditional supply chains. KissanYukt aims to revolutionize this system by providing a direct link between farmers, consumers, and retailers, enabling seamless transactions and fairer trade practices.
      </Text>
      <Text style={styles.text}>
Our Mission

We strive to give farmers the tools they need to connect with buyers directly, set their own prices, and showcase their produce without depending on middlemen. Our platform simplifies the selling process, allowing farmers to list products, negotiate prices, and manage transactions in real time, ensuring that they receive a fair return for their hard work.
      </Text>
      <Text style={styles.text}>
Our Vision

KissanYukt envisions a world where farmers are no longer sidelined but take control of their market presence. By enabling them to bypass traditional barriers, we aim to elevate their income, reduce their economic vulnerabilities, and foster a more transparent, equitable market.

Join us in creating a future where farmers and consumers work hand-in-hand to build a more sustainable and prosperous agricultural ecosystem.
      </Text>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    padding:20,
    textDecorationLine:'underline',
  },
  detail:{
    paddingHorizontal:40,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing:1,
    paddingBottom:10,
  },
});