import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Easing, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GogglesPairingScreen = () => {
  const navigation = useNavigation();
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    const timer = window.setTimeout(() => {
      navigation.navigate("Goggles");
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [spinValue, navigation]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      {/* Animated view that spins */}
      <Animated.View
        style={[
          styles.spinner,
          {
            transform: [{ rotate: spin }],
          },
        ]}
      />

      <View style={{ alignSelf: "center", top: -80 }}>
        <Image
          source={require("@/assets/images/Logo_Small.png")}
          resizeMode="contain"
          style={{ width: 70, height: 26 }}
        ></Image>
      </View>

      {/* Pairing Image */}
      <View>
        <Image
          source={require("@/assets/images/GogglesPage/Goggles_Pairing_Button.png")}
          resizeMode="contain"
          style={{
            width: 236,
            height: 60,
            position: "absolute",
            alignSelf: "center",
            top: 10,
          }}
        ></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E0230",
  },
  spinner: {
    width: 100,
    height: 100,
    borderWidth: 6,
    borderColor: "#0E0230",
    borderTopColor: "#FF00FF",
    borderRadius: 50,
    top: -20,
  },
});

export default GogglesPairingScreen;
