import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const OnboardingScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute" }}>
        <Image
          source={require("@/assets/images/OnboardingPage/Onboarding_Page_3.png")}
          resizeMode="contain"
          style={{ width: 393, height: 852 }}
        ></Image>
      </View>

      {/* START Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Main", { screen: "SignIn" });
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
            bottom: -374,
          }}
        >
          <Text style={styles.startButton}>START</Text>
        </View>
      </TouchableOpacity>
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
  startButton: {
    fontFamily: "Sofia-bold",
    fontSize: 22,
    color: "#0E0330",
    alignSelf: "center",
    top: 16,
  },
});

export default OnboardingScreen2;
