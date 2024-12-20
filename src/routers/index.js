import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
  Touchable,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  Login,
  Splash,
  User,
  Kas,
  Laporan,
  Calculator,
  Transaksi,
  PaymentMethod,
  Receipt,
  IncomeList,
  TransactionDetail,
  OutcomeDetail,
  OutcomeList,
  EditMenu,
  EditItem,
  AddItem,
} from '../pages';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  CustomDrawer,
  IconUser,
  IconMenu,
  IconPengeluaran,
  IconPemasukan,
  IconLaporan,
  IconKas,
  IconEdit,
  IconCalender,
} from '../components';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Drawers" component={Drawers} />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: true, title: 'Metode Pembayaran'}}
      />
      <Stack.Screen
        name="Calculator"
        component={Calculator}
        options={{headerShown: true, title: 'Kalkulator'}}
      />
      <Stack.Screen
        name="Receipt"
        component={Receipt}
        options={{headerShown: true, title: 'Struk Pembayaran'}}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetail}
        options={{headerShown: true, title: 'Detail Transaksi'}}
      />
      <Stack.Screen
        name="OutcomeDetail"
        component={OutcomeDetail}
        options={{headerShown: true, title: 'Detail Pengeluaran'}}
      />
      <Stack.Screen
        name="EditMenu"
        component={EditMenu}
        options={{headerShown: true, title: 'Edit Menu'}}
      />
      <Stack.Screen
        name="EditItem"
        component={EditItem}
        options={{headerShown: true, title: 'Edit Item'}}
      />
      <Stack.Screen
        name="AddItem"
        component={AddItem}
        options={{headerShown: true, title: 'Tambah Menu Baru'}}
      />
    </Stack.Navigator>
  );
};

const Drawers = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Menu"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: 'rgba(94, 94, 94, 0.36)',
        drawerInactiveTintColor: '#000000',
        drawerActiveTintColor: '#000000',
        drawerLabelStyle: {
          fontSize: 16,
        },
        drawerItemStyle: {
          borderRadius: 0,
          marginHorizontal: -12,
        },
        drawerStyle: {
          margin: 0,
          padding: 0,
          maxWidth: '65%',
        },
      }}>
      <Drawer.Screen
        name="Menu"
        component={Transaksi}
        options={({navigation}) => ({
          drawerIcon: ({focused, size}) => <IconMenu />,
          
        })}
      />
      <Drawer.Screen
        name="Pengeluaran"
        component={OutcomeList}
        options={{
          drawerIcon: ({focused, size}) => <IconPengeluaran />,
        }}
      />
      <Drawer.Screen
        name="Pemasukan"
        component={IncomeList}
        options={{
          drawerIcon: ({focused, size}) => <IconPemasukan />,
        }}
      />
      <Drawer.Screen
        name="Laporan"
        component={Laporan}
        options={{
          drawerIcon: ({focused, size}) => <IconLaporan />,
          headerRight: () => (
            <View style={{marginRight: 15}}>
              <IconCalender />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Kas"
        component={Kas}
        options={{
          drawerIcon: ({focused, size}) => <IconKas />,
        }}
      />
      <Drawer.Screen
        name="User"
        component={User}
        options={{
          drawerIcon: ({focused, size}) => <IconUser />,
        }}
      />
    </Drawer.Navigator>
  );
};

export {Routers, Drawers};
