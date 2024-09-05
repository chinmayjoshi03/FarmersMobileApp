import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Feedback() {
  const [rating, setRating] = useState(0); // state to store selected rating
  const [review, setReview] = useState(''); // state to store review text

  const handleStarPress = (star) => {
    setRating(star); // update rating when a star is pressed
  };

  const handleReviewSubmit = () => {
    // Handle review submit logic here
    alert(`Rating: ${rating}, Review: ${review}`);
    // Reset rating and review after submission
    setRating(0);
    setReview('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feedback Page</Text>

      {/* 5 Star Rating */}
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
            <Ionicons
              name={star <= rating ? 'star' : 'star-outline'}
              size={32}
              color={star <= rating ? '#FFD700' : '#808080'}
              style={styles.star}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Review Message Input */}
      <TextInput
        style={styles.reviewInput}
        placeholder="Write your review..."
        value={review}
        onChangeText={setReview}
        multiline={true}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleReviewSubmit}>
        <Text style={styles.submitButtonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  star: {
    marginHorizontal: 5,
  },
  reviewInput: {
    height: 100,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top', // Align text at the top for multiline input
  },
  submitButton: {
    backgroundColor: '#96d406',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
