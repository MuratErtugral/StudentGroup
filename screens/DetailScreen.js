import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

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
      <View style={styles.content}>
      <Text style={styles.contentHeader}>{item.id} - {item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
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
  content: {
    flex: 1,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#707070",
    borderRadius: 13,
    paddingTop: 10,
    marginBottom: 80,
  },
  subHeader: {
    fontSize: 19,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 20,
    color: "#696969",
  },
  contentHeader: {
    fontSize: 19,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "center",
    color: "#696969",
  },
  description: {
    fontSize: 17,
    textAlign: "center",
    color: "#696969",
    paddingHorizontal: 10,
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

export default DetailScreen;
