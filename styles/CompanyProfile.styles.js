import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050c24',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    // Optional: add a subtle background to the header if desired
    // backgroundColor: '#1e293b',
  },
  backButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    width: 16,
    height: 16,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: 'white',
    transform: [{ rotate: '-45deg' }],
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  headerIcon: {
    width: 32, // Increased for improved visibility with the new asset
    height: 32,
    marginRight: 8,
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 22, // Slightly larger for clear emphasis
    color: 'white',
  },
  welcomeSection: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  welcomeTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: 'white',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontFamily: 'Inter-Light',
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  formContainer: {
    paddingHorizontal: 16,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  formColumn: {
    width: '48%',
  },
  inputLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: 'white',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#1e293b',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: 'white',
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 16,
    marginBottom: 32,
  },
  updateButton: {
    backgroundColor: '#4e66f8',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginRight: 12,
  },
  updateButtonText: {
    fontFamily: 'Inter-SemiBold',
    color: 'white',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#1e293b',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  cancelButtonText: {
    fontFamily: 'Inter-SemiBold',
    color: 'white',
    fontSize: 16,
  },
  infoSection: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 16,
  },
  infoTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#9CA3AF',
    marginBottom: 8,
  },
  infoText: {
    fontFamily: 'Inter-Light',
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  fab: {
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4e66f8',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  fabIcon: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#0f172a',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navNumber: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: 'white',
  },
  navLabel: {
    fontFamily: 'Inter-Light',
    fontSize: 10,
    color: '#9CA3AF',
  },
  navHours: {
    fontFamily: 'Inter-Light',
    fontSize: 10,
    color: '#22C55E',
  },
  navCompleted: {
    fontFamily: 'Inter-Light',
    fontSize: 10,
    color: '#9CA3AF',
  },
  navDollar: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#22C55E',
  },
  navRevenue: {
    fontFamily: 'Inter-Light',
    fontSize: 10,
    color: '#9CA3AF',
  },
});

export default styles;
