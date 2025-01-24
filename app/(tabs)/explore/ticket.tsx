import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function BusScreen() {
  return (
    <View style={styles.container}>
      {/* Curved Background with Header */}
      <ImageBackground
        source={require('./background.jpg')}
        style={styles.headerBackground}
        imageStyle={styles.curvedBackground}
      >
        <View style={styles.headerContent}>
          <View style={styles.topRow}>
            <MaterialIcons name="more-horiz" size={24} color="white" />
            <Ionicons name="person-circle-outline" size={28} color="white" />
          </View>
          <Text style={styles.greetingText}>Hi, Jhon</Text>
          <Text style={styles.title}>Bus</Text>
        </View>
      </ImageBackground>

      {/* Main Content */}
      <View style={styles.cardContainer}>
        {/* From-To Section */}
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.iconTextContainer}>
              <MaterialIcons name="near-me" size={24} color="#32CD32" />
              <View style={styles.textGroup}>
                <Text style={styles.label}>FROM</Text>
                <Text style={styles.value}>Location 1</Text>
              </View>
            </View>
            <View style={styles.swapIconContainer}>
              <Ionicons name="swap-vertical" size={20} color="white" />
            </View>
            <View style={styles.iconTextContainer}>
              <FontAwesome5 name="map-marker-alt" size={20} color="#6A5ACD" />
              <View style={styles.textGroup}>
                <Text style={styles.label}>TO</Text>
                <Text style={styles.value}>Location 2</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Passenger, Type, and Departure Section */}
        <View style={styles.card}>
          <View style={styles.row}>
            {/* Passenger Section */}
            <View style={styles.infoBox}>
              <View style={styles.iconTextContainer}>
                <FontAwesome5 name="user-circle" size={20} color="#32CD32" />
                <Text style={styles.value}>01</Text>
              </View>
              <Text style={styles.label}>PASSENGER</Text>
            </View>

            {/* Type Section */}
            <View style={styles.infoBox}>
              <Text style={styles.value}>TYPE</Text>
              <Text style={styles.label}>TYPE</Text>
            </View>
          </View>

          {/* Departure Section */}
          <View style={styles.departRow}>
            <View style={styles.departBox}>
              <FontAwesome5 name="calendar-alt" size={20} color="#6A5ACD" />
              <Text style={styles.value}>Sun 3 Jun 2021</Text>
            </View>
            <Text style={styles.label}>DEPART</Text>
          </View>
        </View>
      </View>

      {/* Search Button */}
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText} onPress={() => router.push('/(tabs)/explore')} >SEARCH</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FB',
  },
  headerBackground: {
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  curvedBackground: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  headerContent: {
    alignItems: 'flex-start',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 16,
    color: 'white',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  cardContainer: {
    marginTop: 30,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  departRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textGroup: {
    marginLeft: 10,
  },
  swapIconContainer: {
    backgroundColor: '#6A5ACD',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  departBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  label: {
    fontSize: 12,
    color: '#6E6E6E',
    marginTop: 5,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginLeft: 8,
  },
  searchButton: {
    marginHorizontal: 20,
    marginTop: 30,
    backgroundColor: '#E6E6FA',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#6A5ACD',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
