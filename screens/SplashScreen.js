import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../styles/SplashScreen.styles'; // Make sure the path is correct

const SplashScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#FFC404', '#FF9C13']}
      style={styles.container}
    >
      {/* Illustration */}
      <Image
        source={require('../assets/runner_illustration.png')} // Replace with your actual asset
        style={styles.illustration}
      />

      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome To</Text>
        <Text style={[styles.title, styles.highlight]}>Lose Weight</Text>
        <Text style={styles.subtitle}>More Professional More Focused</Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Onboard1')} // Replace 'Onboard1' with your target screen
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SplashScreen;
