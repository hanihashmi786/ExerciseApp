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
import styles from '../styles/SignupCompany.styles';

// Custom Check Icon Component
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

const SignUpCompany = ({ navigation, route }) => {
  // You would typically get these from route.params if coming from previous screen
  const { firstName, lastName, email } = route.params || {};
  
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const handleContinue = () => {
    // Validate fields
    if (!companyName || !companyAddress || !country || !phoneNumber || !state || !city) {
      // Show error
      return;
    }
    
    // Move to next step
    navigation.navigate('SignupSecurity', { 
       ...route.params,
       companyName,
       companyAddress,
       country,
       phoneNumber,
       state,
       city
    });
    console.log('Continue to next step with company details:', {
      companyName,
      companyAddress,
      country,
      phoneNumber,
      state,
      city
    });
  };

  const handleBack = () => {
    // navigation.goBack();
    console.log('Go back to previous step');
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
            <View style={styles.stepNumberCompleted}>
              <CheckIcon />
            </View>
            <Text style={styles.stepTextCompleted}>Basic</Text>
          </View>
          
          <View style={styles.stepDivider} />
          
          <View style={styles.stepItem}>
            <View style={styles.stepNumberActive}>
              <Text style={styles.stepNumberTextActive}>2</Text>
            </View>
            <Text style={styles.stepTextActive}>Company</Text>
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
              <Text style={styles.formTitle}>Company Details</Text>
              <Text style={styles.formSubtitle}>Tell us about your business</Text>
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Company Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Your Company*"
                placeholderTextColor="#6B7280"
                value={companyName}
                onChangeText={setCompanyName}
              />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Company Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Company Address*"
                placeholderTextColor="#6B7280"
                value={companyAddress}
                onChangeText={setCompanyAddress}
              />
            </View>
            
            <View style={styles.rowContainer}>
              <View style={[styles.inputGroup, styles.halfWidth]}>
                <Text style={styles.inputLabel}>Country</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Country*"
                  placeholderTextColor="#6B7280"
                  value={country}
                  onChangeText={setCountry}
                />
              </View>
              
              <View style={[styles.inputGroup, styles.halfWidth]}>
                <Text style={styles.inputLabel}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="+1 234 567 890*"
                  placeholderTextColor="#6B7280"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  keyboardType="phone-pad"
                />
              </View>
            </View>
            
            <View style={styles.rowContainer}>
              <View style={[styles.inputGroup, styles.halfWidth]}>
                <Text style={styles.inputLabel}>State/Province</Text>
                <TextInput
                  style={styles.input}
                  placeholder="State*"
                  placeholderTextColor="#6B7280"
                  value={state}
                  onChangeText={setState}
                />
              </View>
              
              <View style={[styles.inputGroup, styles.halfWidth]}>
                <Text style={styles.inputLabel}>City</Text>
                <TextInput
                  style={styles.input}
                  placeholder="City*"
                  placeholderTextColor="#6B7280"
                  value={city}
                  onChangeText={setCity}
                />
              </View>
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
          <View style={styles.paginationDot} />
          <View style={styles.paginationDotActive} />
          <View style={styles.paginationDot} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpCompany;