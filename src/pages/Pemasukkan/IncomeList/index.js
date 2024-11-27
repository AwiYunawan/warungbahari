import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function IncomeList({}) {
  const navigation = useNavigation();

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const storedTransactions =
        JSON.parse(await AsyncStorage.getItem('transactions')) || [];
      setTransactions(storedTransactions);
    };
    fetchTransactions();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Pemasukan</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.transactionItem}
            onPress={() =>
              navigation.navigate('TransactionDetail', {transaction: item})
            }>
            <Text style={styles.transactionText}>
              {item.date.toLocaleString()}
            </Text>
            <Text style={styles.transactionText}>
              Rp {item.totalPrice.toLocaleString('id-ID')}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Belum ada pemasukan</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 16},
  header: {fontSize: 24, fontWeight: 'bold', marginBottom: 20},
  transactionItem: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 8,
  },
  transactionText: {fontSize: 16, color: '#333'},
  emptyText: {textAlign: 'center', marginTop: 20, color: '#999'},
});
