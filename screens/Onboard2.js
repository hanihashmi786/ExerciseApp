import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/Onboard2.styles';

const Onboard2 = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const navigation = useNavigation();

  const handleNext = () => {
    if (selectedGender) {
      navigation.navigate('Onboard3'); // Navigate to next screen
    } else {
      alert('Please select a gender!');
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
                step === 2 && styles.activeIndicator, // Highlight current step
              ]}
            >
              <Text style={styles.indicatorText}>{step}</Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.title}>
        Please Select <Text style={styles.highlight}>Gender</Text>
      </Text>

      <View style={styles.genderContainer}>
        {/* Male Option */}
        <TouchableOpacity
          style={[
            styles.dietOption, // Same style as Onboard3
            selectedGender === 'male' && styles.selectedOption, // Highlight selected option
          ]}
          onPress={() => setSelectedGender('male')}
        >
          <Image
            source={require('../assets/male.png')} // Male image
            style={[
              styles.dietImage,
              selectedGender === 'male' && styles.dietImageSelected, // Change border color when selected
            ]}
          />
          <Text style={styles.dietLabel}>Male</Text>
        </TouchableOpacity>

        {/* Female Option */}
        <TouchableOpacity
          style={[
            styles.dietOption, // Same style as Onboard3
            selectedGender === 'female' && styles.selectedOption, // Highlight selected option
          ]}
          onPress={() => setSelectedGender('female')}
        >
          <Image
            source={require('../assets/female.png')} // Female image
            style={[
              styles.dietImage,
              selectedGender === 'female' && styles.dietImageSelected, // Change border color when selected
            ]}
          />
          <Text style={styles.dietLabel}>Female</Text>
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

export default Onboard2;
