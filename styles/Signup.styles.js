import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  keyboardAvoidContainer: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 40, // Reduced from 60
    marginBottom: 20, // Reduced from 40
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 32,
    color: 'white',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontFamily: 'Inter-Light',
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Reduced from 40
    paddingHorizontal: 20,
  },
  stepItem: {
    alignItems: 'center',
  },
  stepNumberActive: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#477EE6', // Blue color
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#1F2937', // Text button color
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepNumberTextActive: {
    fontFamily: 'Inter-SemiBold',
    color: 'white',
    fontSize: 14,
  },
  stepNumberText: {
    fontFamily: 'Inter-SemiBold',
    color: '#9CA3AF',
    fontSize: 14,
  },
  stepTextActive: {
    fontFamily: 'Inter-Light',
    color: 'white',
    fontSize: 14,
  },
  stepText: {
    fontFamily: 'Inter-Light',
    color: '#9CA3AF',
    fontSize: 14,
  },
  stepDivider: {
    width: 50,
    height: 1,
    backgroundColor: '#374151',
    marginHorizontal: 10,
  },
  formContainer: {
    backgroundColor: '#0B101D', // Form container color
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 40, // Added more padding at the bottom
  },
  formHeader: {
    marginBottom: 20, // Reduced from 30
  },
  formTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    color: 'white',
    marginBottom: 8,
  },
  formSubtitle: {
    fontFamily: 'Inter-Light',
    fontSize: 16,
    color: '#9CA3AF',
  },
  inputGroup: {
    marginBottom: 16, // Reduced from 20
  },
  inputLabel: {
    fontFamily: 'Inter-Light',
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#1F2937', // Text button color for input background
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: 'white',
    fontFamily: 'Inter-Light',
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#477EE6', // Blue color
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    fontFamily: 'Inter-SemiBold',
    color: 'white',
    fontSize: 16,
  },
  bottomSpace: {
    height: 30, // Space for pagination dots
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#0B101D', // Match form container color
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