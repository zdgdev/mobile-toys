import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '@/components/shared/Header';
import BannerCarousel from '@/components/home/BannerCarousel';
import CategoryList from '@/components/home/CategoryList';
import ProductSection from '@/components/home/ProductSection';
import Colors from '@/constants/Colors';
import { 
  categories, 
  banners, 
  getFeaturedProducts, 
  getNewProducts,
  getBestSellerProducts
} from '@/data/products';

export default function HomeScreen() {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();
  const bestSellerProducts = getBestSellerProducts();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <BannerCarousel banners={banners} />
        
        <CategoryList categories={categories} />
        
        <ProductSection
          title="Produk Terlaris"
          products={bestSellerProducts}
          viewAllLink="/category/best-sellers"
        />
        
        <ProductSection
          title="Baru Datang"
          products={newProducts}
          viewAllLink="/category/new-arrivals"
        />
        
        <ProductSection
          title="Rekomendasi Untukmu"
          products={featuredProducts}
          viewAllLink="/category/featured"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingBottom: 24,
  },
});