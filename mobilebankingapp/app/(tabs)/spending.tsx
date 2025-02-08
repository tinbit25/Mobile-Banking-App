import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SpendingType } from "@/types";
import Colors from "@/constants/Colors";
import DepositImage from '../../assets/images/deposit.png';
import ExpenseImage from '../../assets/images/expenses.png';
import spendingData from "../../data/spending.json";

const SpendingPage = () => {
  const router = useRouter();

  const handleCardClick = (item: SpendingType) => {
    router.push({ pathname: "/SpendingDetailsPage", params: item });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.spendingSectionWrapper} showsVerticalScrollIndicator={false}>
        {spendingData.map((item: SpendingType, index: number) => {
          const amount = parseFloat(item.amount);
          if (isNaN(amount)) return null;

          const transactionImage = index % 2 === 0 ? DepositImage : ExpenseImage;

          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleCardClick(item)}
              style={styles.spendingWrapper}
            >
              <View style={styles.iconWrapper}>
                <Image source={transactionImage} style={styles.transactionIcon} />
              </View>
              <View style={styles.textWrapper}>
                <View style={{ gap: 5 }}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={{ color: Colors.white }}>{item.date}</Text>
                </View>
                <View style={styles.amountWrapper}>
                  <Text style={[styles.itemAmount, { color: amount > 0 ? Colors.green : Colors.red }]}>
                    {Math.abs(amount).toFixed(2)} birr
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SpendingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingBottom: 50,
  },
  spendingSectionWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  spendingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: Colors.grey,
    padding: 12,
    borderRadius: 8,
    width: "100%",
  },
  iconWrapper: {
    backgroundColor: Colors.grey,
    padding: 12,
    borderRadius: 50,
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amountWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  itemName: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "600",
  },
  itemAmount: {
    fontSize: 14,
    fontWeight: "600",
  },
  transactionIcon: {
    width: 18,
    height: 18,
    marginRight: 5,
  },
  detailsContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: Colors.grey,
    borderRadius: 10,
  },
  detailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  itemDate: {
    color: Colors.white,
    fontSize: 14,
  },
  itemDescription: {
    color: Colors.white,
    fontSize: 14,
    marginVertical: 5,
  },
});
