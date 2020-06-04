import React from "react";
import { View } from "react-native";

export default function DaysReport({ day, min, max }) {
  return (
    <View>
      <Text>{day}</Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
    </View>
  );
}
