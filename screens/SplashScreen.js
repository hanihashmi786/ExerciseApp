import React from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  TouchableOpacity, 
  StatusBar, 
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/SplashScreen.styles';

const SplashScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Signin');

  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/CallLoom.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        
        <View style={styles.taglineContainer}>
          <Text style={styles.taglineText}>Seamless & Secure Communication</Text>
        </View>
      </View>
      
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>Welcome to Call Loom!</Text>
        <Text style={styles.welcomeSubtitle}>
          Stay connected with crystal-clear calls{'\n'}and a smooth user experience.
        </Text>
      </View>
      
      <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={handleGetStarted}
      >
        <LinearGradient
          colors={['#4e66f8', '#8a4af3']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Let's Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SplashScreen;