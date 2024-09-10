import * as React from 'react';
import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
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
import CategoryItemsPage from './screens/categoriesItem';
import { CartProvider } from './screens/cartContex';
import PaymentOptions from './screens/Payments';
import ChatWithFarmer from './screens/ChatWithFarmer';
import ChatWithSeller from './screens/ChatWithCustomer';
import ChatWithCustomer from './screens/ChatWithCustomer';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
 
  const handleProfilePress = () => {
    props.navigation.navigate('Profile'); 
  };

  return (
    <DrawerContentScrollView {...props}>
      {/* Profile section with icon and name */}
      <TouchableOpacity style={styles.profileContainer} onPress={handleProfilePress}>
        <View style={styles.profileImagePlaceholder}>
          <Ionicons name="person-outline" size={40} color="#fff" />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Ramlal</Text>
          <Text style={styles.profileNumber}>+91 9876543210</Text>
        </View>
      </TouchableOpacity>

      {/* Drawer Item List */}
      <DrawerItemList {...props} />

      {/* Logout Button */}
      <DrawerItem
        label="Logout"
        onPress={() => alert('Logging out')}
        icon={({ color, size }) => (
          <Ionicons name="log-out-outline" size={size + 4} color={color} />
        )}
        labelStyle={{ fontWeight: 'bold' }}
        style={{ marginTop: 'auto' }} // Place it at the bottom of the drawer
      />
    </DrawerContentScrollView>
  );
}


function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#009900' },
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

        // headerTitle : () => (
        //   <View style={styles.headerTitleContainer}>
        //     <Text style={styles.headerTitle}>Hi Ramlal</Text>
        //   </View> 

        
      }}
    >
      <Stack.Screen name="Home" component={HomePage} options={{ title: "Welcome" }} />
      
      <Stack.Screen 
  name="Cart" 
  component={Cart} 
  options={({ navigation }) => ({
    title: 'Your Cart',
    headerStyle: { backgroundColor: '#009900' },
    headerTitleStyle: { color: '#ffffff' },
    headerLeft: () => (
      <Pressable onPress={() => navigation.goBack()} style={{paddingLeft: 1, paddingRight:7}}>
        <Ionicons name="arrow-back-outline" size={25} color="#ffffff" />
      </Pressable>
    ),
  })}
/>

      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="Categories" component={CategoriesPage} />
      <Stack.Screen name="CategoryItemsPage" component={CategoryItemsPage} />
      
      <Stack.Screen 
        name="LoadItem" 
        component={LoadItem} 
        options={({ route, navigation }) => ({
          title: route.params?.productName || 'Load Item',
          headerStyle: { backgroundColor: '#009900' },
          headerTitleStyle: { color: '#ffffff' },
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()} style={{paddingLeft: 1, paddingRight:7 }}>
              <Ionicons name="arrow-back-outline" size={25} color="#ffffff" />
            </Pressable>
    ),
  })}
/>


      <Stack.Screen 
  name="PaymentOptions" 
  component={PaymentOptions} 
  options={({ navigation }) => ({
    title: 'Payment',
    headerStyle: { backgroundColor: '#009900' },
    headerTitleStyle: { color: '#ffffff' },
    headerLeft: () => (
      <Pressable onPress={() => navigation.goBack()} style={{ paddingLeft: 1, paddingRight:7 }}>
        <Ionicons name="arrow-back-outline" size={25} color="#ffffff" />
      </Pressable>
    ),
  })}
/>

      <Stack.Screen 
  name="ChatWithFarmer" 
  component={ChatWithFarmer} 
  options={({ navigation }) => ({
    title: 'Chat with Farmer', 
    headerStyle: { backgroundColor: '#009900' },
    headerTitleStyle: { color: '#ffffff' },
    headerLeft: () => (
      <Pressable onPress={() => navigation.goBack()} style={{ paddingLeft: 1, paddingRight:7 }}>
        <Ionicons name="arrow-back-outline" size={28} color="#ffffff" />
      </Pressable>
    ),
  })}
/>

      
    </Stack.Navigator>
  );
}

function SellerStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#009900' },
        headerTitleStyle: { color: '#ffffff', marginLeft: 10 },
      }}
    >
      <Stack.Screen 
        name="Sell With KissanYukt" 
        component={SellerPage} 
        options={{
          title: 'Sell With KissanYukt',
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()} style={{ paddingLeft: 1, paddingRight:7 }}>
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
     <Stack.Screen name="ChatWithCustomer" component={ChatWithCustomer} options={{ title: 'Chat with Customer' }}/>
    </Stack.Navigator>
  );
}


function MyOrdersStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#009900' },
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


function FavouritesStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#009900' },
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


function ShipWithKissanYuktStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#009900' },
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


function FeedbackStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#009900' },
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


function HelpAndSupportStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#009900' },
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


function ChooseLanguageStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#009900' },
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


function ShareAppStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#009900' },
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


function AboutKissanYuktStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#009900' },
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


function SettingsStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#009900' },
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
    <CartProvider>
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false, 
          drawerActiveBackgroundColor: '#c6ff89',
          drawerActiveTintColor: '498e00'
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
          name="Sell With KissanYukt" 
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
    </CartProvider>
  );
  
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#96d406',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15, // Space between the image and text
  },
  profileInfo: {
    flex: 1, // Allow the text section to use the remaining space
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileNumber: {
    fontSize: 16,
    color: '#666',
  },
  headerTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 22, // Increase this value to make the text larger
    fontWeight: 'bold',
    color: '#ffffff',
  },
});