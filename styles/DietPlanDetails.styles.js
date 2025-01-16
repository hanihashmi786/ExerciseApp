import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    topSection: {
      backgroundColor: '#ECE6F0',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      paddingHorizontal: 20,
      paddingBottom: 40,
      alignItems: 'center',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      marginTop: 20,
    },
    backIcon: {
      width: 24,
      height: 24,
      marginRight: 10,
      marginTop: 30,

    },
    headerTitle: {
      fontFamily: 'Poppins-Bold',
      fontSize: 25,
      color: '#002B5C',
      marginTop: 30,

    },
    highlight: {
      color: '#FFD700',
    },
    dietIcon: {
      width: 80,
      height: 80,
      marginTop: 20,
    },
    titleWrapper: {
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 15,
      paddingVertical: 5,
      borderRadius: 10,
      marginTop: -20, // Ensures overlap with white background
    },
    dietTitle: {
      fontFamily: 'Poppins-Bold',
      fontSize: 30,
      color: '#FFD700',
      textAlign: 'center',  
      marginBottom: 20,

    },
    detailsSection: {
      padding: 20,
    },
    detailsHeading: {
      fontFamily: 'Roboto-Bold',
      fontSize: 18,
      color: '#002B5C',
      marginBottom: 5,
    },
    detailsText: {
      fontFamily: 'Roboto-Regular',
      fontSize: 16,
      color: '#555555',
      marginBottom: 15,
    },
  });