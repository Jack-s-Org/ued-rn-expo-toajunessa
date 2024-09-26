import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("@/assets/images/Logo_Big.png")}
          resizeMode="contain"
          style={{ width: 166, height: 82, top: -292 }}
        ></Image>
      </View>

      <View style={{ position: "absolute" }}>
        <Image
          source={require("@/assets/images/SignInPage/SignIn_Bottom_Background.png")}
          resizeMode="contain"
          style={{ width: 393, height: 622, bottom: -100 }}
        ></Image>
      </View>

      {/* First Name Input */}
      <View
        style={{
          position: "absolute",
          top: 290,
          alignSelf: "center",
          width: "90%",
          marginBottom: 24,
        }}
      >
        <TextInput
          style={styles.inputStyle}
          placeholder="First Name"
          placeholderTextColor="#F5F4F6"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Email Input */}
      <View
        style={{
          position: "absolute",
          top: 370,
          alignSelf: "center",
          width: "90%",
          marginBottom: 24,
        }}
      >
        <TextInput
          style={styles.inputStyleEmail}
          placeholder="Email"
          placeholderTextColor="#F5F4F6"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input */}
      <View
        style={{
          position: "absolute",
          top: 450,
          alignSelf: "center",
          width: "90%",
          marginBottom: 24,
        }}
      >
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          placeholderTextColor="#F5F4F6"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* Create Account Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Main", { screen: "Loading2" });
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
            bottom: -130,
          }}
        >
          <Text style={styles.createButton}>Create Account</Text>
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
  inputStyle: {
    height: 56,
    width: 358,
    borderColor: "#F5F4F6",
    borderWidth: 0.2,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 4,
    backgroundColor: "#30274D",
    paddingHorizontal: 10,
    fontFamily: "Sofia-regular",
    fontSize: 18,
    color: "#F5F4F6",
  },
  inputStyleEmail: {
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
  createButton: {
    fontFamily: "Sofia-bold",
    fontSize: 22,
    color: "#0E0330",
    alignSelf: "center",
    top: 16,
  },
});

export default SignInScreen;
