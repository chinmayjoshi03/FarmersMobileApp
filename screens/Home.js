import React, { useRef, useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from './Footer';  // Adjust the path as necessary
import { ScrollView } from 'react-native-gesture-handler';

const categories = [
  {
    id: '1',
    name: 'Grains',
    image: require('../assets/images/items/wheat_item_1.png'),
    productName: 'Wheat',
    price: '₹20/kg',
    minOrderQty: '50 kg',
    location: 'Maharashtra, India',
  },
  {
    id: '2',
    name: 'Fruits',
    image: require('../assets/images/items/mango_item_1.png'),
    productName: 'Mango',
    price: '₹5/pc',
    minOrderQty: '100 pcs',
    location: 'Ratnagiri, India',
  },
  {
    id: '3',
    name: 'Vegetables',
    image: require('../assets/images/items/carrot_item_1.png'),
    productName: 'Carrot',
    price: '₹2/kg',
    minOrderQty: '30 kg',
    location: 'Nashik, India',
  },
  {
    id: '4',
    name: 'Flowers',
    image: require('../assets/images/items/rose_item_1.png'),
    productName: 'Rose',
    price: '₹1/stem',
    minOrderQty: '200 stems',
    location: 'Bangalore, India',
  },
  {
    id: '5',
    name: 'Spices and Herbs',
    image: require('../assets/images/items/turmeric_item_1.png'),
    productName: 'Turmeric',
    price: '₹1/kg',
    minOrderQty: '20 kg',
    location: 'Erode, India',
  },
];

const recommended_products =[{
  id : '1',
  name : 'Vegetables',
  image : require('../assets/images/recommendation/Hybrid_Fresh_Tomato.png'),
  productName: 'Hybrid Fresh Tomato',
  price: '₹20/kg',
  minOrderQty: '20 kg',
  location: 'kolkata, India',
},
{
  id : '2',
  name : 'Spices and Herbs',
  image : require('../assets/images/recommendation/Jeera(Cumin_Seed).png'),
  productName: 'Jeera(Cumin Seed)',
  price: '₹350/kg',
  minOrderQty: '5 kg',
  location: 'Bihar, India',  
},
{
  id : '3',
  name : 'Spices and Herbs',
  image : require('../assets/images/recommendation/Raw_Turmeric_Fingers.png'),
  productName: 'Raw Turmeric Fingers',
  price: '₹40/kg',
  minOrderQty: '50 kg',
  location: 'Ranchi, India',  
},
{
  id : '4',
  name : 'Vegetables',
  image : require('../assets/images/recommendation/Fresh_Carrot.png'),
  productName: 'Fresh Carrots',
  price: '₹20/kg',
  minOrderQty: '30 kg',
  location: 'Hyderabad, India',  
},
{
  id : '5',
  name : 'Flowers',
  image : require('../assets/images/recommendation/Rose_Plants.png'),
  productName: 'Rose Plants',
  price: '₹15/plant',
  minOrderQty: '25 plants',
  location: 'Noida, India',  
},
{
  id : '6',
  name : 'Dairy Products',
  image : require('../assets/images/recommendation/Farm_Fresh_Milk.png'),
  productName: 'Farm Fresh Milk',
  price: '₹60/litre',
  minOrderQty: '20 litre',
  location: 'Shivaji Nagar,Jaipur, India',  
},
{
  id : '7',
  name : 'Dry Fruits',
  image : require('../assets/images/recommendation/almonds.png'),
  productName: 'Almonds',
  price: '₹450/kg',
  minOrderQty: '5 kg',
  location: 'Bengaluru, India',  
},
{
  id : '8',
  name : 'Exotic Fruits',
  image : require('../assets/images/recommendation/A_Grade_Fresh_Kiwi_Fruits.png'),
  productName: 'A Grade Fresh Kiwi Fruits',
  price: '150/kg',
  minOrderQty: '20 kg',
  location: 'Varanasi, India',  
},
{
  id : '9',
  name : 'Grains',
  image : require('../assets/images/recommendation/Composite_Pearl_Millet(Bajra).png'),
  productName: 'Composite Pearl Millet (Bajra)',
  price: '₹25/kg',
  minOrderQty: '50 kg',
  location: 'Udaipur, India',  
},
]

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;


export default function HomePage({ navigation }) {
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current; // Animated value for scroll position
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (flatListRef.current) {
        const nextIndex = (currentIndex + 1) % categories.length;
        setCurrentIndex(nextIndex);

        flatListRef.current.scrollToIndex({
          index: nextIndex,
          animated: true,
          viewPosition: 0.5,         // Ensure the item is in the center of the view
        });
      }
    }, 3000); // Adjust the interval (in milliseconds)

    return () => clearInterval(scrollInterval);
  }, [currentIndex]);

  useEffect(() => {
    const listener = scrollX.addListener(({ value }) => {
      const index = Math.floor(value / screenWidth);
      setCurrentIndex(index);
    });

    return () => scrollX.removeListener(listener);
  }, [scrollX]);

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={item.image} style={styles.categoryImage} />
      <View style={styles.categoryInfo}>
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.minOrderQty}>Min Order: {item.minOrderQty}</Text>
        <Text style={styles.productLocation}>Farmed in: {item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  const scrollXInterpolate = scrollX.interpolate({
    inputRange: categories.map((_, index) => index * screenWidth),
    outputRange: categories.map((_, index) => (screenWidth / categories.length) * index),
    extrapolate: 'clamp',
  });

  const dotIndex = scrollX.interpolate({
    inputRange: categories.map((_, index) => index * screenWidth),
    outputRange: categories.map((_, index) => index),
    extrapolate: 'clamp',
  });
  const renderrecommendedproducts = ({ item }) => (
    <TouchableOpacity style={styles.recommendedproductsItem}>
      {item.image && <Image source={item.image} style={styles.recommendedproductsImage} />}
      <Text style={styles.recommendedproductsText}>{item.productName}</Text>
      <Text style={styles.recommendedproductspricetext}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={24} color="#96d406" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search for products, brands, and more"
        />
      </View>

      {/* Address */}
      <View style={styles.address}>
        <Ionicons name="location-outline" size={20} color="#96d406" style={styles.locationIcon} />
        <Text style={styles.addressText}>Hinjewadi, Pune-411057</Text>
      </View>

      {/* Categories List */}
      <View style={styles.listContainer}>
        <Text style={styles.Topsellers}>Top sellers</Text>
        <Animated.FlatList
          ref={flatListRef}
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
          snapToInterval={screenWidth + 10}
          decelerationRate="fast"
          snapToAlignment="center"
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />
        <View style={styles.indicatorContainer}>
          {categories.map((_, index) => (
            <Animated.View
              key={index}
              style={[
                styles.indicatorDot,
                {
                  backgroundColor: dotIndex.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: ['#ddd', '#96d406', '#ddd'],
                    extrapolate: 'clamp',
                  }),
                },
              ]}
            />
          ))}
       
      </View>
      </View>
      <View>
        <FlatList
          data={recommended_products}
          renderItem={renderrecommendedproducts}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          contentContainerStyle={styles.recommendedproductsList}
        />
      </View>
      </ScrollView>
      {/* Footer */}
      <View style={styles.footer}>
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
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchIcon: {
    position: 'absolute',
    left: 20,
    zIndex: 1,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 10,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  locationIcon: {
    marginRight: 5,
  },
  addressText: {
    color: "#96d406",
    fontSize: 16,
  },
  listContainer: {
    position: 'relative',
    marginTop: 10,
    height:220,
  },
  Topsellers: {
    paddingLeft:15,
    fontSize:20,
    fontWeight:'bold'
  },
  categoriesList: {
    height: 250, // Adjusted height to fit your design
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  categoryItem: {
    width: screenWidth,  // Adjust the width based on content
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    height: 180,
  },
  categoryImage: {
    width: 120,
    height: 120,
    borderRadius: 5,
  },
  categoryInfo: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    color: '#96d406',
    marginBottom: 5,
  },
  minOrderQty: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  productLocation: {
    fontSize: 14,
    color: '#888',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    margin: 7,
    backgroundColor: '#ddd',
  },

  recommendedproductsList: {
    padding: 10,
    flexGrow: 1,
  },
  recommendedproductsItem: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  recommendedproductsImage: {
    width: (screenWidth / numColumns) - 35,
    height: 90,
    borderRadius: 5,
    marginBottom: 5,
  },
  recommendedproductsText: {
    fontSize: 14,
    textAlign: 'center',
  },
  recommendedproductspricetext:{
    fontWeight:'bold',
  },
  scrollview:{
    marginBottom:50,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
