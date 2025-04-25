import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Custom icons
import BackIcon from '../assets/icons/BackIcon';
import MakePaymentIcon from '../assets/icons/MakePaymentIcon';
import RateSheetIcon from '../assets/icons/RateSheetIcon';
import BillInvoiceIcon from '../assets/icons/billInvoiceIcon';
import HeadphoneIcon from '../assets/icons/Headphone';
import NotificationsIcon from '../assets/icons/NotificationsIcon';

// Styles & shared Footer
import styles from '../styles/Billing.styles';
import Footer from '../assets/components/Footer';

const { width } = Dimensions.get('window');

const BillingScreen = () => {
  const navigation = useNavigation();

  // Demo metrics (wire these up to real data)
  const liveCount = 20;
  const completedCount = 1003;
  const totalRevenue = 515151;
  const todayRevenue = '$588';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <BackIcon width={40} height={40} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Billing</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <HeadphoneIcon width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <NotificationsIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Body */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Navigation Cards */}
          <View style={styles.cardsContainer}>
            <TouchableOpacity 
              style={styles.navCard}
              onPress={() => navigation.navigate('MakePayment')}
            >
              <View style={styles.iconCircle}>
                <MakePaymentIcon width={24} height={24} />
              </View>
              <Text style={styles.navCardText}>Make Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navCard}>
              <View style={styles.iconCircle}>
                <RateSheetIcon width={24} height={24} />
              </View>
              <Text style={styles.navCardText}>
                Rate sheet and{'\n'}mobile lookup
              </Text>
            </TouchableOpacity>
          </View>

          {/* Illustration */}
          <View style={styles.illustrationContainer}>
            <BillInvoiceIcon
              width={width * 0.9}
              height={400}
            />
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
        onPressFAB={() => navigation.navigate('MakePayment')}
      />
    </SafeAreaView>
  );
};

export default BillingScreen;
