import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';
import styles from '../styles/signin.styles';

// Import custom icons
import EyeIcon from '../assets/icons/EyeIcon';
import HideEyeIcon from '../assets/icons/HideEyeIcon';

const CheckIcon = () => (
  <View style={{ width: 14, height: 14, justifyContent: 'center', alignItems: 'center' }}>
    <View style={{
      width: 8,
      height: 4,
      borderLeftWidth: 2,
      borderBottomWidth: 2,
      borderColor: 'white',
      transform: [{ rotate: '-45deg' }],
      position: 'absolute',
      top: 4
    }} />
  </View>
);

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    // Implement sign in logic
    console.log('Sign in with:', email, password);
     navigation.navigate('Dashboard');
  };

  const handleGoogleSignIn = () => {
    // Implement Google sign in
    console.log('Sign in with Google');
  };

  const handleSignUp = () => {
    navigation.navigate('Signup');
    console.log('Navigate to Sign Up');
  };

  const handleForgotPassword = () => {
    // navigation.navigate('ForgotPassword');
    console.log('Navigate to Forgot Password');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/lock-key.png')} 
          style={styles.lockImage}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Sign-In</Text>
        <Text style={styles.headerSubtitle}>Enter your details to proceed further</Text>
      </View>
      
      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email..."
          placeholderTextColor="#6B7280"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter password..."
            placeholderTextColor="#6B7280"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity 
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeIcon /> : <HideEyeIcon />}
          </TouchableOpacity>
        </View>
        
        <View style={styles.rememberForgotContainer}>
          <TouchableOpacity 
            style={styles.rememberContainer}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
              {rememberMe && <CheckIcon />}
            </View>
            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotText}>Forgot password</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity 
          style={styles.signInButton}
          onPress={handleSignIn}
        >
          <Text style={styles.signInButtonText}>Sign-in</Text>
        </TouchableOpacity>
        
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>
        
        <TouchableOpacity 
          style={styles.googleButton}
          onPress={handleGoogleSignIn}
        >
          <Image 
            source={require('../assets/google-icon.png')} 
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Sign-in with Google</Text>
        </TouchableOpacity>
        
        <View style={styles.signupContainer}>
          <Text style={styles.noAccountText}>Don't have an account? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.termsText}>
          By signing in, you agree to our{'\n'}Terms of Service & Privacy Policy
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
