import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const CoachProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topFrame}>
        <Image
          source={require("@/assets/images/CoachProfilePage/Coach_Profile_Background.png")}
          resizeMode="contain"
          style={{ marginBottom: 0 }}
        />
        {/* Coach Text */}
        <Text style={styles.coachTitle}>Jessie Smith</Text>

        <StarRatingDisplay
          rating={5}
          color="#FF00FF"
          starSize={24}
          style={styles.starRating}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View
            style={{ position: "absolute", top: -150, left: 22, zIndex: 6 }}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="#F5F4F6" />
          </View>
        </TouchableOpacity>

        {/* Profile Picture */}
        <View style={styles.profileImgContainer}>
          <Image
            source={require("@/assets/images/CoachProfilePage/Coach_Profile_Img.png")}
            resizeMode="cover"
            style={styles.profileImg}
          />
        </View>
      </View>

      {/* Bottom Scroll View */}
      <View
        style={{
          backgroundColor: "transparent",
          height: "100%",
          width: "100%",
        }}
      >
        <ScrollView
          style={{
            backgroundColor: "transparent",
          }}
        >
          <View style={{ top: 194 }}>
            {/* Bottom Scroll View BG Image*/}
            <View>
              <Image
                source={require("@/assets/images/CoachProfilePage/Coach_Profile_Bottom_Frame.png")}
                resizeMode="contain"
                style={{ marginBottom: 190, width: 393, height: 852 }}
              />
            </View>

            {/* About Me Text */}
            <Text style={styles.aboutMeText}>About Me</Text>

            {/* Coach Name Text */}
            <Text style={styles.nameText}>Jessie Smith</Text>

            {/* Info Icon & Text */}
            <View style={{ position: "absolute" }}>
              <MaterialCommunityIcons
                name="text-account"
                size={34}
                color="#F5F4F6"
                style={{ position: "absolute", top: 122, left: 26 }}
              />
              <Text style={styles.infoText}>
                Hi! I’m Jessie and I teach swimming!
              </Text>

              <FontAwesome6
                name="graduation-cap"
                size={26}
                color="#F5F4F6"
                style={{ position: "absolute", top: 172, left: 28 }}
              />
              <Text style={styles.infoText2}>Certified Swimming Coach</Text>

              <FontAwesome6
                name="sack-dollar"
                size={26}
                color="#F5F4F6"
                style={{
                  position: "absolute",
                  top: 218,
                  left: 32,
                }}
              />
              <Text style={styles.infoText3}>MYR 35 / Per Hour</Text>

              <FontAwesome6
                name="location-dot"
                size={26}
                color="#F5F4F6"
                style={{
                  position: "absolute",
                  top: 262,
                  left: 36,
                }}
              />
              <Text style={styles.infoText4}>National Aquatic Centre</Text>

              {/* Map */}
              <View style={styles.mapContainer}>
                <ScrollView
                  contentContainerStyle={styles.scrollViewContent}
                  maximumZoomScale={5}
                  minimumZoomScale={1}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  bounces={true}
                  pinchGestureEnabled={true}
                >
                  <ScrollView
                    horizontal={false}
                    bounces={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                  >
                    {/* Map Image */}
                    <Image
                      source={require("@/assets/images/CoachProfilePage/Map2.png")}
                      style={styles.mapImg}
                    />
                  </ScrollView>
                </ScrollView>
              </View>

              {/* Location Text */}
              <Text style={styles.locationText}>Location</Text>

              {/* Reviews Text */}
              <Text style={styles.reviewText}>Reviews</Text>

              <View
                style={{
                  position: "absolute",
                  bottom: 350,
                  left: 106,
                }}
              >
                <Text
                  style={{
                    color: "#F5F4F6",
                    fontFamily: "Sofia-medium",
                    fontSize: "12px",
                    position: "absolute",
                    top: 886,
                    left: 200,
                    backgroundColor: "transparent",
                  }}
                >
                  View All
                </Text>

                <MaterialIcons
                  name="arrow-forward-ios"
                  size={12}
                  color="#F5F4F6"
                  style={{
                    position: "absolute",
                    left: 244,
                    top: 886,
                  }}
                />
              </View>

              {/* Lee Mei Yi Text */}
              <View style={{ position: "absolute" }}>
                <Text style={styles.reviewText1}>Lee Mei Yi</Text>
                <Text style={styles.review}>Amazing coach!</Text>
                <Text style={styles.date}>12/06/2024</Text>
              </View>

              {/* Sam Tan Text */}
              <View style={{ position: "absolute", top: 86 }}>
                <Text style={styles.reviewText1}>Sam Tan</Text>
                <Text style={styles.review}>
                  Had such a fun time learning from Jessie!
                </Text>
                <Text style={styles.date}>24/05/2024</Text>
              </View>

              {/* Send a message Button */}
              <View
                style={{
                  position: "absolute",
                  width: 356,
                  height: 56,
                  backgroundColor: "#F5F4F6",
                  borderRadius: 30,
                  left: 18,
                  top: 758,
                }}
              >
                <Text style={styles.messageButton}>Send a Message</Text>
              </View>
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
    zIndex: 10,
  },
  coachTitle: {
    color: "#F5F4F6",
    fontFamily: "Sofia-bold",
    fontSize: 28,
    top: -90,
    left: 68,
    backgroundColor: "transparent",
  },
  starRating: {
    position: "absolute",
    left: 58,
    top: 148,
  },
  profileImgContainer: {
    position: "absolute",
    height: 126,
    width: 126,
    borderRadius: 80,
    top: 70,
    left: "62%",
    zIndex: 4,
  },
  profileImg: {
    height: 126,
    width: 126,
  },
  aboutMeText: {
    fontFamily: "Sofia-bold",
    fontSize: 18,
    color: "#F5F4F6",
    position: "absolute",
    top: 26,
    left: 30,
  },
  nameText: {
    fontFamily: "Sofia-bold",
    fontSize: 28,
    color: "#F5F4F6",
    position: "absolute",
    top: 68,
    left: 30,
  },
  infoText: {
    fontFamily: "Sofia-regular",
    fontSize: 16,
    color: "#F5F4F6",
    position: "absolute",
    top: 130,
    left: 86,
  },
  infoText2: {
    fontFamily: "Sofia-regular",
    fontSize: 16,
    color: "#F5F4F6",
    position: "absolute",
    top: 178,
    left: 86,
  },
  infoText3: {
    fontFamily: "Sofia-regular",
    fontSize: 16,
    color: "#F5F4F6",
    position: "absolute",
    top: 220,
    left: 86,
  },
  infoText4: {
    fontFamily: "Sofia-regular",
    fontSize: 16,
    color: "#F5F4F6",
    position: "absolute",
    top: 264,
    left: 86,
  },
  mapImg: {
    width: 346,
    height: 236,
    resizeMode: "contain",
    top: -40,
    left: 0,
  },
  mapContainer: {
    flex: 1,
    width: 346,
    height: 166,
    overflow: "hidden",
    position: "absolute",
    left: 20,
    top: 350,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 60,
  },
  scrollViewContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  locationText: {
    fontFamily: "Sofia-bold",
    fontSize: 18,
    color: "#F5F4F6",
    position: "absolute",
    top: 320,
    left: 30,
  },
  reviewText: {
    fontFamily: "Sofia-bold",
    fontSize: 18,
    color: "#F5F4F6",
    position: "absolute",
    top: 532,
    left: 30,
  },
  reviewText1: {
    fontFamily: "Sofia-bold",
    fontSize: 16,
    color: "#F5F4F6",
    position: "absolute",
    top: 578,
    left: 110,
  },
  review: {
    fontFamily: "Sofia-regular",
    fontSize: 14,
    color: "#F5F4F6",
    position: "absolute",
    top: 614,
    left: 110,
  },
  date: {
    fontFamily: "Sofia-regular",
    fontSize: 12,
    color: "#F5F4F6",
    position: "absolute",
    top: 578,
    left: 300,
  },
  messageButton: {
    fontFamily: "Sofia-bold",
    fontSize: 22,
    color: "#0E0330",
    alignSelf: "center",
    top: 16,
  },
});

export default CoachProfileScreen;
