import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import HomeScreen from "./HomeScreen";
import CoachScreen from "./CoachScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { SafeAreaView } from "react-native-safe-area-context";
import MeScreen from "./MeScreen";
import ActivitiesScreen from "./ActivitiesScreen";
import AppDrawer from "./AppDrawer";
import SettingsScreen from "./SettingsScreen";
import SwimScreen from "./SwimScreen";
import AddEventScreen from "./AddEventScreen";
import { LinearGradient } from "expo-linear-gradient";
import { Image, View } from "react-native";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const MainTabs = ({ navigation }) => {
  // const [unreadCount, setUnreadCount] = useState(3);
  const [unreadCount] = useState(3);
  // const [homeIconClicked, setHomeIconClicked] = useState(false); // New state for icon change

  return (
    <AppDrawer navigation={navigation}>
      <View style={{ height: "100%" }}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#408086",
            tabBarStyle: {
              height: 82,
              backgroundColor: "#F5F4F6",
              // borderTopLeftRadius: 20,
              // borderTopRightRadius: 20,
              paddingBottom: 10,
              opacity: 1,
              position: "absolute",
              bottom: 24,
              left: 16,
              right: 16,
              borderRadius: 100,
              shadowColor: "#0E0330",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.3,
              shadowRadius: 6.27,
              elevation: 10,
              paddingHorizontal: 10, // Add padding to adjust space around icons
            },
            tabBarItemStyle: {
              paddingVertical: 0,
              borderRadius: 100,
            },
            tabBarBackground: () => (
              <LinearGradient
                colors={["rgba(14, 2, 48, 0.9)", "rgba(48, 38, 77, 0.9)"]} // RGBA colors for opacity
                // colors={["#0E0230", "#DACFFC"]} // Change these colors to your desired gradient colors
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ flex: 1, borderRadius: 100 }} // Ensure the gradient fills the entire background
              />
            ),
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused
                      ? require("@/assets/images/NavBar/Home_Icon_Active.png")
                      : require("@/assets/images/NavBar/Home_Icon_Default.png")
                  }
                  style={{
                    width: "100%",
                    height: 80,
                    marginTop: 8,
                  }}
                ></Image>
              ),
              tabBarLabel: "Home",
            }}
          />

          <Tab.Screen
            name="Activities"
            component={ActivitiesScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused
                      ? require("@/assets/images/NavBar/Activities_Icon_Active.png")
                      : require("@/assets/images/NavBar/Activities_Icon_Default.png")
                  }
                  style={{
                    width: "100%",
                    height: 80,
                    marginTop: 8,
                  }}
                ></Image>
              ),
              tabBarLabel: "Activities",
            }}
          />

          <Tab.Screen
            name="Swim"
            component={SwimScreen} // this is a workaround to show a full screen when this tab is pressed
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused
                      ? require("@/assets/images/NavBar/Swimming_Icon_Active.png")
                      : require("@/assets/images/NavBar/Swimming_Icon_Default.png")
                  }
                  style={{
                    width: "100%",
                    height: 80,
                    marginTop: 8,
                  }}
                ></Image>
              ),
              tabBarLabel: "Swim",
            }}
          />

          <Tab.Screen
            name="Coach"
            component={CoachScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused
                      ? require("@/assets/images/NavBar/Coach_Icon_Active.png")
                      : require("@/assets/images/NavBar/Coach_Icon_Default.png")
                  }
                  style={{
                    width: "100%",
                    height: 80,
                    marginTop: 8,
                  }}
                ></Image>
              ),
              tabBarLabel: "Coach",
              tabBarBadge: unreadCount,
            }}
          />

          <Tab.Screen
            name="Profile"
            component={MeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused
                      ? require("@/assets/images/NavBar/Profile_Icon_Active.png")
                      : require("@/assets/images/NavBar/Profile_Icon_Default.png")
                  }
                  style={{
                    width: "100%",
                    height: 80,
                    marginTop: 8,
                  }}
                ></Image>
              ),
              tabBarLabel: "Me",
            }}
          />
        </Tab.Navigator>
      </View>
    </AppDrawer>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Swim"
        component={SwimScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="AddEvent"
        component={AddEventScreen}
        options={{ headerShown: false }}
        // options={{
        //   headerTitle: "", // Remove the title
        //   headerBackTitleVisible: false, // Hide the back title text
        //   headerLeft: () => null, // Hide the back button
        // }}
        // options={{
        //   headerTitle: "", // Remove the title
        //   headerBackTitleVisible: false, // Hide the back title text
        // }}
        // options={{ headerShown: false }}
        // options={{ animation: "fade_from_bottom" }}
      ></MainStacks.Screen>
    </MainStacks.Navigator>
  );
};

export default MainScreens;
