import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import BurgerMenu from './components/BurgerMenu';
import BannerSlider from './components/BannerSlider';
import TabBar from './components/TabBar';
import Toast from 'react-native-toast-message';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const items = [
    { id: '1', name: 'Nike Vapormax', image: require('./assets/vapormax.png') },
    { id: '2', name: 'Nike Airmax', image: require('./assets/airmax.png') },
    { id: '3', name: 'Nike Revolution', image: require('./assets/revolution.png') },
    { id: '4', name: 'Nike Pegasus', image: require('./assets/pegasus.png') },
  ];

  const addToCart = (product: any) => {
    setCartCount(cartCount + 1);
    Alert.alert('Added to Cart', `${product.name} has been added to your cart.`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <BurgerMenu />
        <View style={styles.cartContainer}>
          <MaterialIcons name="shopping-cart" size={24} color="#000" />
          {cartCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartCount}</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.titleSection}>
        <Text style={styles.title}>Nike App Store</Text>
      </View>

      {/* Banner Slider */}
      <BannerSlider />

      {/* Product List */}
      <View style={styles.productSection}>
        <Text style={styles.sectionTitle}>Products</Text>
        <View style={styles.scrollContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item) => (
              <View key={item.id} style={styles.productCard}>
                <Image source={item.image} style={styles.productImage} />
                <View style={styles.productFooter}>
                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => addToCart(item)}
                  >
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                  <Text style={styles.productName}>{item.name}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Tab Bar */}
      <TabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  titleSection: {
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  cartContainer: {
    position: 'relative',
    marginRight: 16,
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: '#ff0000',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productSection: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  scrollContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  productCard: {
    width: 180, 
    height: 260, 
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 180, 
    resizeMode: 'contain', 
  },
  productFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'space-between', 
  },
  addButton: {
    backgroundColor: '#000',
    width: 32, 
    height: 32, 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4, 
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 16, 
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'left', 
  },
});


export default App;
