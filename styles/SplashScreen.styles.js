import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  illustration: {
    width: 250, // Adjust based on your illustration size
    height: 250,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontFamily: 'Poppins-Bold', // Bold font for the title
    fontSize: 28, // Adjust font size for the title
    color: '#FFFFFF', // White text color
    textAlign: 'center',
  },
  highlight: {
    color: '#FFD700', // Golden yellow for "Lose Weight"
  },
  subtitle: {
    fontFamily: 'Poppins-Regular', // Regular font for the subtitle
    fontSize: 16, // Adjust font size for the subtitle
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#002B5C', // Dark blue background for the button
    width: '80%',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold', // Semi-bold font for button text
    fontSize: 18,
    color: '#FFFFFF',
  },
});
