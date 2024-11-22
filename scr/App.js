import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Transaksi from './transaksi/Transaksi'; 
import EditMenu from './transaksi/EditMenu'; 
import PaymentMethod from './transaksi/PaymentMethod';
import Calculator from './transaksi/Calculator';
import Receipt from './transaksi/Receipt';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Halaman Transaksi */}
        <Stack.Screen
          name="Transaksi"
          component={Transaksi}
          options={({ navigation }) => ({
            title: 'Transaksi',
            headerStyle: { backgroundColor: 'green' },
            headerTintColor: '#fff',
            headerRight: () => (
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => navigation.navigate('EditMenu')}
              >
                <Text style={styles.headerButtonText}>Ubah</Text>
              </TouchableOpacity>
            ),
          })}
        />
        {/* Halaman Metode Pembayaran */}
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{
            title: 'Metode Pembayaran',
            headerStyle: { backgroundColor: 'green' },
            headerTintColor: '#fff',
          }}
        />
        {/* Halaman Edit Menu */}
        <Stack.Screen
          name="EditMenu"
          component={EditMenu}
          options={{
            title: 'Edit Menu',
            headerStyle: { backgroundColor: 'green' },
            headerTintColor: '#fff',
          }}
        />
        {/* Halaman Calculator */}
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{
            title: 'Calculator',
            headerStyle: { backgroundColor: 'green' },
            headerTintColor: '#fff',
          }}
        />
        {/* Halaman Struk Transaksi */}
        <Stack.Screen
          name="Receipt"
          component={Receipt}
          options={{
            title: 'Receipt',
            headerStyle: { backgroundColor: 'green' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    marginRight: 16,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  headerButtonText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
  },
});