import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
import LoadingScreen from "./LoadingScreen";
import LoadingScreen2 from "./LoadingScreen2";
import OnboardingScreen1 from "./OnboardingScreen1";
import QuestionScreen1 from "./QuestionScreen1";
import QuestionScreen2 from "./QuestionScreen2";
import QuestionScreen3 from "./QuestionScreen3";
import QuestionScreen4 from "./QuestionScreen4";
import QuestionScreen5 from "./QuestionScreen5";
import QuestionScreen6 from "./QuestionScreen6";
import QuestionScreen7 from "./QuestionScreen7";
import QuestionScreen8 from "./QuestionScreen8";
import GetReadyScreen from "./GetReadyScreen";
import GogglesPairingScreen from "./GogglesPairingScreen";
import GogglesScreen from "./GogglesScreen";
import ConnectGogglesScreen from "./ConnectGogglesScreen";
import MeScreen from "./MeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreens} />
        <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Loading2" component={LoadingScreen2} />
        <Stack.Screen name="Question1" component={QuestionScreen1} />
        <Stack.Screen name="Question2" component={QuestionScreen2} />
        <Stack.Screen name="Question3" component={QuestionScreen3} />
        <Stack.Screen name="Question4" component={QuestionScreen4} />
        <Stack.Screen name="Question5" component={QuestionScreen5} />
        <Stack.Screen name="Question6" component={QuestionScreen6} />
        <Stack.Screen name="Question7" component={QuestionScreen7} />
        <Stack.Screen name="Question8" component={QuestionScreen8} />
        <Stack.Screen name="GetReady" component={GetReadyScreen} />
        <Stack.Screen name="GogglesPairing" component={GogglesPairingScreen} />
        <Stack.Screen name="Goggles" component={GogglesScreen} />
        <Stack.Screen name="Connect" component={ConnectGogglesScreen} />
        <Stack.Screen name="Profile" component={MeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
