import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Banner } from '@/types/product';
import Colors from '@/constants/Colors';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.92;
const ITEM_HEIGHT = 200;

interface BannerCarouselProps {
  banners: Banner[];
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ banners }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const renderItem = ({ item }: { item: Banner }) => {
    return (
      <TouchableOpacity
        style={styles.bannerContainer}
        activeOpacity={0.9}
        onPress={() => item.link && router.push(item.link as any)}
      >
        <Image source={{ uri: item.imageUrl }} style={styles.bannerImage} />
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>{item.title}</Text>
          {item.description && (
            <Text style={styles.bannerDescription}>{item.description}</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex ? styles.paginationDotActive : {},
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={banners}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setActiveIndex(index)}
        autoplay={true}
        autoplayInterval={5000}
        loop={true}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        useScrollView={true}
      />
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 8,
  },
  bannerContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    height: ITEM_HEIGHT,
    width: ITEM_WIDTH,
    ...Platform.select({
      ios: {
        shadowColor: Colors.black,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
      },
      android: {
        elevation: 5,
      },
      web: {
        shadowColor: Colors.black,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
      },
    }),
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 16,
  },
  bannerTitle: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 4,
  },
  bannerDescription: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: Colors.lightGray,
  },
  paginationDotActive: {
    width: 12,
    height: 8,
    backgroundColor: Colors.primary,
  },
});

export default BannerCarousel;