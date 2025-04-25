import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import custom icons
import BackIcon from '../assets/icons/BackIcon';
import ManageIntegrationsIcon from '../assets/icons/ManageIntegrationsIcon';
import LiveCallsIcon from '../assets/icons/LiveCallsIcon';
import CompletedCallsIcon from '../assets/icons/CompletedCallsIcon';
import RevenueIcon from '../assets/icons/RevenueIcon';
import AddButton from '../assets/icons/AddButton';

// Import the IntegrationCard component
import IntegrationCard from '../assets/components/IntegrationCard';

// Shared Footer component
import Footer from '../assets/components/Footer';

import styles from '../styles/MakeIntegrations.styles';

const MakeIntegrations = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleExport = () => {
    // Handle export functionality
    console.log('Export pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <BackIcon width={20} height={20} />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <ManageIntegrationsIcon width={24} height={24} />
            <Text style={styles.headerTitle}>Integration</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleExport}>
          <Text style={styles.exportButton}>Export</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* First Row */}
          <View style={styles.row}>
            <IntegrationCard type="BLA" />
            <IntegrationCard type="Google" />
          </View>
          
          {/* Second Row */}
          <View style={styles.row}>
            <IntegrationCard type="BLA" />
            <IntegrationCard type="Google" />
          </View>
          
          {/* Third Row */}
          <View style={styles.row}>
            <IntegrationCard type="BLA" />
            <IntegrationCard type="Google" />
          </View>
          
          {/* Fourth Row */}
          <View style={styles.row}>
            <IntegrationCard type="BLA" />
            <IntegrationCard type="Google" />
          </View>
        </View>
        
        {/* Extra space for FAB */}
        <View style={styles.fabSpace} />
      </ScrollView>

      {/* Shared Footer */}
      <Footer
        liveCount={20}
        completedCount={1003}
        totalRevenue={515151}
        todayRevenue="$588"
        onPressFAB={() => navigation.navigate('AddNewIntegration')} // Adjust this navigation action as needed
      />
    </SafeAreaView>
  );
};

export default MakeIntegrations;
