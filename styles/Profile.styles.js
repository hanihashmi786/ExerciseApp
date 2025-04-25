// Profile.styles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#0f172a',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 22,
    color: 'white',
    marginLeft: 10,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  
  // Welcome Section
  welcomeSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  welcomeTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: 'white',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#94a3b8',
  },
  
  // Profile Picture Section
  profilePictureContainer: {
    alignItems: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  pictureText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#64748b',
  },
  editPictureButton: {
    position: 'absolute',
    right: width / 2 - 75,
    bottom: 0,
    backgroundColor: '#334155',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Form Section
  formSection: {
    marginVertical: 10,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  formGroup: {
    width: '48%',
  },
  formLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: 'white',
    marginBottom: 8,
  },
  formInput: {
    backgroundColor: '#1e293b',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: 'white',
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  
  // Action Buttons
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    gap: 12,
  },
  saveButton: {
    backgroundColor: '#4e9bff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  saveButtonText: {
    color: 'white',
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#1e293b',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  cancelButtonText: {
    color: 'white',
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    textAlign: 'center',
  },
  
  // Update Section
  updateSection: {
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  updateTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  updateDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
    lineHeight: 22,
  },
  
  fabSpace: {
    height: 80,
  },
  
  // Footer
  footer: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#0f172a',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
  },
  footerItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#4e9bff',
    marginTop: 4,
  },
  footerValueGreen: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#00ff00',
    marginTop: 4,
  },
  footerValueBlue: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#4e9bff',
    marginTop: 4,
  },
  footerLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: 'white',
    marginTop: 2,
  },
  
  // FAB
  fab: {
    position: 'absolute',
    bottom: 35,
    left: '50%',
    marginLeft: -30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#477EE6',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    zIndex: 999,
  },
});

export default styles;