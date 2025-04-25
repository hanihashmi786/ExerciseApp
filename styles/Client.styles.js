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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: 'white',
    marginLeft: 8,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerActionButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginLeft: 8,
  },
  headerActionButtonDark: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
  },
  headerActionText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 4,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: 'white',
    fontFamily: 'Inter-Regular',
  },
  searchIcon: {
    padding: 8,
  },
  searchIconText: {
    fontSize: 16,
    color: '#6b7280',
  },
  addCallFlowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4e9bff',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  addCallFlowButtonIcon: {
    fontSize: 16,
    color: 'white',
    marginRight: 4,
  },
  addCallFlowButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: 'white',
  },
  filtersContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  filtersTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: 'white',
    marginBottom: 8,
  },
  filterChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 8,
  },
  filterChipLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#9ca3af',
    marginRight: 4,
  },
  filterChipValue: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: 'white',
  },
  filterChipClose: {
    marginLeft: 6,
  },
  filterChipCloseIcon: {
    fontSize: 12,
    color: '#9ca3af',
  },
  tableContainer: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  tableHeaderContainer: {
    backgroundColor: '#1F2937',
    height: 30, // Very compact header height
  },
  tableHeader: {
    flexDirection: 'row',
    height: 30, // Match container height
    alignItems: 'center',
  },
  tableBodyContainer: {
    flex: 1,
  },
  headerText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12, // Reduced from 13 to 12
    color: 'white',
  },
  sortIcon: {
    fontSize: 12,
    color: 'white',
    marginLeft: 2,
  },
  tableRow: {
    flexDirection: 'row',
    height: 40, // Fixed height for rows
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  evenRow: {
    backgroundColor: '#0A0F1C',
  },
  oddRow: {
    backgroundColor: '#0F172A',
  },
  cellText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12, // Reduced from 13 to 12
    color: 'white',
  },
  // Column widths - further reduced
  idColumn: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createdAtColumn: {
    width: 140,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  clientsColumn: {
    width: 100,
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  typeColumn: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberColumn: {
    width: 90,
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  groupsColumn: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  capsColumn: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ccColumn: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusColumn: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsColumn: {
    width: 180,
    justifyContent: 'center',
  },
  phoneIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneIcon: {
    fontSize: 16, // Reduced from 18
  },
  phoneWithBadge: {
    position: 'relative',
  },
  phoneBadge: {
    position: 'absolute',
    top: -5,
    right: -50,
    backgroundColor: 'rgba(78, 155, 255, 0.2)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  phoneBadgeText: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    color: '#4e9bff',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionButton: {
    padding: 3, // Reduced from 4
    marginHorizontal: 2,
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