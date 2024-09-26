import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
const GetReadyScreen = () => {
  const [visible, setVisible] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];
  const navigation = useNavigation();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      const navigateTimer = window.setTimeout(() => {
        navigation.navigate("MainTabs", { screen: "Home" });
      }, 4000);

      return () => window.clearTimeout(navigateTimer);
    }
  }, [visible, fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.getreadyText}>Get ready to swim</Text>
      </Animated.View>
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
  getreadyText: {
    fontFamily: "Sofia-bold",
    fontSize: 26,
    color: "#FF00FF",
    position: "absolute",
    alignSelf: "center",
    top: -10,
  },
});

export default GetReadyScreen;
