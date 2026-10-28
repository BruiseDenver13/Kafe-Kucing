import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MenuItem({ nama, harga, onTambahPesanan }) {
  const [qty, setQty] = useState(0);

  const handlePress = () => {
    setQty(qty + 1);   // update state lokal
    onTambahPesanan(); // beri tahu parent
  };

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.harga}>Rp {harga.toLocaleString('id-ID')}</Text>
        <Text style={styles.qty}>Dipesan: {qty}</Text>
      </View>
      <Button title="Tambah Pesanan" onPress={handlePress} color="#8d5524" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', padding: 14, borderRadius: 10, marginBottom: 12,
    elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, shadowOffset: { width: 0, height: 2 },
  },
  info: { marginBottom: 10 },
  nama: { fontSize: 17, fontWeight: 'bold' },
  harga: { fontSize: 14, color: '#666', marginTop: 2 },
  qty: { fontSize: 14, marginTop: 4 },
});