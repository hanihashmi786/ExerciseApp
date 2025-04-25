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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: 'white',
    marginLeft: 8,
  },
  exportButton: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: 'white',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  fabSpace: {
    height: 80,
  },
  
  // Footer
  footer: {
    flexDirection: 'row',
    height: 60,
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
    fontSize: 18,
    color: '#4e9bff',
    marginTop: 2,
  },
  footerValueGreen: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#00ff00',
    marginTop: 2,
  },
  footerValueBlue: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#4e9bff',
    marginTop: 2,
  },
  footerLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    color: 'white',
    marginTop: 2,
  },
  
  // FAB
  fab: {
    position: 'absolute',
    bottom: 30,
    left: '50%',
    marginLeft: -30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4e9bff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 999,
    borderWidth: 4,
    borderColor: 'white',
  },
});

export default styles;