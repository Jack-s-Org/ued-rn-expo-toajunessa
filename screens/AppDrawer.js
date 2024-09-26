import { useState } from "react";
import { View } from "react-native";
import {} from "react-native-safe-area-context";
import { DrawerItem } from "@react-navigation/drawer";

export default function AppDrawer({ navigation, children }) {
  const [open, setOpen] = useState(false);

  return (
    <View
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return (
          <View>
            <DrawerItem
              label="Settings"
              onPress={() => {
                navigation.navigate("Settings");
              }}
            />
            <DrawerItem
              label="Sign Out"
              onPress={() => {
                navigation.replace("SignIn");
              }}
            />
          </View>
        );
      }}
    >
      {/* <SafeAreaInsetsContext.Consumer>
        {(insets) => (
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
            }}
            style={{
              zIndex: 99,
              position: "absolute",
              left: 0,
              top: insets.top,
              padding: 16,
            }}
          >
            <Ionicons name="menu" size={32} />
          </TouchableOpacity>
        )}
      </SafeAreaInsetsContext.Consumer> */}
      {children}
    </View>
  );
}
