import React, { useState } from 'react';
import { Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import OrderSummary from './OrderSummary';
import MenuItem from './MenuItem';

const DAFTAR_MENU = [
  { id: '1', nama: 'Kopi Susu Catnip', harga: 20000 },
  { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
  { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
];

export default function App() {
  const [totalPesanan, setTotalPesanan] = useState(0);

  const tambahTotal = () => setTotalPesanan(totalPesanan + 1);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🐱 Kafe Kucing</Text>

      <OrderSummary totalCount={totalPesanan} />

      <FlatList
        data={DAFTAR_MENU}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItem
            nama={item.nama}
            harga={item.harga}
            onTambahPesanan={tambahTotal}
          />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff8f0', paddingTop: 40, paddingHorizontal: 16 },
  header: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 16, color: '#5a3825' },
});