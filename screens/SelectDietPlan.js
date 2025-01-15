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
    {
      id: '1',
      name: 'Fruits',
      icon: require('../assets/fruits-icon.png'),
      details: {
        beginner: 'Start with a mix of seasonal fruits for essential vitamins and hydration.',
        intermediate: 'Incorporate a wider variety of fruits like berries, citrus, and tropical fruits.',
        advanced: 'Focus on high-antioxidant fruits, pairing them with balanced meals for optimal nutrition.',
      },
    },
    {
      id: '2',
      name: 'Vegetables',
      icon: require('../assets/vegetables-icon.png'),
      details: {
        beginner: 'Begin with basic leafy greens and common vegetables in your diet.',
        intermediate: 'Include colorful vegetables like bell peppers, carrots, and broccoli.',
        advanced: 'Diversify with fermented vegetables and explore exotic greens.',
      },
    },
    {
      id: '3',
      name: 'Proteins',
      icon: require('../assets/proteins-icon.png'),
      details: {
        beginner: 'Add basic protein sources like eggs, chicken, and tofu to your meals.',
        intermediate: 'Incorporate lean meats, fish, and a mix of plant-based proteins.',
        advanced: 'Focus on protein timing and variety, including advanced supplementation.',
      },
    },
    {
      id: '4',
      name: 'Whole Grains',
      icon: require('../assets/whole-grains-icon.png'),
      details: {
        beginner: 'Include staples like rice, oats, and whole wheat bread in your meals.',
        intermediate: 'Try diverse grains like quinoa, millet, and farro.',
        advanced: 'Focus on ancient grains and explore gluten-free options as needed.',
      },
    },
    {
      id: '5',
      name: 'Dairy',
      icon: require('../assets/dairy-icon.png'),
      details: {
        beginner: 'Start with basic dairy like milk, yogurt, and cheese.',
        intermediate: 'Incorporate low-fat and fortified dairy options.',
        advanced: 'Explore plant-based alternatives and fermented dairy products.',
      },
    },
    {
      id: '6',
      name: 'Healthy Fats',
      icon: require('../assets/healthy-fats-icon.png'),
      details: {
        beginner: 'Include nuts, seeds, and avocado in your meals.',
        intermediate: 'Add diverse sources like olive oil, coconut oil, and flaxseed.',
        advanced: 'Optimize fat intake with omega-3-rich foods and supplements.',
      },
    },
    {
      id: '7',
      name: 'Legumes',
      icon: require('../assets/legumes-icon.png'),
      details: {
        beginner: 'Start with common legumes like lentils and chickpeas.',
        intermediate: 'Add black beans, kidney beans, and soy products to your meals.',
        advanced: 'Experiment with fermented legumes and sprouted options.',
      },
    },
    {
      id: '8',
      name: 'Snacks',
      icon: require('../assets/snacks-icon.png'),
      details: {
        beginner: 'Opt for simple snacks like fruits and nuts.',
        intermediate: 'Incorporate protein bars, smoothies, and whole-grain crackers.',
        advanced: 'Create balanced, nutrient-dense snacks tailored to your needs.',
      },
    },
  ];

  const renderDiet = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.dietItem,
        selectedDiet === item.id && styles.selectedDietItem,
      ]}
      onPress={() => {
        setSelectedDiet(item.id);
        navigation.navigate('DietPlanDetails', { dietPlan: item }); // Pass diet plan data to details page
      }}
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
