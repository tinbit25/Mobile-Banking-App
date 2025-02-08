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
import { IncomeType } from "@/types";
import { DollarIcon, WalletAddMoneyIcon, WalletCardIcon } from "@/constants/Icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const IncomeBlock = ({ incomeList }: { incomeList: IncomeType[] }) => {
  const navigation = useNavigation();

  const renderItem: ListRenderItem<IncomeType> = ({ item }) => {
    let icon = <DollarIcon width={24} height={24} color={Colors.white} />;
    if (item.name === "Freelancing") {
      icon = <WalletCardIcon width={24} height={24} color={Colors.white} />;
    } else if (item.name === "Interest") {
      icon = <WalletAddMoneyIcon width={24} height={24} color={Colors.white} />;
    }

    return (
      <TouchableOpacity
        style={styles.incomeBlock}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("IncomeDetail", { incomeType: item })}
      >
        <View style={styles.headerWrapper}>
          <View style={styles.iconWrapper}>{icon}</View>
          <Feather name="more-horizontal" size={20} color={Colors.white} />
        </View>
        <Text style={styles.itemName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        <Text style={styles.boldText}>Income Sources</Text>
      </Text>
      <FlatList
        data={incomeList}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default IncomeBlock;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  incomeBlock: {
    backgroundColor: Colors.grey,
    padding: 20,
    borderRadius: 20,
    margin: 10,
    flex: 1,
    minWidth: "45%",
    elevation: 5,
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
    padding: 10,
  },
  itemName: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
    textAlign: "center",
  },
  headerText: {
    color: Colors.white,
    fontSize: 20,
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
