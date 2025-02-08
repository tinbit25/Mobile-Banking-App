import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router"; 

const Header = () => {
  const router = useRouter(); 
  const [showNotifications, setShowNotifications] = useState(false); 

  const handleNavigation = () => {
    console.log("Navigating to Home...");
    router.push("/(tabs)"); 
  };

  const handleNotificationPress = () => {
    console.log("Navigating to Notifications...");
   
  
      router.push('/notifications'); 
    
    
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.wrapper} onPress={handleNavigation}>
        <View style={styles.userInfoWrapper}>
          <Image
            source={{ uri: "https://i.pravatar.cc/250?u=12" }}
            style={styles.userImg}
          />
          <View style={styles.userTxtWrapper}>
            <Text style={[styles.userText, { fontSize: 12 }]}>Hi, Tinbite</Text>
            <Text style={[styles.userText, { fontSize: 16 }]}>
              <Text style={styles.boldText}>Welcome!</Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.notificationIconWrapper}
        onPress={handleNotificationPress}
      >
        <Ionicons name="notifications-outline" size={26} color={Colors.white} />
        {showNotifications && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>1</Text> 
          </View>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    height: 100,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImg: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  userTxtWrapper: {
    marginLeft: 10,
  },
  userText: {
    color: Colors.white,
  },
  boldText: {
    fontWeight: "700",
  },
  notificationIconWrapper: {
    padding: 10, 
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: Colors.red,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "700",
  },
});

export default Header;