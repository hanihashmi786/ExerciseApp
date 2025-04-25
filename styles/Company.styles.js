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
    paddingVertical: 12,
    backgroundColor: '#0f172a',
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    fontSize: 24,
    color: 'white',
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
  content: {
    flex: 1,
    padding: 16,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  navCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
    padding: 16,
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navCardText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: 'white',
    marginLeft: 12,
  },
  sectionTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: 'white',
    marginBottom: 12,
  },
  statsContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  statsHeader: {
    flexDirection: 'row',
    backgroundColor: '#1F2937',
    paddingVertical: 10,
  },
  statHeaderItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  statHeaderText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: 'white',
    marginLeft: 8,
  },
  statsValues: {
    flexDirection: 'row',
    paddingVertical: 24,
    backgroundColor: '#0B101D',
  },
  statValueItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#6C6C6C',
  },
  statValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 40,
    color: 'white',
  },
  footerContainer: {
    position: 'relative',
    height: 80,
  },
  footer: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#0f172a',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
    paddingTop: 30,
  },
  footerLeft: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(255, 255, 255, 0.05)',
  },
  footerCenter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(255, 255, 255, 0.05)',
  },
  footerRight: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerValue: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#4e9bff',
    marginTop: 2,
  },
  footerValueGreen: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#2ce5b5',
    marginTop: 2,
  },
  footerLabel: {
    fontFamily: 'Inter-Light',
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  fab: {
    position: 'absolute',
    bottom: 40,
    left: '50%',
    marginLeft: -28,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4e9bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    zIndex: 999,
  },
  fabIcon: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;