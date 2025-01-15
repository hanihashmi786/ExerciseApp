import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from '../styles/ExerciseDetails.styles';

const ExerciseDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Extract data from route
  const { exercise } = route.params;

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
            Select <Text style={styles.highlight}>Exercise</Text> Plan
          </Text>
        </View>

        {/* Exercise Icon and Title */}
        <Image source={exercise.icon} style={styles.exerciseIcon} />
        
      </View>

      {/* Exercise Details Section */}
      <View style={styles.detailsSection}>
      <View style={styles.titleWrapper}>
          <Text style={styles.exerciseTitle}>{exercise.name}</Text>
        </View>
        <Text style={styles.detailsHeading}>Beginner {exercise.name} Plan:</Text>
        <Text style={styles.detailsText}>{exercise.details.beginner}</Text>

        <Text style={styles.detailsHeading}>Intermediate {exercise.name} Plan:</Text>
        <Text style={styles.detailsText}>{exercise.details.intermediate}</Text>

        <Text style={styles.detailsHeading}>Advanced {exercise.name} Plan:</Text>
        <Text style={styles.detailsText}>{exercise.details.advanced}</Text>
      </View>
    </View>
  );
};

export default ExerciseDetails;
