import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={homeScreenStyles.container}>
      {/* Top Frame */}
      <View
        style={{
          position: "absolute",
          top: 40,
          left: 0,
          right: 0,
          backgroundColor: "transparent",
          zIndex: 2,
        }}
      >
        <View>
          <Image
            source={require("@/assets/images/Top_Main_Frame_1.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              top: -100,
              left: -71,
              zIndex: 5,
            }}
          />
        </View>

        {/* Welcome Text */}
        <View style={{ backgroundColor: "transparent", zIndex: 3 }}>
          <Text style={homeScreenStyles.headingStyle}>Welcome, Calla.</Text>
          <Text style={homeScreenStyles.subheadingStyle}>Tuesday, 18 June</Text>
        </View>

        {/* Profile Picture */}
        <View style={homeScreenStyles.profileImgContainer}>
          <Image
            source={require("@/assets/images/Profile_Pic.png")}
            resizeMode="cover"
            style={homeScreenStyles.profileImg}
          />
        </View>
      </View>

      {/* // Scroll page */}
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <ScrollView
          style={{ flex: 1, backgroundColor: "transparent" }}
          contentContainerStyle={{ paddingVertical: 24 }}
        >
          {/* Status Shape 1 */}
          <View style={homeScreenStyles.lastSwimContainer}>
            <Image
              source={require("@/assets/images/Shape_1.png")}
              resizeMode="contain"
              style={{ marginBottom: 24 }}
            />
            <Text
              style={{
                color: "#F5F4F6",
                fontFamily: "Sofia-bold",
                fontSize: "42px",
                position: "absolute",
                top: 36,
                left: "38%",
                backgroundColor: "transparent",
              }}
            >
              75%
            </Text>
            <Text
              style={{
                color: "#F5F4F6",
                fontFamily: "Sofia-semi-bold",
                fontSize: "20px",
                position: "absolute",
                top: 23,
                left: 304,
                backgroundColor: "transparent",
                textAlign: "center",
              }}
            >
              Last{"\n"}Swim
            </Text>

            {/* Weather Shape */}
            <View
              style={{
                position: "absolute",
                top: 28,
                left: "5%",
                width: 94,
                height: 64,
                borderRadius: 100,
                backgroundColor: "#0E0330",
                justifyContent: "center",
                alignItems: "center",
                padding: 8,
              }}
            >
              <Text
                style={{
                  color: "#F5F4F6",
                  fontFamily: "Sofia-bold",
                  fontSize: "26px",
                  position: "absolute",
                  top: 6,
                  left: 26,
                  backgroundColor: "transparent",
                  textAlign: "center",
                }}
              >
                28°
              </Text>

              <Text
                style={{
                  color: "#F5F4F6",
                  fontFamily: "Sofia-medium",
                  fontSize: "14px",
                  position: "absolute",
                  top: 38,
                  left: 22,
                  backgroundColor: "transparent",
                  textAlign: "center",
                }}
              >
                Rain
              </Text>

              <Ionicons
                name="rainy-outline"
                size={15}
                color="#F5F4F6"
                style={{
                  position: "absolute",
                  top: 38,
                  left: 54,
                }}
              />
            </View>
          </View>

          {/* Full Body Workout Chart */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Main", { screen: "Statistics" });
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                marginBottom: 24,
                top: 112,
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
                  left: 340,
                }}
              />
            </View>
          </TouchableOpacity>

          {/* Calories Shape */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Main", { screen: "Statistics" });
            }}
          >
            <View
              style={{
                alignItems: "center",
                left: 16,
                backgroundColor: "transparent",
                width: "34%",
                top: 88,
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
                120
              </Text>

              <Text
                style={{
                  color: "#F5F4F6",
                  fontFamily: "Sofia-semi-bold",
                  fontSize: "14px",
                  top: -56,
                  left: -31,
                  backgroundColor: "transparent",
                }}
              >
                Calories
              </Text>
            </View>
          </TouchableOpacity>

          {/* Distance Shape */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Main", { screen: "Statistics" });
            }}
          >
            <View
              style={{
                alignSelf: "center",
                width: "34%",
                left: -30,
                top: -82,
                backgroundColor: "transparent",
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
                Distance
              </Text>

              <Text
                style={{
                  color: "#F5F4F6",
                  fontFamily: "Sofia-bold",
                  fontSize: "30px",
                  position: "absolute",
                  top: 88,
                  left: 40,
                  backgroundColor: "transparent",
                }}
              >
                300
              </Text>
            </View>
          </TouchableOpacity>

          {/* Speed Shape */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Main", { screen: "Statistics" });
            }}
          >
            <View
              style={{
                alignSelf: "center",
                left: 111,
                top: -79,
                backgroundColor: "transparent",
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
                100
              </Text>
              <Text
                style={{
                  color: "#F5F4F6",
                  fontFamily: "Sofia-semi-bold",
                  fontSize: "14px",
                  position: "absolute",
                  top: 100,
                  left: 17,
                  backgroundColor: "transparent",
                }}
              >
                Speed
              </Text>

              <Text
                style={{
                  color: "#F5F4F6",
                  fontFamily: "Sofia-bold",
                  fontSize: "26px",
                  position: "absolute",
                  top: 92,
                  left: 87,
                  backgroundColor: "transparent",
                }}
              >
                m/s
              </Text>
            </View>
          </TouchableOpacity>

          {/* Popular Workouts Shape */}
          <View
            style={{
              alignItems: "center",
              top: 88,
              marginBottom: 24,
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            <Image
              source={require("@/assets/images/HomePage/PopularWorkoutsBackground_Shape_3.png")}
              resizeMode="contain"
              style={{ marginBottom: -2 }}
            ></Image>

            <Text
              style={{
                color: "#F5F4F6",
                fontFamily: "Sofia-bold",
                fontSize: "19px",
                position: "absolute",
                top: 26,
                left: 30,
                backgroundColor: "transparent",
              }}
            >
              Popular Programs
            </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Main", { screen: "Programs" });
              }}
            >
              <View
                style={{
                  position: "absolute",
                  bottom: 350,
                  left: 106,
                }}
              >
                <Text
                  style={{
                    color: "#F5F4F6",
                    fontFamily: "Sofia-medium",
                    fontSize: "12px",
                    position: "absolute",
                    backgroundColor: "transparent",
                  }}
                >
                  View All
                </Text>

                <MaterialIcons
                  name="arrow-forward-ios"
                  size={12}
                  color="#F5F4F6"
                  style={{
                    position: "absolute",
                    left: 44,
                    top: 1,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* Horizontal ScrollView for Popular Workouts */}
          <View
            style={{
              height: 200,
              backgroundColor: "transparent",
              top: -244,
              marginBottom: -158,
            }}
          >
            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                flexDirection: "row",
                paddingLeft: 24,
              }}
              showsHorizontalScrollIndicator={false}
              style={{
                backgroundColor: "transparent",
                flex: 1,
                marginBottom: 24,
              }}
            >
              {/* Diving Video */}
              <View style={{ marginRight: 24 }}>
                <Image
                  source={require("@/assets/images/HomePage/Diving_Vid_Shape_1.png")}
                  resizeMode="contain"
                ></Image>
                <Text
                  style={{
                    color: "#F5F4F6",
                    fontFamily: "Sofia-semi-bold",
                    fontSize: "16px",
                    position: "absolute",
                    top: 143,
                    left: 22,
                    backgroundColor: "transparent",
                  }}
                >
                  Diving
                </Text>
              </View>

              {/* Beginners Video */}
              <View style={{ marginRight: 24 }}>
                <Image
                  source={require("@/assets/images/HomePage/Beginners_Vid_Shape_1.png")}
                  resizeMode="contain"
                ></Image>

                <Text
                  style={{
                    color: "#F5F4F6",
                    fontFamily: "Sofia-semi-bold",
                    fontSize: "16px",
                    position: "absolute",
                    top: 143,
                    left: 22,
                    backgroundColor: "transparent",
                  }}
                >
                  Beginners
                </Text>
              </View>

              {/* Swimming 101 Video */}
              <View style={{ marginRight: 24 }}>
                <Image
                  source={require("@/assets/images/HomePage/Swimming_101_Vid_Shape_1.png")}
                  resizeMode="contain"
                ></Image>

                <Text
                  style={{
                    color: "#F5F4F6",
                    fontFamily: "Sofia-semi-bold",
                    fontSize: "16px",
                    position: "absolute",
                    top: 143,
                    left: 22,
                    backgroundColor: "transparent",
                  }}
                >
                  Swimming 101
                </Text>
              </View>

              {/* Butterfly Style Video */}
              <View style={{ marginRight: 24 }}>
                <Image
                  source={require("@/assets/images/HomePage/Butterfly_Style_Vid_Shape_1.png")}
                  resizeMode="contain"
                ></Image>

                <Text
                  style={{
                    color: "#F5F4F6",
                    fontFamily: "Sofia-semi-bold",
                    fontSize: "16px",
                    position: "absolute",
                    top: 143,
                    left: 22,
                    backgroundColor: "transparent",
                  }}
                >
                  Butterfly Style
                </Text>
              </View>

              {/* Freestyle Video */}
              <View style={{ marginRight: 24 }}>
                <Image
                  source={require("@/assets/images/HomePage/Freestyle_Vid_Shape_1.png")}
                  resizeMode="contain"
                ></Image>

                <Text
                  style={{
                    color: "#F5F4F6",
                    fontFamily: "Sofia-semi-bold",
                    fontSize: "16px",
                    position: "absolute",
                    top: 143,
                    left: 22,
                    backgroundColor: "transparent",
                  }}
                >
                  Freestyle
                </Text>
              </View>

              {/* Warm-ups Video */}
              <View style={{ marginRight: 24 }}>
                <Image
                  source={require("@/assets/images/HomePage/Warmups_Vid_Shape_1.png")}
                  resizeMode="contain"
                ></Image>

                <Text
                  style={{
                    color: "#F5F4F6",
                    fontFamily: "Sofia-semi-bold",
                    fontSize: "16px",
                    position: "absolute",
                    top: 143,
                    left: 22,
                    backgroundColor: "transparent",
                  }}
                >
                  Warm-Ups
                </Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const homeScreenStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0E0230",
  },
  headingStyle: {
    color: "#F5F4F6",
    fontFamily: "Sofia-bold-italic",
    fontSize: "28px",
    top: 62,
    left: 26,
    backgroundColor: "transparent",
  },
  subheadingStyle: {
    color: "#F5F4F6",
    fontFamily: "Sofia-regular",
    fontSize: "16px",
    top: 80,
    left: 28,
    backgroundColor: "transparent",
  },
  profileImgContainer: {
    position: "absolute",
    height: 94,
    width: 94,
    borderRadius: 80,
    top: 37,
    left: "72%",
    zIndex: 4,
  },
  profileImg: {
    height: 94,
    width: 94,
    borderRadius: 80,
  },
  lastSwimContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    top: 148,
  },
});

export default HomeScreen;
