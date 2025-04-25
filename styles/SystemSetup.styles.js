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
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#0f172a',
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: 'white',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8, // Space between the icon containers
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#1a2234', // Dark container color
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    width: 10,
    height: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: 'white',
    transform: [{ rotate: '-45deg' }],
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: 'white',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  notificationIconWithBadge: {
    width: 24,
    height: 24,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#1a2234',
    borderRadius: 8,
    padding: 16,
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullWidthCard: {
    backgroundColor: '#1a2234',
    borderRadius: 8,
    padding: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: 'white',
    marginLeft: 12,
  },
  numbersIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneIcon: {
    width: 16,
    height: 16,
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 2,
    transform: [{ rotate: '135deg' }],
  },
  illustrationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  fabSpace: {
    height: 80,
  },
  footerContainer: {
    position: 'relative',
    height: 50,
  },
  footer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#0f172a',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
  },
  footerNotch: {
    position: 'absolute',
    top: -15,
    left: '50%',
    width: 60,
    height: 30,
    backgroundColor: 'transparent',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    transform: [{ translateX: -30 }],
    overflow: 'hidden',
    borderTopWidth: 30,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderColor: '#0f172a',
    borderBottomColor: 'transparent',
  },
  footerLeft: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(255, 255, 255, 0.05)',
    paddingVertical: 5,
  },
  footerCenter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(255, 255, 255, 0.05)',
    paddingVertical: 5,
  },
  footerRight: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  footerValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: 'white',
    marginTop: 2,
  },
  footerValueGreen: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#2ce5b5',
    marginTop: 2,
  },
  footerLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  fab: {
    position: 'absolute',
    bottom: 25,
    left: '50%',
    marginLeft: -28,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4e9bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 999,
  },
  fabIcon: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;