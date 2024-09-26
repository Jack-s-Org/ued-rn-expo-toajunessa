import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const QuestionScreen6 = ({ navigation }) => {
  const [swim, setSwim] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={{ position: "absolute" }}>
          <Image
            source={require("@/assets/images/QuestionsPage/Questions_Background_6.png")}
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
          <Text style={styles.questionHeaderText}>How often do you</Text>

          <Text style={styles.questionHeaderText2}>usually swim per week?</Text>
        </View>

        <View style={{ position: "absolute", alignItems: "center", top: 350 }}>
          <TextInput
            style={styles.inputStyleSwim}
            placeholderTextColor="#F5F4F6"
            value={swim}
            onChangeText={setSwim}
            keyboardType="numeric"
          ></TextInput>

          <Text style={styles.dayText}>day</Text>
        </View>

        {/* Next Button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Main", { screen: "Question7" });
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
              bottom: -360,
            }}
          >
            <Text style={styles.nextButton}>NEXT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
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
  nextButton: {
    fontFamily: "Sofia-bold",
    fontSize: 22,
    color: "#0E0330",
    alignSelf: "center",
    top: 16,
  },
  inputStyleSwim: {
    height: 134,
    width: 124,
    borderColor: "transparent",
    borderWidth: 2,
    borderBottomColor: "#FF00FF",
    fontFamily: "Sofia-bold",
    fontSize: 60,
    color: "#F5F4F6",
    position: "absolute",
    textAlign: "center",
  },
  dayText: {
    position: "absolute",
    top: 150,
    fontFamily: "Sofia-semi-bold",
    fontSize: 28,
    color: "#F5F4F6",
  },
});
export default QuestionScreen6;
