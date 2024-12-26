import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import BurgerMenu from './components/BurgerMenu';
import BannerSlider from './components/BannerSlider';
import ProductList from './components/ProductList';
import TabBar from './components/TabBar';

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
        <Text style={styles.title}>Nike App Store</Text>
        <Text style={styles.cartCount}>Cart: {cartCount}</Text>
      </View>

      {/* Banner Slider */}
      <BannerSlider />

      {/* Product List */}
      <View style={styles.productSection}>
        <Text style={styles.sectionTitle}>Products</Text>
        <FlatList
          data={items}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductList products={[item]} onAddToCart={addToCart} />
          )}
          columnWrapperStyle={styles.row}
        />
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
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  cartCount: {
    fontSize: 16,
    color: '#888',
  },
  productSection: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default App;
