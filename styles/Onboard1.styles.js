import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 60, // Adds extra space at the top
  },
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
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIndicator: {
    backgroundColor: '#FFBD27',
  },
  indicatorText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#FFFFFF',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    color: '#003F63',
    textAlign: 'center',
    marginBottom: 0,
  },
  highlight: {
    color: '#FFBD27',
  },
  optionsContainer: {
    marginBottom: 30,
  },
  option: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ECE6F0',
    borderRadius: 8,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ECE6F0',
    marginRight: 15,
  },
  radioButtonSelected: {
    borderColor: '#FFBD27',
    backgroundColor: '#FFBD27',
  },
  optionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000000',
  },
  buttonContainer: {
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
    fontFamily: 'NunitoSans-Regular',
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
    fontFamily: 'NunitoSans-Regular',
    fontSize: 24,
    color: '#Black',
  },
});
