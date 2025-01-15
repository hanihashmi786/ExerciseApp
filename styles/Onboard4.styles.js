import { StyleSheet } from 'react-native';
import { styles as onboard1Styles } from '../styles/Onboard1.styles'; // Reusing shared styles

export const styles = StyleSheet.create({
  ...onboard1Styles, // Reuse common styles

  unitSwitcher: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  unitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  unitButtonSelected: {
    backgroundColor: '#FFBD27',
  },
  unitButtonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000',
  },
  unitButtonTextSelected: {
    fontFamily: 'Poppins-Bold',
    color: '#003F63',
  },

  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  personImage: {
    width: 140,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  adjustHeightContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  heightText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#000000',
    marginVertical: 10,
  },
  adjustButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  adjustButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#000000',
  },
  scale: {
    width: 20,
    height: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scaleLine: {
    width: 10,
    height: 1,
    backgroundColor: '#A0A0A0',
  },
  scaleLineHighlight: {
    width: 20,
    height: 2,
    backgroundColor: '#FFD700',
  },

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
