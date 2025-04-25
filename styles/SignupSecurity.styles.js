import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 30, // Reduced from 40
    marginBottom: 15, // Reduced from 20
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 28, // Reduced from 32
    color: 'white',
    marginBottom: 5, // Reduced from 8
  },
  headerSubtitle: {
    fontFamily: 'Inter-Light',
    fontSize: 14, // Reduced from 16
    color: '#9CA3AF',
    textAlign: 'center',
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15, // Reduced from 20
    paddingHorizontal: 20,
  },
  stepItem: {
    alignItems: 'center',
  },
  stepNumberActive: {
    width: 26, // Reduced from 30
    height: 26, // Reduced from 30
    borderRadius: 13,
    backgroundColor: '#477EE6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5, // Reduced from 8
  },
  stepNumberCompleted: {
    width: 26, // Reduced from 30
    height: 26, // Reduced from 30
    borderRadius: 13,
    backgroundColor: '#477EE6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5, // Reduced from 8
  },
  stepNumberTextActive: {
    fontFamily: 'Inter-SemiBold',
    color: 'white',
    fontSize: 12, // Reduced from 14
  },
  stepTextActive: {
    fontFamily: 'Inter-Light',
    color: 'white',
    fontSize: 12, // Reduced from 14
  },
  stepTextCompleted: {
    fontFamily: 'Inter-Light',
    color: '#477EE6',
    fontSize: 12, // Reduced from 14
  },
  stepDivider: {
    width: 40, // Reduced from 50
    height: 1,
    backgroundColor: '#374151',
    marginHorizontal: 8, // Reduced from 10
  },
  stepCheckIconContainer: {
    width: 12, // Reduced from 14
    height: 12, // Reduced from 14
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCheckIcon: {
    width: 7, // Reduced from 8
    height: 3.5, // Reduced from 4
    borderLeftWidth: 1.5, // Reduced from 2
    borderBottomWidth: 1.5, // Reduced from 2
    borderColor: 'white',
    transform: [{ rotate: '-45deg' }],
    position: 'absolute',
    top: 3.5, // Adjusted
  },
  smallCheckIconContainer: {
    width: 8, // Reduced from 10
    height: 8, // Reduced from 10
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallCheckIcon: {
    width: 5, // Reduced from 6
    height: 2.5, // Reduced from 3
    borderLeftWidth: 1, // Reduced from 1.5
    borderBottomWidth: 1, // Reduced from 1.5
    borderColor: 'white',
    transform: [{ rotate: '-45deg' }],
    position: 'absolute',
    top: 2.5, // Adjusted
  },
  formContainer: {
    backgroundColor: '#0B101D',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 20, // Reduced from 30
    paddingBottom: 15, // Reduced from 20
    flex: 1,
    justifyContent: 'space-between', // Ensure content is distributed
  },
  formHeader: {
    marginBottom: 12, // Reduced from 20
  },
  formTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 22, // Reduced from 24
    color: 'white',
    marginBottom: 4, // Reduced from 8
  },
  formSubtitle: {
    fontFamily: 'Inter-Light',
    fontSize: 14, // Reduced from 16
    color: '#9CA3AF',
  },
  inputGroup: {
    marginBottom: 10, // Reduced from 16
  },
  inputLabel: {
    fontFamily: 'Inter-Light',
    fontSize: 14, // Reduced from 16
    color: 'white',
    marginBottom: 6, // Reduced from 8
  },
  input: {
    backgroundColor: '#1F2937',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10, // Reduced from 12
    color: 'white',
    fontFamily: 'Inter-Light',
    fontSize: 14, // Reduced from 16
    height: 42, // Explicitly set height
  },
  passwordContainer: {
    flexDirection: 'row',
    backgroundColor: '#1F2937',
    borderRadius: 8,
    alignItems: 'center',
    height: 42, // Explicitly set height
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10, // Reduced from 12
    color: 'white',
    fontFamily: 'Inter-Light',
    fontSize: 14, // Reduced from 16
  },
  eyeButton: {
    paddingHorizontal: 12, // Reduced from 16
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeIconContainer: {
    width: 20, // Reduced from 24
    height: 20, // Reduced from 24
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeCircle: {
    width: 14, // Reduced from 16
    height: 14, // Reduced from 16
    borderWidth: 1.5,
    borderColor: '#9CA3AF',
    borderRadius: 7,
    position: 'absolute',
    top: 3,
    left: 3,
  },
  eyePupil: {
    width: 5, // Reduced from 6
    height: 5, // Reduced from 6
    backgroundColor: '#9CA3AF',
    borderRadius: 2.5,
    position: 'absolute',
    top: 7.5,
    left: 7.5,
  },
  eyeSlash: {
    width: 20, // Reduced from 24
    height: 1.5,
    backgroundColor: '#9CA3AF',
    position: 'absolute',
    top: 10,
    left: 0,
    transform: [{ rotate: '45deg' }],
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Reduced from 16
  },
  checkbox: {
    width: 14, // Reduced from 16
    height: 14, // Reduced from 16
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#6B7280',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#477EE6',
    borderColor: '#477EE6',
  },
  termsText: {
    fontFamily: 'Inter-Light',
    color: '#9CA3AF',
    fontSize: 12, // Reduced from 14
    flex: 1,
  },
  termsLink: {
    fontFamily: 'Inter-Light',
    color: '#477EE6',
    fontSize: 12, // Reduced from 14
  },
  buttonGroup: {
    marginTop: 10, // Reduced from 20
    marginBottom: 10, // Added to ensure space at bottom
  },
  completeButton: {
    backgroundColor: '#477EE6',
    borderRadius: 25,
    paddingVertical: 12, // Reduced from 14
    alignItems: 'center',
    marginBottom: 10, // Reduced from 16
  },
  completeButtonText: {
    fontFamily: 'Inter-SemiBold',
    color: 'white',
    fontSize: 14, // Reduced from 16
  },
  backButton: {
    backgroundColor: '#1F2937',
    borderRadius: 25,
    paddingVertical: 12, // Reduced from 14
    alignItems: 'center',
  },
  backButtonText: {
    fontFamily: 'Inter-Light',
    color: '#9CA3AF',
    fontSize: 14, // Reduced from 16
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10, // Reduced from 15
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
  },
  paginationDotActive: {
    width: 20,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'white',
    marginHorizontal: 3,
  },
  paginationDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#6B7280',
    marginHorizontal: 3,
  },
});

export default styles;