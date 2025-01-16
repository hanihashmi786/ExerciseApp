import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    marginTop: 30,

  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#002B5C',
    marginTop: 30,
  },
  highlight: {
    color: '#FFD700',
    fontFamily: 'Poppins-Bold',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24, // Increased font size for better readability
    color: '#002B5C',
    textAlign: 'center',
    lineHeight: 36, // Adjusted for two lines
    magrinTop: 20,
    marginBottom: 100,
  },
  premiumPlansContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  planItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 140, // Increased size of the container
    height: 180, // Increased size of the container
    
  },
  iconContainer: {
    width: 100, // Increased icon container size
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ECE6F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15, // Increased spacing between icon and title
  },
  planIcon: {
    width: 80, // Increased icon size
    height: 80,
  },
  planName: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16, // Increased text size
    color: '#002B5C',
    textAlign: 'center',
  },
});
