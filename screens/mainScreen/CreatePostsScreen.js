import { Camera } from "expo-camera";
import * as Location from 'expo-location';
import React, { useEffect, useState } from "react";
import {
  Image, Keyboard, StyleSheet, Text, TextInput,
  TouchableWithoutFeedback, View
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CreatePostsScreen = ({navigation}) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState("");
  const [titleLocation, setTitleLocation] = useState("");
  const [location, setLocation] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [titleBorderColor, setTitleBorderColor] = useState("#E8E8E8");
  const [titleBackgroundColor, setTitleBackgroundColor] = useState("#F6F6F6");
  const [titleLocationBorderColor, setTitleLocationBorderColor] = useState("#E8E8E8");
  const [titleLocationBackgroundColor, setTitleLocationBackgroundColor] = useState("#F6F6F6");

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  const sendPost = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    // console.log("title:", title);
    const post = {
      photo,
      title,
      titleLocation,
      location,
    }
    // console.log(post)
    navigation.navigate("DefaultScreen", post)
    setPhoto("");
    setTitle("");
    setTitleLocation("")
    setLocation(null);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      // console.log("latitude",location.coords.latitude)
      // console.log("longitude",location.coords.longitude)

    })();
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Camera style={styles.camera} ref={setCamera}>
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image
                source={{ uri: photo }}
                style={{ height: 200, width: 200 }}
              />
            </View>
          )}
          <TouchableOpacity
            onPress={takePhoto}
            ref={setCamera}
            style={styles.snapContainer}
          >
            <Text style={styles.snap}>SNAP</Text>
          </TouchableOpacity>
        </Camera>
        <View
          style={{
            ...styles.form,
            marginBottom: isShowKeyboard ? -90 : 179,
          }}
        >
          <View>
            <TextInput
              style={{
                ...styles.input,
                borderColor: titleBorderColor,
                backgroundColor: titleBackgroundColor,
              }}
              value={title}
              onChangeText={(value) => setTitle(value)}
              placeholder={"Title"}
              onFocus={() => {
                setTitleBorderColor("#FF6C00");
                setTitleBackgroundColor("transparent");
                setIsShowKeyboard(true);
              }}
              onBlur={() => {
                setTitleBackgroundColor("#F6F6F6");
                setTitleBorderColor("#E8E8E8");
              }}
            />
          </View>
          <View>
            <TextInput
              style={{
                ...styles.input,
                borderColor: titleLocationBorderColor,
                backgroundColor: titleLocationBackgroundColor,
              }}
              value={titleLocation}
              onChangeText={(value) => setTitleLocation(value)}
              placeholder={"Location"}
              onFocus={() => {
                setTitleLocationBorderColor("#FF6C00");
                setTitleLocationBackgroundColor("transparent");
                setIsShowKeyboard(true);
              }}
              onBlur={() => {
                setTitleLocationBackgroundColor("#F6F6F6");
                setTitleLocationBorderColor("#E8E8E8");
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.7}
            onPress={sendPost}
          >
            <Text style={styles.btnTitle}>Publish</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  takePhotoContainer: {
    borderColor: "green",
    borderWidth: 1,
  },
  snapContainer: {
    borderRadius: 50,
    borderColor: "red",
    borderWidth: 1,
    marginBottom: 20,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  snap: {
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    color: "#212121",
    padding: 16,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 50,
    marginTop: 43,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePostsScreen;
