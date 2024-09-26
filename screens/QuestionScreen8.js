import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const QuestionScreen8 = ({ navigation }) => {
  const options = [
    {
      id: 1,
      text: "Option 1",
      untickedImage: require("@/assets/images/QuestionsPage/Goals_Default_1.png"),
      tickedImage: require("@/assets/images/QuestionsPage/Goals_On_1.png"),
    },
    {
      id: 2,
      text: "Option 2",
      untickedImage: require("@/assets/images/QuestionsPage/Goals_Default_2.png"),
      tickedImage: require("@/assets/images/QuestionsPage/Goals_On_2.png"),
    },
    {
      id: 3,
      text: "Option 3",
      untickedImage: require("@/assets/images/QuestionsPage/Goals_Default_3.png"),
      tickedImage: require("@/assets/images/QuestionsPage/Goals_On_3.png"),
    },
    {
      id: 4,
      text: "Option 3",
      untickedImage: require("@/assets/images/QuestionsPage/Goals_Default_4.png"),
      tickedImage: require("@/assets/images/QuestionsPage/Goals_On_4.png"),
    },
    {
      id: 5,
      text: "Option 3",
      untickedImage: require("@/assets/images/QuestionsPage/Goals_Default_5.png"),
      tickedImage: require("@/assets/images/QuestionsPage/Goals_On_5.png"),
    },
    {
      id: 6,
      text: "Option 3",
      untickedImage: require("@/assets/images/QuestionsPage/Goals_Default_6.png"),
      tickedImage: require("@/assets/images/QuestionsPage/Goals_On_6.png"),
    },
  ];

  const [ticked, setTicked] = useState({});

  const handlePress = (id) => {
    setTicked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <View style={styles.container}>
      <View style={{ position: "absolute" }}>
        <Image
          source={require("@/assets/images/QuestionsPage/Questions_Background_8.png")}
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
        <Text style={styles.questionHeaderText}>What are your</Text>

        <Text style={styles.questionHeaderText2}>swimming goals?</Text>
      </View>

      {/* Check Box */}
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          onPress={() => handlePress(option.id)}
          style={styles.checkboxContainer}
        >
          <Image
            source={
              ticked[option.id] ? option.tickedImage : option.untickedImage
            }
            style={styles.checkboxImage}
          />
        </TouchableOpacity>
      ))}

      {/* Next Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Main", { screen: "GetReady" });
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
            bottom: -132,
          }}
        >
          <Text style={styles.nextButton}>NEXT</Text>
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
    top: -52,
  },
  questionHeaderText2: {
    position: "absolute",
    fontFamily: "Sofia-bold",
    fontSize: 28,
    color: "#F5F4F6",
    alignSelf: "center",
    top: -18,
  },
  checkboxImage: {
    width: 314,
    height: 56,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    top: 50,
  },
  nextButton: {
    fontFamily: "Sofia-bold",
    fontSize: 22,
    color: "#0E0330",
    alignSelf: "center",
    top: 16,
  },
});
export default QuestionScreen8;
