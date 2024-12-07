import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Navbar = ({ currentScreen, setCurrentScreen }) => {
  const getButtonStyle = (screen) => [
    styles.navButton,
    currentScreen === screen && styles.activeButton,
  ];

  return (
    <View style={styles.navbar}>
      {['manageItems', 'itemList'].map((screen) => (
        <TouchableOpacity
          key={screen}
          style={getButtonStyle(screen)}
          onPress={() => setCurrentScreen(screen)}
        >
          <Text style={styles.navButtonText}>
            {screen === 'manageItems' ? 'Kelola Barang' : 'List Barang'}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  navButton: {
    padding: 10,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#388E3C',
  },
  navButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Navbar;
