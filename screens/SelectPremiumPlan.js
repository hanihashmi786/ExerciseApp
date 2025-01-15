import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/SelectPremiumPlan.styles';

const SelectPremiumPlan = () => {
  const navigation = useNavigation();

  const premiumPlans = [
    {
      id: '1',
      name: 'Personalized Coaching',
      icon: require('../assets/male.png'),
    },
    {
      id: '2',
      name: 'Community Support',
      icon: require('../assets/team-work.png'),
    },
  ];

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
          Select <Text style={styles.highlight}>Premium</Text> Plan
        </Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>
        Select <Text style={styles.highlight}>Premium </Text> Plan
      </Text>

      {/* Premium Plans */}
      <View style={styles.premiumPlansContainer}>
        {premiumPlans.map((plan) => (
          <TouchableOpacity
            key={plan.id}
            style={styles.planItem}
            onPress={() => console.log(`${plan.name} selected`)}
          >
            <View style={styles.iconContainer}>
              <Image source={plan.icon} style={styles.planIcon} />
            </View>
            <Text style={styles.planName}>{plan.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SelectPremiumPlan;
