import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

const CoachScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topFrame}>
        <Image
          source={require("@/assets/images/ActivitiesPage/Calendar_Top_Frame_2.png")}
          resizeMode="contain"
          style={{ marginBottom: 0 }}
        />
        {/* Coach Text */}
        <Text style={styles.coachTitle}>Find your coach</Text>
      </View>

      <ScrollView
        style={{ backgroundColor: "#0E0230", height: "100%", width: "100%" }}
      >
        <View
          style={{
            height: 28,
            width: 66,
            backgroundColor: "#5145DE",
            borderRadius: 18,
            alignSelf: "center",
            top: 120,
            left: 146,
            // left: 146,
            // top: -230,
          }}
        >
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: "16px",
              alignSelf: "center",
              top: 4,
              // position: "absolute",
              // top: 10, // adjust the top position to your needs
              // left: 22, // adjust the left position to your needs
              backgroundColor: "transparent",
            }}
          >
            Filter
          </Text>
        </View>

        {/* Coach 1 */}
        <View
          style={{
            backgroundColor: "transparent",
            alignSelf: "center",
            top: 124,
          }}
        >
          <Image
            source={require("@/assets/images/CoachPage/Coach_Profile_1-1.png")}
            resizeMode="contain"
            style={{ marginBottom: 16 }}
          ></Image>
        </View>

        {/* Coach 2 */}
        <View
          style={{
            backgroundColor: "transparent",
            alignSelf: "center",
            top: 124,
          }}
        >
          <Image
            source={require("@/assets/images/CoachPage/Coach_Profile_2.png")}
            resizeMode="contain"
            style={{ marginBottom: 16 }}
          ></Image>
        </View>

        {/* Coach 3 */}
        <View
          style={{
            backgroundColor: "transparent",
            alignSelf: "center",
            top: 124,
          }}
        >
          <Image
            source={require("@/assets/images/CoachPage/Coach_Profile_3.png")}
            resizeMode="contain"
            style={{ marginBottom: 16 }}
          ></Image>
        </View>

        {/* Coach 4 */}
        <View
          style={{
            backgroundColor: "transparent",
            alignSelf: "center",
            top: 124,
          }}
        >
          <Image
            source={require("@/assets/images/CoachPage/Coach_Profile_4.png")}
            resizeMode="contain"
            style={{ marginBottom: 16 }}
          ></Image>
        </View>

        {/* Coach 5 */}
        <View
          style={{
            backgroundColor: "transparent",
            alignSelf: "center",
            top: 124,
          }}
        >
          <Image
            source={require("@/assets/images/CoachPage/Coach_Profile_5.png")}
            resizeMode="contain"
            style={{ marginBottom: 16 }}
          ></Image>
        </View>

        {/* Coach 6 */}
        <View
          style={{
            backgroundColor: "transparent",
            alignSelf: "center",
            top: 124,
          }}
        >
          <Image
            source={require("@/assets/images/CoachPage/Coach_Profile_6.png")}
            resizeMode="contain"
            style={{ marginBottom: 264 }}
          ></Image>
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
    // height: 130,
    backgroundColor: "transparent",
    zIndex: 2,
  },
  coachTitle: {
    color: "#F5F4F6",
    fontFamily: "Sofia-bold",
    fontSize: 26,
    top: -58,
    left: 34,
    backgroundColor: "transparent",
  },
});

export default CoachScreen;
