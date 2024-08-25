import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Cart({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome to the Cart</Text>
            </View>
            <Footer navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
    },
});
