import { ImageBackground, StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from "react";
import Colors from "@/constants/Colors";
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import ExpenseBlock from "@/components/paymentMethods";
import TransactionBlock from "@/components/TransactionBlock";
import ExpenseList from '@/data/paymentMethods.json';
import incomeList from '@/data/serviceTypes.json';
import PromotionComponent from "@/components/PromotionComponent";

const Page = () => {
  const router = useRouter();

  return (
    <>
      <View style={[styles.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={require('../../assets/images/blue_diagonal_square_grid_pattern_background.jpg')}
            style={styles.contentBlock}
            imageStyle={{ resizeMode: 'cover' }}
          >
            <TouchableOpacity
              style={styles.arrowButton}
              onPress={() => router.push('/(tabs)/spending')}
            >
              <Ionicons name="arrow-forward" size={24} color={Colors.white} />
            </TouchableOpacity>
            <View style={styles.contentText}>
              <Text style={{ color: Colors.white, fontSize: 16 }}>
                <Text style={{ fontWeight: '700' }}>Expenses</Text>
              </Text>
              <Text style={{ color: Colors.white, fontSize: 36, fontWeight: '700' }}>
                1475.<Text style={{ fontSize: 22, fontWeight: '400' }}>00 birr</Text>
              </Text>
            </View>
          </ImageBackground>
          <ExpenseBlock expenseList={ExpenseList} />
          <TransactionBlock incomeList={incomeList} />
          <PromotionComponent />
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
    backgroundColor: Colors.black,
    paddingHorizontal: 2,
  },
  contentBlock: {
    width: '100%',
    height: 150,
    marginVertical: 20,
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },
  arrowButton: {
    position: 'absolute',
    right: 60,
    top: 60,
    zIndex: 10,
  },
  contentText: {
    paddingLeft: 40,
    paddingTop: 30,
  },
});