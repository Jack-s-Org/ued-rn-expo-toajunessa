import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

const SwimScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topFrame}>
        <Image
          source={require("@/assets/images/ActivitiesPage/Calendar_Top_Frame_2.png")}
          resizeMode="contain"
          style={{ marginBottom: 0 }}
        />
        {/* My Workouts Text */}
        <Text style={styles.swimTitle}>My Workouts</Text>
      </View>

      <ScrollView
        style={{
          backgroundColor: "transparent",
          height: "100%",
          width: "100%",
        }}
      >
        {/* Background Scroll Shape Image */}
        <View style={{ top: 104 }}>
          <Image
            source={require("@/assets/images/SwimPage/My_Workouts_BackgroundShape_2.png")}
            resizeMode="contain"
            style={{ marginBottom: 0 }}
          />
        </View>

        {/* Background Shape Image */}
        <View>
          <View>
            <Image
              source={require("@/assets/images/SwimPage/My_Workouts_Shape_3.png")}
              resizeMode="contain"
              style={{
                marginBottom: -160,
                // top: -1316,
                top: -1496,
                backgroundColor: "transparent",
                alignSelf: "center",
                width: 362,
                height: 94,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "transparent",
              top: -1500,
              width: 100,
              height: 100,
              left: 276,
              marginBottom: -100,
            }}
          >
            <Image
              source={require("@/assets/images/ActivitiesPage/75_Percent_Bar.png")}
              resizeMode="contain"
              style={{
                // marginBottom: 0,
                // top: -943,
                // top: -720,
                // left: 133,
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
                // left: 304,
                backgroundColor: "transparent",
              }}
            >
              75%
            </Text>
          </View>
        </View>

        {/* Workout 1 */}
        <View
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            alignSelf: "center",
            top: 240,
          }}
        >
          <Image
            source={require("@/assets/images/SwimPage/MyWorkouts_1_1.png")}
            resizeMode="contain"
            style={{
              marginBottom: 24,
              width: 361,
              height: 224,
            }}
          ></Image>
        </View>

        {/* Workout 2 */}
        <View
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            alignSelf: "center",
            top: 488,
          }}
        >
          <Image
            source={require("@/assets/images/SwimPage/MyWorkouts_2.png")}
            resizeMode="contain"
            style={{
              marginBottom: 24,
              width: 361,
              height: 224,
            }}
          ></Image>
        </View>

        {/* Workout 3 */}
        <View
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            alignSelf: "center",
            top: 736,
          }}
        >
          <Image
            source={require("@/assets/images/SwimPage/MyWorkouts_3.png")}
            resizeMode="contain"
            style={{
              marginBottom: 24,
              width: 361,
              height: 224,
            }}
          ></Image>
        </View>

        {/* Workout 4 */}
        <View
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            alignSelf: "center",
            top: 984,
          }}
        >
          <Image
            source={require("@/assets/images/SwimPage/MyWorkouts_4.png")}
            resizeMode="contain"
            style={{
              marginBottom: 24,
              width: 361,
              height: 224,
            }}
          ></Image>

          {/* Workout 5 */}
          <View
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              alignSelf: "center",
              top: 248,
            }}
          >
            <Image
              source={require("@/assets/images/SwimPage/MyWorkouts_5.png")}
              resizeMode="contain"
              style={{
                marginBottom: 24,
                width: 361,
                height: 224,
              }}
            ></Image>
          </View>
        </View>
      </ScrollView>
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
    top: -20,
    alignSelf: "center",
    backgroundColor: "transparent",
    zIndex: 2,
  },
  swimTitle: {
    color: "#F5F4F6",
    fontFamily: "Sofia-bold",
    fontSize: 26,
    top: -58,
    left: 34,
    backgroundColor: "transparent",
  },
  // profileImgContainer: {
  //   // position: "absolute",
  //   height: 94,
  //   width: 94,
  //   borderRadius: 80,
  //   // top: 37,
  //   top: -98.5,
  //   left: "71.7%",
  //   zIndex: 4,
  // },
  // profileImg: {
  //   height: 94,
  //   width: 94,
  //   borderRadius: 80,
  // },
});

export default SwimScreen;
