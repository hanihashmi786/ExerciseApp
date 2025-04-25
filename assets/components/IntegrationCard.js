// IntegrationCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const IntegrationCard = ({ type }) => {
  // Determine which logo to use based on the type prop
  const logoSource = type === 'BLA' 
    ? require('../../assets/images/BLA.png') 
    : require('../../assets/images/Google.png');

  return (
    <View style={styles.container}>
      {/* Blue strip on the left */}
      <View style={styles.blueStrip} />
      
      {/* White content area */}
      <View style={styles.contentContainer}>
        <Image 
          source={logoSource}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      {/* Integration button */}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.integrationButton}>
          <Text style={styles.integrationText}>Integration</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 180,
    borderRadius: 12,
    backgroundColor: 'white',
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 16,
  },
  blueStrip: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 12,
    backgroundColor: '#477EE6',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  logo: {
    width: '100%',
    height: 60,
    resizeMode: 'contain',
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 15,
  },
  integrationButton: {
    backgroundColor: '#477EE6',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    minWidth: 100,
    alignItems: 'center',
  },
  integrationText: {
    color: 'white',
    fontFamily: 'Inter-Medium',
    fontSize: 14,
  },
});

export default IntegrationCard;