import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Header from '@/components/Header';


const Layout = () => {


  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: Colors.grey,
              position: 'absolute',
            
              paddingTop:8,             
              bottom: 0,
              left: 0,
              right: 0,
              height: 65,
              elevation: 5,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderWidth: 1,
              borderColor: Colors.grey,
              borderTopWidth: 2,
              borderTopColor: 'white',
            },
            tabBarShowLabel: false,
          }}
        >
          <Tabs.Screen
            name="index" 
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ padding: 12, borderRadius: 30, backgroundColor: focused ? Colors.primary : Colors.secondary }}>
  <Ionicons name="home" size={20} color={focused ? Colors.white : Colors.tabInactive} />
</View>

              ),
            }}
          />
          <Tabs.Screen
            name="spending" 
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ padding: 12, borderRadius: 30, backgroundColor: focused ? Colors.blue : Colors.secondary }}>
                  <AntDesign name="swap" size={20} color={focused ? Colors.white : Colors.tabInactive} />
                </View>
              ),
            }}
          />
          <Tabs.Screen
            name="GraphPage" 
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ padding: 12, borderRadius: 30, backgroundColor: focused ? Colors.white : Colors.secondary }}>
                  <Ionicons name="analytics" size={20} color={focused ? Colors.grey : Colors.tabInactive} />
                </View>
              ),
            }}
          />
          <Tabs.Screen
            name="notifications" 
            options={{
              tabBarLabel: 'Notifications',
            }}
          />
        </Tabs>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default Layout;
