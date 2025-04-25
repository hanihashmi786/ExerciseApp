import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from 'react-native';

// Custom icons
import BackIcon from '../assets/icons/BackIcon';
import Headphone from '../assets/icons/Headphone';
import NotificationsIcon from '../assets/icons/NotificationsIcon';
import ClientsIcon from '../assets/icons/ClientsIcon';
import CallFlowsIcon from '../assets/icons/CallFlowsIcon';
import CallsIcon from '../assets/icons/CallsIcon';
import PartnerCapsIcon from '../assets/icons/PartnerCapsIcon';
import ManagePartnersIcon from '../assets/icons/ManagePartnersIcon';
import SetupSystemIcon from '../assets/icons/SetupSystemIcon';
import SystemSetupError from '../assets/icons/SystemSetupError';
import AddButton from '../assets/icons/AddButton';

// Shared footer
import Footer from '../assets/components/Footer';

// Styles
import styles from '../styles/SystemSetup.styles';

const SystemSetup = ({ navigation }) => {
  const handleBack = () => navigation.goBack();

  // Demo metrics (wire these up to real data)
  const liveCount       = 20;
  const completedCount  = 1003;
  const totalRevenue    = 515151;
  const todayRevenue    = '$588';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer} onPress={handleBack}>
          <BackIcon width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>System Setup</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconContainer}>
            <Headphone width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <NotificationsIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Body */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Row 1 */}
          <View style={styles.row}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Client')}>
              <ClientsIcon width={24} height={24} />
              <Text style={styles.cardText}>Client</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CallFlows')}>
              <CallFlowsIcon width={24} height={24} />
              <Text style={styles.cardText}>Call Flows</Text>
            </TouchableOpacity>
          </View>
          {/* Row 2 */}
          <View style={styles.row}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Calls')}>
              <CallsIcon width={24} height={24} />
              <Text style={styles.cardText}>Numbers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PartnerCaps')}>
              <PartnerCapsIcon width={24} height={24} />
              <Text style={styles.cardText}>Partner Caps</Text>
            </TouchableOpacity>
          </View>
          {/* Row 3 */}
          <View style={styles.row}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ManagePartners')}>
              <ManagePartnersIcon width={24} height={24} />
              <Text style={styles.cardText}>Manage Partner</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PageNotFound')}>
              <SetupSystemIcon width={24} height={24} />
              <Text style={styles.cardText}>System Setup</Text>
            </TouchableOpacity>
          </View>
          {/* Full‑width */}
          <TouchableOpacity style={styles.fullWidthCard}>
            <SetupSystemIcon width={24} height={24} />
            <Text style={styles.cardText}>Suppression List</Text>
          </TouchableOpacity>

          {/* Illustration */}
          <View style={styles.illustrationContainer}>
            <SystemSetupError width={280} height={200} />
          </View>

          {/* Spacer for FAB */}
          <View style={styles.fabSpace} />
        </View>
      </ScrollView>

      {/* Shared Footer + FAB */}
      <Footer
        liveCount={liveCount}
        completedCount={completedCount}
        totalRevenue={totalRevenue}
        todayRevenue={todayRevenue}
        onPressFAB={() => navigation.navigate('Client')}
      />
    </SafeAreaView>
  );
};

export default SystemSetup;
