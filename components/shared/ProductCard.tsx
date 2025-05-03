import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Star } from 'lucide-react-native';
import { Product } from '@/types/product';
import Colors from '@/constants/Colors';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
  horizontal?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onPress,
  horizontal = true 
}) => {
  const formatPrice = (price: number) => {
    return `Rp ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  };

  return (
    <TouchableOpacity
      style={[styles.container, horizontal ? styles.horizontal : styles.vertical]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {product.discount && (
        <View style={styles.discountTag}>
          <Text style={styles.discountText}>{product.discount}%</Text>
        </View>
      )}
      
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      
      <View style={styles.contentContainer}>
        <Text 
          style={styles.name} 
          numberOfLines={horizontal ? 2 : 1}
        >
          {product.name}
        </Text>
        
        <View style={styles.ratingContainer}>
          <Star size={12} color={Colors.warning} fill={Colors.warning} />
          <Text style={styles.rating}>
            {product.rating} ({product.reviews})
          </Text>
        </View>
        
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{formatPrice(product.price)}</Text>
          {product.originalPrice && (
            <Text style={styles.originalPrice}>
              {formatPrice(product.originalPrice)}
            </Text>
          )}
        </View>
        
        {product.isBestSeller && (
          <View style={styles.bestSellerTag}>
            <Text style={styles.bestSellerText}>Terlaris</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: Colors.black,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
      web: {
        shadowColor: Colors.black,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      },
    }),
    position: 'relative',
  },
  horizontal: {
    width: 160,
    height: 260,
    marginHorizontal: 8,
  },
  vertical: {
    width: '48%',
    height: 260,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
    backgroundColor: Colors.veryLightGray,
  },
  contentContainer: {
    padding: 10,
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Colors.textPrimary,
    marginBottom: 6,
    height: 42,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  rating: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: Colors.textSecondary,
    marginLeft: 4,
  },
  priceContainer: {
    marginTop: 'auto',
  },
  price: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.primary,
  },
  originalPrice: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: Colors.textSecondary,
    textDecorationLine: 'line-through',
  },
  discountTag: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: Colors.error,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    zIndex: 1,
  },
  discountText: {
    color: Colors.white,
    fontSize: 10,
    fontFamily: 'Poppins-SemiBold',
  },
  bestSellerTag: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: Colors.accent,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    zIndex: 1,
  },
  bestSellerText: {
    color: Colors.black,
    fontSize: 10,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default ProductCard;