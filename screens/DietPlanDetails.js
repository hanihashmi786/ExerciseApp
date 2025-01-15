import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from '../styles/DietPlanDetails.styles';

const DietPlanDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Extract data from route
  const { dietPlan } = route.params;

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        {/* Header with Back Button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/back-button.png')} // Replace with your back icon
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>
            Select <Text style={styles.highlight}>Diet</Text> Plan
          </Text>
        </View>

        {/* Diet Icon and Title */}
        <Image source={dietPlan.icon} style={styles.dietIcon} />
       
      </View>

      {/* Diet Details Section */}
      <View style={styles.detailsSection}>
      <View style={styles.titleWrapper}>
          <Text style={styles.dietTitle}>{dietPlan.name}</Text>
        </View>
        <Text style={styles.detailsHeading}>Beginner {dietPlan.name} Plan:</Text>
        <Text style={styles.detailsText}>{dietPlan.details.beginner}</Text>

        <Text style={styles.detailsHeading}>Intermediate {dietPlan.name} Plan:</Text>
        <Text style={styles.detailsText}>{dietPlan.details.intermediate}</Text>

        <Text style={styles.detailsHeading}>Advanced {dietPlan.name} Plan:</Text>
        <Text style={styles.detailsText}>{dietPlan.details.advanced}</Text>
      </View>
    </View>
  );
};

export default DietPlanDetails;
