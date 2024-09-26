import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Switch,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";

const ActivitiesScreen = ({ navigation }) => {
  const [opened, setOpened] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(0));
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isAllDay, setIsAllDay] = useState("");
  const [reminder, setReminder] = useState("");

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

  const heightAnimationInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });

  const activitiesSectionMarginTop = opened ? 180 : -124;

  const addEvent = () => {
    const toValue = commentsVisible ? 0 : 1;
    Animated.timing(slideAnim, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setCommentsVisible(!commentsVisible);
  };

  return (
    <View style={styles.container}>
      {/* Top Frame */}
      <View style={styles.topFrame}>
        <Image
          source={require("@/assets/images/ActivitiesPage/Calendar_Top_Frame_2.png")}
          resizeMode="contain"
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
          top: 656,
          left: 140,
          zIndex: 3,
        }}
      >
        <TouchableOpacity onPress={addEvent}>
          <Feather
            name="plus"
            size={48}
            color="#0E0330"
            style={{
              alignSelf: "center",
              top: 9,
              left: 1,
            }}
          />
        </TouchableOpacity>
      </View>

      <View></View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Animated.View
          style={[
            styles.addEvent,
            {
              transform: [
                {
                  translateY: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [800, 76],
                  }),
                },
              ],
            },
          ]}
        >
          <View
            style={{
              backgroundColor: "transparent",
              height: "100%",
              width: "100%",
            }}
          >
            {/* Background Scroll Shape Image */}
            <View>
              <Image
                source={require("@/assets/images/AddeEventPage/AddEvent_BackgroungShape.png")}
                resizeMode="contain"
                style={{ alignSelf: "center", top: -10 }}
              />
            </View>
          </View>

          {/* Done Text */}
          {commentsVisible && (
            <TouchableOpacity style={styles.doneButton} onPress={addEvent}>
              <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
          )}

          {/* Cancel Text */}
          {commentsVisible && (
            <TouchableOpacity style={styles.cancelButton} onPress={addEvent}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          )}

          {/* New Activity Text */}
          <View style={{ position: "absolute", top: 0, alignSelf: "center" }}>
            <Text style={styles.newActivityText}>New Activity</Text>
          </View>

          {/* Text Input Section */}
          <View>
            {/* Title Input */}
            <View
              style={{
                position: "absolute",
                top: -642,
                alignSelf: "center",
                width: "90%",
                marginBottom: 24,
              }}
            >
              <TextInput
                style={styles.inputStyle}
                placeholder="Title"
                placeholderTextColor="#F5F4F6"
                value={title}
                onChangeText={setTitle}
              />
            </View>

            {/* Description Input */}
            <View
              style={{
                position: "absolute",
                top: -570,
                alignSelf: "center",
                width: "90%",
                marginBottom: 24,
              }}
            >
              <TextInput
                style={styles.inputStyleDes}
                placeholder="Description"
                placeholderTextColor="#F5F4F6"
                value={description}
                onChangeText={setDescription}
                multiline={true}
                returnKeyType="done"
              />
            </View>

            {/* Date, Time, and All-day Toggle Input */}
            <View
              style={{
                position: "absolute",
                top: -410,
                alignSelf: "center",
                width: "90%",
                marginBottom: 24,
              }}
            >
              {/* All-Day Toggle */}
              <View style={styles.toggleContainerAD}>
                <Text style={styles.toggleLabel}>All Day</Text>
                <Switch
                  style={styles.toggleStyle}
                  value={isAllDay}
                  onValueChange={setIsAllDay}
                  trackColor={{ false: "#0E0330", true: "#FF00FF" }}
                />
              </View>

              {/* Date Input */}
              <TextInput
                style={styles.inputStyleDate}
                placeholder="Date"
                placeholderTextColor="#F5F4F6"
                value={date}
                onChangeText={setDate}
              />

              {/* Time Input */}
              <TextInput
                style={styles.inputStyleTime}
                placeholder="Time"
                placeholderTextColor="#F5F4F6"
                value={time}
                onChangeText={setTime}
              />
            </View>

            {/* Reminder Toggle */}
            <View
              style={{
                position: "absolute",
                top: -226,
                alignSelf: "center",
                width: "90%",
                marginBottom: 24,
              }}
            >
              <View style={styles.toggleContainerRE}>
                <Text style={styles.toggleLabel}>Reminder</Text>
                <Switch
                  style={styles.toggleStyle}
                  value={reminder}
                  onValueChange={setReminder}
                  trackColor={{ false: "#0E0330", true: "#FF00FF" }}
                />
              </View>
            </View>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>

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
                  source={require("@/assets/images/ActivitiesPage/Calendar_Big_4.png")}
                  resizeMode="contain"
                  style={{
                    alignSelf: "center",
                    height: "104%",
                    top: -2,
                    width: 362,
                  }}
                />

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
            top: -22,
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
              top: -712,
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
            top: -704,
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
            top: -586,
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
              top: -112,
              left: -104,
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

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Main", { screen: "Swim" });
            }}
          >
            <Text
              style={{
                color: "#F5F4F6",
                fontFamily: "Sofia-medium",
                fontSize: "12px",
                position: "absolute",
                top: -416,
                left: 300,
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
          </TouchableOpacity>
        </View>

        {/* Horizontal Scroll View */}
        <View
          style={{
            backgroundColor: "transparent",
            marginBottom: -40,
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
              position: "absolute",
              top: -378,
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
                  top: 10,
                  left: 22,
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
                  top: 10,
                  left: 22,
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
                  top: 10,
                  left: 22,
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
    top: 0,
    alignSelf: "center",
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
  },
  smallCalendarContainer: {
    backgroundColor: "transparent",
    height: 114,
    width: 360,
    top: 62,
    opacity: 0.2,
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
  },
  dateBlockContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: -254,
    left: 40,
    width: 320,
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
    width: 118,
    backgroundColor: "#5145DE",
  },
  unselectedDateBlock: {
    width: 34,
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
    color: "#F5F4F6",
  },
  bigCalendarContainer: {
    backgroundColor: "transparent",
    opacity: 1,
    marginBottom: 24,
    paddingTop: 24,
    top: -5,
    zIndex: -1,
  },
  ul: {
    flexDirection: "column",
    alignItems: "flex-start",
    top: -678,
    left: 40,
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
  addEvent: {
    position: "absolute",
    elevation: 3,
    zIndex: 5,
  },
  doneButton: {
    position: "absolute",
    padding: 10,
    zIndex: 10,
    right: 24,
    top: 16,
  },
  doneText: {
    color: "#F5F4F6",
    fontFamily: "Sofia-medium",
    fontSize: 14,
  },
  cancelButton: {
    position: "absolute",
    padding: 10,
    zIndex: 10,
    left: 24,
    top: 16,
  },
  cancelText: {
    color: "#F5F4F6",
    fontFamily: "Sofia-medium",
    fontSize: 14,
  },
  newActivityText: {
    fontFamily: "Sofia-bold",
    fontSize: 22,
    color: "#F5F4F6",
    top: 20,
    alignSelf: "center",
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
  inputStyleDes: {
    height: 142,
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
  toggleContainerAD: {
    height: 55,
    width: 358,
    borderColor: "#F5F4F6",
    borderWidth: 0.2,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#30274D",
    paddingHorizontal: 10,
  },
  toggleLabel: {
    fontFamily: "Sofia-regular",
    fontSize: 18,
    color: "#F5F4F6",
    top: 16,
  },
  toggleStyle: {
    position: "absolute",
    right: 20,
    top: 12,
  },
  inputStyleDate: {
    height: 55,
    width: 358,
    borderColor: "#F5F4F6",
    borderWidth: 0.2,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#30274D",
    paddingHorizontal: 10,
    fontFamily: "Sofia-regular",
    fontSize: 18,
    color: "#F5F4F6",
  },
  inputStyleTime: {
    height: 55,
    width: 358,
    borderColor: "#F5F4F6",
    borderWidth: 0.2,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 4,
    backgroundColor: "#30274D",
    paddingHorizontal: 10,
    fontFamily: "Sofia-regular",
    fontSize: 18,
    color: "#F5F4F6",
  },
  toggleContainerRE: {
    position: "absolute",
    height: 55,
    width: 358,
    borderColor: "#F5F4F6",
    borderWidth: 0.2,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 4,
    backgroundColor: "#30274D",
    paddingHorizontal: 10,
  },
});

export default ActivitiesScreen;
