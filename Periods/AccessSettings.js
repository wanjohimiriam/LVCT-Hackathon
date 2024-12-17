import { StyleSheet, Text,Alert, View, TouchableOpacity,Switch,ImageBackground,Dimensions } from 'react-native'
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { en } from '../Periods/resources/translation/app/en';

const AccessSettings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const navigation = useNavigation();
  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been logged out successfully.');
  };
  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => Alert.alert('Account Deleted') }
      ]
    );
  };
  const handleContactUs = () => {
    Alert.alert('Contact Us', 'For support, please reach out to: lvctdev@lvcthealth.org');
  };
  return (
      <ImageBackground
        source={require('../../../../assets/images/background/encyback.png')}
        style={styles.background} >
          <View style={styles.container}>
            {/* Notification Switch */}
            <View style={styles.settingItem}>
              <Text style={styles.settingText}>Enable Notifications</Text>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
              />
            </View>
            {/* Dark Mode Switch */}
            <View style={styles.settingItem}>
              <Text style={styles.settingText}>Dark Mode</Text>
              <Switch
                value={darkModeEnabled}
                onValueChange={setDarkModeEnabled}
              />
            </View>
            {/* About Section */}
            <View style={styles.settingsWrapper}>
              <TouchableOpacity
                style={styles.settingItem}
                onPress={() => navigation.navigate('AboutScreen')} >
                  <View style={styles.aboutContainer}>
                    <Text style={styles.settingText}>{en.about}</Text>
                    <Text style={styles.settingAbout}>{en.about_info}</Text>
                </View>
              </TouchableOpacity>
              {/* Terms & Conditions Section */}
              <TouchableOpacity
                style={styles.settingItem}
                onPress={() => navigation.navigate('TermsAndConditions')}>
                <View style={styles.aboutContainer}>
                  <Text style={styles.settingText}>{en.t_and_c}</Text>
                  <Text style={styles.settingAbout}>{en.t_and_c_info}</Text>
                </View>
              </TouchableOpacity>
              {/* Privacy Policy Section */}
              <TouchableOpacity
                style={styles.settingItem}
                onPress={() => navigation.navigate('PrivacyPolicy')}>
                <View style={styles.aboutContainer}>
                  <Text style={styles.settingText}>{en.privacy_policy}</Text>
                  <Text style={styles.settingAbout}>{en.privacy_info}</Text>
                </View>
              </TouchableOpacity>
              {/* Access Settings Section */}
              <TouchableOpacity
                style={styles.settingItem}
                onPress={() => navigation.navigate('AccessSettings')}>
                <View style={styles.aboutContainer}>
                  <Text style={styles.settingText}>{en.access_setting}</Text>
                  <Text style={styles.settingAbout}>{en.settings_info}</Text>
                </View>
              </TouchableOpacity>
              {/* Dark Mode Switch */}
              <View style={styles.settingItem}>
                <View style={styles.aboutContainer}>
                  <Text style={styles.settingText}>{en.future_prediciton}</Text>
                  <Text style={styles.settingAbout}>{en.future_prediciton_info}</Text>
                </View>
                <Switch
                  value={darkModeEnabled}
                  onValueChange={setDarkModeEnabled}
                />
              </View>
            </View>
              <View style={styles.buttonContainer}>
                {/* <Button title="Log Out" onPress={handleLogout} color="#FF5C5C"> */}
                <TouchableOpacity style={styles.logOutButton} onPress={handleLogout}>
                  <Text style={styles.buttonText}>Log out</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteAccountButton} onPress={handleDeleteAccount}>
                  <Text style={styles.buttonText}>Delete account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contactUsButton} onPress={handleContactUs}>
                  <Text style={styles.buttonText}>Contact us</Text>
                </TouchableOpacity>
              </View>
          </View>
      </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'rgba(250, 250, 250, 0.5)',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 1,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  settingText: {
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingAbout: {
    marginLeft: 20,
    fontSize: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginTop:'30',
    marginBottom:50,
    padding: 10,
  },
  logOutButton: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#FF8C00',
    paddingVertical: 13,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  deleteAccountButton: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#D1D0D2',
    paddingVertical: 13,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#B7B6B6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    text: '#000',
  },
  contactUsButton: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#97C800',
    paddingVertical: 13,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  aboutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsWrapper: {
    marginBottom: 20,
  },
});
export default AccessSettings