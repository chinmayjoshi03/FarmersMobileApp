import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing icons

export default function ChatWithCustomer({ route }) {
  const { name, status } = route.params; // Passed from the ChatsPage
  const [messages, setMessages] = useState([
    { id: '1', text: 'Is the product still available?', sender: 'seller', status: 'Pending' },
    { id: '2', text: 'Yes, it is.', sender: 'you', status: 'Approved' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  // Handle sending a new message
  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: newMessage, sender: 'you', status: 'Sent' }]);
      setNewMessage('');
    }
  };

  // Handle Approve/Reject for pending messages
  const handleApprove = () => {
    // Logic for approving a message
    alert('Order Approved!');
  };

  const handleReject = () => {
    // Logic for rejecting a message
    alert('Order Rejected!');
  };

  // Render each message
  const renderMessage = ({ item }) => (
    <View style={[styles.message, item.sender === 'you' ? styles.youMessage : styles.sellerMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Chat with {name}</Text> */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        style={styles.chatArea}
      />

      {/* Approve/Reject options for Pending status */}
      {status === 'Pending' && (
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.approveButton} onPress={handleApprove}>
            <Text style={styles.buttonText}>Approve</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rejectButton} onPress={handleReject}>
            <Text style={styles.buttonText}>Reject</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Input box for new messages */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type your message"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          {/* Replace Text with Icon */}
          <Icon name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chatArea: {
    flex: 1,
    marginBottom: 10,
  },
  message: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  sellerMessage: {
    backgroundColor: '#e1f7d5',
    alignSelf: 'flex-start',
  },
  youMessage: {
    backgroundColor: '#d1e7ff',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  approveButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  rejectButton: {
    backgroundColor: '#FF5722',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
