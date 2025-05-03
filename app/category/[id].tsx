import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { ArrowLeft, SlidersHorizontal } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import ProductCard from '@/components/shared/ProductCard';
import { 
  getProductsByCategory, 
  categories,
  getFeaturedProducts,
  getNewProducts,
  getBestSellerProducts
} from '@/data/products';

export default function CategoryDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  let products = [];
  let categoryName = '';
  
  if (id === 'featured') {
    products = getFeaturedProducts();
    categoryName = 'Rekomendasi Untukmu';
  } else if (id === 'new-arrivals') {
    products = getNewProducts();
    categoryName = 'Baru Datang';
  } else if (id === 'best-sellers') {
    products = getBestSellerProducts();
    categoryName = 'Produk Terlaris';
  } else {
    products = getProductsByCategory(id);
    const category = categories.find(cat => cat.id === id);
    categoryName = category ? category.name : 'Produk';
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{categoryName}</Text>
        <TouchableOpacity style={styles.filterButton}>
          <SlidersHorizontal size={20} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            horizontal={false}
            onPress={() => router.push(`/product/${item.id}`)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productsGrid}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.textPrimary,
  },
  filterButton: {
    padding: 8,
  },
  productsGrid: {
    padding: 12,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});