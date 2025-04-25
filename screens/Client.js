import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import custom icons
import BackIcon from '../assets/icons/BackIcon';
import ClientsIcon from '../assets/icons/ClientsIcon';
import HeadphoneIcon from '../assets/icons/Headphone';
import NotificationsIcon from '../assets/icons/NotificationsIcon';
import LiveCallsIcon from '../assets/icons/LiveCallsIcon';
import CompletedCallsIcon from '../assets/icons/CompletedCallsIcon';
import RevenueIcon from '../assets/icons/RevenueIcon';
import FreezeIcon from '../assets/icons/FreezeIcon';
import WaveIcon from '../assets/icons/WaveIcon';
import EditIcon from '../assets/icons/EditIcon';
import CopyIcon from '../assets/icons/CopyIcon';
import PlayButton from '../assets/icons/PlayButton';
import CallLogButton from '../assets/icons/CallLogButton';
import RefreshButton from '../assets/icons/RefreshButton';
import DeleteButton from '../assets/icons/DeleteButton';

import Footer from '../assets/components/Footer';             // ← shared footer
import styles from '../styles/Client.styles';

const { width } = Dimensions.get('window');

const ClientScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const headerScrollRef = useRef(null);
  const bodyScrollRef = useRef(null);

  const TABLE_WIDTH = 870; // sum of all column widths
  const tableData = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    createdAt: '2025-03-22 15:22:29',
    client: 'D6 Off shore',
    type: 'call',
    number: '+13121023',
    groups: '-',
    caps: '-',
    cc: '8/10',
    status: [3,4,8,12].includes(i) ? 'wave' : 'freeze',
  }));

  const handleScroll = (e, target) => {
    const x = e.nativeEvent.contentOffset.x;
    if (target === 'header' && bodyScrollRef.current) {
      bodyScrollRef.current.scrollTo({ x, animated: false });
    } else if (target === 'body' && headerScrollRef.current) {
      headerScrollRef.current.scrollTo({ x, animated: false });
    }
  };

  const renderTableRow = ({ item, index }) => (
    <View style={[styles.tableRow, index % 2 ? styles.oddRow : styles.evenRow]}>
      <View style={styles.idColumn}>
        <Text style={styles.cellText}>{item.id}</Text>
      </View>
      <View style={styles.createdAtColumn}>
        <Text style={styles.cellText}>{item.createdAt}</Text>
      </View>
      <View style={styles.clientsColumn}>
        <Text style={styles.cellText}>{item.client}</Text>
      </View>
      <View style={styles.typeColumn}>
        <View style={styles.phoneIconContainer}>
          {index === 5 ? (
            <View style={styles.phoneWithBadge}>
              <Text style={styles.phoneIcon}>📞</Text>
              <View style={styles.phoneBadge}>
                <Text style={styles.phoneBadgeText}>{item.number}</Text>
              </View>
            </View>
          ) : (
            <Text style={styles.phoneIcon}>📞</Text>
          )}
        </View>
      </View>
      <View style={styles.numberColumn}>
        <Text style={styles.cellText}>{item.number}</Text>
      </View>
      <View style={styles.groupsColumn}>
        <Text style={styles.cellText}>{item.groups}</Text>
      </View>
      <View style={styles.capsColumn}>
        <Text style={styles.cellText}>{item.caps}</Text>
      </View>
      <View style={styles.ccColumn}>
        <Text style={styles.cellText}>{item.cc}</Text>
      </View>
      <View style={styles.statusColumn}>
        {item.status === 'freeze'
          ? <FreezeIcon width={18} height={18} color="#4e9bff" />
          : <WaveIcon width={18} height={18} color="#2ce5b5" />
        }
      </View>
      <View style={styles.actionsColumn}>
        <View style={styles.actionButtons}>
          {[ EditIcon, CopyIcon, PlayButton, CallLogButton, RefreshButton, DeleteButton ]
            .map((IconComp, i) => (
              <TouchableOpacity key={i} style={styles.actionButton}>
                <IconComp width={16} height={16} />
              </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );

  // demo metrics
  const liveCount = 20;
  const completedCount = 1003;
  const totalRevenue = 515151;
  const todayRevenue = '$588';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <BackIcon width={24} height={24} />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <ClientsIcon width={24} height={24} />
            <Text style={styles.headerTitle}>Client</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          {['Toggle','Export','Refresh','Reset'].map((t, i) => (
            <TouchableOpacity
              key={t}
              style={[
                styles.headerActionButton,
                t === 'Refresh' && styles.headerActionButtonDark
              ]}
            >
              <Text style={styles.headerActionText}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Search & Add */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Client"
            placeholderTextColor="#6b7280"
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Text style={styles.searchIconText}>🔍</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addCallFlowButton}>
          <Text style={styles.addCallFlowButtonIcon}>＋</Text>
          <Text style={styles.addCallFlowButtonText}>Add Call Flow</Text>
        </TouchableOpacity>
      </View>

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <Text style={styles.filtersTitle}>Applied Filters:</Text>
        <View style={styles.filterChips}>
          {[
            { label: 'Number:', value: '+13121023' },
            { value: '+13121023', removable: true },
            { label: 'Client:', value: 'Abc' }
          ].map((f, i) => (
            <View key={i} style={styles.filterChip}>
              {f.label && <Text style={styles.filterChipLabel}>{f.label}</Text>}
              <Text style={styles.filterChipValue}>{f.value}</Text>
              {f.removable && (
                <TouchableOpacity style={styles.filterChipClose}>
                  <Text style={styles.filterChipCloseIcon}>✕</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </View>

      {/* Table */}
      <View style={styles.tableContainer}>
        {/* Header */}
        <ScrollView
          horizontal
          ref={headerScrollRef}
          onScroll={e => handleScroll(e, 'header')}
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ width: TABLE_WIDTH }}
          bounces={false}
        >
          <View style={styles.tableHeader}>
            {[
              { key: 'ID' }, 
              { key: 'Created At' }, 
              { key: 'Clients' },
              { key: 'Type' },
              { key: 'Number' },
              { key: 'Groups' },
              { key: 'Caps' },
              { key: 'CC' },
              { key: 'Status' },
              { key: 'Actions' }
            ].map(col => (
              <View key={col.key} style={styles[`${col.key.replace(' ', '').toLowerCase()}Column`]}>
                <Text style={styles.headerText}>{col.key}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        {/* Body */}
        <ScrollView
          horizontal
          ref={bodyScrollRef}
          onScroll={e => handleScroll(e, 'body')}
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ width: TABLE_WIDTH }}
          bounces={false}
        >
          <FlatList
            data={tableData}
            renderItem={renderTableRow}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator
          />
        </ScrollView>
      </View>

      {/* Shared Footer + FAB */}
      <Footer
        liveCount={liveCount}
        completedCount={completedCount}
        totalRevenue={totalRevenue}
        todayRevenue={todayRevenue}
        onPressFAB={() => navigation.navigate('AddClient')}
      />
    </SafeAreaView>
  );
};

export default ClientScreen;
