import React, { useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import FooterBackground from '../icons/Footer';

const { width } = Dimensions.get('window');

const Footer = () => {
  // Example state for dynamic values
  const [liveCount, setLiveCount] = useState("20");
  const [completedCount, setCompletedCount] = useState("1003");
  const [revenueAmount, setRevenueAmount] = useState("515151");
  const [totalAmount, setTotalAmount] = useState("$588");

  // Handle FAB button press
  const handleFabPress = () => {
    // Example: Increment live count when FAB is pressed
    setLiveCount((parseInt(liveCount) + 1).toString());
  };

  return (
    <View style={styles.container}>
      <FooterBackground
        width={width} 
        height={126}
        liveCount={liveCount}
        completedCount={completedCount}
        revenueAmount={revenueAmount}
        totalAmount={totalAmount}
        onFabPress={handleFabPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});

export default Footer;