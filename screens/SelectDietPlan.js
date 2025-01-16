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
        beginner: 'Start with a mix of seasonal fruits like apples, bananas, and oranges. These provide essential vitamins, hydration, and natural sugars for energy.',
        intermediate: 'Incorporate a wider variety, such as berries for antioxidants, citrus for vitamin C, and tropical fruits like mango and papaya for added nutrition.',
        advanced: 'Focus on high-antioxidant fruits like goji berries and acai. Pair fruits with protein-rich foods to stabilize blood sugar levels and enhance digestion.',
      },
    },
    {
      id: '2',
      name: 'Vegetables',
      icon: require('../assets/vegetables-icon.png'),
      details: {
        beginner: 'Include common vegetables like spinach, carrots, and tomatoes in daily meals for basic fiber and nutrients.',
        intermediate: 'Add colorful options like bell peppers, zucchini, and broccoli for a variety of vitamins and minerals.',
        advanced: 'Diversify with fermented vegetables like kimchi and sauerkraut, and explore exotic greens such as bok choy or watercress for a nutritional boost.',
      },
    },
    {
      id: '3',
      name: 'Proteins',
      icon: require('../assets/proteins-icon.png'),
      details: {
        beginner: 'Incorporate easily digestible proteins like eggs, chicken breast, tofu, or cottage cheese into meals.',
        intermediate: 'Include lean meats like turkey, salmon, and a mix of plant-based proteins such as lentils and quinoa.',
        advanced: 'Focus on protein timing (e.g., post-workout consumption) and variety, such as grass-fed beef, wild-caught fish, and advanced supplementation like whey protein isolate.',
      },
    },
    {
      id: '4',
      name: 'Whole Grains',
      icon: require('../assets/whole-grains-icon.png'),
      details: {
        beginner: 'Stick to simple staples like brown rice, oatmeal, and whole wheat bread for sustained energy and fiber.',
        intermediate: 'Experiment with diverse grains like quinoa, bulgur, and millet to expand your nutrient profile.',
        advanced: 'Focus on ancient grains like amaranth and teff. Explore gluten-free options and monitor your intake based on fitness goals.',
      },
    },
    {
      id: '5',
      name: 'Dairy',
      icon: require('../assets/dairy-icon.png'),
      details: {
        beginner: 'Introduce basic dairy products like milk, plain yogurt, and mild cheeses for calcium and protein.',
        intermediate: 'Shift to low-fat, fortified dairy options or lactose-free alternatives to suit your dietary needs.',
        advanced: 'Incorporate plant-based dairy like almond milk or cashew yogurt. Use fermented options like kefir or Greek yogurt for probiotic benefits.',
      },
    },
    {
      id: '6',
      name: 'Healthy Fats',
      icon: require('../assets/healthy-fats-icon.png'),
      details: {
        beginner: 'Add basic sources like almonds, walnuts, and avocado to meals for healthy fat intake.',
        intermediate: 'Include diverse options like olive oil, chia seeds, and coconut oil to enhance meal variety and omega-3 content.',
        advanced: 'Optimize fat intake by focusing on foods rich in omega-3s (e.g., salmon, flaxseed) and supplements like fish oil for anti-inflammatory benefits.',
      },
    },
    {
      id: '7',
      name: 'Legumes',
      icon: require('../assets/legumes-icon.png'),
      details: {
        beginner: 'Start with staple legumes like lentils, chickpeas, and split peas for an easy source of protein and fiber.',
        intermediate: 'Incorporate a wider variety like black beans, pinto beans, and soy products such as edamame and tofu.',
        advanced: 'Experiment with sprouted or fermented legumes for enhanced digestibility and nutrient absorption.',
      },
    },
    {
      id: '8',
      name: 'Snacks',
      icon: require('../assets/snacks-icon.png'),
      details: {
        beginner: 'Choose simple, healthy snacks like fresh fruits, raw nuts, or whole-grain crackers for a quick energy boost.',
        intermediate: 'Incorporate more structured snacks like homemade smoothies, energy bars, or Greek yogurt with toppings.',
        advanced: 'Focus on balanced, nutrient-dense snacks like quinoa salad, protein-packed mini-meals, or custom-made snack packs to align with fitness goals.',
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
