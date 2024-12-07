import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text, View, StyleSheet, SafeAreaView, Platform } from 'react-native';
import ManageItemsScreen from '../screens/ManageItemsScreen';
import ItemListScreen from '../screens/ItemListScreen';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const backgroundColor = route.name === 'Kelola Barang' ? '#2196f3' : '#ff9800';
          const textColor = isFocused ? '#fff' : '#000';

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={[styles.tabButton, { backgroundColor: isFocused ? backgroundColor : '#e0e0e0' }]}
            >
              <Text style={[styles.tabLabel, { color: textColor }]}>
                {options.tabBarLabel ?? options.title ?? route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false, // Menyembunyikan header bawaan
      }}
    >
      <Tab.Screen name="Kelola Barang" component={ManageItemsScreen} />
      <Tab.Screen name="List Barang" component={ItemListScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: '#f5f5f5', // Latar belakang navbar
    paddingBottom: Platform.OS === 'ios' ? 10 : 0, // Safe area untuk iOS
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 70,
    paddingHorizontal: 10,
    paddingVertical: 10, // Tambahkan padding untuk jarak atas-bawah
    backgroundColor: '#f5f5f5',
    marginBottom: 10, // Memberikan jarak navbar dari bagian bawah layar
  },
  tabButton: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default BottomTabNavigator;
