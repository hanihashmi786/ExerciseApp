import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: '#002B5C',
    marginTop: 20,
    marginBottom: 30,
  },
  highlight: {
    color: '#FFD700',
  },
  listContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dietItem: {
    backgroundColor: '#ECE6F0',
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    borderRadius: 15,
  },
  selectedDietItem: {
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  dietIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  dietText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#002B5C',
    textAlign: 'center',
  },
  selectedDietText: {
    fontFamily: 'Poppins-Bold',
    color: '#FFD700',
  },
});
