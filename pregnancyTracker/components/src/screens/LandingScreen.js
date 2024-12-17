import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles/styles'; // Adjust path if necessary

// Import your background image
const backgroundImage = require('../../../assets/images/background/landing.png'); // Adjust path to your image

const LandingScreen = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Choose your Goal</Text>
        <Text style={styles.subtitle}>Tell us about your goal to customize your experience</Text>

        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => navigation.navigate('MainAppOne')}
        >
          <Text style={styles.optionText}>Tracking Pregnancy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => navigation.navigate('MainAppTwo')}
        >
          <Text style={styles.optionText}>Tracking Cycle</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LandingScreen;
