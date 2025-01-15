import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/Onboard5.styles';

const Onboard5 = () => {
  const [weight, setWeight] = useState(50); // Default weight in kg
  const [unit, setUnit] = useState('Kg'); // Default unit
  const navigation = useNavigation();

  const toggleUnit = (selectedUnit) => {
    setUnit(selectedUnit);
    setWeight(selectedUnit === 'Kg' ? 50 : 110); // Default values for Kg and Lbs
  };

  const increaseWeight = () => {
    const max = unit === 'Kg' ? 150 : 330; // Max for Kg and Lbs
    setWeight((prev) => Math.min(prev + 1, max));
  };

  const decreaseWeight = () => {
    const min = unit === 'Kg' ? 10 : 20; // Min for Kg and Lbs
    setWeight((prev) => Math.max(prev - 1, min));
  };

  return (
    <View style={styles.container}>
      {/* Progress Indicator */}
      <View style={styles.progressIndicator}>
        {[1, 2, 3, 4, 5].map((step, index) => (
          <View key={index} style={styles.indicatorContainer}>
            <View
              style={[
                styles.indicator,
                step === 5 && styles.activeIndicator, // Highlight current step
              ]}
            >
              <Text style={styles.indicatorText}>{step}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Title */}
      <Text style={styles.title}>
        What’s Your <Text style={styles.highlight}>Weight?</Text>
      </Text>

      {/* Kg and Lbs Toggle */}
      <View style={styles.unitSwitcher}>
        <TouchableOpacity
          style={[
            styles.unitButton,
            unit === 'Kg' && styles.unitButtonSelected,
          ]}
          onPress={() => toggleUnit('Kg')}
        >
          <Text
            style={[
              styles.unitButtonText,
              unit === 'Kg' && styles.unitButtonTextSelected,
            ]}
          >
            Kg
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.unitButton,
            unit === 'Lbs' && styles.unitButtonSelected,
          ]}
          onPress={() => toggleUnit('Lbs')}
        >
          <Text
            style={[
              styles.unitButtonText,
              unit === 'Lbs' && styles.unitButtonTextSelected,
            ]}
          >
            Lbs
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content: Adjuster */}
      <View style={styles.adjustWeightContainer}>
        <TouchableOpacity onPress={decreaseWeight} style={styles.adjustButton}>
          <Text style={styles.adjustButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.weightText}>
          {weight} {unit}
        </Text>
        <TouchableOpacity onPress={increaseWeight} style={styles.adjustButton}>
          <Text style={styles.adjustButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Weight Image */}
      <Image
        source={require('../assets/weight.png')} // Replace with your weight image
        style={styles.weightImage}
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('Dashboard')} // Replace with the next screen
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
 <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate('Dashboard')} // Navigate to Onboard2
        >
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboard5;
