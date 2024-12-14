import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const UserDetails = ({ route }) => {
  const { user } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>User Details</Text>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user.name}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>
          {user.address?.street}, {user.address?.suite}, {user.address?.city},{' '}
          {user.address?.zipcode}
        </Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Company:</Text>
        <Text style={styles.value}>{user.company?.name}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{user.phone}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Website:</Text>
        <Text style={styles.value}>{user.website}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7faff',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3c8d99',
    marginBottom: 20,
  },
  detailContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4a4a4a',
  },
  value: {
    fontSize: 16,
    color: '#3c8d99',
    marginTop: 5,
    fontWeight: '500',
  },
});

export default UserDetails;