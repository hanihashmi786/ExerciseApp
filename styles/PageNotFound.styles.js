import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#0f172a',
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#1a2234',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: 'white',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  
  // Error Content
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  errorCard: {
    width: '100%',
    backgroundColor: '#000000',
    borderRadius: 12,
    padding: 20,
    position: 'relative',
    overflow: 'visible',
  },
  warningIconContainer: {
    position: 'absolute',
    top: -12,
    right: -12,
    width: 32,
    height: 32,
    backgroundColor: '#ffcc00',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  errorTextContainer: {
    alignItems: 'center',
  },
  errorTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  errorCode: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    color: 'white',
  },
  errorTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    color: '#4e9bff',
    marginLeft: 4,
  },
  errorMessage: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginBottom: 12,
  },
  supportText: {
    fontFamily: 'Inter-Light',
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: 20,
  },
  goBackButton: {
    backgroundColor: '#ff0000',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '80%',
  },
  goBackButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: 'white',
  },
  
  // Footer
  footerContainer: {
    position: 'relative',
    height: 50,
  },
  footer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#0f172a',
  },
  footerNotch: {
    position: 'absolute',
    top: -15,
    left: '50%',
    width: 50,
    height: 25,
    backgroundColor: 'transparent',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    transform: [{ translateX: -25 }],
    overflow: 'hidden',
    borderTopWidth: 25,
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderColor: '#0f172a',
    borderBottomColor: 'transparent',
    zIndex: 1,
  },
  footerItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
  },
  footerItemAlt: {
    backgroundColor: '#0f172a',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#4e9bff', // Blue color for LIVE count
    marginLeft: 3,
  },
  footerValueCompleted: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#00ff00', // Green color for completed count
    marginTop: 2,
  },
  footerValueRevenue: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#4e9bff', // Blue color for revenue number
    marginTop: 2,
  },
  footerValueGreen: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#00ff00', // Green color for $ amount
  },
  footerLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 9,
    color: 'white',
    marginTop: 1,
  },
  
  // FAB
  fab: {
    position: 'absolute',
    bottom: 25, // Position to overlap with footer
    left: '50%',
    marginLeft: -25, // Half of width for perfect centering
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4e9bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 999,
    borderWidth: 3,
    borderColor: 'white',
  },
});

export default styles;