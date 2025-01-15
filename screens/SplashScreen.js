import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../styles/SplashScreen.styles';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
      // Navigate after 3 seconds
      const timer = setTimeout(() => {
        navigation.navigate('Home'); // Navigate to Home after the splash screen
      }, 3000);  // 3 seconds delay
  
      // Cleanup the timer when the component unmounts
      return () => clearTimeout(timer);
    }, [navigation]);
  
    return (
      <LinearGradient
        colors={['#FFC404', '#FF9C13']} // Linear gradient colors
        style={styles.container}
      >
        {/* Illustration */}
        <Image
          source={require('../assets/runner-illustration.png')} // Replace with your illustration asset
          style={styles.illustration}
        />
  
        {/* Welcome Text */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome To</Text>
          <Text style={[styles.title, styles.highlight]}>Lose Weight</Text>
          <Text style={styles.subtitle}>More Professional More Focused</Text>
        </View>
  
        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Onboard1')} // Navigate to Home on button press
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  };
  

export default SplashScreen;
