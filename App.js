import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HomePage from './screens/Home';
import AboutPage from './screens/About';
import Cart from './screens/Cart';
import CategoriesPage from './screens/CategoriesPage';
import ProfilePage from './screens/Profile';
import SettingsScreen from './screens/settingscreen';
import SellerPage from './screens/sellerPage';
import Step1 from './screens/step1';
import Step2 from './screens/step2';
import Step3 from './screens/step3';
import Step4 from './screens/step4';
import Dashboard from './screens/Dashboard';
import Transactions from './screens/Transactions';
import Chats from './screens/chats';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Home Stack Navigator
function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#228B22' },
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
      <Stack.Screen name="Home" component={HomePage} options={{ title: 'Welcome' }} />
      <Stack.Screen name="About" component={AboutPage} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="Categories" component={CategoriesPage} />

    </Stack.Navigator>
  );
}


function SellerStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#228B22' },
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
      <Stack.Screen 
        name="Step1" 
        component={Step1} 
        options={({ navigation }) => ({
          title: 'Step 1: Select Category',
          headerLeft: () => (
            <Pressable onPress={() => navigation.navigate('SellerPage')} style={{ paddingRight: 10 }}>
              <Ionicons name="arrow-back" size={24} color='#ffffff' />
            </Pressable>
          ),
        })} 
      />
      <Stack.Screen name="Step2" component={Step2} options={({ navigation }) => ({
          title: 'Step 2: Name and Description',
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()} style={{ paddingRight: 10 }}>
              <Ionicons name="arrow-back" size={24} color='#ffffff' />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen name="Step3" component={Step3} options={({ navigation }) => ({
          title: 'Step 3: Upload Image',
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()} style={{ paddingRight: 10 }}>
              <Ionicons name="arrow-back" size={24} color='#ffffff' />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen name="Step4" component={Step4} options={({ navigation }) => ({
          title: 'Step 4: Enter Price',
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()} style={{ paddingRight: 10 }}>
              <Ionicons name="arrow-back" size={24} color='#ffffff' />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen 
  name="Dashboard" 
  component={Dashboard} 
  options={({ navigation }) => ({
    title: 'Dashboard',
    headerLeft: () => (
      <Pressable onPress={() => navigation.navigate('SellerPage')} style={{ paddingRight: 10 }}>
        <Ionicons name="arrow-back" size={24} color='#ffffff' />
      </Pressable>
    ),
  })}
/>
<Stack.Screen 
  name="Transactions"  // Ensure this name is correct
  component={Transactions} 
  options={({ navigation }) => ({
    title: 'Transactions',
    headerLeft: () => (
      <Pressable onPress={() => navigation.navigate('SellerPage')} style={{ paddingRight: 10 }}>
        <Ionicons name="arrow-back" size={24} color='#ffffff' />
      </Pressable>
    ),
  })}
/>

<Stack.Screen 
  name="Chats"  // Ensure this name is correct
  component={Chats} 
  options={({ navigation }) => ({
    title: 'Chats',
    headerLeft: () => (
      <Pressable onPress={() => navigation.navigate('SellerPage')} style={{ paddingRight: 10 }}>
        <Ionicons name="arrow-back" size={24} color='#ffffff' />
      </Pressable>
    ),
  })}
/>


    </Stack.Navigator>
  );
}

// Settings Stack Navigator
function SettingsStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#228B22' },
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
        }}
      >
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Settings" component={SettingsStack} />
        <Drawer.Screen name="SellerPage" component={SellerStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
