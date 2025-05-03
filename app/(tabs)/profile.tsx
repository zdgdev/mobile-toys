import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import { User, ShoppingBag, Heart, MapPin, Settings, CircleHelp as HelpCircle, LogOut, ChevronRight } from 'lucide-react-native';
import Colors from '@/constants/Colors';

export default function ProfileScreen() {
  const handleLogout = () => {
    Alert.alert(
      'Konfirmasi Keluar',
      'Apakah Anda yakin ingin keluar dari akun?',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Keluar',
          onPress: () => console.log('User logged out'),
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profil Saya</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Zeroday Dev</Text>
            <Text style={styles.profileEmail}>admin@zerodaydev.id</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>Aktivitas Saya</Text>
        </View>

        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <ShoppingBag size={20} color={Colors.primary} />
            <Text style={styles.menuItemText}>Pesanan Saya</Text>
            <ChevronRight size={20} color={Colors.gray} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Heart size={20} color={Colors.primary} />
            <Text style={styles.menuItemText}>Wishlist</Text>
            <ChevronRight size={20} color={Colors.gray} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <MapPin size={20} color={Colors.primary} />
            <Text style={styles.menuItemText}>Alamat Pengiriman</Text>
            <ChevronRight size={20} color={Colors.gray} />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>Pengaturan</Text>
        </View>

        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <User size={20} color={Colors.primary} />
            <Text style={styles.menuItemText}>Informasi Akun</Text>
            <ChevronRight size={20} color={Colors.gray} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Settings size={20} color={Colors.primary} />
            <Text style={styles.menuItemText}>Pengaturan Aplikasi</Text>
            <ChevronRight size={20} color={Colors.gray} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <HelpCircle size={20} color={Colors.primary} />
            <Text style={styles.menuItemText}>Bantuan</Text>
            <ChevronRight size={20} color={Colors.gray} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <LogOut size={20} color={Colors.error} />
          <Text style={styles.logoutText}>Keluar</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
          <Text style={styles.copyrightText}>© 2024 Zeroday Development Groups</Text>
          <Text style={styles.openSourceText}>Open Source Project</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.white,
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.textPrimary,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 16,
    marginBottom: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.veryLightGray,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.textPrimary,
  },
  profileEmail: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.textSecondary,
  },
  editButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  editButtonText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: Colors.primary,
  },
  sectionTitle: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  sectionTitleText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: Colors.textPrimary,
  },
  menuSection: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  menuItemText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.textPrimary,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  logoutText: {
    marginLeft: 8,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.error,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  versionText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  copyrightText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  openSourceText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: Colors.primary,
  },
});