import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import styles from '../styles/CompanyProfile.styles';
import CompanyIcon from '../assets/icons/CompanyIcon'; // Updated icon import

// Import the Footer component
import Footer from '../assets/components/Footer'; // Import the Footer component

const CompanyProfile = ({ navigation }) => {
  const [country, setCountry] = useState('');
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleUpdate = () => {
    console.log('Update company details');
    // Implement update logic
  };

  const handleCancel = () => {
    // Go back or reset form
    console.log('Cancel update');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.backArrow} />
        </TouchableOpacity>
        
        <View style={styles.headerTitleContainer}>
          <Image 
            source={CompanyIcon} 
            style={styles.headerIcon}
          />
          <Text style={styles.headerTitle}>Company Profile</Text>
        </View>
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Welcome Admin</Text>
        <Text style={styles.welcomeSubtitle}>
          Securely Update Your Company Details
        </Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={styles.inputLabel}>Select Country:</Text>
            <TextInput
              style={styles.input}
              placeholder="Type name..."
              placeholderTextColor="#6B7280"
              value={country}
              onChangeText={setCountry}
            />
          </View>
          <View style={styles.formColumn}>
            <Text style={styles.inputLabel}>Company:</Text>
            <TextInput
              style={styles.input}
              placeholder="Type name..."
              placeholderTextColor="#6B7280"
              value={company}
              onChangeText={setCompany}
            />
          </View>
        </View>

        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={styles.inputLabel}>Address:</Text>
            <TextInput
              style={styles.input}
              placeholder="Type no..."
              placeholderTextColor="#6B7280"
              value={address}
              onChangeText={setAddress}
            />
          </View>
          <View style={styles.formColumn}>
            <Text style={styles.inputLabel}>City:</Text>
            <TextInput
              style={styles.input}
              placeholder="Search time zone..."
              placeholderTextColor="#6B7280"
              value={city}
              onChangeText={setCity}
            />
          </View>
        </View>

        <View style={styles.formRow}>
          <View style={styles.formColumn}>
            <Text style={styles.inputLabel}>State:</Text>
            <TextInput
              style={styles.input}
              placeholder="Type no..."
              placeholderTextColor="#6B7280"
              value={state}
              onChangeText={setState}
            />
          </View>
          <View style={styles.formColumn}>
            <Text style={styles.inputLabel}>ZipCode:</Text>
            <TextInput
              style={styles.input}
              placeholder="Search time zone..."
              placeholderTextColor="#6B7280"
              value={zipCode}
              onChangeText={setZipCode}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.updateButton}
            onPress={handleUpdate}
          >
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.cancelButton}
            onPress={handleCancel}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Info Section */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Update Company Details</Text>
        <Text style={styles.infoText}>
          Manage your business information and{'\n'}settings effortlessly while ensuring data{'\n'}security and accuracy.
        </Text>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>

      {/* Shared Footer */}
      <Footer
        liveCount={20}
        completedCount={1003}
        totalRevenue={515151}
        todayRevenue="$588"
        onPressFAB={() => navigation.navigate('AddCompanyDetails')} // Adjust this navigation action as needed
      />
    </SafeAreaView>
  );
};

export default CompanyProfile;
