import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const HomeScreen = () => {
  return (
    <View style={homeScreenStyles.container}>
      {/* Top Frame */}
      <View
        style={{
          position: "absolute",
          top: 40,
          left: 0,
          right: 0,
          // height: 200, // adjust the height to your needs
          backgroundColor: "transparent",
          zIndex: 2, // make sure the top frame is on top of the scroll view
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
          // flexDirection: "column",
          // paddingBottom: 24,
          // justifyContent: "space-between",
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
                top: 36, // adjust the top position to your needs
                left: "38%", // adjust the left position to your needs
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
                top: 23, // adjust the top position to your needs
                left: 304, // adjust the left position to your needs
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
                  top: 6, // adjust the top position to your needs
                  left: 26, // adjust the left position to your needs
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
                  top: 38, // adjust the top position to your needs
                  left: 22, // adjust the left position to your needs
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
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              marginBottom: 24,
              top: 72,
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
                top: -112, // adjust the top position to your needs
                left: -104, // adjust the left position to your needs
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
              alignItems: "center",
              left: 16,
              backgroundColor: "transparent",
              width: "34%",
              top: 48,
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
                top: -100, // adjust the top position to your needs
                left: 0, // adjust the left position to your needs
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
                top: -56, // adjust the top position to your needs
                left: -31, // adjust the left position to your needs
                backgroundColor: "transparent",
              }}
            >
              Calories
            </Text>
          </View>

          {/* Distance Shape */}
          <View
            style={{
              alignSelf: "center",
              width: "34%",
              left: -30,
              top: -122,
              // justifyContent: "center",
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
                top: 25, // adjust the top position to your needs
                left: 70, // adjust the left position to your needs
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
                top: 88, // adjust the top position to your needs
                left: 40, // adjust the left position to your needs
                backgroundColor: "transparent",
              }}
            >
              300
            </Text>
          </View>

          {/* Speed Shape */}
          <View
            style={{
              alignSelf: "center",
              left: 111,
              // top: -339,
              top: -109,
              // justifyContent: "center",
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
                top: 19, // adjust the top position to your needs
                left: 48, // adjust the left position to your needs
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
                top: 100, // adjust the top position to your needs
                left: 17, // adjust the left position to your needs
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
                top: 92, // adjust the top position to your needs
                left: 87, // adjust the left position to your needs
                backgroundColor: "transparent",
              }}
            >
              m/s
            </Text>
          </View>

          {/* Popular Workouts Shape */}
          <View
            style={{
              alignItems: "center",
              // top: -338,
              top: 48,
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
                top: 26, // adjust the top position to your needs
                left: 30, // adjust the left position to your needs
                backgroundColor: "transparent",
              }}
            >
              Popular Programs
            </Text>
            <Text
              style={{
                color: "#F5F4F6",
                fontFamily: "Sofia-medium",
                fontSize: "12px",
                position: "absolute",
                top: 32, // adjust the top position to your needs
                left: 300, // adjust the left position to your needs
                backgroundColor: "transparent",
              }}
            >
              View All
            </Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={12}
              color="#0E0330"
              style={{
                position: "absolute",
                top: 32,
                left: 348,
              }}
            />
          </View>

          {/* Horizontal ScrollView for Popular Workouts */}
          <View
            style={{
              height: 200,
              backgroundColor: "transparent",
              top: -284,
              marginBottom: -198,
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
                    top: 143, // adjust the top position to your needs
                    left: 22, // adjust the left position to your needs
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
                    top: 143, // adjust the top position to your needs
                    left: 22, // adjust the left position to your needs
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
                    top: 143, // adjust the top position to your needs
                    left: 22, // adjust the left position to your needs
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
                    top: 143, // adjust the top position to your needs
                    left: 22, // adjust the left position to your needs
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
                    top: 143, // adjust the top position to your needs
                    left: 22, // adjust the left position to your needs
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
                    top: 143, // adjust the top position to your needs
                    left: 22, // adjust the left position to your needs
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
    // backgroundColor: "#0E0230",
    backgroundColor: "#0E0230",
  },
  headingStyle: {
    color: "#F5F4F6",
    fontFamily: "Sofia-bold-italic",
    fontSize: "28px",
    // position: "absolute",
    top: 62, // adjust the top position to your needs
    left: 26, // adjust the left position to your needs
    backgroundColor: "transparent",
  },
  subheadingStyle: {
    color: "#F5F4F6",
    fontFamily: "Sofia-regular",
    fontSize: "16px",
    // position: "relative",
    top: 80, // adjust the top position to your needs
    left: 28, // adjust the left position to your needs
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
    // position: "absolute",
    // height: "100%",
    // width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    top: 148,
    // left: 0,
  },
  // percentageStyle: {
  //   color: "#F5F4F6",
  //   fontFamily: "Sofia-bold",
  //   fontSize: "42px",
  //   position: "absolute",
  //   top: 36, // adjust the top position to your needs
  //   left: "38%", // adjust the left position to your needs
  //   backgroundColor: "transparent",
  // },
  // lastSwimeStyle: {
  //   color: "#F5F4F6",
  //   fontFamily: "Sofia-semi-bold",
  //   fontSize: "20px",
  //   position: "absolute",
  //   top: 23, // adjust the top position to your needs
  //   left: 304, // adjust the left position to your needs
  //   backgroundColor: "transparent",
  //   textAlign: "center",
  // },
});

export default HomeScreen;
