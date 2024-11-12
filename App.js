import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Gradients from "./components/Gradients";
// import Icon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function App() {
  return (
    <SafeAreaView>
      <View style={[styles.allContainer]}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            {/* <Icon name="tint" size={30} color="white" /> */}
            <Icon name="poll" size={30} color="white" brand />
            <View>
              <Text
                style={[
                  styles.lightText,
                  {fontSize: 24, fontWeight: "700", marginLeft: 5},
                ]}
              >
                Hava Kalite Dedektörü
              </Text>
              <Text
                style={[
                  styles.lightText,
                  {fontSize: 8, fontWeight: "300", marginLeft: 5},
                ]}
              >
                Hava Durumu ve Kalite Dedektörü
              </Text>
            </View>
          </View>
          <View style={styles.mainContainer}>
            <View style={[styles.row, {alignItems: "center"}]}>
              <Text style={[styles.boxTitles]}>Hava Kalite Raporu</Text>
              <Icon name="shield-alt" size={30} color="white" />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={[styles.bolder, styles.biggerFontSize]}>%</Text>
              <Text style={[styles.bolder, styles.biggerFontSize]}>87</Text>
              <Text
                style={[
                  styles.bold,
                  styles.normalFontSize,
                  {paddingLeft: "1rem"},
                ]}
              >
                Hava kalitesi şuanda normal seviyelerdedir. Güvenle vakit
                geçirebilirsiniz
              </Text>
            </View>
            <View style={{border: "1px solid grey"}}></View>
          </View>
          <View style={styles.infoContainer}>
            <View style={[styles.infoBoxes, styles.boxA]}>
              <View style={styles.row}>
                <Text style={styles.boxTitles}>Sıcaklık</Text>
                <Icon name="temperature-high" size={30} color="white" />
              </View>
              <View style={styles.row}>
                <Text style={styles.boxCurrentText}>16 °C</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.normalFontSize}>
                  Lorem ipsum dolor sit amet consectetur
                </Text>
              </View>
            </View>
            <View style={[styles.infoBoxes, styles.boxB]}>
              <View style={styles.row}>
                <Text style={styles.boxTitles}>Nem</Text>
                <Icon name="tint" size={30} color="white" />
              </View>
              <View style={styles.row}>
                <Text style={styles.boxCurrentText}>24 %</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.normalFontSize}>
                  Havadaki nemin %RH cinsinden değeridir.
                </Text>
              </View>
            </View>
            <View style={[styles.infoBoxes, styles.boxC]}>
              <View style={styles.row}>
                <Text style={styles.boxTitles}>Hava Kalite</Text>
                <Icon name="shield-virus" size={30} color="white" />
              </View>
              <View style={styles.row}>
                <Text style={styles.boxCurrentText}>10 C</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.normalFontSize}>
                  NH3,NOx, alkol buharı, benzen, duman ve CO2
                </Text>
              </View>
            </View>
            <View style={[styles.infoBoxes, styles.boxD]}>
              <View style={styles.row}>
                <Text style={styles.boxTitles}>Hava Basıncı</Text>
                <Icon name="meteor" size={30} color="white" />
              </View>
              <View style={styles.row}>
                <Text style={styles.boxCurrentText}>26 C</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.normalFontSize}>
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
            <View style={[styles.imgRowInView, {paddingTop: "16px"}]}>
              <Text style={styles.boxTitles}>Hava Durumu</Text>
              <Icon name="umbrella" size={30} color="white" />
            </View>
            <View style={[styles.imgRowInView, {paddingBottom: "16px"}]}>
              <View>
                <Text>İstanbul</Text>
                <Text style={styles.normalFontSize}>Türkiye</Text>
              </View>
              <View>
                <Text style={styles.boxCurrentText}>16 °C</Text>
                <Text style={styles.normalFontSize}>Partially Cloudly</Text>
              </View>
            </View>
          </View>
          <Gradients />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  lightText: {
    color: "white",
  },
  img: {
    // height: "100%",
    width: "100%",
    padding: 16,
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
    paddingHorizontal: 20,
  },
  allContainer: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgb(63 63 63)",
    backgroundColor: "rgba(24, 24, 24, 1 ) ",
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

  container: {
    width: "92%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
  },
  headerContainer: {
    width: "100%",
    height: "7%",
    // backgroundImage:
    //   "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    padding: 16,
    marginVertical: 5,
  },
  mainContainer: {
    width: "100%",
    height: "24%",
    backgroundColor: "rgb(50 50 50)",
    borderRadius: 20,
    marginVertical: 5,
    justifyContent: "space-evenly",
    padding: 16,
    backgroundImage:
      "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  },
  infoContainer: {
    width: "100%",
    height: "auto",
    marginVertical: 5,
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 10,
  },
  infoBoxes: {
    width: "100%",
    height: "22vh",
    borderRadius: 20,
    display: "flex",
    padding: 16,
    justifyContent: "space-evenly",
    backgroundColor: "rgb(50 50 50)",
    backgroundImage: "rgba(50, 50, 50, 0.9) important",
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
    backgroundImage:
      "linear-gradient(315deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    width: "100%",
    height: "100%",
  },
  boxB: {
    backgroundImage:
      "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  },
  boxC: {
    backgroundImage:
      "linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  },
  boxD: {
    backgroundImage:
      "linear-gradient(225deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  },

  footerContainer: {
    width: "100%",
    height: "16%",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "rgb(50 50 50)",
    borderRadius: 20,
    marginVertical: 5,
  },
});
