import { StyleSheet } from 'react-native';
import { styles as onboard1Styles } from '../styles/Onboard1.styles'; // Reusing shared styles

export const styles = StyleSheet.create({
  ...onboard1Styles, // Reuse styles from Onboard1.styles.js
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  dietOption: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Increased padding to enlarge boxes
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    marginBottom: 20,
    width: 150, // Increased size of the options
    height: 150, // Increased size of the options
  },
  selectedOption: {
    borderColor: '#FFD700', // Highlight selected option with yellow border
  },
  dietImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 40, // Ensure circular image
  },
  dietImageSelected: {
    borderColor: '#FFD700', // Border color change on selection
    borderWidth: 3,
  },
  dietLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000000',
  },
  buttonContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 40, // Keep buttons at the bottom of the screen
    left: 0,
    right: 0,
  },
  nextButton: {
    backgroundColor: '#002B5C',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginBottom: 10,
  },
  nextButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  skipButtonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#A0A0A0',
  },
});
