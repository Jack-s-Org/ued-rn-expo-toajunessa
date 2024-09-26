import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const QuestionScreen5 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute" }}>
        <Image
          source={require("@/assets/images/QuestionsPage/Questions_Background_5.png")}
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
        <Text style={styles.questionHeaderText}>What is your current</Text>

        <Text style={styles.questionHeaderText2}>swim level?</Text>
      </View>

      {/* Beginner Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Main", { screen: "Question6" });
        }}
      >
        <View style={styles.buttonContainer}>
          <Image
            source={require("@/assets/images/QuestionsPage/Questions_Level.png")}
            resizeMode="contain"
            style={{ width: 314, height: 96 }}
          ></Image>

          <Text style={styles.levelText4}>Beginner</Text>

          <Text style={styles.levelText3}>
            I can swim laps, but I'm still learning and improving
          </Text>
        </View>
      </TouchableOpacity>

      {/* Intermediate Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Main", { screen: "Question6" });
        }}
      >
        <View style={styles.buttonContainer2}>
          <Image
            source={require("@/assets/images/QuestionsPage/Questions_Level.png")}
            resizeMode="contain"
            style={{ width: 314, height: 96 }}
          ></Image>

          <Text style={styles.levelText4}>Intermediate</Text>

          <Text style={styles.levelText3}>
            I feel comfortable in the pool, but I aim to enhance my skills
          </Text>
        </View>
      </TouchableOpacity>

      {/* Advanced Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Main", { screen: "Question6" });
        }}
      >
        <View style={styles.buttonContainer3}>
          <Image
            source={require("@/assets/images/QuestionsPage/Questions_Level.png")}
            resizeMode="contain"
            style={{ width: 314, height: 96 }}
          ></Image>

          <Text style={styles.levelText4}>Advanced</Text>

          <Text style={styles.levelText3}>I’m an experienced swimmer</Text>
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
    top: -140,
  },
  buttonContainer2: {
    position: "absolute",
    alignSelf: "center",
    top: -20,
  },
  buttonContainer3: {
    position: "absolute",
    alignSelf: "center",
    top: 100,
  },
  levelText3: {
    position: "absolute",
    alignSelf: "center",
    top: 44,
    left: -16,
    fontFamily: "Sofia-medium",
    fontSize: 16,
    color: "#F5F4F6",
    paddingLeft: 50,
  },
  levelText4: {
    position: "absolute",
    alignSelf: "center",
    top: 12,
    left: 32,
    fontFamily: "Sofia-bold",
    fontSize: 18,
    color: "#F5F4F6",
  },
});
export default QuestionScreen5;
