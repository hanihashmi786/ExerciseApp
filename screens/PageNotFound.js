import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import custom icons
import BackIcon from '../assets/icons/BackIcon';
import NotFoundIcon from '../assets/icons/NotFound';
import Headphone from '../assets/icons/Headphone';
import NotificationsIcon from '../assets/icons/NotificationsIcon';

// Shared footer component
import Footer from '../assets/components/Footer';

import styles from '../styles/PageNotFound.styles';

const PageNotFound = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer} onPress={handleBack}>
          <BackIcon width={20} height={20} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>System Setup</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconContainer}>
            <Headphone width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <NotificationsIcon width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Error Content */}
      <View style={styles.contentContainer}>
        <View style={styles.errorCard}>
          <View style={styles.warningIconContainer}>
            <NotFoundIcon width={24} height={24} />
          </View>
          
          <View style={styles.errorTextContainer}>
            <View style={styles.errorTitleContainer}>
              <Text style={styles.errorCode}>404</Text>
              <Text style={styles.errorTitle}>- Page Not Found</Text>
            </View>
            
            <Text style={styles.errorMessage}>
              Oops! We searched high and low but couldn't find what you're looking for or the URL might be incorrect.
            </Text>
            
            <Text style={styles.supportText}>
              If you believe this is an error, feel free to contact support for assistance.
            </Text>
            
            <TouchableOpacity style={styles.goBackButton} onPress={handleBack}>
              <Text style={styles.goBackButtonText}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Shared Footer */}
      <Footer
        liveCount={20}
        completedCount={1003}
        totalRevenue={515151}
        todayRevenue="$588"
        onPressFAB={() => navigation.goBack()} // Adjust as needed
      />
    </SafeAreaView>
  );
};

export default PageNotFound;
