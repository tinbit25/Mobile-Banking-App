import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";

const promotions = [
  {
    id: "1",
    title: "Earn 5% Cashback!",
    description: "Use your card for online purchases & earn up to 5% cashback.",
    image: require("@/assets/images/cheers.png"),
  },
  {
    id: "2",
    title: "Exclusive Loan Offers",
    description: "Get personal loans with low interest rates for a limited time!",
    image: require("@/assets/images/confetti.png"),
  },
  {
    id: "3",
    title: "Win Rewards!",
    description: "Refer a friend & earn exciting rewards when they sign up.",
    image: require("@/assets/images/fireworks.png"),
  },
];

const PromotionComponent = () => {
  const renderItem = ({ item }: { item: typeof promotions[number] }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎉 Special Promotions</Text>
      <FlatList
        data={promotions}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
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
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
    marginBottom: 10,
  },
  card: {
    width: 180,
    backgroundColor: Colors.grey,
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.white,
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: "lightgray",
  },
  listContent: {
    paddingRight: 20,
  },
});
