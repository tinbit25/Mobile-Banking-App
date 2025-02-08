import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

const notificationDetails = {
  '1': { 
    title: 'System Information', 
    message: 'The system has been updated successfully. Please restart your application for changes to take effect.' 
  },
  '2': { 
    title: 'Transaction Message', 
    message: 'Your recent transaction of $250 has been completed. Check your account balance for details.' 
  },
  '3': { 
    title: 'Promotion News', 
    message: 'Exciting news! Get 20% off on your next purchase by using the promo code SAVE20 at checkout.' 
  },
};

const NotificationDetail = () => {
  const router = useRouter();
  const [notification, setNotification] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      const id = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;
      if (id && notificationDetails[id]) {
        setNotification(notificationDetails[id]);
        setError(false);
      } else {
        setError(true);
      }
    }
  }, [router.isReady, router.query]);

  const handleBackPress = () => {
    router.push('/notifications');
  };

  return (
    <View style={styles.container}>
      {error ? (
        <View>
          <Text style={styles.title}>Notification not found</Text>
          <Text style={styles.message}>The notification you are looking for does not exist or has been removed.</Text>
          <Button title="Back to Notifications" onPress={handleBackPress} />
        </View>
      ) : (
        <View>
          <Text style={styles.title}>{notification?.title}</Text>
          <Text style={styles.message}>{notification?.message}</Text>
          <Button title="Back to Notifications" onPress={handleBackPress} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default NotificationDetail;
