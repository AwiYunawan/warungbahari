import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function EditItem({ route, navigation }) {
  const { item, updateItem } = route.params;
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price.toString());
  const [category, setCategory] = useState(item.category);

  const handleSave = () => {
    if (!name.trim() || !price.trim() || !category.trim()) {
      Alert.alert('Error', 'Semua field wajib diisi!');
      return;
    }

    if (isNaN(price) || parseInt(price, 10) <= 0) {
      Alert.alert('Error', 'Harga harus berupa angka positif!');
      return;
    }

    const updatedItem = {
      ...item,
      name,
      price: parseInt(price, 10),
      category,
    };

    updateItem(updatedItem);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama Menu</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Masukkan nama menu"
      />

      <Text style={styles.label}>Harga</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Masukkan harga"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Kategori</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder="Masukkan kategori"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Simpan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
