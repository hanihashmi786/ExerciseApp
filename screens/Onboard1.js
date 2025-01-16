import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { styles } from '../styles/Onboard1.styles';

const Onboard1 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation(); // Use the hook to get the navigation object

  const options = [
    { id: '1', label: 'Release Stress' },
    { id: '2', label: 'Better Athletic Ability' },
    { id: '3', label: 'Feel Confident' },
    { id: '4', label: 'Camera Friendly' },
    { id: '5', label: 'Get Shaped' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.option,
        selectedOption === item.id && { borderColor: '#FFD700' }, // Highlight selected option
      ]}
      onPress={() => setSelectedOption(item.id)}
    >
      <View style={styles.optionContent}>
        <View
          style={[
            styles.radioButton,
            selectedOption === item.id && styles.radioButtonSelected, // Highlight selected radio button
          ]}
        />
        <Text style={styles.optionText}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Progress Indicator */}
      <View style={styles.progressIndicator}>
        {[1, 2, 3, 4, 5].map((step, index) => (
          <View key={index} style={styles.indicatorContainer}>
            <View
              style={[
                styles.indicator,
                step === 1 && styles.activeIndicator, // Highlight current step
              ]}
            >
              <Text style={styles.indicatorText}>{step}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Title */}
      <Text style={styles.title}>
        What <Text style={styles.highlight}>Motivates</Text>
      </Text>
      <Text style={styles.title}>
        You The Most 
      </Text>  
      {/* Options */}
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.optionsContainer}
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('Onboard2')} // Navigate to Onboard2
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate('Onboard2')} // Navigate to Onboard2
        >
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboard1;
