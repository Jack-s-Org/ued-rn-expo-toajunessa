// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   // TouchableWithoutFeedback,
//   TouchableOpacity,
//   Animated,
// } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import { SafeAreaView } from "react-native-safe-area-context";
// // import { Calendar } from "react-native-calendars";
// import AntDesign from "@expo/vector-icons/AntDesign";
// // import Collapsible from "react-native-collapsible";
// // import Accordion from "react-native-collapsible/Accordion";
// import React, { useState } from "react";

// const ActivitiesScreen = () => {
//   const [opened, setOpened] = useState(false);
//   const [animation] = useState(new Animated.Value(0));

//   function toggleAccordian() {
//     console.log("Toggle accordion called");
//     if (!opened) {
//       Animated.timing(animation, {
//         toValue: 1,
//         duration: 100,
//         useNativeDriver: false,
//       }).start();
//     } else {
//       Animated.timing(animation, {
//         toValue: 0,
//         duration: 100,
//         useNativeDriver: false,
//       }).start();
//     }
//     setOpened(!opened);
//   }

//   //   This is where we use the to values

//   const heightAnimationInterpolation = animation.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 300], // adjust the height to your needs
//   });

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Top Frame */}
//       <View
//         style={{
//           position: "absolute",
//           top: 0,
//           alignSelf: "center",
//           height: 130,
//           // left: 0,
//           // right: 0,
//           // height: 184,
//           backgroundColor: "white",
//           zIndex: 2, // make sure the top frame is on top of the scroll view
//         }}
//       >
//         <Image
//           source={require("@/assets/images/ActivitiesPage/Calendar_Top_Frame_2.png")}
//           resizeMode="contain"
//           style={{ marginBottom: 0 }}
//           name={opened}
//         ></Image>

//         {/* Calendar Text */}
//         <Text
//           style={{
//             color: "#F5F4F6",
//             fontFamily: "Sofia-bold",
//             fontSize: "26px",
//             top: -58,
//             left: 34,
//             backgroundColor: "transparent",
//           }}
//         >
//           Calendar
//         </Text>
//       </View>

//       <ScrollView
//         style={{
//           flex: 1,
//           backgroundColor: "pink",
//           height: "100%",
//           width: "100%",
//         }}
//         contentContainerStyle={{ paddingVertical: 0, flexGrow: 1 }}
//       >
//         <View>
//           <TouchableOpacity
//             onPress={toggleAccordian}
//             style={{
//               backgroundColor: "red",
//               height: 114,
//               width: 360,
//               top: 96,
//               opacity: 0.5,
//               alignSelf: "center",
//               zIndex: 5,
//             }}
//           >
//             <View style={{ flex: 1 }}></View>
//           </TouchableOpacity>

//           <Image
//             source={require("@/assets/images/ActivitiesPage/Calendar_Small.png")}
//             resizeMode="contain"
//             style={{
//               top: -80,
//               alignSelf: "center",
//               pointerEvents: "none",
//             }}
//           ></Image>

//           <View>
//             <View
//               style={{
//                 alignItems: "center",
//                 justifyContent: "center",
//                 backgroundColor: "transparent",
//               }}
//             >
//               {/* <Image
//                 source={require("@/assets/images/ActivitiesPage/Calendar_Small.png")}
//                 resizeMode="contain"
//                 style={{
//                   marginBottom: 0,
//                   top: 38,
//                   pointerEvents: "box-none",
//                 }}
//               ></Image> */}

