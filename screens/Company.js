import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Icons
import TeamsIcon from '../assets/icons/TeamsIcon';
import UserIcons from '../assets/icons/UserIcons';
import HeadphoneIcon from '../assets/icons/Headphone';
import NotificationsIcon from '../assets/icons/NotificationsIcon';

// Shared footer
import Footer from '../assets/components/Footer';

import styles from '../styles/Company.styles';

const Company = () => {
  const navigation = useNavigation();

  // Demo metrics
  const liveCount       = 20;
  const completedCount  = 1003;
  const totalRevenue    = 515151;
  const todayRevenue    = '$588';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Company</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <HeadphoneIcon width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <NotificationsIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Navigation Cards */}
        <View style={styles.cardsContainer}>
          <TouchableOpacity style={styles.navCard} onPress={() => navigation.navigate('Users')}>
            <View style={styles.iconCircle}>
              <UserIcons width={24} height={24} />
            </View>
            <Text style={styles.navCardText}>Users</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.navCard} onPress={() => navigation.navigate('Teams')}>
            <View style={styles.iconCircle}>
              <TeamsIcon width={24} height={24} />
            </View>
            <Text style={styles.navCardText}>Teams</Text>
          </TouchableOpacity>
        </View>
        
        {/* Stats */}
        <Text style={styles.sectionTitle}>Team & User States:</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statsHeader}>
            <View style={styles.statHeaderItem}>
              <UserIcons width={16} height={16} />
              <Text style={styles.statHeaderText}>Total Users</Text>
            </View>
            <View style={styles.statHeaderItem}>
              <TeamsIcon width={16} height={16} />
              <Text style={styles.statHeaderText}>Total Teams</Text>
            </View>
          </View>
          <View style={styles.statsValues}>
            <View style={styles.statValueItem}>
              <Text style={styles.statValue}>25</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statValueItem}>
              <Text style={styles.statValue}>20</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Shared Footer + FAB */}
      <Footer
        liveCount={liveCount}
        completedCount={completedCount}
        totalRevenue={totalRevenue}
        todayRevenue={todayRevenue}
        onPressFAB={() => navigation.navigate('Users')}
      />
    </SafeAreaView>
  );
};

export default Company;
