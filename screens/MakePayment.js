import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import custom icons
import BackIcon from '../assets/icons/BackIcon';
import PaymentIcon from '../assets/icons/PaymentIcon';
import Headphone from '../assets/icons/Headphone';
import NotificationsIcon from '../assets/icons/NotificationsIcon';
import LiveCallsIcon from '../assets/icons/LiveCallsIcon';
import CompletedCallsIcon from '../assets/icons/CompletedCallsIcon';
import RevenueIcon from '../assets/icons/RevenueIcon';
import AddButton from '../assets/icons/AddButton';
import DropdownIcon from '../assets/icons/DropdownIcon';

// Shared footer component
import Footer from '../assets/components/Footer';

import styles from '../styles/MakePayment.styles';

const { width } = Dimensions.get('window');

const MakePayment = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Make Payment');
  const [autoRecharge1, setAutoRecharge1] = useState(false);
  const [autoRecharge2, setAutoRecharge2] = useState(false);
  const [amount, setAmount] = useState('25.00');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const handleMakePayment = () => {
    // Handle payment logic
    console.log('Making payment of $', amount);
  };

  const toggleAutoRecharge1 = () => {
    setAutoRecharge1(previousState => !previousState);
  };

  const toggleAutoRecharge2 = () => {
    setAutoRecharge2(previousState => !previousState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer} onPress={handleBack}>
          <BackIcon width={24} height={24} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <PaymentIcon width={24} height={24} />
          <Text style={styles.headerTitle}>Make Payment</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconContainer}>
            <Headphone width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <NotificationsIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Tabs */}
        <View style={styles.tabContainer}>
          {['Make Payment', 'Payment History', 'Account Balance', 'Export'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => handleTabPress(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          {/* Credit Card Section */}
          <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>Credit Card</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>Select a Credit Card</Text>
              <DropdownIcon width={16} height={16} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.addCardText}>+ Add Another Credit Card</Text>
            </TouchableOpacity>
          </View>

          {/* Amount Section */}
          <View style={styles.formSection}>
            <Text style={styles.sectionTitle}>Amount ($)</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.amountText}>{amount}</Text>
              <DropdownIcon width={16} height={16} />
            </TouchableOpacity>
          </View>

          {/* Make Payment Button */}
          <TouchableOpacity style={styles.paymentButton} onPress={handleMakePayment}>
            <Text style={styles.paymentButtonText}>Make Payment</Text>
          </TouchableOpacity>
        </View>

        {/* Auto Recharge Section 1 */}
        <View style={styles.autoRechargeContainer}>
          <View style={styles.autoRechargeHeader}>
            <Text style={styles.autoRechargeTitle}>Auto Recharge</Text>
            <View style={styles.switchContainer}>
              <Switch
                trackColor={{ false: '#767577', true: '#4e9bff' }}
                thumbColor={autoRecharge1 ? '#ffffff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleAutoRecharge1}
                value={autoRecharge1}
                style={styles.switch}
              />
              <Text style={styles.switchText}>Off</Text>
            </View>
          </View>
          <Text style={styles.autoRechargeDescription}>
            Enable or Disable Auto-Recharge
          </Text>

          <View style={styles.autoRechargeSection}>
            <Text style={styles.autoRechargeSectionTitle}>Falls Below</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>When your balance falls below this amount.</Text>
              <DropdownIcon width={16} height={16} />
            </TouchableOpacity>
          </View>

          <View style={styles.autoRechargeSection}>
            <Text style={styles.autoRechargeSectionTitle}>Recharge Up To</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>Recharge up to this amount.</Text>
              <DropdownIcon width={16} height={16} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Auto Recharge Section 2 */}
        <View style={styles.autoRechargeContainer}>
          <View style={styles.autoRechargeHeader}>
            <Text style={styles.autoRechargeTitle}>Auto Recharge</Text>
            <View style={styles.switchContainer}>
              <Switch
                trackColor={{ false: '#767577', true: '#4e9bff' }}
                thumbColor={autoRecharge2 ? '#ffffff' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleAutoRecharge2}
                value={autoRecharge2}
                style={styles.switch}
              />
              <Text style={styles.switchText}>Off</Text>
            </View>
          </View>
          <Text style={styles.autoRechargeDescription}>
            Enable or Disable Auto-Recharge
          </Text>

          <View style={styles.autoRechargeSection}>
            <Text style={styles.autoRechargeSectionTitle}>Falls Below</Text>
          </View>
        </View>
        
        {/* Extra space for FAB */}
        <View style={styles.fabSpace} />
      </ScrollView>

      {/* Footer */}
      <Footer
        liveCount={20}
        completedCount={1003}
        totalRevenue={515151}
        todayRevenue="$588"
        onPressFAB={() => navigation.navigate('PaymentHistory')}
      />
    </SafeAreaView>
  );
};

export default MakePayment;
