import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PaymentMethodType } from '../types';
import Colors from "@/constants/Colors";
import BankIcon from "@/assets/icons/bank-svgrepo-com.svg";
import PayUIcon from "@/assets/icons/pay-u-svgrepo-com.svg";
import SendIcon from "@/assets/icons/send-alt-1-svgrepo-com.svg";
import WalletIcon from "@/assets/icons/wallet-credit-card.svg"; 


const paymentMethods = ({ expenseList }: { expenseList: PaymentMethodType[] }) => {
  const renderItem: ListRenderItem<PaymentMethodType> = ({ item }) => {
 
    const iconData: { [key: string]: { icon: JSX.Element, bgColor: string, textColor: string } } = {
      "Send Money": { icon: <SendIcon width={22} height={22} fill="rgba(0, 0, 0, 0.7)" />, bgColor: Colors.primary, textColor: Colors.white },
      "Pay with M-Pesa": { icon: <PayUIcon width={22} height={22} fill="rgba(0, 0, 0, 0.7)" />, bgColor: Colors.primary, textColor: Colors.white },
      "Buy Package": { icon: <WalletIcon width={22} height={22} fill="rgba(0, 0, 0, 0.7)" />, bgColor: Colors.primary, textColor: Colors.white }, 
      "Send to Bank": { icon: <BankIcon width={22} height={22} fill="rgba(0, 0, 0, 0.7)" />, bgColor: Colors.primary, textColor: Colors.white },
      default: { icon: <SendIcon width={22} height={22} fill="rgba(255, 255, 255, 0.3)" />, bgColor: Colors.primary, textColor: Colors.white },
    };


    const { icon, bgColor, textColor } = iconData[item.name] || iconData.default;

    return (
      <View style={[styles.expenseBlock, { backgroundColor: bgColor }]}>
        {icon}
        <Text style={[styles.expenseBlockTxt1, { color: textColor }]}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={{ paddingVertical: 20 }}>
      <FlatList
        data={expenseList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default paymentMethods;

const styles = StyleSheet.create({
  expenseBlock: {
    width: 100,
    padding: 15,
    borderRadius: 15,
    marginRight: 20,
    gap: 8,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  expenseBlockTxt1: {
    fontSize: 14,
  },
});
