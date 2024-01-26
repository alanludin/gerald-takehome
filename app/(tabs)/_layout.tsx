import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <DrawerSceneWrapper>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        })}
        sceneContainerStyle={{
          backgroundColor: '#1b162b',
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home"
                size={35}
                style={{ marginBottom: -10 }}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="(contact)/index"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="contacts"
                size={30}
                style={{ marginBottom: -15 }}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />
      </Tabs>
    </DrawerSceneWrapper>
  );
}
