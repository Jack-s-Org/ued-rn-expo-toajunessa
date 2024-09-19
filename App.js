import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import { View, Image, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "@/components/VideoPlayer";

// const Icon = createIconSetFromIcoMoon(
//   require("@/assets/icomoon/selection.json"),
//   "IcoMoon",
//   "icomoon.ttf"
// );

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     // IcoMoon: require("@/assets/icomoon/icomoon.ttf"),
//     "Sofia-regular": require("./assets/fonts/static/SofiaSans-Regular.ttf"),
//     "Sofia-bold": require("./assets/fonts/static/SofiaSans-Bold.ttf"),
//     "Sofia-semi-bold": require("./assets/fonts/static/SofiaSans-SemiBold.ttf"),
//     "Sofia-bold-italic": require("./assets/fonts/static/SofiaSans-BlackItalic.ttf"),
//   });

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     IcoMoon: require("@/assets/icomoon/icomoon.ttf"),
//     "Gilroy-Regular": require("./"),
//   });

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={{ height: "100%" }}>
//         <RootNavigator />
//         {/* <Icon name="Home-icon" size={32} />
//       <Image source={require("@/assets/Home.png")} />
//       <Text>Hello</Text> */}
//         {/* <VideoPlayer /> */}
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }

// return (
//   <SafeAreaView style={{ height: "100%" }}>
//     {/* {<RootNavigator />} */}
//     <Icon name="Home-icon" size={32} color="blue" />
//     <Image
//       source={require("@/assets/Home.png")}
//       style={{ height: 124, width: 64 }}
//     />
//     <Text>Hello</Text>
//   </SafeAreaView>
// );
// style={{ fontFamily: "Gilroy-Regular" }}

// export default function App() {
//   return <RootNavigator />;
// }

export default function App() {
  const [fontsLoaded] = useFonts({
    // IcoMoon: require("@/assets/icomoon/icomoon.ttf"),
    "Sofia-regular": require("./assets/fonts/static/SofiaSans-Regular.ttf"),
    "Sofia-medium": require("./assets/fonts/static/SofiaSans-Medium.ttf"),
    "Sofia-bold": require("./assets/fonts/static/SofiaSans-Bold.ttf"),
    "Sofia-semi-bold": require("./assets/fonts/static/SofiaSans-SemiBold.ttf"),
    "Sofia-bold-italic": require("./assets/fonts/static/SofiaSans-BlackItalic.ttf"),
  });

  if (!fontsLoaded) {
    return <View />; // or <Text>Loading fonts...</Text>
  }

  return (
    // <SafeAreaView>
    <RootNavigator />
    // </SafeAreaView>
  );
}
