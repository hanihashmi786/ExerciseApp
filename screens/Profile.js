import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView
} from 'react-native';
import styles from '../styles/Profile.styles';
import BackIcon from '../assets/icons/BackIcon';
import ProfileIcon from '../assets/icons/ProfileIcon';
import EditPicIcon from '../assets/icons/EditPicIcon';
import LiveCallsIcon from '../assets/icons/LiveCallsIcon';
import CompletedCallsIcon from '../assets/icons/CompletedCallsIcon';
import RevenueIcon from '../assets/icons/RevenueIcon';
import AddButton from '../assets/icons/AddButton';
import Footer from '../assets/components/Footer'; // Import the Footer component

const Profile = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    console.log('Save pressed');
    // Implement save functionality
  };

  const handleCancel = () => {
    console.log('Cancel pressed');
    // Implement cancel functionality
  };

  const handleEditPicture = () => {
    console.log('Edit picture pressed');
    // Implement edit picture functionality
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBack}
        >
          <View style={styles.backArrow} />
        </TouchableOpacity>
        
        <View style={styles.headerTitleContainer}>
          <Image 
            source={ProfileIcon} 
            style={styles.headerIcon}
          />
          <Text style={styles.headerTitle}>Profile</Text>
        </View>
      </View>

      {/* Profile Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Welcome Section */}
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>Welcome Admin</Text>
            <Text style={styles.welcomeSubtitle}>Securely Update Your Profile</Text>
          </View>

          {/* Profile Picture Section */}
          <View style={styles.profilePictureContainer}>
            <View style={styles.profilePicture}>
              {profileImage ? (
                <Image source={{ uri: profileImage }} style={styles.profileImage} />
              ) : (
                <Text style={styles.pictureText}>Picture</Text>
              )}
            </View>
            <TouchableOpacity 
              style={styles.editPictureButton} 
              onPress={handleEditPicture}
            >
              <EditPicIcon width={20} height={20} />
            </TouchableOpacity>
          </View>

          {/* Form Fields */}
          <View style={styles.formSection}>
            <View style={styles.formRow}>
              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>First Name</Text>
                <TextInput
                  style={styles.formInput}
                  placeholder="Type name..."
                  placeholderTextColor="#6b7280"
                  value={firstName}
                  onChangeText={setFirstName}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Last Name</Text>
                <TextInput
                  style={styles.formInput}
                  placeholder="Type name..."
                  placeholderTextColor="#6b7280"
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>
            </View>

            <View style={styles.formRow}>
              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Phone Number</Text>
                <TextInput
                  style={styles.formInput}
                  placeholder="Type no..."
                  placeholderTextColor="#6b7280"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  keyboardType="phone-pad"
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Time Zone</Text>
                <TextInput
                  style={styles.formInput}
                  placeholder="Search time zone..."
                  placeholderTextColor="#6b7280"
                  value={timeZone}
                  onChangeText={setTimeZone}
                />
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={styles.saveButton} 
              onPress={handleSave}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.cancelButton} 
              onPress={handleCancel}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>

          {/* Update Profile Section */}
          <View style={styles.updateSection}>
            <Text style={styles.updateTitle}>Update Profile</Text>
            <Text style={styles.updateDescription}>
              Keep your profile updated securely. Manage your data and settings effortlessly.
            </Text>
          </View>

          {/* Extra space for FAB */}
          <View style={styles.fabSpace} />
        </View>
      </ScrollView>

      {/* Footer */}
      <Footer
        liveCount={20}
        completedCount={1003}
        totalRevenue={515151}
        todayRevenue="$588"
        onPressFAB={() => navigation.navigate('AddCompanyDetails')} // Adjust this navigation action as needed
      />

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <AddButton width={28} height={28} color="#ffffff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
