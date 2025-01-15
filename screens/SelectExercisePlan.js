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
        beginner: 'Build strength with this beginner leg press plan.',
        intermediate: 'Enhance muscle power with this intermediate leg press plan.',
        advanced: 'Maximize strength with the advanced leg press plan.',
      },
    },
    {
      id: '2',
      name: 'Stretching',
      icon: require('../assets/stretching-icon.png'),
      details: {
        beginner: 'Basic stretches to improve flexibility.',
        intermediate: 'Dynamic stretches for active performance.',
        advanced: 'Deep stretches for advanced practitioners.',
      },
    },
    {
      id: '3',
      name: 'Sprinting',
      icon: require('../assets/sprinting-icon.png'),
      details: {
        beginner: 'Learn basic sprinting techniques for beginners.',
        intermediate: 'Increase speed with this intermediate sprint plan.',
        advanced: 'Advanced drills for experienced sprinters.',
      },
    },
    {
      id: '4',
      name: 'Weightlifting',
      icon: require('../assets/weightlifting-icon.png'),
      details: {
        beginner: 'Start with foundational weightlifting exercises.',
        intermediate: 'Build muscle strength with an intermediate plan.',
        advanced: 'Advanced techniques for experienced lifters.',
      },
    },
    {
      id: '5',
      name: 'Running',
      icon: require('../assets/running-icon.png'),
      details: {
        beginner: 'A beginner-friendly running routine.',
        intermediate: 'Boost endurance with this intermediate plan.',
        advanced: 'Advanced running strategies for distance and speed.',
      },
    },
    {
      id: '6',
      name: 'Meditation',
      icon: require('../assets/meditation-icon.png'),
      details: {
        beginner: 'Learn basic meditation techniques.',
        intermediate: 'Develop focus with an intermediate meditation plan.',
        advanced: 'Master mindfulness with advanced meditation techniques.',
      },
    },
    {
      id: '7',
      name: 'Kickboxing',
      icon: require('../assets/kickboxing-icon.png'),
      details: {
        beginner: 'Learn basic kickboxing moves.',
        intermediate: 'Enhance skills with an intermediate kickboxing plan.',
        advanced: 'Advanced kickboxing techniques for competition.',
      },
    },
    {
      id: '8',
      name: 'Diet Plans',
      icon: require('../assets/diet-plans-icon.png'),
      details: {
        beginner: 'Basic healthy eating guidelines.',
        intermediate: 'Structured diet plans for fitness goals.',
        advanced: 'Advanced nutritional strategies for peak performance.',
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
