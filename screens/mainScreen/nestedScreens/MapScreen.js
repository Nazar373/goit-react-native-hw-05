import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  console.log("titleLocation", route.params);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.785834,
          longitude: -122.406417,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.785834, longitude: -122.406417 }}
          title="travel photo"
        />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
