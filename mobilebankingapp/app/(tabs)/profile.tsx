
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Colors from "@/constants/Colors";
const Page: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const availableBalance = 824.0; 

  const handleSendMoney = () => {
    
    console.log(`Sending $${amount}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.content}>
        
        <Text style={styles.sendToText}>Send to</Text>
        <View style={styles.recipientContainer}>
          <Text style={styles.recipientName}>Ilham Stephenson</Text>
        </View>

        <TextInput
          style={styles.amountInput}
          placeholder="$0.00"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          placeholderTextColor="#B0B0B0"
        />

        <TouchableOpacity style={styles.sendButton} onPress={handleSendMoney}>
          <Text style={styles.buttonText}>Swipe to send money</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.black,
    paddingBottom:50,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  balanceText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 32,
    marginVertical: 10,
  },
  sendToText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 20,
  },
  recipientContainer: {
    backgroundColor:'transparent',
    borderColor:'white',
    borderWidth:1,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  recipientName: {
    fontSize: 18,
  },
  amountInput: {
    backgroundColor:'transparent',
    borderColor:'white',
    borderWidth:1,
    borderRadius: 10,
    padding: 15,
    fontSize: 24,
    
    marginVertical: 10,
    color: '#333333',
  },
  sendButton: {
    backgroundColor:'transparent',
    borderColor:'white',
    borderWidth:1,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#00A1FF',
  },
});

export default Page;
