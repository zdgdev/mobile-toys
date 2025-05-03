import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold 
} from '@expo-google-fonts/poppins';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { CartProvider } from '@/context/CartContext';
import Colors from '@/constants/Colors';

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Bold': Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <CartProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
        <Stack.Screen 
          name="product/[id]" 
          options={{ 
            headerShown: true,
            headerTitle: 'Detail Produk',
            headerTintColor: Colors.primary,
            headerTitleStyle: {
              fontFamily: 'Poppins-Medium',
            },
          }} 
        />
        <Stack.Screen 
          name="cart/checkout" 
          options={{ 
            headerShown: true,
            headerTitle: 'Checkout',
            headerTintColor: Colors.primary,
            headerTitleStyle: {
              fontFamily: 'Poppins-Medium',
            },
          }} 
        />
      </Stack>
      <StatusBar style="auto" />
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});