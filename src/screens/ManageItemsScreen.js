import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';

const ManageItemsScreen = ({ navigation }) => {
  const [itemName, setItemName] = useState('');
  const [itemStatus, setItemStatus] = useState('');

  const handleAddItem = () => {
    if (!itemName.trim() || !itemStatus) {
      Alert.alert('Error', 'Nama barang dan status harus diisi!');
      return;
    }

    navigation.navigate('List Barang', { item: { name: itemName, status: itemStatus } });
    setItemName('');
    setItemStatus('');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pengelolaan Barang Masuk dan Keluar</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Tambah Barang</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama Barang"
          value={itemName}
          onChangeText={setItemName}
        />
        <Text style={styles.label}>Status Barang:</Text>
        <View style={styles.statusContainer}>
          <TouchableOpacity
            style={[styles.statusButton, itemStatus === 'Masuk' && styles.activeStatus]}
            onPress={() => setItemStatus('Masuk')}
            activeOpacity={0.7}
          >
            <Text style={styles.statusText}>Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.statusButton, itemStatus === 'Keluar' && styles.activeStatus]}
            onPress={() => setItemStatus('Keluar')}
            activeOpacity={0.7}
          >
            <Text style={styles.statusText}>Keluar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddItem} activeOpacity={0.7}>
          <Text style={styles.addButtonText}>Tambah Barang</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#f9f9f9' },
  header: { padding: 20, backgroundColor: '#4caf50', alignItems: 'center' },
  headerText: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  form: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#f8f8f8',
  },
  label: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#555' },
  statusContainer: { flexDirection: 'row', marginBottom: 20 },
  statusButton: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  activeStatus: {
    backgroundColor: '#4caf50',
    borderColor: '#388e3c',
  },
  statusText: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
  addButton: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: { fontSize: 18, color: '#fff', fontWeight: 'bold' },
});

export default ManageItemsScreen;
