import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";

LogBox.ignoreLogs(['Remote debugger']);



export default function App() {
  const routing = useRoute(false)
  return (
  <NavigationContainer>
    {routing}
  </NavigationContainer>
  );
}
