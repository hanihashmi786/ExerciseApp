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
import { LineChart } from 'react-native-chart-kit';

// Custom icons
import BillingIcon from '../assets/icons/BillingIcon';
import CallsIcon from '../assets/icons/CallsIcon';
import QuickActionsIcon from '../assets/icons/QuickActionsIcon';
import SidebarIcon from '../assets/icons/SidebarIcon';
import MoreFeaturesIcon from '../assets/icons/MoreFeaturesIcon';
import CompanyIcon from '../assets/icons/CompanyIcon';
import ManageIntegrationsIcon from '../assets/icons/ManageIntegrationsIcon';
import PerformanceIcon from '../assets/icons/PerformanceIcon';
import SystemSetupIcon from '../assets/icons/SystemSetupIcon';
import HeadphoneIcon from '../assets/icons/Headphone';
import NotificationsIcon from '../assets/icons/NotificationsIcon';

// Styles & Footer
import styles from '../styles/Dashboard.styles';
import Footer from '../assets/components/Footer';

const { width } = Dimensions.get('window');

const Dashboard = () => {
  const navigation = useNavigation();

  // Demo metrics (replace with your real data)
  const liveCount = 20;
  const completedCount = 1003;
  const totalRevenue = 515151;
  const todayRevenue = '$588';

  // Chart data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [4000, 6000, 7500, 6800, 5500, 3000, 5000],
        color: () => '#4e9bff',
        strokeWidth: 2
      },
      {
        data: [2500, 4000, 5500, 5000, 4000, 2800, 2000],
        color: () => '#2ce5b5',
        strokeWidth: 2
      },
      {
        data: [2000, 2200, 2100, 2300, 2500, 3000, 3200],
        color: () => '#ff9d42',
        strokeWidth: 2
      }
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1e2a3b',
    backgroundGradientTo: '#1e2a3b',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: { borderRadius: 16 },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#1e2a3b'
    },
    propsForBackgroundLines: {
      strokeDasharray: '',
      stroke: 'rgba(255, 255, 255, 0.1)',
      strokeWidth: 1
    },
    propsForLabels: {
      fontSize: 10,
      fontFamily: 'Inter-Light'
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <SidebarIcon width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Welcome Admin</Text>
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
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Performance Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <PerformanceIcon width={20} height={20} />
              <Text style={styles.sectionTitle}>Performance</Text>
            </View>
            <View style={styles.sectionActions}>
              <TouchableOpacity style={styles.dropdownButton}>
                <Text style={styles.dropdownText}>Monthly</Text>
                <View style={styles.dropdownIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.switchButton}>
                <Text style={styles.switchText}>Switch to pie</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.chartLegend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#4e9bff' }]} />
              <Text style={styles.legendText}>Total Calls</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#2ce5b5' }]} />
              <Text style={styles.legendText}>Completed calls</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#ff9d42' }]} />
              <Text style={styles.legendText}>Missed Calls</Text>
            </View>
          </View>

          <View style={styles.chartContainer}>
            <LineChart
              data={chartData}
              width={width - 40}
              height={220}
              chartConfig={chartConfig}
              bezier
              withInnerLines
              withOuterLines={false}
              withHorizontalLabels
              withVerticalLabels
              withDots={false}
              style={styles.chart}
              fromZero
              segments={5}
            />
            <View style={styles.yAxisLabels}>
              <Text style={styles.yAxisLabel}>8k</Text>
              <Text style={styles.yAxisLabel}>6k</Text>
              <Text style={styles.yAxisLabel}>4k</Text>
              <Text style={styles.yAxisLabel}>2k</Text>
              <Text style={styles.yAxisLabel}>0</Text>
            </View>
            <View style={styles.tooltipContainer}>
              <View style={styles.tooltipItem}>
                <View style={[styles.tooltipDot, { backgroundColor: '#4e9bff' }]} />
                <Text style={styles.tooltipText}>5,052</Text>
              </View>
              <View style={styles.tooltipItem}>
                <View style={[styles.tooltipDot, { backgroundColor: '#ff9d42' }]} />
                <Text style={styles.tooltipText}>5,052</Text>
              </View>
              <View style={styles.tooltipItem}>
                <View style={[styles.tooltipDot, { backgroundColor: '#2ce5b5' }]} />
                <Text style={styles.tooltipText}>5,052</Text>
              </View>
            </View>
            <View style={styles.highlightedPoint}>
              <View style={styles.highlightedDot} />
            </View>
          </View>
        </View>

        {/* More Features */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <MoreFeaturesIcon width={20} height={20} />
              <Text style={styles.sectionTitle}>More Features</Text>
            </View>
          </View>
          <View style={styles.featuresGrid}>
            <View style={styles.featuresRow}>
              <TouchableOpacity
                style={styles.featureCard}
                onPress={() => navigation.navigate('SystemSetup')}
              >
                <SystemSetupIcon width={24} height={24} />
                <Text style={styles.featureText}>System Setup</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.featureCard}
                onPress={() => navigation.navigate('Calls')}
              >
                <CallsIcon width={24} height={24} />
                <Text style={styles.featureText}>Calls</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.featuresRow}>
              <TouchableOpacity
                style={styles.featureCard}
                onPress={() => navigation.navigate('Company')}
              >
                <CompanyIcon width={24} height={24} />
                <Text style={styles.featureText}>Company</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.featureCard}
                onPress={() => navigation.navigate('BillingScreen')}
              >
                <BillingIcon width={24} height={24} />
                <Text style={styles.featureText}>Billing</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.featureCard}
              onPress={() => navigation.navigate('MakeIntegrations')}
            >
              <ManageIntegrationsIcon width={24} height={24} />
              <Text style={styles.featureText}>Manage Integrations</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <QuickActionsIcon width={24} height={24} />
              <Text style={styles.sectionTitle}>Quick Actions</Text>
            </View>
          </View>
          <View style={styles.quickActionsList}>
            <TouchableOpacity style={styles.quickActionItem}>
              <Text style={styles.quickActionText}>How to add new client?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.quickActionItem, styles.quickActionItemAlt]}>
              <Text style={styles.quickActionText}>How to maintain balance?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionItem}>
              <Text style={styles.quickActionText}>How to check updates?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.quickActionItem, styles.quickActionItemAlt]}>
              <Text style={styles.quickActionText}>New features?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionItem}>
              <Text style={styles.quickActionText}>abc?</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Spacer for FAB */}
        <View style={styles.fabSpace} />
      </ScrollView>

      {/* Footer + FAB */}
      <Footer
        liveCount={liveCount}
        completedCount={completedCount}
        totalRevenue={totalRevenue}
        todayRevenue={todayRevenue}
        onPressFAB={() => navigation.navigate('AddNewClient')}
      />
    </SafeAreaView>
  );
};

export default Dashboard;
