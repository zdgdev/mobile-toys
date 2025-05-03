import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { router } from 'expo-router';
import { MapPin, CreditCard, CircleAlert as AlertCircle } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import { useCart } from '@/context/CartContext';

export default function CheckoutScreen() {
  const { items, getTotalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [address, setAddress] = useState({
    name: 'Zeroday Dev',
    phone: '081234567890',
    street: 'Jl. Merdeka No. 123',
    city: 'Jakarta Selatan',
    province: 'DKI Jakarta',
    postalCode: '12345',
  });

  const formatPrice = (price: number) => {
    return `Rp ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  };

  const handlePlaceOrder = () => {
    if (!address.name || !address.phone || !address.street || !address.city) {
      Alert.alert('Error', 'Mohon lengkapi informasi pengiriman');
      return;
    }

    Alert.alert(
      'Konfirmasi Pesanan',
      'Apakah Anda yakin ingin menyelesaikan pembelian ini?',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Ya, Pesan',
          onPress: () => {
            Alert.alert(
              'Pesanan Berhasil',
              'Terima kasih! Pesanan Anda telah dibuat dan akan segera diproses.',
              [
                {
                  text: 'OK',
                  onPress: () => {
                    clearCart();
                    router.replace('/');
                  },
                },
              ]
            );
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MapPin size={20} color={Colors.primary} />
            <Text style={styles.sectionTitle}>Alamat Pengiriman</Text>
          </View>
          
          <View style={styles.addressInputs}>
            <View style={styles.inputRow}>
              <View style={styles.inputCol}>
                <Text style={styles.inputLabel}>Nama Penerima</Text>
                <TextInput
                  style={styles.textInput}
                  value={address.name}
                  onChangeText={(text) => setAddress({ ...address, name: text })}
                  placeholder="Nama lengkap"
                />
              </View>
              <View style={styles.inputCol}>
                <Text style={styles.inputLabel}>No. Telepon</Text>
                <TextInput
                  style={styles.textInput}
                  value={address.phone}
                  onChangeText={(text) => setAddress({ ...address, phone: text })}
                  placeholder="Nomor telepon"
                  keyboardType="phone-pad"
                />
              </View>
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Alamat</Text>
              <TextInput
                style={styles.textInput}
                value={address.street}
                onChangeText={(text) => setAddress({ ...address, street: text })}
                placeholder="Nama jalan, nomor rumah"
                multiline
              />
            </View>
            
            <View style={styles.inputRow}>
              <View style={styles.inputCol}>
                <Text style={styles.inputLabel}>Kota</Text>
                <TextInput
                  style={styles.textInput}
                  value={address.city}
                  onChangeText={(text) => setAddress({ ...address, city: text })}
                  placeholder="Kota"
                />
              </View>
              <View style={styles.inputCol}>
                <Text style={styles.inputLabel}>Kode Pos</Text>
                <TextInput
                  style={styles.textInput}
                  value={address.postalCode}
                  onChangeText={(text) => setAddress({ ...address, postalCode: text })}
                  placeholder="Kode pos"
                  keyboardType="number-pad"
                />
              </View>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <CreditCard size={20} color={Colors.primary} />
            <Text style={styles.sectionTitle}>Metode Pembayaran</Text>
          </View>
          
          <View style={styles.paymentOptions}>
            <TouchableOpacity
              style={[
                styles.paymentOption,
                paymentMethod === 'cod' && styles.paymentOptionSelected,
              ]}
              onPress={() => setPaymentMethod('cod')}
            >
              <View style={styles.radioButton}>
                {paymentMethod === 'cod' && <View style={styles.radioButtonInner} />}
              </View>
              <View style={styles.paymentOptionContent}>
                <Text style={styles.paymentOptionTitle}>Cash on Delivery (COD)</Text>
                <Text style={styles.paymentOptionDesc}>Bayar saat barang diterima</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[
                styles.paymentOption,
                paymentMethod === 'transfer' && styles.paymentOptionSelected,
              ]}
              onPress={() => {
                Alert.alert(
                  'Informasi',
                  'Metode pembayaran ini belum tersedia saat ini.'
                );
              }}
            >
              <View style={styles.radioButton}>
                {paymentMethod === 'transfer' && <View style={styles.radioButtonInner} />}
              </View>
              <View style={styles.paymentOptionContent}>
                <Text style={styles.paymentOptionTitle}>Transfer Bank</Text>
                <Text style={styles.paymentOptionDesc}>Segera tersedia</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ringkasan Pesanan</Text>
          
          <View style={styles.orderItems}>
            {items.map((item) => (
              <View key={item.product.id} style={styles.orderItem}>
                <Text style={styles.orderItemName} numberOfLines={1}>
                  {item.product.name}
                </Text>
                <Text style={styles.orderItemQuantity}>{item.quantity}x</Text>
                <Text style={styles.orderItemPrice}>
                  {formatPrice(item.product.price * item.quantity)}
                </Text>
              </View>
            ))}
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>{formatPrice(getTotalPrice())}</Text>
          </View>
          
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Biaya Pengiriman</Text>
            <Text style={styles.summaryValue}>{formatPrice(15000)}</Text>
          </View>
          
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabelTotal}>Total</Text>
            <Text style={styles.summaryValueTotal}>
              {formatPrice(getTotalPrice() + 15000)}
            </Text>
          </View>
        </View>
        
        <View style={styles.noteSection}>
          <View style={styles.noteContent}>
            <AlertCircle size={20} color={Colors.warning} />
            <Text style={styles.noteText}>
              Pesanan akan diproses setelah Anda melakukan konfirmasi dan pembayaran.
            </Text>
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total Pembayaran</Text>
          <Text style={styles.totalValue}>{formatPrice(getTotalPrice() + 15000)}</Text>
        </View>
        
        <TouchableOpacity
          style={styles.placeOrderButton}
          onPress={handlePlaceOrder}
        >
          <Text style={styles.placeOrderButtonText}>Buat Pesanan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  section: {
    backgroundColor: Colors.white,
    padding: 16,
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.textPrimary,
    marginLeft: 8,
  },
  addressInputs: {
    marginTop: 8,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  inputCol: {
    flex: 1,
    marginRight: 8,
  },
  inputContainer: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.textPrimary,
  },
  paymentOptions: {
    marginTop: 8,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    marginBottom: 12,
  },
  paymentOptionSelected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight + '10',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  paymentOptionContent: {
    flex: 1,
  },
  paymentOptionTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Colors.textPrimary,
  },
  paymentOptionDesc: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: Colors.textSecondary,
  },
  orderItems: {
    marginTop: 12,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  orderItemName: {
    flex: 2,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.textPrimary,
  },
  orderItemQuantity: {
    flex: 0.5,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  orderItemPrice: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Colors.textPrimary,
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.textSecondary,
  },
  summaryValue: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Colors.textPrimary,
  },
  summaryLabelTotal: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.textPrimary,
  },
  summaryValueTotal: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: Colors.primary,
  },
  noteSection: {
    backgroundColor: Colors.primaryLight + '10',
    padding: 16,
    marginBottom: 100,
  },
  noteContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noteText: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: Colors.textSecondary,
    marginLeft: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.white,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalContainer: {
    flex: 1,
  },
  totalLabel: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: Colors.textSecondary,
  },
  totalValue: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: Colors.primary,
  },
  placeOrderButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  placeOrderButtonText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.white,
  },
});