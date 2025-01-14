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

  const exercises = [
    { id: '1', name: 'Leg Press', icon: require('../assets/legpress-icon.png') },
    { id: '2', name: 'Stretching', icon: require('../assets/stretching-icon.png') },
    { id: '3', name: 'Sprinting', icon: require('../assets/sprinting-icon.png') },
    { id: '4', name: 'Weightlifting', icon: require('../assets/weightlifting-icon.png') },
    { id: '5', name: 'Running', icon: require('../assets/running-icon.png') },
    { id: '6', name: 'Meditation', icon: require('../assets/meditation-icon.png') },
    { id: '7', name: 'Kickboxing', icon: require('../assets/kickboxing-icon.png') },
    { id: '8', name: 'Diet Plans', icon: require('../assets/diet-plans-icon.png') },
  ];

  const renderExercise = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.exerciseItem,
        selectedExercise === item.id && styles.selectedExerciseItem,
      ]}
      onPress={() => setSelectedExercise(item.id)}
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
