import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';

export default function OutcomeDetail({route}) {
  const {category} = route.params;
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [newItem, setNewItem] = useState({name: '', price: '', note: ''});

  const handleAddItem = () => {
    if (editingItem) {
      setItems(prev =>
        prev.map(item =>
          item.id === editingItem.id ? {...editingItem, ...newItem} : item,
        ),
      );
      setEditingItem(null);
    } else {
      setItems(prev => [...prev, {...newItem, id: Date.now().toString()}]);
    }
    setNewItem({name: '', price: '', note: ''});
    setModalVisible(false);
  };

  const handleDeleteItem = id => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>
        {category.name} - Total: {items.length} item
      </Text>

      {/* Tabel Belanja */}
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.itemRow}>
            <View>
              <Text>{item.name}</Text>
              <Text>Rp {item.price}</Text>
              <Text>{item.note}</Text>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => {
                  setEditingItem(item);
                  setNewItem(item);
                  setModalVisible(true);
                }}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteItem(item.id)}>
                <Text style={styles.deleteText}>Hapus</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Tambah Item */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.addText}>Tambah Item</Text>
      </TouchableOpacity>

      {/* Modal Form */}
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              placeholder="Nama Produk"
              value={newItem.name}
              onChangeText={text => setNewItem(prev => ({...prev, name: text}))}
              style={styles.input}
            />
            <TextInput
              placeholder="Harga Satuan"
              value={newItem.price}
              keyboardType="numeric"
              onChangeText={text =>
                setNewItem(prev => ({...prev, price: text}))
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Keterangan"
              value={newItem.note}
              onChangeText={text => setNewItem(prev => ({...prev, note: text}))}
              style={styles.input}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleAddItem}>
              <Text style={styles.saveText}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: '#fff'},
  header: {fontSize: 18, fontWeight: 'bold', marginBottom: 10},
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  actionButtons: {flexDirection: 'row'},
  editButton: {backgroundColor: '#FFEB3B', padding: 5, borderRadius: 5},
  deleteButton: {
    backgroundColor: '#F44336',
    padding: 5,
    marginLeft: 10,
    borderRadius: 5,
  },
  editText: {color: '#000'},
  deleteText: {color: '#fff'},
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
  },
  addText: {color: '#fff', textAlign: 'center', fontWeight: 'bold'},
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '80%',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    padding: 5,
  },
  saveButton: {backgroundColor: '#4CAF50', padding: 10, borderRadius: 5},
  saveText: {color: '#fff', textAlign: 'center'},
});
