import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const notifications = [
  { id: '1', title: 'System Information', icon: '⚙️' },
  { id: '2', title: 'Transaction Message', icon: '💬' },
  { id: '3', title: 'Promotion News', icon: '📢' },
];

const Notifications = () => {
  const router = useRouter();

  const handleNotificationPress = () => {
    // Navigate to the notification detail screen
    router.push(`/notifications`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleNotificationPress}  // Added navigation on press
          >
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.arrow}>&gt;</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  icon: {
    fontSize: 24,
  },
  itemTitle: {
    flex: 1,
    marginLeft: 10,
  },
  arrow: {
    fontSize: 18,
  },
});

export default Notifications;
