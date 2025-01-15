import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/Onboard4.styles';

const Onboard4 = () => {
  const [height, setHeight] = useState(4.7);
  const [unit, setUnit] = useState('ft');
  const navigation = useNavigation();

  const toggleUnit = (selectedUnit) => {
    setUnit(selectedUnit);
    setHeight(selectedUnit === 'ft' ? 4.7 : 143); // Default height for ft and cm
  };

  const increaseHeight = () => {
    const max = unit === 'ft' ? 7.0 : 220;
    setHeight((prev) => Math.min(prev + 0.1, max));
  };

  const decreaseHeight = () => {
    const min = unit === 'ft' ? 3.0 : 90;
    setHeight((prev) => Math.max(prev - 0.1, min));
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
                step === 4 && styles.activeIndicator,
              ]}
            >
              <Text style={styles.indicatorText}>{step}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Title */}
      <Text style={styles.title}>
        What’s Your <Text style={styles.highlight}>Height?</Text>
      </Text>

      {/* Ft and Cm Toggle */}
      <View style={styles.unitSwitcher}>
        <TouchableOpacity
          style={[
            styles.unitButton,
            unit === 'ft' && styles.unitButtonSelected,
          ]}
          onPress={() => toggleUnit('ft')}
        >
          <Text
            style={[
              styles.unitButtonText,
              unit === 'ft' && styles.unitButtonTextSelected,
            ]}
          >
            Ft
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.unitButton,
            unit === 'cm' && styles.unitButtonSelected,
          ]}
          onPress={() => toggleUnit('cm')}
        >
          <Text
            style={[
              styles.unitButtonText,
              unit === 'cm' && styles.unitButtonTextSelected,
            ]}
          >
            Cm
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content: Person Image, Adjuster, and Scale */}
      <View style={styles.contentContainer}>
        <Image
          source={require('../assets/person.png')} // Replace with your person image
          style={styles.personImage}
        />
        <View style={styles.adjustHeightContainer}>
          <TouchableOpacity onPress={decreaseHeight} style={styles.adjustButton}>
            <Text style={styles.adjustButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.heightText}>{height.toFixed(1)} {unit}</Text>
          <TouchableOpacity onPress={increaseHeight} style={styles.adjustButton}>
            <Text style={styles.adjustButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scale}>
          {Array.from({ length: 20 }).map((_, i) => (
            <View
              key={i}
              style={[
                styles.scaleLine,
                i % 5 === 0 && styles.scaleLineHighlight,
              ]}
            />
          ))}
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('Onboard5')}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
       <TouchableOpacity
              style={styles.skipButton}
              onPress={() => navigation.navigate('Onboard5')} // Navigate to Onboard2
              >
                <Text style={styles.skipButtonText}>Skip</Text>
              </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboard4;
