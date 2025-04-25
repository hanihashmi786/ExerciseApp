import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import styles from '../styles/SignupSecurity.styles';
import EyeIcon from '../assets/icons/EyeIcon';
import HideEyeIcon from '../assets/icons/HideEyeIcon';

// Custom Check Icon Component for steps
const StepCheckIcon = () => (
  <View style={styles.stepCheckIconContainer}>
    <View style={styles.stepCheckIcon} />
  </View>
);

// Custom Check Icon Component for checkbox
const SmallCheckIcon = () => (
  <View style={styles.smallCheckIconContainer}>
    <View style={styles.smallCheckIcon} />
  </View>
);

// Custom Eye Icon Component


const SignUpSecurity = ({ navigation, route }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(true);

  const handleComplete = () => {
    // Validate fields
    if (!password || !confirmPassword || !email || !agreeToTerms) {
      // Show error
      return;
    }
    
    if (password !== confirmPassword) {
      // Show error - passwords don't match
      return;
    }
    
    // Complete sign up
    console.log('Complete sign up with:', {
      password,
      email,
      agreeToTerms
    });
      navigation.navigate('Dashboard');
  };

  const handleBack = () => {
    navigation.goBack();
    console.log('Go back to previous step');
  };

  const handleTermsPress = () => {
    // navigation.navigate('Terms');
    console.log('Navigate to Terms of Service');
  };

  const handlePrivacyPress = () => {
    // navigation.navigate('Privacy');
    console.log('Navigate to Privacy Policy');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Sign-Up</Text>
        <Text style={styles.headerSubtitle}>Join Call Loom & transform your business</Text>
      </View>
      
      <View style={styles.stepsContainer}>
        <View style={styles.stepItem}>
          <View style={styles.stepNumberCompleted}>
            <StepCheckIcon />
          </View>
          <Text style={styles.stepTextCompleted}>Basic</Text>
        </View>
        
        <View style={styles.stepDivider} />
        
        <View style={styles.stepItem}>
          <View style={styles.stepNumberCompleted}>
            <StepCheckIcon />
          </View>
          <Text style={styles.stepTextCompleted}>Company</Text>
        </View>
        
        <View style={styles.stepDivider} />
        
        <View style={styles.stepItem}>
          <View style={styles.stepNumberActive}>
            <Text style={styles.stepNumberTextActive}>3</Text>
          </View>
          <Text style={styles.stepTextActive}>Security</Text>
        </View>
      </View>
      
      <View style={styles.formContainer}>
        <View style={styles.formHeader}>
          <Text style={styles.formTitle}>Security</Text>
          <Text style={styles.formSubtitle}>Create a secure password for your account</Text>
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="••••••••••*"
              placeholderTextColor="#6B7280"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity 
              style={styles.eyeButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeIcon /> : <HideEyeIcon />}
            </TouchableOpacity>

          </View>
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="••••••••••*"
              placeholderTextColor="#6B7280"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity 
              style={styles.eyeButton}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeIcon /> : <HideEyeIcon />}
            </TouchableOpacity>

          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.termsContainer}
          onPress={() => setAgreeToTerms(!agreeToTerms)}
        >
          <View style={[styles.checkbox, agreeToTerms && styles.checkboxChecked]}>
            {agreeToTerms && <SmallCheckIcon />}
          </View>
          <Text style={styles.termsText}>
            I agree to the{' '}
            <Text style={styles.termsLink} onPress={handleTermsPress}>
              Terms of Service
            </Text>
            {' '}and{' '}
            <Text style={styles.termsLink} onPress={handlePrivacyPress}>
              Privacy Policy
            </Text>
          </Text>
        </TouchableOpacity>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Email...*"
            placeholderTextColor="#6B7280"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        
        <View style={styles.buttonGroup}>
          <TouchableOpacity 
            style={styles.completeButton}
            onPress={handleComplete}
          >
            <Text style={styles.completeButtonText}>Complete Sign-Up</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.backButton}
            onPress={handleBack}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.paginationContainer}>
        <View style={styles.paginationDot} />
        <View style={styles.paginationDot} />
        <View style={styles.paginationDotActive} />
      </View>
    </SafeAreaView>
  );
};

export default SignUpSecurity;