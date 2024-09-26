import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import CoachScreen from "./CoachScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MeScreen from "./MeScreen";
import ActivitiesScreen from "./ActivitiesScreen";
import AppDrawer from "./AppDrawer";
import ProgramsScreen from "./ProgramsScreen";
import SwimScreen from "./SwimScreen";
import StatisticScreen from "./StatisticScreeen";
import CoachProfileScreen from "./CoachProfileScreen";
import VideoScreen from "./VideoScreen";
import ExerciseScreen from "./ExerciseScreen";
import LoadingScreen from "./LoadingScreen";
import LoadingScreen2 from "./LoadingScreen2";
import OnboardingScreen1 from "./OnboardingScreen1";
import OnboardingScreen2 from "./OnboardingScreen2";
import OnboardingScreen3 from "./OnboardingScreen3";
import SignInScreen from "./SignInScreen";
import QuestionScreen1 from "./QuestionScreen1";
import QuestionScreen2 from "./QuestionScreen2";
import QuestionScreen3 from "./QuestionScreen3";
import QuestionScreen4 from "./QuestionScreen4";
import { LinearGradient } from "expo-linear-gradient";
import { Image, View } from "react-native";
import QuestionScreen5 from "./QuestionScreen5";
import QuestionScreen6 from "./QuestionScreen6";
import QuestionScreen7 from "./QuestionScreen7";
import QuestionScreen8 from "./QuestionScreen8";
import GetReadyScreen from "./GetReadyScreen";
import GogglesPairingScreen from "./GogglesPairingScreen";
import GogglesScreen from "./GogglesScreen";
import ConnectGogglesScreen from "./ConnectGogglesScreen";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = ({ navigation }) => {
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
              paddingHorizontal: 10,
            },
            tabBarItemStyle: {
              paddingVertical: 0,
              borderRadius: 100,
            },
            tabBarBackground: () => (
              <LinearGradient
                colors={["rgba(14, 2, 48, 0.9)", "rgba(48, 38, 77, 0.9)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ flex: 1, borderRadius: 100 }}
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
            component={SwimScreen}
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
    <MainStacks.Navigator initialRouteName="Loading">
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Swim"
        component={SwimScreen}
        options={{ animation: "fade_from_bottom", headerShown: false }}
      />
      <MainStacks.Screen
        name="Programs"
        component={ProgramsScreen}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Statistics"
        component={StatisticScreen}
        options={{ headerShown: false }}
      ></MainStacks.Screen>
      <MainStacks.Screen
        name="CoachProfile"
        component={CoachProfileScreen}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Coach"
        component={CoachScreen}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Video"
        component={VideoScreen}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Exercise"
        component={ExerciseScreen}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Loading"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Loading2"
        component={LoadingScreen2}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Onboarding1"
        component={OnboardingScreen1}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Onboarding2"
        component={OnboardingScreen2}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Onboarding3"
        component={OnboardingScreen3}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Question1"
        component={QuestionScreen1}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Question2"
        component={QuestionScreen2}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Question3"
        component={QuestionScreen3}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Question4"
        component={QuestionScreen4}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Question5"
        component={QuestionScreen5}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Question6"
        component={QuestionScreen6}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Question7"
        component={QuestionScreen7}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Question8"
        component={QuestionScreen8}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="GetReady"
        component={GetReadyScreen}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="GogglesPairing"
        component={GogglesPairingScreen}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Goggles"
        component={GogglesScreen}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Connect"
        component={ConnectGogglesScreen}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Profile"
        component={MeScreen}
        options={{ headerShown: false }}
      />
    </MainStacks.Navigator>
  );
};

export default MainScreens;
