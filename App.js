import { LogBox } from "react-native";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegistrationScreen";

LogBox.ignoreLogs(['Remote debugger']);

export default function App() {
  return (
    <>
      {/* <LoginScreen /> */}
      <RegisterScreen />
      </>
      
  );
}
