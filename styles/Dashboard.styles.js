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
  menuButton: {
    padding: 8,
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
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: 'white',
    marginLeft: 8,
  },
  sectionActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  dropdownText: {
    fontFamily: 'Inter-Light',
    fontSize: 12,
    color: 'white',
    marginRight: 4,
  },
  dropdownIcon: {
    width: 0,
    height: 0,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'white',
  },
  switchButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  switchText: {
    fontFamily: 'Inter-Light',
    fontSize: 12,
    color: 'white',
  },
  chartLegend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1a2234',
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 12,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  legendText: {
    fontFamily: 'Inter-Light',
    fontSize: 12,
    color: 'white',
  },
  chartContainer: {
    position: 'relative',
    height: 220,
    marginBottom: 10,
    backgroundColor: '#0f172a',
    borderRadius: 8,
    overflow: 'hidden',
  },
  chart: {
    borderRadius: 8,
    paddingRight: 0,
    paddingTop: 10,
  },
  yAxisLabels: {
    position: 'absolute',
    top: 10,
    left: 10,
    bottom: 20,
    justifyContent: 'space-between',
  },
  yAxisLabel: {
    fontFamily: 'Inter-Light',
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  // Tooltip styles - Fixed positioning
  tooltipContainer: {
    position: 'absolute',
    top: 80, // Adjusted to match the highlighted point
    right: 60, // Adjusted to be closer to the highlighted point
    backgroundColor: 'rgba(30, 41, 59, 0.9)',
    borderRadius: 8,
    padding: 8,
    zIndex: 10,
    width: 80, // Fixed width
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  tooltipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  tooltipDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4,
  },
  tooltipText: {
    fontFamily: 'Inter-Light',
    fontSize: 10,
    color: 'white',
  },
  
  // Updated highlighted point to match tooltip position
  highlightedPoint: {
    position: 'absolute',
    top: 90, // Aligned with tooltip
    right: 100, // Position to the left of the tooltip
    zIndex: 11, // Above the tooltip
  },
  highlightedDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4e9bff',
    borderWidth: 2,
    borderColor: 'white',
  },
  featuresGrid: {
    marginBottom: 10,
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  featureCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
    padding: 16,
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wideFeatureCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
    padding: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureText: {
    fontFamily: 'Inter-Light',
    fontSize: 14,
    color: 'white',
    marginLeft: 12,
  },
  quickActionsList: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  quickActionItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#0f172a',
  },
  quickActionItemAlt: {
    backgroundColor: '#1a2234',
  },
  quickActionText: {
    fontFamily: 'Inter-Light',
    fontSize: 16,
    color: 'white',
  },
  fabSpace: {
    height: 80,
  },
  footerContainer: {
    position: 'relative',
    height: 80, // Increased height to accommodate the FAB overlap
  },
  footer: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#0f172a',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
    paddingTop: 30, // Add padding to push content below the FAB notch
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
    color: '#4e9bff', // Changed to blue to match the image
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
  // Updated FAB to overlap the footer
  fab: {
    position: 'absolute',
    bottom: 40, // Position to overlap with the footer
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