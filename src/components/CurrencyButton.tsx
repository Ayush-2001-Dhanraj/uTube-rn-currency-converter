import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

interface CurrencyBtnProps {
  item: Currency;
  selected?: boolean;
  handlePress: (currCurrency: Currency) => void;
}

const CurrencyButton = ({item, selected, handlePress}: CurrencyBtnProps) => {
  return (
    <TouchableOpacity
      style={[styles.btn, selected ? styles.selectedBtn : null]}
      onPress={() => handlePress(item)}>
      <Text style={[styles.txt, styles.name]}>{item.name}</Text>
      <Text style={[styles.txt, styles.flag]}>{item.flag}</Text>
      <Text style={[styles.txt, styles.symbol]}>{item.symbol}</Text>
    </TouchableOpacity>
  );
};

export default CurrencyButton;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    padding: 8,
    gap: 4,
  },
  selectedBtn: {
    elevation: 8,
    borderRadius: 8,
    backgroundColor: 'pink',
  },
  txt: {
    textAlign: 'center',
  },
  name: {
    fontSize: 18,
  },
  flag: {
    fontSize: 32,
  },
  symbol: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
