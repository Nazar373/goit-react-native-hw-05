

import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { Ionicons } from '@expo/vector-icons';
{
  /* <Ionicons name="arrow-back" size={24} color="black" /> */
}

const DefaultScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  // console.log("posts:", posts);
  // console.log('route.params', route.params)
  return (
    <>
      <View style={{ flex: 1 }}>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black" }}>{item.title}</Text>
              <Image
                source={{ uri: item.photo }}
                style={{ width: 300, height: 150 }}
              />
              <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
                <Text style={{width: 100, height: 100, color: "#212121"}}>Comments</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Map")}>
                <Text style={{width: 100, height: 100, color: "#212121"}}>{item.titleLocation}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </>
  );
};

// const styles = StyleSheet.create({})

export default DefaultScreen;