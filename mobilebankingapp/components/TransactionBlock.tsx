import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { ServiceType } from "@/types";
import { DollarIcon, WalletAddMoneyIcon, WalletCardIcon } from "@/constants/Icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const backgroundColors: Record<string, string> = {
  "Send and Request": "#D1EBFF",
  "Buy Airtime": "#FFF4B3",
  Withdraw: "#FFB3B3",
  "Top Up": "#FFCCE5",
  "Shop Locator": "#FFE8B3",
  "Bank Business": "#C1E6C9",
  Calendar: "#FFEC99",
};

const textColors: Record<string, string> = {
  "Send and Request": "#0A58C0",
  "Buy Airtime": "#9A7C00",
  Withdraw: "#B72A2A",
  "Top Up": "#D37D84",
  "Shop Locator": "#F3A200",
  "Bank Business": "#337F33",
  Calendar: "#9A7A00",
};

const icons: Record<string, any> = {
  Freelancing: WalletCardIcon,
  Interest: WalletAddMoneyIcon,
};

const TransactionBlock = ({ incomeList }: { incomeList: ServiceType[] }) => {
  const navigation = useNavigation();

  const renderItem: ListRenderItem<ServiceType> = ({ item }) => {
    const backgroundColor = backgroundColors[item.name] || Colors.grey;
    const textColor = textColors[item.name] || Colors.white;
    const IconComponent = icons[item.name] || DollarIcon;

    return (
      <TouchableOpacity
        style={[styles.incomeBlock, { backgroundColor }]}
        activeOpacity={0.8}
      >
        <View style={styles.headerWrapper}>
          <View style={styles.iconWrapper}>
            <IconComponent width={24} height={24} color={textColor} />
          </View>
          <Feather name="more-horizontal" size={20} color={textColor} />
        </View>
        <Text style={[styles.itemName, { color: textColor }]}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
     
      <FlatList
        data={incomeList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default TransactionBlock;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  incomeBlock: {
    padding: 16,
    borderRadius: 16,
    margin: 8,
    flex: 1,
    width: "48%",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  iconWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 50,
    padding: 8,
  },
  itemName: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
    textAlign: "center",
  },
  headerText: {
    color: Colors.white,
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "700",
  },
  boldText: {
    fontWeight: "800",
  },
  flatListContent: {
    justifyContent: "space-between",
  },
});
