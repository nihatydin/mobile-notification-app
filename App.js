import {useEffect, useState} from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
  View,
  StatusBar,
  Image,
  Dimensions,
  Switch,
} from "react-native";
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
// import Icon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome5";

const {width, height} = Dimensions.get("window"); // width -> 100vw, height -> 100vh

export default function App() {
  const tmp = 16;
  const hmdt = 34;
  const aquality = 78;

  const [temp, setTemp] = useState();
  const [hum, setHum] = useState();
  const [airquality, setAirquality] = useState();

  const [lightThema, setLightThema] = useState(true);
  const [statusBarThemaColor, setStatusBarThemaColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [switchBgColor, setSwitchBgColor] = useState();
  const [switchColor, setSwitchColor] = useState();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const API_KEY = "dbb2f7dd4fe5b6af90f9447819299a21";
  const city = "Istanbul";
  const [data, setData] = useState();

  const getApi = () => {
    const getFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));

    //console.log(data && data);
  };

  useEffect(() => {
    setTemp(tmp);
    setHum(hmdt);
    setAirquality(aquality);

    if (isEnabled) {
      setLightThema(false);
    } else {
      setLightThema(true);
    }

    if (lightThema === true) {
      setTextColor("black");
      setStatusBarThemaColor("dark-content");
      setSwitchBgColor("aliceblue");
      setSwitchColor("black");
    } else {
      setTextColor("white");
      setStatusBarThemaColor("light-content");
      setSwitchBgColor("aliceblue");
      setSwitchColor("#000e50");
    }
    getApi();
  }, [lightThema, isEnabled]);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.safeArea,
          {backgroundColor: lightThema ? "white" : "black"},
        ]}
        edges={["top"]}
      >
        <StatusBar barStyle={statusBarThemaColor} />
        <ScrollView>
          <View
            style={[
              styles.container,
              {backgroundColor: lightThema ? "white" : "black"},
            ]}
          >
            <View style={styles.headerContainer}>
              {/* <Icon name="tint" size={30} color="white" /> */}
              <View style={{flexDirection: "row"}}>
                <Icon
                  name="poll"
                  size={45}
                  color={textColor}
                  // brand
                  style={{alignSelf: "center"}}
                />

                <View>
                  <Text
                    style={[
                      {
                        fontSize: 24,
                        fontWeight: "700",
                        marginLeft: 5,
                        color: textColor,
                      },
                    ]}
                  >
                    Air Quality Detector
                  </Text>
                  <Text
                    style={[
                      {
                        fontSize: 8,
                        fontWeight: "300",
                        marginLeft: 5,
                        color: textColor,
                      },
                    ]}
                  >
                    Wheather and Air Quality Reports
                  </Text>
                </View>
              </View>
              <Switch
                trackColor={{false: "red", true: switchColor}}
                thumbColor={isEnabled ? "aliceblue" : switchColor}
                ios_backgroundColor={switchBgColor}
                onValueChange={toggleSwitch}
                value={isEnabled}
                //style={{height: 24, width: 50}}
              />
            </View>
            <View
              style={[
                styles.mainContainer,
                {backgroundColor: lightThema ? "aliceblue" : "#000e50"},
              ]}
            >
              <View style={[styles.row, {alignItems: "center"}]}>
                <Text style={[styles.boxTitles, {color: textColor}]}>
                  Air Quality Report
                </Text>
                <Icon name="shield-alt" size={30} color={textColor} />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={[
                    styles.bolder,
                    styles.biggerFontSize,
                    {color: textColor},
                  ]}
                >
                  {airquality}
                </Text>
                <Text
                  style={[
                    styles.bolder,
                    styles.biggerFontSize,
                    {color: textColor},
                  ]}
                >
                  %
                </Text>
                <Text
                  style={[
                    styles.bold,
                    styles.normalFontSize,
                    {paddingLeft: 16, width: 200, color: textColor}, // set width of main info box
                  ]}
                >
                  Hava kalitesi şuanda normal seviyelerdedir. Güvenle vakit
                  geçirebilirsiniz
                </Text>
              </View>
              {/* <View style={{border: "1 solid red"}}></View> */}
            </View>
            <View style={styles.infoContainer}>
              <View
                style={[
                  styles.infoBoxes,
                  styles.boxA,
                  {backgroundColor: lightThema ? "aliceblue" : "#000e50"},
                ]}
              >
                <View style={styles.row}>
                  <Text style={[styles.boxTitles, {color: textColor}]}>
                    Temperature
                  </Text>
                  <Icon name="temperature-high" size={30} color={textColor} />
                </View>
                <View style={styles.row}>
                  <Text style={[styles.boxCurrentText, {color: textColor}]}>
                    {temp} °C
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={[styles.normalFontSize, {color: textColor}]}>
                    Lorem ipsum dolor sit amet consectetur
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.infoBoxes,
                  styles.boxB,
                  {backgroundColor: lightThema ? "aliceblue" : "#000e50"},
                ]}
              >
                <View style={styles.row}>
                  <Text style={[styles.boxTitles, {color: textColor}]}>
                    Humidity
                  </Text>
                  <Icon name="tint" size={30} color={textColor} />
                </View>
                <View style={styles.row}>
                  <Text style={[styles.boxCurrentText, {color: textColor}]}>
                    {hum} %
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={[styles.normalFontSize, {color: textColor}]}>
                    Havadaki nemin %RH cinsinden değeridir.
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.infoBoxes,
                  styles.boxC,
                  {backgroundColor: lightThema ? "aliceblue" : "#000e50"},
                ]}
              >
                <View style={styles.row}>
                  <Text style={[styles.boxTitles, {color: textColor}]}>
                    Hava Kalite
                  </Text>
                  <Icon name="shield-virus" size={30} color={textColor} />
                </View>
                <View style={styles.row}>
                  <Text style={[styles.boxCurrentText, {color: textColor}]}>
                    {airquality} %
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={[styles.normalFontSize, {color: textColor}]}>
                    NH3,NOx, alkol buharı, benzen, duman ve CO2
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.infoBoxes,
                  styles.boxD,
                  {backgroundColor: lightThema ? "aliceblue" : "#000e50"},
                ]}
              >
                <View style={styles.row}>
                  <Text style={[styles.boxTitles, {color: textColor}]}>
                    Hava Basıncı
                  </Text>
                  <Icon name="meteor" size={30} color={textColor} />
                </View>
                <View style={styles.row}>
                  <Text style={[styles.boxCurrentText, {color: textColor}]}>
                    26 C
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={[styles.normalFontSize, {color: textColor}]}>
                    Lorem ipsum dolor sit amet consectetur
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.footerContainer}>
              {/* <ImageBackground
                    style={[styles.img, styles.row]}
                    source={{
                      uri: "https://i.pinimg.com/originals/bd/72/d1/bd72d10c741dde2ce2684577ffa0d86f.gif",
                    }}
                    resizeMode="cover"
                    borderRadius={10}
                  >
                    <Text style={styles.boxTitles}>Hava Durumu</Text>
                    <Text style={{fontSize: "1.5rem"}}>sit</Text>
                  </ImageBackground> */}
              <Image
                style={[styles.imgContainer]}
                source={{
                  uri: "https://i.pinimg.com/originals/bd/72/d1/bd72d10c741dde2ce2684577ffa0d86f.gif",
                }}
                resizeMode="cover"
                borderRadius={20}
              />
              <View style={[styles.imgRowInView, {paddingTop: 16}]}>
                <Text style={[styles.boxTitles, {color: textColor}]}>
                  Hava Durumu
                </Text>
                <Icon name="umbrella" size={30} color={textColor} />
              </View>
              <View
                style={[
                  styles.imgRowInView,
                  {paddingBottom: 16, alignItems: "flex-end"},
                ]}
              >
                <View>
                  <Text style={[{color: textColor, fontSize: 16}]}>{city}</Text>
                  <Text style={[styles.normalFontSize, {color: textColor}]}>
                    {data?.sys.country}
                  </Text>
                </View>
                <View>
                  <Text style={[styles.boxCurrentText, {color: textColor}]}>
                    {Math.round(data?.main.temp)} °C
                  </Text>
                  <Text style={[styles.normalFontSize, {color: textColor}]}>
                    {data?.weather[0].description}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    // paddingTop: StatusBar.currentHeight,
    // backgroundColor: "white",
    // backgroundColor: "rgba(24, 24, 24, 1 ) ",
  },
  container: {
    width: width,
    minHeight: height,
    paddingHorizontal: 16,
    transition: "all 0.3s",
    // backgroundColor: "rgb(63 63 63)",
    // backgroundColor: "rgba(24, 24, 24, 1 ) ",
    // backgroundColor: "white",
  },

  bold: {
    fontWeight: "600",
  },
  bolder: {
    fontWeight: "800",
  },
  biggerFontSize: {
    fontSize: 64,
  },
  normalFontSize: {
    fontSize: 12,
    // textAlign: "justify",
    fontWeight: "400",
  },

  headerContainer: {
    width: "100%",
    // height: "auto",
    // backgroundImage:
    //   "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    // padding: 16,
    // marginVertical: 5,
  },
  mainContainer: {
    width: "100%",
    // height: "22%",
    aspectRatio: 9 / 5,
    //backgroundColor: "rgb(50 50 50)",
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 5,
    justifyContent: "space-evenly",
    padding: 16,
    // backgroundImage:
    //   "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    // backgroundColor: "aliceblue",
  },
  infoContainer: {
    width: "100%",
    marginVertical: 5,
    // display: "grid",
    // gridTemplateColumns: "repeat(2, 1fr)",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  infoBoxes: {
    width: "48%",
    aspectRatio: 1,
    // height: height * 0.22,
    borderRadius: 20,
    padding: 16,
    justifyContent: "space-evenly",
    backgroundColor: "rgb(50 50 50)",
    backgroundColor: "aliceblue",
  },
  boxTitles: {
    textTransform: "uppercase",
    fontSize: 13,
    fontWeight: "600",
  },
  boxCurrentText: {
    fontSize: 32,
    fontWeight: "600",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  boxA: {
    // backgroundImage:
    //   "linear-gradient(315deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  },
  boxB: {
    // backgroundImage:
    //   "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  },
  boxC: {
    // backgroundImage:
    //   "linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  },
  boxD: {
    // backgroundImage:
    //   "linear-gradient(225deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  },

  footerContainer: {
    width: "100%",
    // height: "auto",
    aspectRatio: 5 / 2,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "rgb(50 50 50)",
    borderRadius: 20,
    marginVertical: 5,
  },
  img: {
    // height: "100%",
    // width: "100%",
    // padding: 16,
    borderRadius: 20,
  },
  imgContainer: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    position: "absolute",
  },
  imgRowInView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
  },
});
