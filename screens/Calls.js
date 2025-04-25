import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import custom icons
import CallLogIcon from '../assets/icons/CallLogIcon';
import CallSummaryIcon from '../assets/icons/CallSummaryIcon';
import CompletedCallIcon from '../assets/icons/CompletedCallIcon';
import LiveCallIcon from '../assets/icons/LiveCallIcon';
import UncompleteCallIcon from '../assets/icons/UncompleteCallIcon';
import HeadphoneIcon from '../assets/icons/Headphone';
import NotificationsIcon from '../assets/icons/NotificationsIcon';

// Shared footer component
import Footer from '../assets/components/Footer';

// Styles
import styles from '../styles/Calls.styles';

const CallsScreen = () => {
  const navigation = useNavigation();

  // Demo metrics — wire these up to your real state or API
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
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Calls</Text>
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
          {/* First Row */}
          <View style={styles.cardsContainer}>
            <TouchableOpacity style={styles.navCard}>
              <View style={styles.iconCircle}>
                <CallLogIcon width={24} height={24} />
              </View>
              <Text style={styles.navCardText}>Call Logs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navCard}>
              <View style={styles.iconCircle}>
                <CallSummaryIcon width={24} height={24} />
              </View>
              <Text style={styles.navCardText}>Call Summary</Text>
            </TouchableOpacity>
          </View>

          {/* Second Row */}
          <View style={styles.cardsContainer}>
            <TouchableOpacity style={styles.navCard}>
              <View style={styles.iconCircle}>
                <LiveCallIcon width={24} height={24} />
              </View>
              <Text style={styles.navCardText}>Live Calls</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navCard}>
              <View style={styles.iconCircle}>
                <CompletedCallIcon width={24} height={24} />
              </View>
              <Text style={styles.navCardText}>Completed Calls</Text>
            </TouchableOpacity>
          </View>

          {/* Full‑width Card */}
          <TouchableOpacity style={styles.fullWidthCard}>
            <View style={styles.iconCircle}>
              <UncompleteCallIcon width={24} height={24} />
            </View>
            <Text style={styles.navCardText}>Uncompleted Calls</Text>
          </TouchableOpacity>

          {/* Last 7 Days Table */}
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>Last 7 Days Stats</Text>
            </View>
            <View style={styles.tableHeaderRow}>
              <View style={styles.dayColumn}>
                <Text style={styles.tableColumnHeader}>Day</Text>
              </View>
              <View style={styles.callsColumn}>
                <Text style={styles.tableColumnHeader}>Total Calls</Text>
              </View>
              <View style={styles.callsColumn}>
                <Text style={styles.tableColumnHeader}>Completed</Text>
              </View>
            </View>
            {[
              { day: 'Monday', total: 12, comp: 82 },
              { day: 'Tuesday', total: 6, comp: 200 },
              { day: 'Wednesday', total: 19, comp: 101 },
              { day: 'Thursday', total: 16, comp: 100 },
              { day: 'Friday', total: 25, comp: 102 },
              { day: 'Saturday', total: 50, comp: 50 },
              { day: 'Sunday', total: 7, comp: 80 },
            ].map((row, idx) => (
              <View
                key={row.day}
                style={[
                  styles.tableRow,
                  idx % 2 === 0 ? styles.tableRowOdd : styles.tableRowEven
                ]}
              >
                <View style={styles.dayColumn}>
                  <Text style={styles.dayText}>{row.day}</Text>
                </View>
                <View style={styles.callsColumn}>
                  <Text style={styles.blueCallsText}>{row.total}</Text>
                </View>
                <View style={styles.callsColumn}>
                  <Text style={styles.greenCallsText}>{row.comp}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Spacer so FAB doesn’t cover content */}
          <View style={styles.fabSpace} />
        </View>
      </ScrollView>

      {/* Shared Footer + FAB */}
      <Footer
        liveCount={liveCount}
        completedCount={completedCount}
        totalRevenue={totalRevenue}
        todayRevenue={todayRevenue}
        onPressFAB={() => navigation.navigate('CallLog')}
      />
    </SafeAreaView>
  );
};

export default CallsScreen;
