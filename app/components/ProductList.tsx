import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ProductList: React.FC<{ products: any; onAddToCart: (product: any) => void }> = ({ products, onAddToCart }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
      {products.map((product: any) => (
        <View key={product.id} style={styles.productCard}>
          <Image source={product.image} style={styles.productImage} />
          <View style={styles.productFooter}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => onAddToCart(product)}
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.productName}>{product.name}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 16,
    paddingHorizontal: 8,
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
    backgroundColor: '#f5f5f5',
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  addButton: {
    backgroundColor: '#000',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 8,
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
    textAlign: 'center',
  },
});

export default ProductList;
