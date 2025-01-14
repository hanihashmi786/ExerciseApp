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
    borderRadius: 15,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIndicator: {
    backgroundColor: '#FFD700',
  },
  indicatorText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#FFFFFF',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
  highlight: {
    color: '#FFD700',
  },
  optionsContainer: {
    marginBottom: 30,
  },
  option: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
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
    borderColor: '#E0E0E0',
    marginRight: 15,
  },
  radioButtonSelected: {
    borderColor: '#FFD700',
    backgroundColor: '#FFD700',
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
