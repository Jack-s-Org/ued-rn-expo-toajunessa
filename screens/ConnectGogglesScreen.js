import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ConnectGogglesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute" }}>
        <Image
          source={require("@/assets/images/QuestionsPage/Questions_Background.png")}
          resizeMode="contain"
          style={{ width: 393, height: 852 }}
        ></Image>
      </View>

      {/* Back Button */}
      <View style={styles.backButton}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View style={{ position: "absolute" }}>
            <MaterialIcons name="arrow-back-ios" size={28} color="#FF00FF" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Question Text */}
      <View>
        <Text style={styles.questionHeaderText}>Ready to pair your</Text>

        <Text style={styles.questionHeaderText2}>Smart Goggles?</Text>
      </View>

      {/* Absolutely Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("GogglesPairing");
        }}
      >
        <View style={styles.buttonContainer}>
          <Image
            source={require("@/assets/images/QuestionsPage/Questions_Gender_2.png")}
            resizeMode="contain"
          ></Image>

          <Text style={styles.pairingText}>Absolutely!</Text>
        </View>
      </TouchableOpacity>

      {/* Nope Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View style={styles.buttonContainer2}>
          <Image
            source={require("@/assets/images/QuestionsPage/Questions_Gender_2.png")}
            resizeMode="contain"
          ></Image>

          <Text style={styles.pairingText}>Nope.</Text>
        </View>
      </TouchableOpacity>

      {/* Haven't bought goggles Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View style={styles.buttonContainer3}>
          <Image
            source={require("@/assets/images/QuestionsPage/Questions_Gender_2.png")}
            resizeMode="contain"
          ></Image>

          <Text style={styles.pairingText}>I haven’t ordered mine!</Text>
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
  backButton: {
    position: "absolute",
    top: 72,
    left: 24,
  },
  questionHeaderText: {
    position: "absolute",
    fontFamily: "Sofia-bold",
    fontSize: 28,
    color: "#F5F4F6",
    alignSelf: "center",
    top: -280,
  },
  questionHeaderText2: {
    position: "absolute",
    fontFamily: "Sofia-bold",
    fontSize: 28,
    color: "#F5F4F6",
    alignSelf: "center",
    top: -246,
  },
  buttonContainer: {
    position: "absolute",
    alignSelf: "center",
    top: -120,
  },
  buttonContainer2: {
    position: "absolute",
    alignSelf: "center",
    top: -20,
  },
  buttonContainer3: {
    position: "absolute",
    alignSelf: "center",
    top: 80,
  },
  pairingText: {
    position: "absolute",
    alignSelf: "center",
    top: 20,
    left: 24,
    fontFamily: "Sofia-bold",
    fontSize: 20,
    color: "#F5F4F6",
  },
});
export default ConnectGogglesScreen;
