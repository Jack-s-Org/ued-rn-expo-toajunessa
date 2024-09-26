import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";

const ProgramsScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.topFrame}>
        <Image
          source={require("@/assets/images/ActivitiesPage/Calendar_Top_Frame_2.png")}
          resizeMode="contain"
          style={{ marginBottom: 0 }}
        />
        {/* My Workouts Text */}
        <Text style={styles.programsTitle}>Programs</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View style={{ position: "absolute", top: -84, left: 26 }}>
            <MaterialIcons name="arrow-back-ios" size={24} color="#F5F4F6" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Programs Vertical Scroll */}
      <View>
        <ScrollView>
          <View>
            {/* background Img */}
            <View style={{ top: 0, backgroundColor: "transparent" }}>
              <Image
                source={require("@/assets/images/ProgramsPage/Programs_Background.png")}
                resizeMode="contain"
                style={{ marginBottom: 210, top: 214 }}
              />
            </View>

            {/* Search bar */}
            <View
              style={{ position: "absolute", alignSelf: "center", top: 140 }}
            >
              <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                placeholderTextColor="#F5F4F6"
                value={search}
                onChangeText={setSearch}
              ></TextInput>
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
                source={require("@/assets/images/ProgramsPage/Programs_1.png")}
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
                source={require("@/assets/images/ProgramsPage/Programs_2.png")}
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
                source={require("@/assets/images/ProgramsPage/Programs_3.png")}
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
                source={require("@/assets/images/ProgramsPage/Programs_4.png")}
                resizeMode="contain"
                style={{
                  marginBottom: 24,
                  width: 361,
                  height: 224,
                }}
              ></Image>
            </View>

            {/* Workout 5 */}
            <View
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                alignSelf: "center",
                top: 1232,
              }}
            >
              <Image
                source={require("@/assets/images/ProgramsPage/Programs_5.png")}
                resizeMode="contain"
                style={{
                  marginBottom: 24,
                  width: 361,
                  height: 224,
                }}
              ></Image>
            </View>

            {/* Workout 6 */}
            <View
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                alignSelf: "center",
                top: 1480,
              }}
            >
              <Image
                source={require("@/assets/images/ProgramsPage/Programs_6.png")}
                resizeMode="contain"
                style={{
                  marginBottom: 24,
                  width: 361,
                  height: 224,
                }}
              ></Image>
            </View>

            {/* Workout 7 */}
            <View
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                alignSelf: "center",
                top: 1728,
              }}
            >
              <Image
                source={require("@/assets/images/ProgramsPage/Programs_7.png")}
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
    top: 0,
    alignSelf: "center",
    backgroundColor: "transparent",
    zIndex: 2,
  },
  programsTitle: {
    color: "#F5F4F6",
    fontFamily: "Sofia-bold",
    fontSize: 26,
    top: -58,
    left: 54,
    backgroundColor: "transparent",
  },
  inputStyle: {
    height: 56,
    width: 358,
    borderColor: "#F5F4F6",
    borderWidth: 0.2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 30,
    backgroundColor: "#30274D",
    paddingHorizontal: 10,
    fontFamily: "Sofia-regular",
    fontSize: 18,
    color: "#F5F4F6",
  },
});

export default ProgramsScreen;
