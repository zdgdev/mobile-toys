import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
  SafeAreaView,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Star, Heart, Share, ShoppingCart, Truck } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';

const { width } = Dimensions.get('window');
const IMAGE_HEIGHT = 300;

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) {
    return (
      <SafeAreaView style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Produk tidak ditemukan</Text>
      </SafeAreaView>
    );
  }

  const images = product.images || [product.imageUrl];

  const formatPrice = (price: number) => {
    return `Rp ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    Alert.alert(
      'Sukses',
      `${product.name} telah ditambahkan ke keranjang`,
      [{ text: 'OK' }]
    );
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    // Navigate to checkout page
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: images[activeImageIndex] }}
            style={styles.mainImage}
          />
          {product.discount && (
            <View style={styles.discountTag}>
              <Text style={styles.discountText}>{product.discount}%</Text>
            </View>
          )}
        </View>

        <View style={styles.thumbnailContainer}>
          {images.map((img, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveImageIndex(index)}
              style={[
                styles.thumbnail,
                activeImageIndex === index && styles.activeThumbnail,
              ]}
            >
              <Image source={{ uri: img }} style={styles.thumbnailImage} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.ratingContainer}>
              <Star size={16} color={Colors.warning} fill={Colors.warning} />
              <Text style={styles.rating}>
                {product.rating} ({product.reviews} ulasan)
              </Text>
            </View>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>{formatPrice(product.price)}</Text>
            {product.originalPrice && (
              <Text style={styles.originalPrice}>
                {formatPrice(product.originalPrice)}
              </Text>
            )}
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Deskripsi</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pengiriman</Text>
            <View style={styles.shippingInfo}>
              <Truck size={18} color={Colors.primary} />
              <Text style={styles.shippingText}>
                Pengiriman ke seluruh Indonesia
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.quantitySection}>
            <Text style={styles.quantityLabel}>Jumlah:</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity
                style={[
                  styles.quantityButton,
                  quantity <= 1 && styles.quantityButtonDisabled,
                ]}
                onPress={() => quantity > 1 && setQuantity(quantity - 1)}
                disabled={quantity <= 1}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityValue}>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => setQuantity(quantity + 1)}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.stockText}>
              Stok: {product.stock} tersisa
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.iconButton}>
            <Heart
              size={24}
              color={Colors.textPrimary}
              strokeWidth={2}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Share
              size={24}
              color={Colors.textPrimary}
              strokeWidth={2}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.mainButtons}>
          <TouchableOpacity
            style={[styles.button, styles.cartButton]}
            onPress={handleAddToCart}
          >
            <ShoppingCart size={20} color={Colors.white} />
            <Text style={styles.cartButtonText}>Keranjang</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buyButton]}
            onPress={handleBuyNow}
          >
            <Text style={styles.buyButtonText}>Beli Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  imageContainer: {
    width: width,
    height: IMAGE_HEIGHT,
    backgroundColor: Colors.white,
    position: 'relative',
  },
  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  thumbnailContainer: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: Colors.white,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  activeThumbnail: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    marginTop: 8,
  },
  header: {
    marginBottom: 8,
  },
  productName: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.textSecondary,
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  price: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: Colors.primary,
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: Colors.textSecondary,
    textDecorationLine: 'line-through',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 16,
  },
  section: {
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  shippingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shippingText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.textSecondary,
    marginLeft: 8,
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  quantityLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Colors.textPrimary,
    marginRight: 12,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonDisabled: {
    backgroundColor: Colors.veryLightGray,
  },
  quantityButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: Colors.white,
  },
  quantityValue: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: Colors.textPrimary,
    marginHorizontal: 12,
    minWidth: 24,
    textAlign: 'center',
  },
  stockText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: Colors.textSecondary,
    marginLeft: 'auto',
  },
  footer: {
    backgroundColor: Colors.white,
    padding: 12,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  actionButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  mainButtons: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cartButton: {
    backgroundColor: Colors.secondary,
    marginRight: 8,
  },
  cartButtonText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.white,
    marginLeft: 4,
  },
  buyButton: {
    backgroundColor: Colors.primary,
  },
  buyButtonText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.white,
  },
  discountTag: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: Colors.error,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  discountText: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: Colors.white,
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  notFoundText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: Colors.textPrimary,
  },
});