import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Home = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ showLabel: false }}
      // screenOptions={{ showLabel: false }}
      initialRouteName="Posts"
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Octicons
              name="apps"
              size={24}
              color={!focused ? "#212121" : "#FF6C00"}
            />
          ),
          headerRight: () => (
              <Feather  onPress={() => alert("log-out")}name="log-out" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="pluscircle"
              size={24}
              color={!focused ? "#212121" : "#FF6C00"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="user"
              size={24}
              color={!focused ? "#212121" : "#FF6C00"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    width: 100,
    height: 100,
    color: "black",
  },
});
export default Home;
