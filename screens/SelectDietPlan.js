import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/SelectDietPlan.styles';

const SelectDietPlan = () => {
  const navigation = useNavigation();
  const [selectedDiet, setSelectedDiet] = useState(null);

  const dietPlans = [
    { id: '1', name: 'Fruits', icon: require('../assets/fruits-icon.png') },
    { id: '2', name: 'Vegetables', icon: require('../assets/vegetables-icon.png') },
    { id: '3', name: 'Proteins', icon: require('../assets/proteins-icon.png') },
    { id: '4', name: 'Whole Grains', icon: require('../assets/whole-grains-icon.png') },
    { id: '5', name: 'Dairy', icon: require('../assets/dairy-icon.png') },
    { id: '6', name: 'Healthy Fats', icon: require('../assets/healthy-fats-icon.png') },
    { id: '7', name: 'Legumes', icon: require('../assets/legumes-icon.png') },
    { id: '8', name: 'Snacks', icon: require('../assets/snacks-icon.png') },
  ];

  const renderDiet = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.dietItem,
        selectedDiet === item.id && styles.selectedDietItem,
      ]}
      onPress={() => setSelectedDiet(item.id)}
    >
      <Image source={item.icon} style={styles.dietIcon} />
      <Text
        style={[
          styles.dietText,
          selectedDiet === item.id && styles.selectedDietText,
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
          Select <Text style={styles.highlight}>Diet</Text> Plan
        </Text>
      </View>

      {/* Diet List */}
      <FlatList
        data={dietPlans}
        renderItem={renderDiet}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default SelectDietPlan;
