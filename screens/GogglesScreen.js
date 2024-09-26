import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Video, ResizeMode } from "expo-av";
import Ionicons from "@expo/vector-icons/Ionicons";

const GogglesScreen = ({ navigation }) => {
  const video = useRef(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (video.current) {
        video.current.playAsync();
      }
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handlePlaybackStatusUpdate = (status) => {
      if (status.isDone) {
        const navigateTimer = window.setTimeout(() => {
          navigation.navigate("Profile");
        }, 5000);
        return () => window.clearTimeout(navigateTimer);
      }
    };

    const playVideo = async () => {
      const playbackStatus = await video.current.getStatusAsync();
      if (playbackStatus.isPlaying) {
        video.current.setOnPlaybackStatusUpdate(handlePlaybackStatusUpdate);
      }
    };
    playVideo();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "center" }}>
        <Image
          source={require("@/assets/images/GogglesPage/Goggles_Background.png")}
          resizeMode="contain"
          style={{ width: 393, height: 852 }}
        />
      </View>

      {/* Goggles Video */}
      <Video
        ref={video}
        source={require("@/assets/videos/Goggles_Animation_Final.mp4")}
        style={{
          width: 393,
          height: 220,
          position: "absolute",
          top: 286,
        }}
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay={false}
        isLooping={false}
      />

      {/* Pairing Completed Image */}
      <View>
        <Image
          source={require("@/assets/images/GogglesPage/Goggles_PairingCompleted_Button.png")}
          resizeMode="contain"
          style={{
            width: 236,
            height: 60,
            position: "absolute",
            alignSelf: "center",
            bottom: 240,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MainTabs", { screen: "Profile" });
        }}
        style={{ position: "absolute", top: 80, left: 320 }}
      >
        <Ionicons
          name="close-outline"
          size={44}
          color="#F5F4F6"
          style={{ position: "absolute" }}
        />
      </TouchableOpacity>
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
});

export default GogglesScreen;
