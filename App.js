import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './screens/Home';
import SellerPage from './screens/sellerPage';
import Cart from './screens/Cart';
import MyOrders from './screens/MyOrders';
import Favourites from './screens/Favourites';
import ShipWithKissanYukt from './screens/ShipWithKissanYukt';
import Feedback from './screens/Feedback';
import HelpAndSupport from './screens/HelpAndSupport';
import ChooseLanguage from './screens/ChooseLanguage';
import SettingsScreen from './screens/settingscreen';
import ShareApp from './screens/ShareApp';
import AboutKissanYukt from './screens/AboutKissanYukt';
import ProfilePage from './screens/Profile';
import CategoriesPage from './screens/CategoriesPage';
import Step1 from './screens/step1';
import Step2 from './screens/step2';
import Step3 from './screens/step3';
import Step4 from './screens/step4';
import Dashboard from './screens/Dashboard';
import Transactions from './screens/Transactions';
import ChatsPage from './screens/chats';
import LoadItem from './screens/LoadItem';
import CategoryItemsPage from './screens/CategoriesItem';

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
      
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="Categories" component={CategoriesPage} />
      <Stack.Screen name="CategoryItemsPage" component={CategoryItemsPage} />
      <Stack.Screen name="LoadItem" component={LoadItem} />
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
      <Stack.Screen name="Chats" component={ChatsPage} options={{ title: 'Chats' }} />
    </Stack.Navigator>
  );
}

// My Orders Stack Navigator
function MyOrdersStack({ navigation }) {
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
      }}
    >
      <Stack.Screen name="My Orders" component={MyOrders} options={{ title: 'My Orders' }} />
    </Stack.Navigator>
  );
}

// Favourites Stack Navigator
function FavouritesStack({ navigation }) {
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
      }}
    >
      <Stack.Screen name="Favourites" component={Favourites} options={{ title: 'Favourites' }} />
    </Stack.Navigator>
  );
}

// Ship with KissanYukt Stack Navigator
function ShipWithKissanYuktStack({ navigation }) {
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
      }}
    >
      <Stack.Screen name="ShipWithKissanYukt" component={ShipWithKissanYukt} options={{ title: 'Ship with KissanYukt' }} />
    </Stack.Navigator>
  );
}

// Feedback Stack Navigator
function FeedbackStack({ navigation }) {
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
      }}
    >
      <Stack.Screen name="Feedback" component={Feedback} options={{ title: 'Feedback' }} />
    </Stack.Navigator>
  );
}

// Help and Support Stack Navigator
function HelpAndSupportStack({ navigation }) {
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
      }}
    >
      <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} options={{ title: 'Help and Support' }} />
    </Stack.Navigator>
  );
}

// Choose Language Stack Navigator
function ChooseLanguageStack({ navigation }) {
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
      }}
    >
      <Stack.Screen name="ChooseLanguage" component={ChooseLanguage} options={{ title: 'Choose Language' }} />
    </Stack.Navigator>
  );
}

// Share App Stack Navigator
function ShareAppStack({ navigation }) {
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
      }}
    >
      <Stack.Screen name="ShareApp" component={ShareApp} options={{ title: 'Share App' }} />
    </Stack.Navigator>
  );
}

// About KissanYukt Stack Navigator
function AboutKissanYuktStack({ navigation }) {
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
      }}
    >
      <Stack.Screen name="AboutKissanYukt" component={AboutKissanYukt} options={{ title: 'About KissanYukt' }} />
    </Stack.Navigator>
  );
}

// Settings Stack Navigator
function SettingsStack({ navigation }) {
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
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
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
          name="Settings" 
          component={SettingsStack} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="settings-outline" size={24} color={color} />
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
          component={MyOrdersStack} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="cart-outline" size={28} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Favourites" 
          component={FavouritesStack} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="heart-outline" size={28} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Ship with KissanYukt" 
          component={ShipWithKissanYuktStack} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="boat-outline" size={28} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Feedback" 
          component={FeedbackStack} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="chatbox-ellipses-outline" size={28} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Help and Support" 
          component={HelpAndSupportStack} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="help-circle-outline" size={28} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Choose Language" 
          component={ChooseLanguageStack} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="language-outline" size={28} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Share App" 
          component={ShareAppStack} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="share-social-outline" size={28} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="About KissanYukt" 
          component={AboutKissanYuktStack} 
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
