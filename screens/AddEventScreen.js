import { Text, View, Image, StyleSheet } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

const AddEventScreen = () => {
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

      <View
        style={{
          backgroundColor: "transparent",
          height: "100%",
          width: "100%",
        }}
      >
        {/* Background Scroll Shape Image */}
        <View style={{ top: 104 }}>
          <Image
            source={require("@/assets/images/AddeEventPage/AddEvent_BackgroungShape.png")}
            resizeMode="contain"
            style={{ marginBottom: 0 }}
          />
        </View>
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
    // top: -20,
    top: 0,
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
});

export default AddEventScreen;
