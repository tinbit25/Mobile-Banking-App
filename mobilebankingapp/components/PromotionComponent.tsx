import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";

const promotions = [
  {
    id: "1",
    title: "Earn 5% Cashback!",
    description: "Use your card for online purchases & earn up to 5% cashback.",
    image: require("@/assets/images/deposit.png"),
  },
  {
    id: "2",
    title: "Exclusive Loan Offers",
    description: "Get personal loans with low interest rates for a limited time!",
    image: require("@/assets/images/deposit.png"),
  },
  {
    id: "3",
    title: "Win Rewards!",
    description: "Refer a friend & earn exciting rewards when they sign up.",
    image: require("@/assets/images/deposit.png"),
  },
];

const PromotionComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎉 Special Promotions</Text>
      <FlatList
        data={promotions}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PromotionComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingLeft: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
    marginBottom: 10,
  },
  card: {
    width: 250,
    backgroundColor: Colors.grey,
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 15,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
  description: {
    fontSize: 14,
    color: "lightgray",
  },
});
