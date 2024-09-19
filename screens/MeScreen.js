import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import { SafeAreaView } from "react-native-safe-area-context";

const MeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topFrame}>
        <Image
          source={require("@/assets/images/ActivitiesPage/Calendar_Top_Frame_2.png")}
          resizeMode="contain"
          style={{ marginBottom: 0 }}
        />
        {/* Coach Text */}
        <Text style={styles.profileTitle}>Profile</Text>

        {/* Profile Picture */}
        <View style={styles.profileImgContainer}>
          <Image
            source={require("@/assets/images/Profile_Pic.png")}
            resizeMode="cover"
            style={styles.profileImg}
          />
        </View>
      </View>

      <ScrollView
        style={{
          backgroundColor: "transparent",
          height: "100%",
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "transparent",
            alignSelf: "center",
            top: 144,
          }}
        >
          <Image
            source={require("@/assets/images/ProfilePage/Profile_Shape_1.png")}
            resizeMode="contain"
            style={{ marginBottom: 24 }}
          />

          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color="#F5F4F6"
            style={{
              position: "absolute",
              top: 28,
              left: 328,
            }}
          />

          {/* Name Text */}
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: 18,
              position: "absolute",
              top: 30,
              left: 28,
              backgroundColor: "transparent",
              marginBottom: 24,
            }}
          >
            Name:
          </Text>
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: 26,
              position: "absolute",
              top: 54,
              left: 28,
              backgroundColor: "transparent",
              marginBottom: 0,
            }}
          >
            Calla Kim
          </Text>

          {/* Email Text */}
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: 18,
              position: "absolute",
              top: 102,
              left: 28,
              backgroundColor: "transparent",
              marginBottom: 24,
            }}
          >
            Email:
          </Text>
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: 26,
              position: "absolute",
              top: 126,
              left: 28,
              backgroundColor: "transparent",
              marginBottom: 0,
            }}
          >
            CallaKim02@gmail.com
          </Text>

          {/* Location Text */}
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: 18,
              position: "absolute",
              top: 174,
              left: 28,
              backgroundColor: "transparent",
              marginBottom: 24,
            }}
          >
            Location:
          </Text>
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: 26,
              position: "absolute",
              top: 198,
              left: 28,
              backgroundColor: "transparent",
              marginBottom: 0,
            }}
          >
            Kuala Lumpur, Malaysia
          </Text>
        </View>

        {/* Connected Device Shape */}
        <View
          style={{
            backgroundColor: "transparent",
            alignSelf: "center",
            top: 144,
          }}
        >
          <Image
            source={require("@/assets/images/ProfilePage/Profile_Shape_2.png")}
            resizeMode="contain"
            style={{ marginBottom: 24 }}
          ></Image>

          {/* Connected Devices Text */}
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: 18,
              position: "absolute",
              top: 18,
              left: 28,
              backgroundColor: "transparent",
              marginBottom: 24,
            }}
          >
            Connected Devices
          </Text>
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: 26,
              position: "absolute",
              top: 48,
              left: 28,
              backgroundColor: "transparent",
              marginBottom: 0,
            }}
          >
            None
          </Text>

          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color="#F5F4F6"
            style={{
              position: "absolute",
              top: 22,
              left: 328,
            }}
          />
        </View>

        {/* Other Details Shape */}
        <View
          style={{
            backgroundColor: "transparent",
            alignSelf: "center",
            top: 144,
          }}
        >
          <Image
            source={require("@/assets/images/ProfilePage/Profile_Shape_3.png")}
            resizeMode="contain"
            style={{ marginBottom: 264 }}
          ></Image>

          {/* other Details Text */}

          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color="#F5F4F6"
            style={{
              position: "absolute",
              top: 28,
              left: 328,
            }}
          />

          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: 24,
              position: "absolute",
              top: 26,
              left: 28,
              backgroundColor: "transparent",
              marginBottom: 24,
            }}
          >
            Other Details
          </Text>

          {/* Height Text */}
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: 18,
              position: "absolute",
              top: 72,
              left: 28,
              backgroundColor: "transparent",
              marginBottom: 24,
            }}
          >
            Height:
          </Text>
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: 26,
              position: "absolute",
              top: 96,
              left: 28,
              backgroundColor: "transparent",
              marginBottom: 0,
            }}
          >
            160cm
          </Text>

          {/* Weight Text */}
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: 18,
              position: "absolute",
              top: 144,
              left: 28,
              backgroundColor: "transparent",
              marginBottom: 24,
            }}
          >
            Weight:
          </Text>
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: 26,
              position: "absolute",
              top: 168,
              left: 28,
              backgroundColor: "transparent",
              marginBottom: 0,
            }}
          >
            50kg
          </Text>

          {/* Level Text */}
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: 18,
              position: "absolute",
              top: 216,
              left: 28,
              backgroundColor: "transparent",
              marginBottom: 24,
            }}
          >
            Level:
          </Text>
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: 26,
              position: "absolute",
              top: 240,
              left: 28,
              backgroundColor: "transparent",
              marginBottom: 0,
            }}
          >
            Intermediate
          </Text>
        </View>
      </ScrollView>
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
    top: -20,
    alignSelf: "center",
    backgroundColor: "transparent",
    zIndex: 2,
  },
  profileTitle: {
    color: "#F5F4F6",
    fontFamily: "Sofia-bold",
    fontSize: 26,
    top: -58,
    left: 34,
    backgroundColor: "transparent",
  },
  profileImgContainer: {
    // position: "absolute",
    height: 94,
    width: 94,
    borderRadius: 80,
    // top: 37,
    top: -98.5,
    left: "71.7%",
    zIndex: 4,
  },
  profileImg: {
    height: 94,
    width: 94,
    borderRadius: 80,
  },
});

export default MeScreen;
