import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  progressIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#FFD700',
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
