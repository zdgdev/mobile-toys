import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import { Search, ShoppingBag, Bell } from 'lucide-react-native';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';
import { useCart } from '@/context/CartContext';

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
  showNotification?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title = 'TokoMainan',
  showSearch = true,
  showNotification = true,
}) => {
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {showSearch && (
        <View style={styles.searchContainer}>
          <Search size={20} color={Colors.gray} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Cari mainan, action figure..."
            placeholderTextColor={Colors.gray}
          />
        </View>
      )}

      <View style={styles.actionContainer}>
        {showNotification && (
          <TouchableOpacity style={styles.iconButton}>
            <Bell size={24} color={Colors.textPrimary} />
          </TouchableOpacity>
        )}

        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => router.push('/cart')}
        >
          <ShoppingBag size={24} color={Colors.textPrimary} />
          {cartItemCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {cartItemCount > 9 ? '9+' : cartItemCount}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: Colors.primary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceVariant,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: Colors.textPrimary,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: Colors.white,
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
  },
});

export default Header;