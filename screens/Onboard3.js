import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/Onboard3.styles';

const Onboard3 = () => {
  const [selectedDiet, setSelectedDiet] = useState(null);
  const navigation = useNavigation();

  const handleNext = () => {
    if (selectedDiet) {
      navigation.navigate('Onboard4'); // Navigate to the next screen
    } else {
      alert('Please select a diet type!');
    }
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
                step === 3 && styles.activeIndicator, // Highlight current step
              ]}
            >
              <Text style={styles.indicatorText}>{step}</Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.title}>
        What’s Your <Text style={styles.highlight}>Diet Type?</Text>
      </Text>

      <View style={styles.dietContainer}>
        {/* Standard Diet Option */}
        <TouchableOpacity
          style={[
            styles.dietOption,
            selectedDiet === 'standard' && styles.selectedDiet,
          ]}
          onPress={() => setSelectedDiet('standard')}
        >
          <Image
            source={require('../assets/standard.png')} // Use your image for Standard
            style={[
              styles.dietImage,
              selectedDiet === 'standard' && styles.dietImageSelected, // Change border on selection
            ]}
          />
          <Text style={styles.dietLabel}>Standard</Text>
        </TouchableOpacity>

        {/* Vegetarian Diet Option */}
        <TouchableOpacity
          style={[
            styles.dietOption,
            selectedDiet === 'vegetarian' && styles.selectedDiet,
          ]}
          onPress={() => setSelectedDiet('vegetarian')}
        >
          <Image
            source={require('../assets/vegetarian.png')} // Use your image for Vegetarian
            style={[
              styles.dietImage,
              selectedDiet === 'vegetarian' && styles.dietImageSelected, // Change border on selection
            ]}
          />
          <Text style={styles.dietLabel}>Vegetarian</Text>
        </TouchableOpacity>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Onboard3;