//               {/* Calendar Text Date and Year */}
//               <Text
//                 style={{
//                   color: "#F5F4F6",
//                   fontFamily: "Sofia-bold",
//                   fontSize: "26px",
//                   top: -256,
//                   left: -84,
//                   backgroundColor: "transparent",
//                 }}
//               >
//                 2024, June
//               </Text>
//               <AntDesign
//                 name="down"
//                 size={18}
//                 color="#F5F4F6"
//                 style={{
//                   position: "absolute",
//                   top: -248,
//                   left: 180,
//                 }}
//               />
//               {/* 16 */}
//               <View
//                 style={{
//                   position: "absolute",
//                   top: -210,
//                   left: 40,
//                   width: 34,
//                   height: 34,
//                   borderBottomLeftRadius: 6,
//                   borderBottomRightRadius: 12,
//                   borderTopLeftRadius: 12,
//                   borderTopRightRadius: 6,
//                   backgroundColor: "#F5F4F6",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   padding: 8,
//                   marginRight: 24,
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: "#0E0330",
//                     fontFamily: "Sofia-semi-bold",
//                     fontSize: "16px",
//                     position: "absolute",
//                     backgroundColor: "transparent",
//                     textAlign: "center",
//                   }}
//                 >
//                   16
//                 </Text>
//               </View>
//               {/* 17 */}
//               <View
//                 style={{
//                   position: "absolute",
//                   top: -210,
//                   left: 88,
//                   width: 34,
//                   height: 34,
//                   borderBottomLeftRadius: 6,
//                   borderBottomRightRadius: 12,
//                   borderTopLeftRadius: 12,
//                   borderTopRightRadius: 6,
//                   backgroundColor: "#F5F4F6",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   padding: 8,
//                   marginRight: 24,
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: "#0E0330",
//                     fontFamily: "Sofia-semi-bold",
//                     fontSize: "16px",
//                     position: "absolute",
//                     backgroundColor: "transparent",
//                     textAlign: "center",
//                   }}
//                 >
//                   17
//                 </Text>
//               </View>
//               {/* 18 */}
//               <View
//                 style={{
//                   position: "absolute",
//                   top: -210,
//                   left: 136,
//                   width: 118,
//                   height: 34,
//                   borderBottomLeftRadius: 6,
//                   borderBottomRightRadius: 12,
//                   borderTopLeftRadius: 12,
//                   borderTopRightRadius: 6,
//                   backgroundColor: "#5145DE",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   padding: 8,
//                   marginRight: 24,
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: "#F5F4F6",
//                     fontFamily: "Sofia-semi-bold",
//                     fontSize: "16px",
//                     position: "absolute",
//                     backgroundColor: "transparent",
//                     textAlign: "center",
//                   }}
//                 >
//                   18 June, 2024
//                 </Text>
//               </View>
//               {/* 19 */}
//               <View
//                 style={{
//                   position: "absolute",
//                   top: -210,
//                   left: 268,
//                   width: 34,
//                   height: 34,
//                   borderBottomLeftRadius: 6,
//                   borderBottomRightRadius: 12,
//                   borderTopLeftRadius: 12,
//                   borderTopRightRadius: 6,
//                   backgroundColor: "#F5F4F6",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   padding: 8,
//                   marginRight: 24,
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: "#0E0330",
//                     fontFamily: "Sofia-semi-bold",
//                     fontSize: "16px",
//                     position: "absolute",
//                     backgroundColor: "transparent",
//                     textAlign: "center",
//                   }}
//                 >
//                   19
//                 </Text>
//               </View>
//               {/* 19 */}
//               <View
//                 style={{
//                   position: "absolute",
//                   top: -210,
//                   left: 318,
//                   width: 34,
//                   height: 34,
//                   borderBottomLeftRadius: 6,
//                   borderBottomRightRadius: 12,
//                   borderTopLeftRadius: 12,
//                   borderTopRightRadius: 6,
//                   backgroundColor: "#F5F4F6",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   padding: 8,
//                   marginRight: 24,
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: "#0E0330",
//                     fontFamily: "Sofia-semi-bold",
//                     fontSize: "15px",
//                     position: "absolute",
//                     backgroundColor: "transparent",
//                     textAlign: "center",
//                   }}
//                 >
//                   20
//                 </Text>
//               </View>
//             </View>
//           </View>
//         </View>

//         {opened && (
//           <Animated.View style={{ height: heightAnimationInterpolation }}>
//             <View
//               style={{
//                 backgroundColor: "black",
//                 opacity: 0.3,
//                 marginBottom: 24,
//                 paddingTop: 24,
//                 top: -325,
//                 zIndex: -1,
//               }}
//             >
//               <Image
//                 source={require("@/assets/images/ActivitiesPage/Calendar_Big_2.png")}
//                 resizeMode="contain"
//                 style={{ alignSelf: "center" }}
//               ></Image>

