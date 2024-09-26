import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const VideoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topFrame}>
        <Image
          source={require("@/assets/images/ActivitiesPage/Calendar_Top_Frame_2.png")}
          resizeMode="contain"
        />
        {/* Butterfly Text */}
        <Text style={styles.butterflyTitle}>Butterfly Style</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View style={{ position: "absolute", top: -84, left: 26 }}>
            <MaterialIcons name="arrow-back-ios" size={24} color="#F5F4F6" />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: "100%",
          width: "100%",
          marginBottom: 0,
        }}
      >
        <ScrollView>
          <View style={{ top: 10 }}>
            <View
              style={{ position: "absolute", top: 140, alignSelf: "center" }}
            >
              <Image
                source={require("@/assets/images/VideoPage/Video_Img.png")}
                resizeMode="contain"
                style={{ width: 362, height: 180 }}
              />
            </View>

            <View
              style={{
                position: "absolute",
                top: 344,
                width: "100%",
                alignSelf: "center",
              }}
            >
              {/* Distance Shape */}
              <View
                style={{
                  alignItems: "center",
                  left: 16,
                  width: "34%",
                }}
              >
                <Image
                  source={require("@/assets/images/HomePage/Calories_Shape_1.png")}
                  resizeMode="contain"
                  style={{ marginBottom: -24 }}
                ></Image>

                <Text
                  style={{
                    color: "#F5F4F6",
                    fontFamily: "Sofia-bold",
                    fontSize: "30px",
                    top: -100,
                    left: 0,
                    backgroundColor: "transparent",
                  }}
                >
                  25m
                </Text>

                <Text
                  style={{
                    color: "#F5F4F6",
                    fontFamily: "Sofia-semi-bold",
                    fontSize: "14px",
                    top: -56,
                    left: -30,
                    backgroundColor: "transparent",
                  }}
                >
                  Distance
                </Text>
              </View>

              {/* Duration Shape */}
              <View
                style={{
                  alignSelf: "center",
                  width: "34%",
                  left: -30,
                  top: -169,
                  marginBottom: -184,
                }}
              >
                <Image
                  source={require("@/assets/images/HomePage/Distance_Shape_1.png")}
                  resizeMode="contain"
                  style={{ marginBottom: 30 }}
                ></Image>

                <Text
                  style={{
                    color: "#F5F4F6",
                    fontFamily: "Sofia-semi-bold",
                    fontSize: "14px",
                    position: "absolute",
                    top: 25,
                    left: 70,
                    backgroundColor: "transparent",
                  }}
                >
                  Duration
                </Text>

                <Text
                  style={{
                    color: "#F5F4F6",
                    fontFamily: "Sofia-bold",
                    fontSize: "30px",
                    position: "absolute",
                    top: 88,
                    left: 50,
                    backgroundColor: "transparent",
                  }}
                >
                  1h
                </Text>
              </View>

              {/* Calories Shape */}
              <View
                style={{
                  alignSelf: "center",
                  left: 111,
                  top: -154,
                  marginBottom: -168,
                }}
              >
                <Image
                  source={require("@/assets/images/HomePage/Speed_Shape_1.png")}
                  resizeMode="contain"
                  style={{ marginBottom: 24 }}
                ></Image>

                <Text
                  style={{
                    color: "#F5F4F6",
                    fontFamily: "Sofia-bold",
                    fontSize: "30px",
                    position: "absolute",
                    top: 19,
                    left: 48,
                    backgroundColor: "transparent",
                  }}
                >
                  120
                </Text>
                <Text
                  style={{
                    color: "#F5F4F6",
                    fontFamily: "Sofia-semi-bold",
                    fontSize: "14px",
                    position: "absolute",
                    top: 100,
                    left: 12,
                    backgroundColor: "transparent",
                  }}
                >
                  Calories
                </Text>

                <FontAwesome5
                  name="fire"
                  size={44}
                  color="#F5F4F6"
                  style={{ position: "absolute", top: 86, left: 92 }}
                />
              </View>
            </View>

            <View
              style={{
                top: 508,
                marginBottom: 318,
                width: "100%",
              }}
            >
              <Image
                source={require("@/assets/images/VideoPage/Video_Bottom_Background.png")}
                resizeMode="contain"
                style={{
                  marginBottom: 200,
                  width: 393,
                  height: 576,
                }}
              ></Image>
            </View>

            <Text style={styles.programsButton}>Programs</Text>

            {/* START Button */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Main", { screen: "Exercise" });
              }}
            >
              <View
                style={{
                  position: "absolute",
                  width: 356,
                  height: 56,
                  backgroundColor: "#F5F4F6",
                  borderRadius: 30,
                  alignSelf: "center",
                  bottom: 52,
                }}
              >
                <Text style={styles.startButton}>START</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0E0230",
  },
  topFrame: {
    position: "absolute",
    top: 0,
    alignSelf: "center",
    backgroundColor: "transparent",
    zIndex: 10,
  },
  butterflyTitle: {
    color: "#F5F4F6",
    fontFamily: "Sofia-bold",
    fontSize: 26,
    top: -58,
    left: 54,
    backgroundColor: "transparent",
  },
  startButton: {
    fontFamily: "Sofia-bold",
    fontSize: 22,
    color: "#0E0330",
    alignSelf: "center",
    top: 16,
  },
  programsButton: {
    fontFamily: "Sofia-semi-bold",
    fontSize: 20,
    color: "#F5F4F6",
    left: 26,
    bottom: 542,
    position: "absolute",
  },
});

export default VideoScreen;
