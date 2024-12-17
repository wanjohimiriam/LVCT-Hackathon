import { StyleSheet} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './components/src/screens/Pregnancy/HomeScreen';
import ChecklistScreen from './components/src/screens/Pregnancy/ChecklistScreen';
import InsightsScreen from './components/src/screens/Pregnancy/InsightsScreen';
import SettingsScreen from './components/src/screens/Pregnancy/SettingsScreen';
import LandingScreen from './components/src/screens/LandingScreen';
import ProfileScreen from './components/src/screens/Periods/ProfileScreen';
import CalendarScreen from './components/src/screens/Pregnancy/ChecklistScreen';
import EncyclopediaScreen from './components/src/screens/Periods/EncyclopediaScreen';
import AccessSettingsScreen from './components/src/screens/Periods/AccessSettings';
 // Adjust the path as needed
// import ProfileScreen from './components/src/screens/Periods/ProfileScreen';
// import CalendarScreen from './components/src/screens/Pregnancy/ChecklistScreen';
// import Encyclopedia from './components/src/screens/Periods/Encyclopedia';
// import AccessSettings from './components/src/screens/Periods/AccessSettings';
// import AboutScreen from './components/src/screens/Periods/settings/AboutScreen';
// import TermsConditionsScreen from './components/src/screens/Periods/settings/TermsConditions';
// import PrivacyPolicyScreen from './components/src/screens/Periods/settings/PrivacyPolicyScreen';
// import AccessSettingsScreen from './components/src/screens/Periods/settings/AccessSettingsScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// function SettingsStack(){
//   return(
    // <Stack.Navigator>
    //   <Stack.Screen name="Settings" component={AccessSettings}/>
    //   <Stack.Screen name="AboutScreen" component={AboutScreen}/>
    //   <Stack.Screen name="TermConditions" component={TermsConditionsScreen}/>
    //   <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen}/>
    //   <Stack.Screen name="AccessSettingScreen" component={AccessSettingsScreen}/>
    // </Stack.Navigator>
//   );
// }

function MainTabNavigatorOne() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Checklist') {
            iconName = 'calendar';
          } else if (route.name === 'Profile') {
            iconName = 'account-outline';
          } else if (route.name === 'Insights') {
            iconName = 'book-outline';
          } else if (route.name === 'Settings') {
            iconName = 'cog-outline';
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Checklist" component={ChecklistScreen} />
      <Tab.Screen name="Insights" component={InsightsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function MainTabNavigatorTwo() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Calendar') {
            iconName = 'calendar';
          } else if (route.name === 'Profile') {
            iconName = 'account-outline';
          } else if (route.name === 'Encyclopedia') {
            iconName = 'book-outline';
          } else if (route.name === 'Settings') {
            iconName = 'cog-outline';
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={ProfileScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Encyclopedia" component={EncyclopediaScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        {/* Landing Screen */}
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }} // Hides the header for the landing screen
        />
        {/* Main App with Bottom Tab Navigator */}
        <Stack.Screen
          name="MainAppOne"
          component={MainTabNavigatorOne}
          options={{ headerShown: false }} // Hides the header for the tab navigator
        />
        <Stack.Screen
          name="MainAppTwo"
          component={MainTabNavigatorTwo}
          options={{ headerShown: false }} // Hides the header for the tab navigator
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

// });