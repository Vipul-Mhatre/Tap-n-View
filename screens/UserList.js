import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const UserList = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchUsers = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`);
      if (response.data.length > 0) {
        setUsers((prevUsers) => [...prevUsers, ...response.data]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false); 
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('UserDetails', { user: item })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onEndReached={fetchUsers}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && <ActivityIndicator size="large" color="#0000ff" />
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7faff', 
    paddingHorizontal: 20, 
  },
  itemContainer: {
    padding: 20, 
    marginVertical: 10, 
    borderRadius: 12, 
    backgroundColor: '#ffffff', 
    shadowColor: '#ccc', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  name: {
    fontSize: 20, 
    fontWeight: '700', 
    color: '#3c8d99',
    marginBottom: 5, 
  },
  email: {
    fontSize: 16,
    color: '#666', 
    marginTop: 5,
  },
});

export default UserList;