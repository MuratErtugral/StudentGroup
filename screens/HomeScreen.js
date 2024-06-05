import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import data from '../assets/data'; 

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{`${item.id} - ${item.name}`}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })}>
        <Icon name="info" type="feather" color="#007AFF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" type="ionicon" color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.header}>ANA SAYFA</Text>
        <View style={{ width: 24 }} />
      </View>
      <Text style={styles.subHeader}>Öğrenci Grupları</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      </View>
      <View style={styles.footer}>
        <MaterialIcons name="person" size={24} color="#007AFF" />
        <Icon name="lock" type="feather" color="#B0B0B0" />
        <Icon name="home" type="feather" color="#B0B0B0" />
        <MaterialCommunityIcons name="shape-outline" size={24} color="#B0B0B0" />
        <Icon name="grid" type="feather" color="#B0B0B0" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Mulish",
    lineHeight: 24,
  },
  subHeader: {
    fontSize: 19,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 20,
    color: "#696969",
  },
  listContainer: {
    flex: 1,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#707070",
    borderRadius: 13,
    padding: 10,
    marginBottom: 80,
  },
  list: {
    flex: 1,
    fontSize: 17,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  listItemText: {
    fontSize: 17,
    color: "#696969",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
    height: 70,
  },
});

export default HomeScreen;
