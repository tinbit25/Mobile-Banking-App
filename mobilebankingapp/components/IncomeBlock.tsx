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

const IncomeBlock = ({ incomeList }: { incomeList: IncomeType[] }) => {
  const renderItem: ListRenderItem<IncomeType> = ({ item }) => {
    let icon = <DollarIcon width={20} height={20} color={Colors.white} />;
    if (item.name === 'Freelancing') {
      icon = <WalletCardIcon width={20} height={20} color={Colors.white} />;
    } else if (item.name === 'Interest') {
      icon = <WalletAddMoneyIcon width={20} height={20} color={Colors.white} />;
    }

    return (
      <View style={styles.incomeBlock}>
        <View style={styles.headerWrapper}>
          <View style={styles.iconWrapper}>
            {icon}
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="more-horizontal" size={18} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <Text style={styles.itemName}>{item.name}</Text>
       
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        <Text style={styles.boldText}>Others</Text>
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
    marginHorizontal: 15, 
    marginBottom: 20,
  },
  incomeBlock: {
    backgroundColor: Colors.grey,
    padding: 20, 
    borderRadius: 15, 
    marginBottom: 20, 
    marginHorizontal: 5, 
    width: "45%",
    gap: 12, 
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconWrapper: {
    borderColor: "#666",
    borderWidth: 1,
    borderRadius: 50,
    padding: 8, 
  },
  itemName: {
    color: Colors.white,
    fontSize: 16,
    marginTop: 12, 
  },
  headerText: {
    color: Colors.white,
    fontSize: 18, 
    marginBottom: 20,
  },
  boldText: {
    fontWeight: "700",
  },
  flatListContent: {
    paddingBottom: 20, 
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
  },
});