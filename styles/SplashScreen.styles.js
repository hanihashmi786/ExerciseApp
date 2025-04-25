import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050c24',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 60,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
  taglineContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 10,
  },
  taglineText: {
    fontFamily: 'Inter-SemiBold',
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  welcomeTitle: {
    fontFamily: 'Inter-SemiBold',
    color: 'white',
    fontSize: 28,
    marginBottom: 10,
  },
  welcomeSubtitle: {
    fontFamily: 'Inter-Light',
    color: '#aaaaaa',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  buttonContainer: {
    width: width * 0.8,
    marginBottom: 40,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Inter-SemiBold',
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;