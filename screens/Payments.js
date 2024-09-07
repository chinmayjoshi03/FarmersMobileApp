import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CheckBox from 'expo-checkbox';

const PaymentOptions = ({ route }) => {
  const { totalPrice, totalQuantity } = route.params; // Destructure totalPrice from route.params
  const [selectedOption, setSelectedOption] = React.useState(null);

  const paymentMethods = [
    { id: 1, label: 'Cards / UPI / Netbanking / Wallet', subLabel: 'Pay Online' },
    { id: 3, label: 'Cash on Delivery', subLabel: '' },
    { id: 4, label: 'Wallet', subLabel: 'Balance: ₹ 100' },
    { id: 5, label: 'Kisan Kash', subLabel: 'Balance: ₹ 200' },
  ];

  const handleSelect = (id) => {
    setSelectedOption(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Option</Text>

      <View style={styles.cartInfo}>
        <Text style={styles.cartItem}>Cart Items:</Text>
        <Text style={styles.cartItemValue}>{totalQuantity}</Text>
        <Text style={styles.totalPayable}>Total Payable:</Text>
        <Text style={styles.totalPayableValue}>₹ {totalPrice.toFixed(2)}</Text>
      </View>

      <ScrollView style={styles.paymentList}>
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={styles.paymentOption}
            onPress={() => handleSelect(method.id)}
          >
            <View style={styles.optionText}>
              <Text style={styles.paymentLabel}>{method.label}</Text>
              {method.subLabel ? <Text style={styles.paymentSubLabel}>{method.subLabel}</Text> : null}
            </View>
            <CheckBox
              value={selectedOption === method.id}
              onValueChange={() => handleSelect(method.id)}
            />
            {method.button ? (
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{method.button}</Text>
              </TouchableOpacity>
            ) : null}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.proceedButton}>
        <Text style={styles.proceedText}>Proceed to Pay ₹ {totalPrice.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cartItem: {
    fontSize: 16,
    color: '#000',
  },
  cartItemValue: {
    fontSize: 16,
    color: '#000',
  },
  totalPayable: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  totalPayableValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007E33',
  },
  paymentList: {
    marginBottom: 16,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 12,
    marginVertical: 6,
    borderRadius: 6,
    justifyContent: 'space-between',
  },
  optionText: {
    flex: 1,
  },
  paymentLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  paymentSubLabel: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  proceedButton: {
    backgroundColor: '#fdd835',
    padding: 16,
    borderRadius: 6,
    alignItems: 'center',
  },
  proceedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default PaymentOptions;
