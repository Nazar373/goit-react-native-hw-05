import { LogBox } from "react-native";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegistrationScreen";

LogBox.ignoreLogs(['Remote debugger']);

// https://www.waldo.com/blog/add-an-image-picker-react-native-app
export default function App() {
  return (
    // <React.StrictMode>
    <>
      {/* <LoginScreen /> */}
      <RegisterScreen />
      </>
    // </React.StrictMode>
      
  );
}
