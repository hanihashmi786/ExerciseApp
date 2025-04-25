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
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: 'white',
    marginLeft: 6,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6, // Space between the icon containers
  },
  scrollView: {
    flex: 1,
  },
  
  // Tabs
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#1a2234',
    borderRadius: 8,
    margin: 12,
    padding: 3,
  },
  tab: {
    flex: 1,
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 4,
  },
  activeTab: {
    backgroundColor: '#0f172a',
  },
  tabText: {
    fontFamily: 'Inter-Light',
    fontSize: 11,
    color: '#9ca3af',
  },
  activeTabText: {
    color: 'white',
  },
  
  // Form
  formContainer: {
    margin: 12,
    marginTop: 0,
    backgroundColor: '#1a2234',
    borderRadius: 8,
    padding: 12,
  },
  formSection: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: 'Inter-Light',
    fontSize: 14,
    color: 'white',
    marginBottom: 6,
  },
  dropdown: {
    backgroundColor: '#0f172a',
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  dropdownText: {
    fontFamily: 'Inter-Light',
    fontSize: 13,
    color: '#9ca3af',
  },
  amountText: {
    fontFamily: 'Inter-Light',
    fontSize: 13,
    color: 'white',
  },
  addCardText: {
    fontFamily: 'Inter-Light',
    fontSize: 13,
    color: '#4e9bff',
  },
  paymentButton: {
    backgroundColor: '#4e9bff',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 6,
  },
  paymentButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: 'white',
  },
  
  // Auto Recharge
  autoRechargeContainer: {
    margin: 12,
    marginTop: 0,
    backgroundColor: '#1a2234',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  autoRechargeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3,
  },
  autoRechargeTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: 'white',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
  },
  switchText: {
    fontFamily: 'Inter-Light',
    fontSize: 12,
    color: 'white',
    marginLeft: 3,
  },
  autoRechargeDescription: {
    fontFamily: 'Inter-Light',
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 12,
  },
  autoRechargeSection: {
    marginBottom: 12,
  },
  autoRechargeSectionTitle: {
    fontFamily: 'Inter-Light',
    fontSize: 13,
    color: 'white',
    marginBottom: 6,
  },
  
  // Footer
  fabSpace: {
    height: 70,
  },
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
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#4e9bff', // Blue color for LIVE count
    marginLeft: 3,
  },
  footerValueCompleted: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#2ce5b5', // Green color for completed count
    marginTop: 2,
  },
  footerValueRevenue: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: 'white', // White color for revenue number
    marginTop: 2,
  },
  footerValueGreen: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: '#2ce5b5', // Green color for $ amount
  },
  footerLabel: {
    fontFamily: 'Inter-Light',
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