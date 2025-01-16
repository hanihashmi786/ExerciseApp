import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/SelectExercisePlan.styles';

const SelectExercisePlan = () => {
  const navigation = useNavigation();
  const [selectedExercise, setSelectedExercise] = useState(null);

  // List of exercises
  const exercises = [
    {
      id: '1',
      name: 'Leg Press',
      icon: require('../assets/legpress-icon.png'),
      details: {
        beginner: 'Start with low weights and focus on proper form to avoid injury. Perform 3 sets of 10-12 reps, taking rest between sets.',
        intermediate: 'Increase the weight gradually and perform 4 sets of 8-10 reps. Incorporate single-leg presses to target imbalances.',
        advanced: 'Focus on heavy weights with 5 sets of 6-8 reps. Include drop sets and tempo variations for maximum strength and muscle growth.',
      },
    },
    {
      id: '2',
      name: 'Stretching',
      icon: require('../assets/stretching-icon.png'),
      details: {
        beginner: 'Perform static stretches for 15-20 seconds per muscle group, focusing on basic areas like hamstrings, quads, and shoulders.',
        intermediate: 'Incorporate dynamic stretches like leg swings and arm circles for better range of motion and mobility. Hold static stretches for 30 seconds.',
        advanced: 'Practice PNF (Proprioceptive Neuromuscular Facilitation) stretches and deep flexibility routines targeting advanced poses and splits.',
      },
    },
    {
      id: '3',
      name: 'Sprinting',
      icon: require('../assets/sprinting-icon.png'),
      details: {
        beginner: 'Learn the basics of sprinting with 50-meter sprints at 50-60% effort. Rest 2 minutes between each sprint for recovery.',
        intermediate: 'Perform 100-meter sprints at 70-80% effort with shorter rest periods. Incorporate hill sprints to improve strength and endurance.',
        advanced: 'Focus on 200-400 meter sprints at full effort. Combine sprint intervals with resistance training for peak speed performance.',
      },
    },
    {
      id: '4',
      name: 'Weightlifting',
      icon: require('../assets/weightlifting-icon.png'),
      details: {
        beginner: 'Focus on compound exercises like squats, deadlifts, and bench presses with light weights. Perform 3 sets of 10-12 reps.',
        intermediate: 'Increase weight and focus on hypertrophy with 4 sets of 8-10 reps. Include isolation exercises like bicep curls and tricep extensions.',
        advanced: 'Incorporate advanced techniques like supersets, drop sets, and pyramid schemes with heavier weights and lower reps for strength gains.',
      },
    },
    {
      id: '5',
      name: 'Running',
      icon: require('../assets/running-icon.png'),
      details: {
        beginner: 'Start with short runs or jogs (1-2 km) at a slow pace. Focus on maintaining a steady rhythm and proper running posture.',
        intermediate: 'Run 3-5 km at a moderate pace, incorporating interval training to build stamina and improve speed.',
        advanced: 'Train for long-distance running (10 km or more) with tempo runs, intervals, and recovery runs for peak endurance.',
      },
    },
    {
      id: '6',
      name: 'Meditation',
      icon: require('../assets/meditation-icon.png'),
      details: {
        beginner: 'Practice mindful breathing for 5-10 minutes daily. Sit in a quiet space and focus on your breath to calm your mind.',
        intermediate: 'Increase sessions to 15-20 minutes, incorporating guided meditations for focus and stress relief.',
        advanced: 'Engage in advanced meditation practices like Vipassana or Transcendental Meditation, dedicating 30+ minutes daily to mindfulness.',
      },
    },
    {
      id: '7',
      name: 'Kickboxing',
      icon: require('../assets/kickboxing-icon.png'),
      details: {
        beginner: 'Learn basic punches (jab, cross) and kicks (front, roundhouse) with shadowboxing for 15-20 minutes.',
        intermediate: 'Combine combinations of punches and kicks, including pad work and basic defensive techniques. Train for 30-40 minutes.',
        advanced: 'Focus on sparring, advanced techniques, and endurance drills. Include heavy bag work and strategy sessions for competitive edge.',
      },
    },
    {
      id: '8',
      name: 'Diet Plans',
      icon: require('../assets/diet-plans-icon.png'),
      details: {
        beginner: 'Start by incorporating balanced meals with vegetables, lean protein, and whole grains. Avoid processed foods.',
        intermediate: 'Follow structured diet plans with macronutrient tracking. Include meal prepping for better consistency.',
        advanced: 'Optimize nutrition with specific calorie goals, nutrient timing, and supplements to enhance performance and recovery.',
      },
    },
  ];

  // Render individual exercise
  const renderExercise = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.exerciseItem,
        selectedExercise === item.id && styles.selectedExerciseItem,
      ]}
      onPress={() =>
        navigation.navigate('ExerciseDetails', {
          exercise: {
            name: item.name,
            icon: item.icon,
            details: item.details,
          },
        })
      }
    >
      <Image source={item.icon} style={styles.exerciseIcon} />
      <Text
        style={[
          styles.exerciseText,
          selectedExercise === item.id && styles.selectedExerciseText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
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

      {/* Exercise List */}
      <FlatList
        data={exercises}
        renderItem={renderExercise}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default SelectExercisePlan;
