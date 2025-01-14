import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import { styles } from '../styles/Dashboard.styles';


const Dashboard = () => {
    const navigation = useNavigation(); // Hook to get navigation

  const [selectedTab, setSelectedTab] = useState('Premium Feature');
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const tabs = ['Premium Feature', 'Exercises', 'Diet Plans'];
  const sidebarItems = [
    'Home',
    'Exercise Plans',
    'Diet Plans',
    'Premium Plans',
    'History',
    'Saved Plans',
    'Rate Us',
  ];

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      {isSidebarVisible && (
        <View style={styles.sidebar}>
          {/* Sidebar Header */}
          <View style={styles.sidebarHeader}>
            <TouchableOpacity
              onPress={() => setSidebarVisible(false)}
              style={styles.backButton}
            >
            <Image
              source={require('../assets/app-icon.png')} // Replace with your app icon
              style={styles.sidebarImage}
            />
              <Image
                source={require('../assets/back-icon.png')} // Replace with your back icon
                style={styles.icon}
              />
            </TouchableOpacity>
            
          </View>
          <View style={styles.sidebarSeparator} />
          {/* Sidebar Items */}
          {sidebarItems.map((item, index) => (
            <TouchableOpacity
    key={index}
    style={styles.sidebarItem}
    onPress={() => {
      if (item === 'Exercise Plans') {
        navigation.navigate('SelectExercisePlan'); // Navigate to SelectExercisePlan
      } else if (item === 'Diet Plans') {
        navigation.navigate('SelectDietPlan'); // Navigate to SelectDietPlan
      }
      setSidebarVisible(false); // Close the sidebar
    }}
  >
    <Text style={styles.sidebarItemText}>{item}</Text>
  </TouchableOpacity>
            
          ))}
        </View>
      )}

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setSidebarVisible(true)}
        >
          <Image
            source={require('../assets/sidebar-icon.png')} // Replace with your sidebar icon
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('UserSettings')} // Navigate to UserSettings
        >
          <Image
            source={require('../assets/user-icon.png')} // Replace with your user icon
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          Your Guide to <Text style={styles.highlight}>Food</Text>
        </Text>
        <Text style={styles.headingSecondLine}>
          and <Text style={styles.highlight}>Fitness</Text>
        </Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search text"
          placeholderTextColor="#A0A0A0"
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab && styles.activeTab,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Scrollable Content */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardScroll}
      >
        <View style={styles.card}>
          <Image
            source={require('../assets/exercise-icon.png')} // Replace with your exercise icon
            style={styles.cardIcon}
          />
          <Text style={styles.cardTitle}>Exercise Plans</Text>
          <Text style={styles.cardDescription}>
            Quick access to personalized meal plans tailored to user goals.
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require('../assets/diet-icon.png')} // Replace with your diet icon
            style={styles.cardIcon}
          />
          <Text style={styles.cardTitle}>Diet Plans</Text>
          <Text style={styles.cardDescription}>
            A button to access diet plans tailored to personal health goals.
          </Text>
        </View>
        {/* Add more cards as needed */}
      </ScrollView>
    </View>
  );
};

export default Dashboard;
