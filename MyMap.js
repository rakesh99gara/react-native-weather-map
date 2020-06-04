import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, ProviderPropType } from "react-native-maps";

export default function MyMap({ marker, region }) {
  return (
    <View>
      <MapView style={styles.mapStyle} region={region}>
        <Marker
          style={styles.marker}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.title}
          description={marker.description}
          pinColor={"red"}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    opacity: 1,
  },
  marker: {
    marginLeft: 46,
    marginTop: 33,
  },
});
