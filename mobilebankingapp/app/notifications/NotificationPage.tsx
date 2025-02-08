import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";

const notificationsData = [
  { id: "1", subject: "New Update Available", message: "A new update is available for your app.", date: "2025-02-07" },
  { id: "2", subject: "Account Security Alert", message: "Your account has been accessed from a new device.", date: "2025-02-06" },
  { id: "3", subject: "Payment Received", message: "Your payment of 2000 birr has been successfully processed.", date: "2025-02-05" },
];

const NotificationPage = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back(); // Goes back to the previous page
  };

  const renderNotification = ({ item }) => (
    <View style={styles.notificationCard}>
      <Text style={styles.subject}>{item.subject}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Ionicons name="arrow-back" size={24} color={Colors.white} />
      </TouchableOpacity>
      <FlatList
        data={notificationsData}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.notificationList}
      />
    </View>
  );
};

export default NotificationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  notificationList: {
    paddingBottom: 20,
  },
  notificationCard: {
    backgroundColor: Colors.grey,
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  subject: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.white,
  },
  message: {
    fontSize: 14,
    color: Colors.white,
    marginTop: 5,
  },
  date: {
    fontSize: 12,
    color: Colors.white,
    marginTop: 10,
    textAlign: "right",
  },
});
