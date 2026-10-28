import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrderSummary({ totalCount }) {
  return (
    <View style={styles.summary}>
      <Text style={styles.summaryText}>Total Item Dipesan: {totalCount}</Text>
      {totalCount >= 5 && (
        <Text style={styles.promo}>🎉 Selamat! Anda Mendapatkan Diskon 10%</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  summary: { backgroundColor: '#ffe8cc', padding: 14, borderRadius: 10, marginBottom: 16 },
  summaryText: { fontSize: 16, fontWeight: '600', color: '#5a3825' },
  promo: { marginTop: 8, fontSize: 14, color: '#2e7d32', fontWeight: 'bold' },
});