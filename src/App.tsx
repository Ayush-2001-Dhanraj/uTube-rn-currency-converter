import {
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {currencyByRupee} from './constants';
import CurrencyButton from './components/CurrencyButton';

const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    currencyByRupee[0],
  );
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleCurrencyChange = (currCurrency: Currency) =>
    setSelectedCurrency(currCurrency);

  const calculateConvertedValue = () => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setResult((numericValue * selectedCurrency.value).toFixed(2));
    } else setResult('');
  };

  useEffect(() => {
    calculateConvertedValue();
  }, [selectedCurrency, value]);

  return (
    <SafeAreaView style={{padding: 8, flex: 1, gap: 10}}>
      <Text style={styles.heading}>Currency Convertor</Text>
      <View>
        <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <CurrencyButton
              item={item}
              selected={selectedCurrency?.name === item.name}
              handlePress={handleCurrencyChange}
            />
          )}
          contentContainerStyle={styles.buttonContainer}
          columnWrapperStyle={styles.buttonContainer}
        />
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.currencyText}>₹</Text>
        <TextInput
          placeholder="Enter Value in Rupees (₹)"
          value={value}
          onChangeText={setValue}
          keyboardType="number-pad"
          style={styles.input}
          inputMode="numeric"
        />
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.currencyText}>{selectedCurrency.symbol}</Text>
        <TextInput
          placeholder="Converted Value appears here..."
          value={result}
          keyboardType="number-pad"
          style={styles.input}
          inputMode="numeric"
          editable={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    padding: 8,
  },
  currencyText: {
    fontSize: 32,
    width: 50,
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
