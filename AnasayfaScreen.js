import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function AnasayfaScreen() {

    function vucutIndeksiniHesapla(kilo, boy) {
        // Boyu metre cinsine dönüştürme
        const boyMetreCinsinden = boy / 100;
    
        // BMI hesaplama formülü: kilo / (boyMetreCinsinden * boyMetreCinsinden)
        const vucutIndeksi = kilo / (boyMetreCinsinden * boyMetreCinsinden);
    
        return vucutIndeksi;
      }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => vucutIndeksiniHesapla()}>
        <Text style={styles.buttonText}>Vücut İndeksini Hesapla</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BesinTarifleri')}>
        <Text style={styles.buttonText}>Besin Tarifleri</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SporProgramlari')}>
        <Text style={styles.buttonText}>Spor Programları</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7fff7',
  },
  button: {
    backgroundColor: '#88cb00',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
