import { router } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function TravelScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section with Curved Background */}
      <ImageBackground
        source={require('./background.jpg')}
        style={styles.header}
        imageStyle={styles.curvedBackground}
      >
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dots}>
          <Text style={styles.dots}>{"..."}</Text>
        </TouchableOpacity>

        {/* Centered Arrow and Text */}
        <View style={styles.centeredContent}>
          <Text style={styles.locationText}>Location 1</Text>
          <Ionicons
            name="swap-horizontal"
            size={24}
            color="white"
            style={styles.arrowIcon}
          />
          <Text style={styles.locationText}>Location 2</Text>
        </View>
      </ImageBackground>

      {/* Travel Cards */}
      <ScrollView style={styles.cardsContainer}>
        {[1.5, 2.75].map((price, index) => (
          <View key={index} style={styles.card}>
            {/* Vehicle Icon */}
            <FontAwesome5
              name="bus"
              size={24}
              color="#6A5ACD"
              style={styles.vehicleIcon}
            />

            <View style={styles.routeDetails}>
              {/* From Location */}
              <View style={styles.locationRow}>
                <View style={[styles.iconContainer, { backgroundColor: '#A3D8F4' }]}>
                  <Ionicons name="location" size={20} color="#FFFFFF" />
                </View>
                <View>
                  <Text style={styles.locationText}>Location 1</Text>
                  <Text style={styles.dateText}>Date</Text>
                </View>
              </View>

              {/* To Location */}
              <View style={styles.locationRow}>
                <View style={[styles.iconContainer, { backgroundColor: '#D8C8F4' }]}>
                  <Ionicons name="location-outline" size={20} color="#FFFFFF" />
                </View>
                <View>
                  <Text style={styles.locationText}>Location 2</Text>
                  <Text style={styles.dateText}>Date</Text>
                </View>
              </View>
            </View>

            {/* Travel Details */}
            <View style={styles.travelDetails}>
              <View style={styles.detailsRow}>
                <Text style={styles.travelTime}>Travel Time: 30min</Text>
                <Text style={styles.departure}>Departure on: {15 + index * 10}min</Text>
                <Text style={styles.price}>Price: ${price.toFixed(2)}</Text>
              </View>
              <TouchableOpacity style={styles.buyButton}>
                <Text
                  style={styles.buyButtonText}   >
                  BUY TICKET
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FB',
  },
  header: {
    height: 300, // Increased height for larger curve
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: 'flex-end',
  },
  curvedBackground: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  dots: {
    position: 'absolute',
    top: 20,
    color: 'white',
    right: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  centeredContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 10, // Added gap between "Location 1", icon, and "Location 2"
  },
  arrowIcon: {
    marginHorizontal: 10,
  },
  cardsContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 180, // Increased card height
    position: 'relative',
  },
  vehicleIcon: {
    position: 'absolute',
    top: -12, // Aligning the icon on the border of the card
    left: 20,
    backgroundColor: '#E6E6FA',
    padding: 8,
    borderRadius: 20,
    zIndex: 10,
  },
  routeDetails: {
    flex: 1.5,
    marginRight: 12,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  dateText: {
    fontSize: 14,
    color: '#888',
  },
  travelDetails: {
    flex: 1,
  },
  detailsRow: {
    marginBottom: 8,
  },
  travelTime: {
    fontSize: 14,
    color: '#6E6E6E',
    marginBottom: 4,
  },
  departure: {
    fontSize: 14,
    color: '#6E6E6E',
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A5ACD',
  },
  buyButton: {
    backgroundColor: '#A385F4',
    borderRadius: 30, // More rounded button
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginTop: 8,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});
