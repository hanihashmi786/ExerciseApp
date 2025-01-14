import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFBD27',
    paddingVertical: 20,
    paddingHorizontal: 15,
    height: 270,
  },
  backButton: {
    marginRight: 15,
    bottom: 80,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#FFFFFF',
    bottom: 80,

    
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -130,
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 120,
    borderRadius: 50,
    borderWidth: 0,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 5,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 5,
  },
  saveButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 50,
    elevation: 5, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  saveIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
