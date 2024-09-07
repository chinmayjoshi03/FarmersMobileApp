import React, { useRef, useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions, Animated, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from './Footer';  // Adjust the path as necessary
import { ScrollView } from 'react-native-gesture-handler';
import { recommended_products } from './RecommendedData';
import { banner } from './BannerData';

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
export default function HomePage({ navigation }) {
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current; // Animated value for scroll position
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (flatListRef.current) {
        const nextIndex = (currentIndex + 1) % banner.length;
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

  const renderbanner = ({ item }) => {
    const handlePress = () => {
      const loaditems = { 
      id: item.id,
      name : item.name,
      image : item.image,
      productName: item.productName,
      price: item.price,
      minOrderQty: item.minOrderQty,
      location: item.location,
      farmerName:item.farmerName };  // Create a new object with the item id
      navigation.navigate('LoadItem', loaditems,  { itemName: item.productName });
  // Pass the updated loaditems object to the navigate function
    };
    return (
    <TouchableOpacity 
        style={styles.bannerItem}
        onPress={handlePress}
      >
      <Image source={item.image} style={styles.bannerImage} />
      <View style={styles.bannerInfo}>
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.minOrderQty}>Min Order: {item.minOrderQty}</Text>
        <Text style={styles.productLocation}>Farmed in: {item.location}</Text>
      </View>
    </TouchableOpacity>
    );
  }

  const scrollXInterpolate = scrollX.interpolate({
    inputRange: banner.map((_, index) => index * screenWidth),
    outputRange: banner.map((_, index) => (screenWidth / banner.length) * index),
    extrapolate: 'clamp',
  });
  const dotIndex = scrollX.interpolate({
    inputRange: banner.map((_, index) => index * screenWidth),
    outputRange: banner.map((_, index) => index),
    extrapolate: 'clamp',
  });
  const renderrecommendedproducts = ({ item }) => {
    const handlePress = () => {
      const loaditems = { 
        id: item.id,
        name : item.name,
        image : item.image,
        productName: item.productName,
        price: item.price,
        minOrderQty: item.minOrderQty,
        location: item.location,
        farmerName:item.farmerName };  // Create a new object with the item id
      navigation.navigate('LoadItem', loaditems,  { itemName: item.productName });  // Pass the updated loaditems object to the navigate function
    };
  
    return (
      <TouchableOpacity
        style={styles.recommendedproductsItem}
        onPress={handlePress}
      >
        <Image source={item.image} style={styles.recommendedproductsImage} />
        <Text style={styles.recommendedproductsText}>{item.productName}</Text>
        <Text style={styles.recommendedproductspricetext}>{item.price}</Text>
      </TouchableOpacity>
    );
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={24} color='#009900' style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search for products, brands, and more"
        />
      </View>

      {/* Address */}
      <View style={styles.address}>
        <Ionicons name="location-outline" size={20} color='#009900' style={styles.locationIcon} />
        <Text style={styles.addressText}>Hinjewadi, Pune-411057</Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.Topsellers}>Top sellers</Text>
        <Animated.FlatList
          ref={flatListRef}
          data={banner}
          renderItem={renderbanner}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bannerList}
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
          {banner.map((_, index) => (
            <Animated.View
              key={index}
              style={[
                styles.indicatorDot,
                {
                  backgroundColor: dotIndex.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: ['#ddd', '#009900', '#ddd'],
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
    color: '#009900',
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
  bannerList: {
    height: 250, // Adjusted height to fit your design
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  bannerItem: {
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
  bannerImage: {
    width: 120,
    height: 120,
    borderRadius: 5,
  },
  bannerInfo: {
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
    color: '#009900',
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