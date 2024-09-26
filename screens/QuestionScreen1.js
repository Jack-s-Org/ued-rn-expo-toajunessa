import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";

const QuestionScreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute" }}>
        <Image
          source={require("@/assets/images/QuestionsPage/Questions_Background_1.png")}
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
        <Text style={styles.questionHeaderText}>Identify your gender</Text>

        <Text style={styles.questionSubheadingText}>
          This is for us to know you better
        </Text>
      </View>

      {/* Male Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Main", { screen: "Question2" });
        }}
      >
        <View style={styles.buttonContainer}>
          <Image
            source={require("@/assets/images/QuestionsPage/Questions_Gender_1.png")}
            resizeMode="contain"
          ></Image>

          <Foundation
            name="male-symbol"
            size={90}
            color="#F5F4F6"
            style={styles.genderIcon}
          />
          <Text style={styles.genderText}>Male</Text>
        </View>
      </TouchableOpacity>

      {/* Female Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Main", { screen: "Question2" });
        }}
      >
        <View style={styles.buttonContainer2}>
          <Image
            source={require("@/assets/images/QuestionsPage/Questions_Gender_1.png")}
            resizeMode="contain"
          ></Image>

          <Foundation
            name="female-symbol"
            size={90}
            color="#F5F4F6"
            style={styles.genderIcon}
          />
          <Text style={styles.genderText}>Female</Text>
        </View>
      </TouchableOpacity>

      {/* Not to say Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Main", { screen: "Question2" });
        }}
      >
        <View style={styles.buttonContainer3}>
          <Image
            source={require("@/assets/images/QuestionsPage/Questions_Gender_2.png")}
            resizeMode="contain"
          ></Image>

          <Text style={styles.genderText2}>Prefer not to say</Text>
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
  questionSubheadingText: {
    position: "absolute",
    fontFamily: "Sofia-medium",
    fontSize: 16,
    color: "#F5F4F6",
    alignSelf: "center",
    top: -220,
  },
  buttonContainer: {
    position: "absolute",
    alignSelf: "center",
    top: -160,
  },
  buttonContainer2: {
    position: "absolute",
    alignSelf: "center",
    top: 30,
  },
  buttonContainer3: {
    position: "absolute",
    alignSelf: "center",
    top: 220,
  },
  genderIcon: {
    position: "absolute",
    alignSelf: "center",
    top: 20,
  },
  genderText: {
    position: "absolute",
    alignSelf: "center",
    top: 120,
    fontFamily: "Sofia-bold",
    fontSize: 20,
    color: "#F5F4F6",
  },
  genderText2: {
    position: "absolute",
    alignSelf: "center",
    top: 22,
    fontFamily: "Sofia-bold",
    fontSize: 20,
    color: "#F5F4F6",
  },
});
export default QuestionScreen1;
