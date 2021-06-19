import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed = currency => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please enter a value',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    let result = parseFloat(inputValue) * currencyPerRupee[currency];
    setResultValue(result.toFixed(2));
  };

  return (
    <>
      <ScrollView
        backgroundColor="#242B2E"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={[styles.resultValue, {marginTop: 20}]}>
              Exchange Rate is :
            </Text>

            <Text style={[styles.resultValue, {marginBottom: 20}]}>
              {resultValue}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter Value"
              placeholderTextColor="#c1c1c1"
              value={inputValue}
              onChangeText={inputValue =>
                setInputValue(inputValue)
              }></TextInput>
          </View>
          <View style={styles.convertButtonContainer}>
            {Object.keys(currencyPerRupee).map(currency => (
              <TouchableOpacity
                onPress={() => buttonPressed(currency)}
                key={currency}
                style={styles.converterButton}>
                <Text style={styles.convertButtonText}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242B2E',
  },
  resultContainer: {
    height: 90,
    marginTop: 80,
    justifyContent: 'center',
    borderColor: '#758283',
    borderWidth: 2,

    alignItems: 'center',
  },
  resultValue: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#758283',
  },
  input: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
    textDecorationStyle: 'dashed',
  },
  convertButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 70,
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '33.3%',
    borderWidth: 2,
    borderColor: '#242B2E',
    marginTop: 10,
    backgroundColor: '#1C8D73',
  },
  convertButtonText: {
    color: '#FFF',
    fontSize: 15,
  },
});
