import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,

  },
  iconButton: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  headingContainer: {
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  heading: {
    marginTop: 20,
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#002B5C',
    textAlign: 'center',
  },
  headingSecondLine: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#002B5C',
    textAlign: 'center',
    marginTop: -5,
    marginbottom: 20,
  },
  highlight: {
    color: '#FFD700',
  },
  searchContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchInput: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#FFD700',
  },
  tabText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#A0A0A0',
  },
  activeTabText: {
    fontFamily: 'Poppins-Bold',
    color: '#002B5C',
  },
  cardScroll: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#F28C00',
    borderRadius: 20,
    padding: 15,
    marginRight: 10,
    width: 250,
    height: 300,
    alignItems: 'center',
    borderRadius: 20,
  },
  cardIcon: {
    width: 170,
    height: 170,
    marginBottom: 20,
  },
  cardTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#fffff',
    marginBottom: 5,
    
  },
  cardDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '70%',
    backgroundColor: '#F8F4FF',
    padding: 20,
    zIndex: 10,
  },
  sidebarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  sidebarImage: {
    width: 150,
    height: 150,
    borderRadius: 30,
      marginRight: 10, // Add spacing between icon and back button

  },
  sidebarSeparator: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginVertical: 15,
  },
  sidebarItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  sidebarItemSelected: {
    backgroundColor: '#FFFFFF',
  },
  sidebarItemText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000000',
  },
  sidebarItemTextSelected: {
    fontFamily: 'Poppins-Bold',
    color: '#FFD700',
  },
  
  
});
