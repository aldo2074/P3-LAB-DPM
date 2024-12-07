import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const ItemListScreen = ({ route }) => {
  const [items, setItems] = useState([]);

  // Update daftar barang saat ada perubahan pada route.params.item
  useEffect(() => {
    if (route.params?.item) {
      setItems((prevItems) => [...prevItems, route.params.item]);
    }
  }, [route.params]);

  // Fungsi untuk menghapus item
  const handleDeleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const renderEmptyList = () => (
    <Text style={styles.emptyText}>Tidak ada barang yang tersedia.</Text>
  );

  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.item,
        item.status === 'Masuk' ? styles.itemMasuk : styles.itemKeluar,
      ]}
    >
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemStatus}>{item.status}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteItem(index)}
      >
        <Text style={styles.deleteButtonText}>Hapus</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Daftar Barang</Text>
        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          ListEmptyComponent={renderEmptyList}
          contentContainerStyle={items.length === 0 && styles.emptyContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#e3f2fd',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1a237e',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3, // Shadow untuk Android
    shadowColor: '#000', // Shadow untuk iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
  },
  itemMasuk: {
    backgroundColor: '#a5d6a7', // Hijau untuk barang Masuk
  },
  itemKeluar: {
    backgroundColor: '#ef9a9a', // Merah untuk barang Keluar
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
  },
  itemStatus: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#d32f2f',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#757575',
  },
});

export default ItemListScreen;
