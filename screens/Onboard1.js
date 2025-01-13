import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { styles } from '../styles/Onboard1.styles';

const Onboard1 = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const options = [
    { id: '1', label: 'Release Stress' },
    { id: '2', label: 'Better Athletic Ability' },
    { id: '3', label: 'Feel Confident' },
    { id: '4', label: 'Camera Friendly' },
    { id: '5', label: 'Get Shaped' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.option}>
      <Text style={styles.optionText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.progressIndicator}>
        {[1, 2, 3, 4, 5].map((step, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              step === 1 && styles.activeIndicator, // Active step styling
            ]}
          />
        ))}
      </View>

      <Text style={styles.title}>
        What <Text style={styles.highlight}>Motivates</Text> You The Most?
      </Text>

      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.optionsContainer}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboard1;
