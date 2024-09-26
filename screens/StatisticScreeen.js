import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";

const StatisticScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topFrame}>
        <Image
          source={require("@/assets/images/ActivitiesPage/Calendar_Top_Frame_2.png")}
          resizeMode="contain"
          style={{ marginBottom: 0 }}
        />
        {/* My Workouts Text */}
        <Text style={styles.statisticsTitle}>Statistics</Text>

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
          backgroundColor: "transparent",
          height: "100%",
          width: "100%",
        }}
      >
        {/* Background Scroll Shape Image */}
        <ScrollView>
          <View style={{ top: 124 }}>
            <View>
              <Image
                source={require("@/assets/images/StatisticPage/Statistics_Background.png")}
                resizeMode="contain"
                style={{ marginBottom: 118 }}
              />
            </View>

            {/* Background Shape Image 1 */}
            <View style={{ top: -16 }}>
              <Image
                source={require("@/assets/images/Shape_1.png")}
                resizeMode="contain"
                style={{
                  marginBottom: -160,
                  top: -1238,
                  backgroundColor: "transparent",
                  alignSelf: "center",
                }}
              />

              <Text
                style={{
                  position: "absolute",
                  color: "#F5F4F6",
                  bottom: 1180,
                  left: 72,
                  fontFamily: "Sofia-bold",
                  fontSize: 18,
                }}
              >
                You have achieved
              </Text>

              <Text
                style={{
                  position: "absolute",
                  color: "#FF00FF",
                  bottom: 1156,
                  left: 60,
                  fontFamily: "Sofia-bold",
                  fontSize: 18,
                }}
              >
                75%
              </Text>

              <Text
                style={{
                  position: "absolute",
                  color: "#F5F4F6",
                  bottom: 1156,
                  left: 101,
                  fontFamily: "Sofia-bold",
                  fontSize: 18,
                }}
              >
                of your workout!
              </Text>

              <View
                style={{
                  backgroundColor: "transparent",
                  top: -1178,
                  width: 100,
                  height: 100,
                  left: 278,
                  marginBottom: -100,
                }}
              >
                <Image
                  source={require("@/assets/images/ActivitiesPage/75_Percent_Bar.png")}
                  resizeMode="contain"
                  style={{
                    alignSelf: "center",
                    width: 84,
                    height: "100%",
                    backgroundColor: "transparent",
                  }}
                />
                <Text
                  style={{
                    color: "#F5F4F6",
                    fontFamily: "Sofia-semi-bold",
                    fontSize: "26px",
                    position: "absolute",
                    alignSelf: "center",
                    top: 36,
                    backgroundColor: "transparent",
                  }}
                >
                  75%
                </Text>
              </View>
            </View>

            <View
              style={{ position: "absolute", alignSelf: "center", top: 128 }}
            >
              <Image
                source={require("@/assets/images/StatisticPage/Statistic_Chart_1.png")}
                resizeMode="contain"
                style={{
                  width: 362,
                  height: 342,
                }}
              ></Image>
            </View>

            {/* Full Body Workout Chart */}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                top: -776,
                marginBottom: -146,
              }}
            >
              <Image
                source={require("@/assets/images/HomePage/FullBodyWorkout_Chart_2.png")}
                resizeMode="contain"
              ></Image>
              <Text
                style={{
                  color: "#F5F4F6",
                  fontFamily: "Sofia-semi-bold",
                  fontSize: "14px",
                  top: -112,
                  left: -104,
                }}
              >
                Full Body Workout
              </Text>
              <MaterialIcons
                name="arrow-forward-ios"
                size={16}
                color="#F5F4F6"
                style={{
                  position: "absolute",
                  top: 16,
                  left: 320,
                }}
              />
            </View>

            {/* Calories Shape */}
            <View
              style={{
                position: "absolute",
                alignSelf: "center",
                left: 16,
                top: 640,
                backgroundColor: "transparent",
                marginBottom: -168,
              }}
            >
              <Image
                source={require("@/assets/images/StatisticPage/Statistic_Calories.png")}
                resizeMode="contain"
                style={{ marginBottom: 24, width: 176.04, height: 176.66 }}
              ></Image>

              <Text
                style={{
                  color: "#F5F4F6",
                  fontFamily: "Sofia-bold",
                  fontSize: 38,
                  position: "absolute",
                  top: 22,
                  backgroundColor: "transparent",
                  alignSelf: "center",
                }}
              >
                250
              </Text>
              <Text
                style={{
                  color: "#F5F4F6",
                  fontFamily: "Sofia-semi-bold",
                  fontSize: 18,
                  position: "absolute",
                  top: 120,
                  left: 12,
                  backgroundColor: "transparent",
                }}
              >
                Calories
              </Text>

              <FontAwesome5
                name="fire"
                size={48}
                color="#FF00FF"
                style={{ position: "absolute", top: 108, left: 114 }}
              />
            </View>

            {/* Distance Shape */}
            <View
              style={{
                position: "absolute",
                alignSelf: "center",
                right: 16,
                top: 640,
                backgroundColor: "transparent",
                marginBottom: -168,
              }}
            >
              <Image
                source={require("@/assets/images/StatisticPage/Statistic_Distance.png")}
                resizeMode="contain"
                style={{ marginBottom: 24, width: 176.04, height: 176.66 }}
              ></Image>

              <Text
                style={{
                  color: "#F5F4F6",
                  fontFamily: "Sofia-bold",
                  fontSize: 38,
                  position: "absolute",
                  top: 110,
                  backgroundColor: "transparent",
                  alignSelf: "center",
                }}
              >
                300m
              </Text>
              <Text
                style={{
                  color: "#F5F4F6",
                  fontFamily: "Sofia-semi-bold",
                  fontSize: 18,
                  position: "absolute",
                  top: 32,
                  left: 10,
                  backgroundColor: "transparent",
                }}
              >
                Distance
              </Text>

              <Entypo
                name="location"
                size={46}
                color="#FF00FF"
                style={{ position: "absolute", top: 18, left: 110 }}
              />
            </View>

            {/* Speed Chart */}
            <View
              style={{ position: "absolute", alignSelf: "center", top: 834 }}
            >
              <Image
                source={require("@/assets/images/StatisticPage/Speed_Chart.png")}
                resizeMode="contain"
                style={{ marginBottom: 24, width: 364, height: 128 }}
              ></Image>
            </View>

            {/* BPM Chart */}
            <View
              style={{ position: "absolute", alignSelf: "center", top: 980 }}
            >
              <Image
                source={require("@/assets/images/StatisticPage/BPM_Chart.png")}
                resizeMode="contain"
                style={{ marginBottom: 24, width: 364, height: 128 }}
              ></Image>
            </View>
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
    zIndex: 2,
  },
  statisticsTitle: {
    color: "#F5F4F6",
    fontFamily: "Sofia-bold",
    fontSize: 26,
    top: -58,
    left: 54,
    backgroundColor: "transparent",
  },
});

export default StatisticScreen;