//               {/* Calendar Text Date and Year */}
//               <Text
//                 style={{
//                   color: "#F5F4F6",
//                   fontFamily: "Sofia-bold",
//                   fontSize: "26px",
//                   top: -256,
//                   left: -84,
//                   backgroundColor: "transparent",
//                 }}
//               >
//                 2024, June
//               </Text>
//               <AntDesign
//                 name="down"
//                 size={18}
//                 color="#F5F4F6"
//                 style={{
//                   position: "absolute",
//                   top: -248,
//                   left: 180,
//                 }}
//               />
//             </View>
//           </Animated.View>
//         )}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#0E0230",
//   },
// });

// export default ActivitiesScreen;

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const ActivitiesScreen = () => {
  const [opened, setOpened] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  const bulletList = ["Daily Swim @ 10AM", "Recharge goggles", "Check weather"];

  function toggleAccordian() {
    console.log("Toggle accordion called");
    if (!opened) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start();
    }
    setOpened(!opened);
  }

  // Interpolation for height animation
  const heightAnimationInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300], // adjust the height to your needs
  });

  // Adjust margin based on whether the big calendar is opened
  const activitiesSectionMarginTop = opened ? 180 : -124; // Adjust these values as needed

  return (
    <View style={styles.container}>
      {/* Top Frame */}
      <View style={styles.topFrame}>
        <Image
          source={require("@/assets/images/ActivitiesPage/Calendar_Top_Frame_2.png")}
          resizeMode="contain"
          style={{ marginBottom: 0 }}
        />
        {/* Calendar Text */}
        <Text style={styles.calendarTitle}>Calendar</Text>
      </View>

      {/* Add Event Button */}
      <View
        style={{
          height: 66,
          width: 66,
          backgroundColor: "#F5F4F6",
          borderRadius: 74,
          top: 566,
          left: 140,
          zIndex: 3,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("AddEvent")}>
          <Feather
            name="plus"
            size={48}
            color="#0E0330"
            style={{
              alignSelf: "center",
              top: 9,
              left: 1,
              // position: "absolute",
              // top: 566,
              // left: 150,
            }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ paddingVertical: 24, flexGrow: 1 }}
      >
        <View>
          {!opened && (
            <TouchableOpacity
              onPress={toggleAccordian}
              style={styles.smallCalendarContainer}
            >
              <View style={{ flex: 1 }}></View>
            </TouchableOpacity>
          )}

          {!opened && (
            <Image
              source={require("@/assets/images/ActivitiesPage/Calendar_Small.png")}
              resizeMode="contain"
              style={styles.smallCalendarImage}
            />
          )}

          <View>
            <View style={styles.calendarDatesContainer}>
              {/* Calendar Text Date and Year */}
              <Text style={styles.calendarDateText}>2024, June</Text>
              <AntDesign
                name="down"
                size={18}
                color="#F5F4F6"
                style={styles.calendarIcon}
              />

              {/* Calendar Date Blocks */}
              <View style={styles.dateBlockContainer}>
                {["16", "17", "18 June, 2024", "19", "20"].map(
                  (date, index) => (
                    <View
                      key={index}
                      style={[
                        styles.dateBlock,
                        date.includes("June")
                          ? styles.selectedDateBlock
                          : styles.unselectedDateBlock,
                      ]}
                    >
                      <Text
                        style={[
                          styles.dateText,
                          date.includes("June") ? styles.selectedDateText : {},
                        ]}
                      >
                        {date}
                      </Text>
                    </View>
                  )
                )}
              </View>
            </View>
          </View>
        </View>

        {opened && (
          <Animated.View style={{ height: heightAnimationInterpolation }}>
            <TouchableOpacity onPress={toggleAccordian}>
              <View style={styles.bigCalendarContainer}>
                <Image
                  source={require("@/assets/images/ActivitiesPage/Calendar_Big_3.png")}
                  resizeMode="contain"
                  style={{ alignSelf: "center", height: "104%" }}
                />

                {/* <Image
                  source={require("@/assets/images/ActivitiesPage/Calendar_Big_3.png")}
                  resizeMode="contain"
                  style={{
                    alignSelf: "center",
                    height: "53.5%",
                    top: -346,
                    opacity: 0.4,
                  }}
                /> */}
                {/* Calendar Text Date and Year */}
                <Text style={styles.calendarDateTextBig2}>2024, June</Text>
                <AntDesign
                  name="down"
                  size={18}
                  color="#F5F4F6"
                  style={styles.calendarIcon2}
                />
              </View>
            </TouchableOpacity>
          </Animated.View>
        )}

        <View
          style={{
            backgroundColor: "transparent",
            marginTop: activitiesSectionMarginTop,
            top: -10,
          }}
        >
          <Image
            source={require("@/assets/images/ActivitiesPage/Activities_Bottom_Frame.png")}
            resizeMode="contain"
            style={{ marginBottom: -74, top: -60 }}
          />

          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-bold",
              fontSize: 19,
              position: "absolute",
              top: -30,
              left: 30,
              backgroundColor: "transparent",
            }}
          >
            Today's Activities
          </Text>
        </View>

        <View>
          {/* Background Shape Image */}
          <Image
            source={require("@/assets/images/Shape_1.png")}
            resizeMode="contain"
            style={{
              marginBottom: -160,
              top: -696,
              backgroundColor: "transparent",
              alignSelf: "center",
            }}
          />
        </View>

        {/* Bullet List */}
        <View style={styles.ul}>
          {bulletList.map((item, index) => (
            <View style={styles.li} key={index}>
              <Text style={styles.liBullet}>• </Text>
              <Text style={styles.liText}>{item}</Text>
            </View>
          ))}
        </View>

        <View
          style={{
            backgroundColor: "transparent",
            top: -688,
            width: 100,
            height: 100,
            left: 278,
            marginBottom: -100,
          }}
        >
          <Image
            source={require("@/assets/images/ActivitiesPage/75_Percent_Bar.png")}
            resizeMode="contain"
            style={{
              // marginBottom: 0,
              // top: -943,
              // top: -720,
              // left: 133,
              alignSelf: "center",
              width: 84,
              height: "100%",
              backgroundColor: "transparent",
            }}
          />
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: "26px",
              position: "absolute",
              alignSelf: "center",
              top: 36,
              // left: 304,
              backgroundColor: "transparent",
            }}
          >
            75%
          </Text>
        </View>

        {/* Full Body Workout Chart */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            // marginBottom: 24,
            // top: 72,
            top: -570,
            marginBottom: -146,
          }}
        >
          <Image
            source={require("@/assets/images/HomePage/FullBodyWorkout_Chart_2.png")}
            resizeMode="contain"
          ></Image>
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-semi-bold",
              fontSize: "14px",
              top: -112, // adjust the top position to your needs
              left: -104, // adjust the left position to your needs
            }}
          >
            Full Body Workout
          </Text>
          <MaterialIcons
            name="arrow-forward-ios"
            size={16}
            color="#F5F4F6"
            style={{
              position: "absolute",
              top: 16,
              left: 320,
            }}
          />
        </View>

        <View>
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-bold",
              fontSize: 19,
              position: "absolute",
              top: -424,
              left: 30,
              backgroundColor: "transparent",
            }}
          >
            My workouts
          </Text>
          <Text
            style={{
              color: "#F5F4F6",
              fontFamily: "Sofia-medium",
              fontSize: "12px",
              position: "absolute",
              top: -416, // adjust the top position to your needs
              left: 300, // adjust the left position to your needs
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
              top: -416,
              left: 348,
            }}
          />
        </View>

        {/* Horizontal Scroll View */}
        <View
          style={{
            // height: 250,
            backgroundColor: "pink",
            top: -378,
            // top: -378,
            marginBottom: -296,
          }}
        >
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              flexDirection: "row",
              paddingLeft: 24,
            }}
            showsHorizontalScrollIndicator={false}
            style={{
              backgroundColor: "transparent",
              flex: 1,
              marginBottom: 24,
            }}
          >
            {/* Full Body Routine */}
            <View style={{ marginRight: 24 }}>
              <Image
                source={require("@/assets/images/ActivitiesPage/FullBodyWorkout_Video.png")}
                resizeMode="contain"
              ></Image>
              <Text
                style={{
                  color: "#F5F4F6",
                  fontFamily: "Sofia-semi-bold",
                  fontSize: "16px",
                  position: "absolute",
                  top: 10, // adjust the top position to your needs
                  left: 22, // adjust the left position to your needs
                  backgroundColor: "transparent",
                }}
              >
                Full-body Routine
              </Text>
            </View>

            {/* Butterfly Routine */}
            <View style={{ marginRight: 24 }}>
              <Image
                source={require("@/assets/images/ActivitiesPage/ButterflyStyleWorkout_Video.png")}
                resizeMode="contain"
              ></Image>
              <Text
                style={{
                  color: "#F5F4F6",
                  fontFamily: "Sofia-semi-bold",
                  fontSize: "16px",
                  position: "absolute",
                  top: 10, // adjust the top position to your needs
                  left: 22, // adjust the left position to your needs
                  backgroundColor: "transparent",
                }}
              >
                Butterfly Style
              </Text>
            </View>

            {/* Diving */}
            <View style={{ marginRight: 24 }}>
              <Image
                source={require("@/assets/images/ActivitiesPage/DivingWorkout_Video.png")}
                resizeMode="contain"
              ></Image>
              <Text
                style={{
                  color: "#F5F4F6",
                  fontFamily: "Sofia-semi-bold",
                  fontSize: "16px",
                  position: "absolute",
                  top: 10, // adjust the top position to your needs
                  left: 22, // adjust the left position to your needs
                  backgroundColor: "transparent",
                }}
              >
                Diving
              </Text>
            </View>
          </ScrollView>
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
    // height: 130,
    backgroundColor: "transparent",
    zIndex: 2,
  },
  calendarTitle: {
    color: "#F5F4F6",
    fontFamily: "Sofia-bold",
    fontSize: 26,
    top: -58,
    left: 34,
    backgroundColor: "transparent",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "transparent",
    height: "100%",
    width: "100%",
    // top: -14,
  },
  smallCalendarContainer: {
    backgroundColor: "red",
    height: 114,
    width: 360,
    top: 62,
    opacity: 0.3,
    alignSelf: "center",
    zIndex: 5,
  },
  smallCalendarImage: {
    top: -124,
    alignSelf: "center",
    pointerEvents: "none",
  },
  calendarDatesContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  calendarDateText: {
    color: "#F5F4F6",
    fontFamily: "Sofia-bold",
    fontSize: 26,
    top: -300,
    left: -84,
    backgroundColor: "transparent",
  },
  calendarDateTextBig2: {
    color: "#F5F4F6",
    fontFamily: "Sofia-bold",
    fontSize: 26,
    top: -334,
    left: 50,
    // backgroundColor: "red",
    width: 200,
  },
  calendarIcon: {
    position: "absolute",
    top: -292,
    left: 180,
  },
  calendarIcon2: {
    position: "absolute",
    top: 48,
    left: 180,
    // top: -248,
    // left: 180,
    // backgroundColor: "pink",
    // width: 200,
  },
  dateBlockContainer: {
    flexDirection: "row", // Arrange children in a row
    justifyContent: "space-between", // Distribute space between the blocks
    position: "absolute", // Keep it in absolute position
    top: -254, // Adjust top as needed
    left: 40, // Adjust left as needed
    width: 320, // Adjust the total width as needed
  },
  dateBlock: {
    height: 34,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  selectedDateBlock: {
    width: 118, // Width for the selected date block
    backgroundColor: "#5145DE",
  },
  unselectedDateBlock: {
    width: 34, // Width for regular date blocks
    backgroundColor: "#F5F4F6",
  },
  dateText: {
    color: "#0E0330",
    fontFamily: "Sofia-semi-bold",
    fontSize: 16,
    backgroundColor: "transparent",
    textAlign: "center",
  },
  selectedDateText: {
    color: "#F5F4F6", // Text color for the selected date
  },
  bigCalendarContainer: {
    backgroundColor: "transparent",
    opacity: 1,
    marginBottom: 24,
    paddingTop: 24,
    // top: -325,
    top: -5,
    zIndex: -1,
  },
  ul: {
    flexDirection: "column",
    alignItems: "flex-start",
    top: -662,
    left: 40,
    // top: 0,
    // left: 0,
    backgroundColor: "transparent",
    marginBottom: -62,
  },
  li: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  liBullet: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#F5F4F6",
  },
  liText: {
    fontFamily: "Sofia-regular",
    fontSize: "14px",
    color: "#F5F4F6",
  },
});

export default ActivitiesScreen;
