import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  Modal,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import * as React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ExerciseScreen = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [showControls, setShowControls] = React.useState(false);
  const [showReply, setShowReply] = React.useState(false);
  const [countdown, setCountdown] = React.useState(15);
  const [showImage, setShowImage] = React.useState(false);

  const handleVideoPress = () => {
    setShowControls(true);
    window.setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  const formatTime = (seconds) => {
    if (seconds <= 0) {
      return "00:00";
    }
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  React.useEffect(() => {
    let timer = null;
    if (countdown > 0 && status.isPlaying) {
      timer = window.setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (countdown === 0) {
      setShowReply(true);
      setShowImage(true);
    }
    return () => window.clearInterval(timer);
  }, [countdown, status.isPlaying]);

  const handleReplay = async () => {
    await video.current.setPositionAsync(0);
    await video.current.playAsync();
    setShowReply(false);
  };

  React.useEffect(() => {
    let timer = null;
    if (countdown > 0 && status.isPlaying) {
      timer = window.setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setShowReply(true);
      setShowImage(true);
    }
    return () => window.clearInterval(timer);
  }, [countdown, status.isPlaying]);

  return (
    <View style={styles.container}>
      <View style={styles.topFrame}>
        <Image
          source={require("@/assets/images/ExercisePage/Exercise_Top_Frame.png")}
          resizeMode="contain"
          style={{}}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            name="close-outline"
            size={44}
            color="#F5F4F6"
            style={{ left: 330, top: -60 }}
          />
        </TouchableOpacity>
      </View>

      <TouchableWithoutFeedback onPress={handleVideoPress}>
        <View style={styles.videoContainer}>
          <Video
            ref={video}
            style={[StyleSheet.absoluteFill, styles.video]}
            source={require("@/assets/videos/Exercise_Video.mp4")}
            useNativeControls={false}
            resizeMode={ResizeMode.COVER}
            shouldPlay={true}
            isLooping={false}
            onPlaybackStatusUpdate={(status) => {
              setStatus(() => status);
              if (status.didJustFinish) {
                setShowReply(true);
              }
            }}
          />

          {showControls && (
            <TouchableOpacity
              style={styles.playPauseButton}
              onPress={() =>
                status.isPlaying
                  ? video.current.pauseAsync()
                  : video.current.playAsync()
              }
            >
              <Ionicons
                name={status.isPlaying ? "pause" : "play"}
                size={50}
                color="#F5F4F6"
              />
            </TouchableOpacity>
          )}

          {showReply && (
            <TouchableOpacity style={styles.replyIcon} onPress={handleReplay}>
              <MaterialIcons name="replay" size={50} color="#F5F4F6" />
            </TouchableOpacity>
          )}

          {/* Countdown Timer Display */}
          <Text style={styles.timerText}>{formatTime(countdown)}</Text>
        </View>
      </TouchableWithoutFeedback>

      <View>
        <Image
          source={require("@/assets/images/ExercisePage/Exercise_Bottom_Bar.png")}
          resizeMode="contain"
          style={{
            width: 393,
            height: 400,
            position: "absolute",
            alignSelf: "center",
            top: -134,
          }}
        ></Image>

        {/* Previous Button */}
        <View
          style={{
            position: "absolute",
            width: 176,
            height: 42,
            backgroundColor: "#F5F4F6",
            borderRadius: 30,
            left: -180,
          }}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </View>

        {/* Next Button */}
        <View
          style={{
            position: "absolute",
            width: 176,
            height: 42,
            backgroundColor: "#F5F4F6",
            borderRadius: 30,
            left: 4,
          }}
        >
          <Text style={styles.buttonText}>Next</Text>
        </View>

        {/* Modal for Full-Screen Image */}
        <Modal transparent={true} visible={showImage} animationType="fade">
          <View style={styles.fullScreenContainer}>
            <Image
              source={require("@/assets/images/ExercisePage/Well_Done_Img.png")}
              style={styles.fullScreenImage}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setShowImage(false);
                navigation.goBack();
              }}
            >
              <Ionicons name="close-outline" size={44} color="#F5F4F6" />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  videoContainer: {
    width: 393,
    height: 328,
    borderRadius: 26,
    top: -134,
    backgroundColor: "pink",
  },
  video: {
    borderRadius: 26,
  },
  playPauseButton: {
    position: "absolute",
    top: "45%",
    left: "45%",
    zIndex: 5,
  },
  replyIcon: {
    position: "absolute",
    top: "45%",
    left: "45%",
    alignSelf: "center",
    zIndex: 5,
  },
  timerText: {
    position: "absolute",
    bottom: -104,
    alignSelf: "center",
    fontFamily: "Sofia-bold",
    fontSize: 30,
    color: "#F5F4F6",
  },
  buttonText: {
    fontFamily: "Sofia-semi-bold",
    fontSize: 22,
    color: "#0E0230",
    alignSelf: "center",
    top: 8,
  },
  fullScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  fullScreenImage: {
    width: 393,
    height: 852,
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 50,
    right: 10,
    padding: 10,
    backgroundColor: "transparent",
    borderRadius: 5,
  },
});

export default ExerciseScreen;
