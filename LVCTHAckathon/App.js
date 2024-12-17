import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarScreen from './components/src/screens/CalendarScreen';
import Encyclopedia from './components/src/screens/Encyclopedia';
import AccessSettings from './components/src/screens/AccessSettings';
import ProfileScreen from './components/src/screens/ProfileScreen';
import AboutScreen from './components/src/screens/settings/AboutScreen';
import AccessSettingScreen from './components/src/screens/settings/AccessSettingsScreen';
import PrivacyPolicyScreen from './components/src/screens/settings/PrivacyPolicyScreen';
import TermConditions from './components/src/screens/settings/TermsConditions';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function SettingsStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={AccessSettings}/>
      <Stack.Screen name="AboutScreen" component={AboutScreen}/>
      <Stack.Screen name="TermConditions" component={TermConditions}/>
      <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen}/>
      <Stack.Screen name="AccessSettingScreen" component={AccessSettingScreen}/>
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Encyclopedia" component={Encyclopedia} />
        <Tab.Screen name="Settings"  component={SettingsStack} />
      </Tab.Navigator>
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