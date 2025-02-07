import { StyleSheet, Text, View, Image, Animated, TouchableOpacity } from "react-native";
import React, { useEffect, useRef } from "react";
import { RouteProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; 


type SpendingDetailsRouteProp = RouteProp<any, "SpendingDetails">;

interface SpendingDetailsProps {
  route: SpendingDetailsRouteProp;
  navigation: any; 
}

const SpendingDetailsPage = ({ route, navigation }: SpendingDetailsProps) => {
  const { item } = route.params; 

  const translateY = useRef(new Animated.Value(1000)).current; 


  useEffect(() => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true, 
    }).start();
  }, [translateY]);

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY }] }]} 
    >
   
      <TouchableOpacity style={styles.exitButton} onPress={() => navigation.goBack()}>
        <Ionicons name="close" size={30} color="black" />
      </TouchableOpacity>

      <Image
        source={item.amount > 0 ? require("../assets/images/deposit.png") : require("../assets/images/expenses.png")}
        style={styles.transactionIcon}
      />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDate}>{item.date}</Text>
      <Text style={[styles.itemAmount, { color: item.amount > 0 ? "green" : "red" }]}>
        {Math.abs(item.amount).toFixed(2)} birr
      </Text>
      <Text style={styles.itemDetails}>Details: {item.details}</Text> {/* New details field */}
    </Animated.View>
  );
};

export default SpendingDetailsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "60%", 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: -4 },
    shadowRadius: 4,
    elevation: 5,
    width: "100%", 
  },
  exitButton: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  transactionIcon: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  itemName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemDate: {
    fontSize: 16,
    color: "#777",
    marginBottom: 10,
  },
  itemAmount: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
  itemDetails: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 10,
  },
});
