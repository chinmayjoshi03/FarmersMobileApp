import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './screens/Home';
import SellerPage from './screens/sellerPage';
import MyOrders from './screens/MyOrders';
import Favourites from './screens/Favourites';
import ShipWithKissanYukt from './screens/ShipWithKissanYukt';
import Feedback from './screens/Feedback';
import HelpAndSupport from './screens/HelpAndSupport';
import ChooseLanguage from './screens/ChooseLanguage';
import SettingsScreen from './screens/settingscreen';
import ShareApp from './screens/ShareApp';
import AboutKissanYukt from './screens/AboutKissanYukt';
import Step1 from './screens/step1';
import Step2 from './screens/step2';
import Step3 from './screens/step3';
import Step4 from './screens/step4';
import Dashboard from './screens/Dashboard';
import Transactions from './screens/Transactions';
import Chats from './screens/chats';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => alert('Logging out')}
        icon={({ color, size }) => (
          <Ionicons name="log-out-outline" size={size + 4} color={color} /> // Slightly larger icon
        )}
        labelStyle={{ fontWeight: 'bold' }} // Make text bold
        style={{ marginTop: 'auto' }} // This ensures it's placed at the bottom
      />
    </DrawerContentScrollView>
  );
}

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#96d406' },
        headerTitleStyle: { color: '#ffffff', marginLeft: 10 },
        headerLeft: () => (
          <Pressable onPress={() => navigation.openDrawer()} style={{ paddingRight: 10 }}>
            <Ionicons name="menu-outline" size={32} color='#ffffff' />
          </Pressable>
        ),
        headerRight: () => (
          <Pressable onPress={() => alert("Profile opened")} style={{ paddingRight: 10 }}>
            <Ionicons name="notifications-outline" size={25} color='#ffffff' />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen name="Home" component={HomePage} options={{ title: "Welcome" }} />
    </Stack.Navigator>
  );
}

function SellerStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#8cbe2c' },
        headerTitleStyle: { color: '#ffffff', marginLeft: 10 },
      }}
    >
      <Stack.Screen 
        name="SellerPage" 
        component={SellerPage} 
        options={{
          title: 'Seller Page',
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()} style={{ paddingRight: 10 }}>
              <Ionicons name="menu-outline" size={32} color='#ffffff' />
            </Pressable>
          ),
        }} 
      />
      <Stack.Screen name="Step1" component={Step1} options={{ title: 'Step 1: Select Category' }} />
      <Stack.Screen name="Step2" component={Step2} options={{ title: 'Step 2: Name and Description' }} />
      <Stack.Screen name="Step3" component={Step3} options={{ title: 'Step 3: Upload Image' }} />
      <Stack.Screen name="Step4" component={Step4} options={{ title: 'Step 4: Enter Price' }} />
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard' }} />
      <Stack.Screen name="Transactions" component={Transactions} options={{ title: 'Transactions' }} />
      <Stack.Screen name="Chats" component={Chats} options={{ title: 'Chats' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false, // Manage header inside stack
          drawerActiveBackgroundColor: '#c6ff89',
          drawerActiveTintColor: '#498e00'
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeStack} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="SellerPage" 
          component={SellerStack} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="storefront-outline" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="My Orders" 
          component={MyOrders} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="cart-outline" size={28} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Favourites" 
          component={Favourites} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="heart-outline" size={28} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Ship with KissanYukt" 
          component={ShipWithKissanYukt} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="boat-outline" size={28} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Feedback" 
          component={Feedback} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="chatbox-ellipses-outline" size={28} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Help and Support" 
          component={HelpAndSupport} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="help-circle-outline" size={28} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Choose Language" 
          component={ChooseLanguage} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="language-outline" size={28} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="settings-outline" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Share App" 
          component={ShareApp} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="share-social-outline" size={28} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="About KissanYukt" 
          component={AboutKissanYukt} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="information-circle-outline" size={28} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}