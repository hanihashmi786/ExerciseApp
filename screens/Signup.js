import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import styles from '../styles/Signup.styles';

const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const handleContinue = () => {
    // Validate fields
    if (!firstName || !secondName || !email) {
      // Show error
      return;
    }
    
    // Move to next step
    navigation.navigate('SignupCompany', { firstName, secondName, email });
    console.log('Continue to next step with:', { firstName, secondName, email });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidContainer}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Sign-Up</Text>
          <Text style={styles.headerSubtitle}>Join Call Loom & transform your business</Text>
        </View>
        
        <View style={styles.stepsContainer}>
          <View style={styles.stepItem}>
            <View style={styles.stepNumberActive}>
              <Text style={styles.stepNumberTextActive}>1</Text>
            </View>
            <Text style={styles.stepTextActive}>Basic</Text>
          </View>
          
          <View style={styles.stepDivider} />
          
          <View style={styles.stepItem}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>2</Text>
            </View>
            <Text style={styles.stepText}>Company</Text>
          </View>
          
          <View style={styles.stepDivider} />
          
          <View style={styles.stepItem}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>3</Text>
            </View>
            <Text style={styles.stepText}>Security</Text>
          </View>
        </View>
        
        <View style={styles.formContainer}>
          <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.formHeader}>
              <Text style={styles.formTitle}>Personal Information</Text>
              <Text style={styles.formSubtitle}>Let's start with your basic information</Text>
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Name*"
                placeholderTextColor="#6B7280"
                value={firstName}
                onChangeText={setFirstName}
              />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Second Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Name*"
                placeholderTextColor="#6B7280"
                value={secondName}
                onChangeText={setSecondName}
              />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Email*"
                placeholderTextColor="#6B7280"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            
            <TouchableOpacity 
              style={styles.continueButton}
              onPress={handleContinue}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
            
            {/* Add extra space at the bottom for pagination dots */}
            <View style={styles.bottomSpace} />
          </ScrollView>
        </View>
        
        <View style={styles.paginationContainer}>
          <View style={styles.paginationDotActive} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;