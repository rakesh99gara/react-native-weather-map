import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Svg, { Path } from "react-native-svg";
import MyMap from "./MyMap";
import Report from "./Report";
// import DaysReport from "./DaysReport";

const APIKEY = "b681fea9cce844f7a64a3496fdaa9e70";

export default function App() {
  const [marker, setMarker] = useState({
    latitude: 17.700032,
    longitude: 83.216575,
    title: "My Home",
    description: "Some Description",
  });

  const [city, setCity] = useState({ name: "" });

  const [region, setRegion] = useState({
    latitude: marker.latitude,
    longitude: marker.longitude,
    latitudeDelta: 0.5,
    longitudeDelta: 0.035,
  });

  const [report, setReport] = useState({});

  const [daysReports, setDaysReports] = useState([]);

  let weekday = new Array(7);
  weekday[0] = "SUN";
  weekday[1] = "MON";
  weekday[2] = "TUE";
  weekday[3] = "WED";
  weekday[4] = "THU";
  weekday[5] = "FRI";
  weekday[6] = "SAT";

  const d = new Date();
  var hour = d.getHours();
  let a;
  if (hour > 12) {
    a = "PM";
    hour -= 12;
  } else {
    a = "AM";
  }
  var minute = d.getMinutes();
  if (minute < 9) {
    minute = "0" + minute;
  }
  const day = d.getDay();

  async function fetchData(name) {
    try {
      const apiData = await fetch(
        `https://api.weatherbit.io/v2.0/current?city=${name}&key=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setMarker({
        latitude: apiData.data[0].lat,
        longitude: apiData.data[0].lon,
        title: "My Home",
        description: "Some Description",
      });

      setRegion({
        latitude: marker.latitude,
        longitude: marker.longitude,
        latitudeDelta: 0.5,
        longitudeDelta: 0.035,
      });

      setReport({
        data: apiData,
        city: apiData.data[0].city_name,
        country: apiData.data[0].country_code,
        temperature: apiData.data[0].temp,
        description: apiData.data[0].weather.description,
        icon: apiData.data[0].weather.icon,
        humidity: apiData.data[0].rh,
        wind_speed: parseFloat(apiData.data[0].wind_spd * 2.236936).toFixed(2),
        hour: hour,
        minute: minute,
        a: a,
        day: weekday[day],
      });

      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <MyMap marker={marker} region={region} />
      <View style={styles.textView}>
        <Text style={styles.text}>Weather App</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            placeholder="Search with city name"
            onChangeText={(text) => setCity({ name: text })}
          />
          <Svg
            style={styles.svg}
            width="50"
            height="50"
            viewBox="0 0 25 25"
            onPress={() => fetchData(city.name)}
          >
            <Path
              fill="#fff"
              d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"
            ></Path>
          </Svg>
        </View>
        <Report
          city={report.city}
          country={report.country}
          temperature={report.temperature}
          description={report.description}
          humidity={report.humidity}
          wind_speed={report.wind_speed}
          icon={report.icon}
          hour={report.hour}
          minute={report.minute}
          a={report.a}
          day={report.day}
        />
        {/* {daysReports.map((DaysReport) => (
          <DaysReport
            key={daysReport.id}
            day={daysReport.day}
            min={daysReport.min}
            max={daysReport.max}
          />
        ))} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textView: {
    backgroundColor: "rgba(33, 150, 243, 0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: "center",
  },
  text: {
    paddingTop: 30,
    opacity: 1,
    fontSize: 50,
    fontWeight: "100",
    color: "white",
  },
  textInput: {
    width: 350,
    fontSize: 35,

    color: "#fff",
    fontWeight: "100",
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    padding: 10,
    textDecorationLine: "none",
  },
  form: {
    display: "flex",
    flexDirection: "row",
  },
  svg: {
    marginTop: 10,
    color: "#fff",
  },
});
