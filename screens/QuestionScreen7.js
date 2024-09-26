import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { RulerPicker } from "react-native-ruler-picker";

const QuestionScreen7 = ({ navigation }) => {
  let currentLength = 0;

  const handleValueChange = (value) => {
    currentLength = value;
  };

  const handleNextPress = () => {
    navigation.navigate("Question8", { height: currentLength });
  };

  return (
    <View style={styles.container}>
      <View style={{ position: "absolute" }}>
        <Image
          source={require("@/assets/images/QuestionsPage/Questions_Background_7.png")}
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
        <Text style={styles.questionHeaderText}>What pool length do</Text>

        <Text style={styles.questionHeaderText2}>you usually swim in?</Text>
      </View>

      {/* Ruler Picker */}
      <View style={styles.rulerPickerContainer}>
        <RulerPicker
          min={0}
          max={250}
          step={1}
          fractionDigits={0}
          initialValue={0}
          onValueChange={handleValueChange}
          unit="m"
          indicatorColor="#FF00FF"
          textColor="#F5F4F6"
          unitTextStyle={styles.unitText}
          valueTextStyle={styles.valueText}
          height={150}
        />
      </View>

      {/* Next Button */}
      <TouchableOpacity onPress={handleNextPress}>
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
  rulerPickerContainer: {
    marginTop: 50,
    width: "100%",
    alignItems: "center",
    position: "absolute",
    top: 350,
  },
  nextButton: {
    fontFamily: "Sofia-bold",
    fontSize: 22,
    color: "#0E0330",
    alignSelf: "center",
    top: 16,
  },
  unitText: {
    fontFamily: "Sofia-semi-bold",
    color: "#F5F4F6",
    fontSize: 24,
  },
  valueText: {
    fontFamily: "Sofia-bold",
    color: "#F5F4F6",
    fontSize: 60,
  },
});
export default QuestionScreen7;
