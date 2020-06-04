import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Report({
  city,
  country,
  temperature,
  description,
  icon,
  humidity,
  wind_speed,
  hour,
  minute,
  a,
  day,
}) {
  return (
    <View style={styles.mainView}>
      <View style={styles.leftView}>
        <Text style={styles.time}>
          {day}, {hour}:{minute} {a}
        </Text>
        <Text style={styles.city}>
          {city}, {country}
        </Text>
        {/* <Text style={styles.icon}>{icon}</Text> */}
        {/* <Image
          source={"https://www.weatherbit.io/static/img/icons/" + icon + ".png"}
          style={{ width: 300, height: 300 }}
        /> */}
        <Text style={styles.temp}>{temperature} ° C</Text>
      </View>
      <View style={styles.rightView}>
        <Text style={styles.desc}>{description}</Text>
        <Text style={styles.hum}>Humidity: {humidity}%</Text>
        <Text style={styles.wind}>Wind: {wind_speed} mph</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
    width: 400,
  },
  leftView: {
    alignContent: "flex-start",
    lineHeight: 25,
  },
  city: {
    fontSize: 35,
    color: "#fff",
    letterSpacing: 0.2,
  },
  icon: {
    fontSize: 20,
    color: "#fff",
    letterSpacing: 0.2,
  },
  temp: {
    fontSize: 50,
    color: "#fff",
    letterSpacing: 0.2,
  },
  desc: {
    fontSize: 25,
    color: "#fff",
    letterSpacing: 0.2,
  },
  hum: {
    fontSize: 25,
    color: "#fff",
    letterSpacing: 0.2,
  },
  wind: {
    fontSize: 25,
    color: "#fff",
    letterSpacing: 0.2,
  },
  time: {
    fontSize: 30,
    color: "#fff",
    letterSpacing: 0.2,
  },
});
