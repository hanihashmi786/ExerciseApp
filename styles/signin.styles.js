import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.25,
  },
  lockImage: {
    width: 150,
    height: 150,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
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
  formContainer: {
    backgroundColor: '#0B101D',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 20,
    flex: 1,
  },
  inputLabel: {
    fontFamily: 'Inter-Light',
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#1F2937',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: 'white',
    fontFamily: 'Inter-Light',
    fontSize: 16,
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    backgroundColor: '#1F2937',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: 'white',
    fontFamily: 'Inter-Light',
    fontSize: 16,
  },
  eyeIcon: {
    paddingHorizontal: 16,
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
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
  rememberText: {
    fontFamily: 'Inter-Light',
    color: '#9CA3AF',
    fontSize: 14,
  },
  forgotText: {
    fontFamily: 'Inter-SemiBold',
    color: '#477EE6',
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#4e66f8',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  signInButtonText: {
    fontFamily: 'Inter-SemiBold',
    color: 'white',
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#374151',
  },
  dividerText: {
    fontFamily: 'Inter-Light',
    color: '#9CA3AF',
    paddingHorizontal: 16,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#1e293b',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    fontFamily: 'Inter-SemiBold',
    color: 'white',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  noAccountText: {
    fontFamily: 'Inter-Light',
    color: '#9CA3AF',
    fontSize: 14,
  },
  signupText: {
    fontFamily: 'Inter-Light',
    color: '#477EE6',
    fontSize: 14,
  },
  termsText: {
    fontFamily: 'Inter-Light',
    color: '#6B7280',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default styles;