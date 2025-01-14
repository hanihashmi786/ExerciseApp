import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

import { styles } from '../styles/UserSettings.styles';

const UserSettings = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image
            source={require('../assets/back-button.png')} // Replace with your back icon
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/profile-pic.jpg')} // Replace with your profile image
          style={styles.profileImage}
        />
      </View>

      {/* Form Fields */}
      <View style={styles.formContainer}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>User Name</Text>
          <TextInput style={styles.input} value="Hani Mustafa Hashmi" />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} value="hanimhashmi121@gmail.com" />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Date Of Birth</Text>
          <TextInput style={styles.input} value="02/07/2002" />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Height</Text>
          <TextInput style={styles.input} value="5ft 11in" />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Weight</Text>
          <TextInput style={styles.input} value="75 kg" />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Image
          source={require('../assets/save-icon.png')} // Replace with your save icon
          style={styles.saveIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UserSettings;
