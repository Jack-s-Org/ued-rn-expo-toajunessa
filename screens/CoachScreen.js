import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const CoachScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topFrame}>
        <Image
          source={require("@/assets/images/ActivitiesPage/Calendar_Top_Frame_2.png")}
          resizeMode="contain"
          style={{ marginBottom: 0 }}
        />
        {/* Coach Text */}
        <Text style={styles.coachTitle}>Find your coach</Text>
      </View>

      <ScrollView
        style={{ backgroundColor: "#0E0230", height: "100%", width: "100%" }}
      >
        <View
          style={{
            height: 28,
            width: 66,
            backgroundColor: "#5145DE",
            borderRadius: 18,
            alignSelf: "center",
            top: 140,
            left: 146,
          }}
        >
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: "16px",
              alignSelf: "center",
              top: 4,
              backgroundColor: "transparent",
            }}
          >
            Filter
          </Text>
        </View>

        {/* Coach 1 */}
        <View
          style={{
            backgroundColor: "transparent",
            alignSelf: "center",
            top: 144,
          }}
        >
          <Image
            source={require("@/assets/images/CoachPage/Coach_Profile_1.png")}
            resizeMode="contain"
            style={styles.coachImg}
          ></Image>

          <StarRatingDisplay
            rating={4}
            color="#FF00FF"
            starSize={18}
            style={styles.starRating}
          />

          <Text style={styles.coachText}>Chris Subramaniam</Text>

          <FontAwesome
            name="dollar"
            size={13}
            color="#F5F4F6"
            style={{
              position: "absolute",
              top: 113,
              left: 162,
            }}
          />

          <Text style={styles.coachPayText}>MYR 50/ Per Hour</Text>

          <FontAwesome6
            name="location-dot"
            size={12}
            color="#F5F4F6"
            style={{
              position: "absolute",
              top: 134,
              left: 161,
            }}
          />

          <Text style={styles.coachLocationText}>
            Bukit Jalil Aquatic Center
          </Text>
        </View>

        {/* Coach 2 */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Main", { screen: "CoachProfile" });
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
              source={require("@/assets/images/CoachPage/Coach_Profile_2.png")}
              resizeMode="contain"
              style={styles.coachImg}
            ></Image>

            <StarRatingDisplay
              rating={5}
              color="#FF00FF"
              starSize={18}
              style={styles.starRating}
            />

            <Text style={styles.coachText2}>Jessie Smith</Text>

            <FontAwesome
              name="dollar"
              size={13}
              color="#F5F4F6"
              style={{
                position: "absolute",
                top: 113,
                left: 162,
              }}
            />

            <Text style={styles.coachPayText}>MYR 35/ Per Hour</Text>

            <FontAwesome6
              name="location-dot"
              size={12}
              color="#F5F4F6"
              style={{
                position: "absolute",
                top: 134,
                left: 161,
              }}
            />

            <Text style={styles.coachLocationText}>
              National Aquatic Centre
            </Text>
          </View>
        </TouchableOpacity>

        {/* Coach 3 */}
        <View
          style={{
            backgroundColor: "transparent",
            alignSelf: "center",
            top: 144,
          }}
        >
          <Image
            source={require("@/assets/images/CoachPage/Coach_Profile_3.png")}
            resizeMode="contain"
            style={styles.coachImg}
          ></Image>

          <StarRatingDisplay
            rating={3.5}
            color="#FF00FF"
            starSize={18}
            style={styles.starRating}
          />

          <Text style={styles.coachText2}>Theo Tan</Text>

          <FontAwesome
            name="dollar"
            size={13}
            color="#F5F4F6"
            style={{
              position: "absolute",
              top: 113,
              left: 162,
            }}
          />

          <Text style={styles.coachPayText}>MYR 45/ Per Hour</Text>

          <FontAwesome6
            name="location-dot"
            size={12}
            color="#F5F4F6"
            style={{
              position: "absolute",
              top: 134,
              left: 161,
            }}
          />

          <Text style={styles.coachLocationText}>
            Endah Regal Swimming Pool
          </Text>
        </View>

        {/* Coach 4 */}
        <View
          style={{
            backgroundColor: "transparent",
            alignSelf: "center",
            top: 144,
          }}
        >
          <Image
            source={require("@/assets/images/CoachPage/Coach_Profile_4.png")}
            resizeMode="contain"
            style={styles.coachImg}
          ></Image>

          <StarRatingDisplay
            rating={3}
            color="#FF00FF"
            starSize={18}
            style={styles.starRating}
          />

          <Text style={styles.coachText2}>Jayden Chong</Text>

          <FontAwesome
            name="dollar"
            size={13}
            color="#F5F4F6"
            style={{
              position: "absolute",
              top: 113,
              left: 162,
            }}
          />

          <Text style={styles.coachPayText}>MYR 60/ Per Hour</Text>

          <FontAwesome6
            name="location-dot"
            size={12}
            color="#F5F4F6"
            style={{
              position: "absolute",
              top: 134,
              left: 161,
            }}
          />

          <Text style={styles.coachLocationText}>ZEN Pools</Text>
        </View>

        {/* Coach 5 */}
        <View
          style={{
            backgroundColor: "transparent",
            alignSelf: "center",
            top: 144,
          }}
        >
          <Image
            source={require("@/assets/images/CoachPage/Coach_Profile_5.png")}
            resizeMode="contain"
            style={styles.coachImg}
          ></Image>

          <StarRatingDisplay
            rating={4.5}
            color="#FF00FF"
            starSize={18}
            style={styles.starRating}
          />

          <Text style={styles.coachText2}>Rachel Chen</Text>

          <FontAwesome
            name="dollar"
            size={13}
            color="#F5F4F6"
            style={{
              position: "absolute",
              top: 113,
              left: 162,
            }}
          />

          <Text style={styles.coachPayText}>MYR 40/ Per Hour</Text>

          <FontAwesome6
            name="location-dot"
            size={12}
            color="#F5F4F6"
            style={{
              position: "absolute",
              top: 134,
              left: 161,
            }}
          />

          <Text style={styles.coachLocationText}>National Aquatic Centre</Text>
        </View>

        {/* Coach 6 */}
        <View
          style={{
            backgroundColor: "transparent",
            alignSelf: "center",
            top: 144,
          }}
        >
          <Image
            source={require("@/assets/images/CoachPage/Coach_Profile_6.png")}
            resizeMode="contain"
            style={styles.coachImgLast}
          ></Image>

          <StarRatingDisplay
            rating={2.5}
            color="#FF00FF"
            starSize={18}
            style={styles.starRating}
          />

          <Text style={styles.coachText2}>Benji Wong</Text>

          <FontAwesome
            name="dollar"
            size={13}
            color="#F5F4F6"
            style={{
              position: "absolute",
              top: 113,
              left: 162,
            }}
          />

          <Text style={styles.coachPayText1}>MYR 50/ Per Hour</Text>

          <FontAwesome6
            name="location-dot"
            size={12}
            color="#F5F4F6"
            style={{
              position: "absolute",
              top: 134,
              left: 161,
            }}
          />

          <Text style={styles.coachLocationText1}>
            Bukit Jalil Aquatic Center
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
    top: 0,
    alignSelf: "center",
    backgroundColor: "transparent",
    zIndex: 2,
  },
  coachTitle: {
    color: "#F5F4F6",
    fontFamily: "Sofia-bold",
    fontSize: 26,
    top: -58,
    left: 34,
    backgroundColor: "transparent",
  },
  coachImg: {
    marginBottom: 16,
    width: 364,
    height: 158,
  },
  coachImgLast: {
    marginBottom: 284,
    width: 364,
    height: 158,
  },
  starRating: {
    position: "absolute",
    left: 156,
    top: 72,
  },
  coachText: {
    fontFamily: "Sofia-semi-bold",
    fontSize: 18,
    color: "#F5F4F6",
    position: "absolute",
    alignSelf: "center",
    top: 48,
    left: 162,
  },
  coachText2: {
    fontFamily: "Sofia-semi-bold",
    fontSize: 18,
    color: "#F5F4F6",
    position: "absolute",
    alignSelf: "center",
    top: 48,
    left: 164,
  },
  coachPayText: {
    fontFamily: "Sofia-semi-bold",
    fontSize: 12,
    color: "#F5F4F6",
    position: "absolute",
    alignSelf: "center",
    bottom: 46,
    left: 178,
  },
  coachLocationText: {
    fontFamily: "Sofia-semi-bold",
    fontSize: 12,
    color: "#F5F4F6",
    position: "absolute",
    alignSelf: "center",
    bottom: 26,
    left: 178,
  },
  coachPayText1: {
    fontFamily: "Sofia-semi-bold",
    fontSize: 12,
    color: "#F5F4F6",
    position: "absolute",
    alignSelf: "center",
    bottom: 316,
    left: 178,
  },
  coachLocationText1: {
    fontFamily: "Sofia-semi-bold",
    fontSize: 12,
    color: "#F5F4F6",
    position: "absolute",
    alignSelf: "center",
    bottom: 296,
    left: 178,
  },
});

export default CoachScreen;
