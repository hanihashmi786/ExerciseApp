import { StyleSheet } from 'react-native';
import { styles as onboard1Styles } from '../styles/Onboard1.styles'; // Reusing shared styles

export const styles = StyleSheet.create({
  ...onboard1Styles, // Reuse common styles

  dietContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 40,
  },
  dietOption: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: 140, // Increase size
    height: 180, // Increase size
  },
  selectedDiet: {
    borderColor: '#FFBD27', // Highlight selected diet option with yellow
    borderWidth: 3,
  },
  dietImage: {
    width: 100, // Increase image size
    height: 100, // Increase image size
    borderRadius: 50, // Circular image
  },
  dietImageSelected: {
    borderColor: '#FFBD27', // Change border color on selection
    borderWidth: 5, // Thicker border when selected
  },
  dietLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000000',
    marginTop: 10,
  },

  // Adjusted Progress Indicator
  progressIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  indicatorContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  indicator: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIndicator: {
    backgroundColor: '#FFD700', // Highlight active indicator with yellow
  },
  indicatorText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#FFFFFF',
  },

  // Button Styling
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#003F63',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginBottom: 10,
  },
  nextButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#FFFFFF',
  },
  skipButton: {
    backgroundColor: '#ECE6F0',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginBottom: 10,
  },
  skipButtonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    color: '#Black',
  },
});
