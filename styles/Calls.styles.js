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
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  navCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
    padding: 16,
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullWidthCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
    padding: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
  tableContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  tableHeader: {
    backgroundColor: '#1F2937',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tableHeaderText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: 'white',
  },
  tableHeaderRow: {
    flexDirection: 'row',
    backgroundColor: '#070707',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  tableColumnHeader: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: 'white',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tableRowOdd: {
    backgroundColor: '#0A0F1C',
  },
  tableRowEven: {
    backgroundColor: '#0F172A',
  },
  dayColumn: {
    flex: 1.5,
  },
  callsColumn: {
    flex: 1,
    alignItems: 'center',
  },
  dayText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: 'white',
  },
  blueCallsText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#4e9bff',
    backgroundColor: '#477EE626',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
    textAlign: 'center',
    minWidth: 40,
  },
  greenCallsText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#2ce5b5',
    backgroundColor: '#4CD96426',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
    textAlign: 'center',
    minWidth: 40,
  },
  fabSpace: {
    height: 80,
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