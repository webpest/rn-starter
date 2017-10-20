/* eslint-disable import/prefer-default-export */

import { Navigation } from "react-native-navigation";

import HomeScreen from "./Home";

export function registerScreens() {
  Navigation.registerComponent("rn.HomeScreen", () => HomeScreen);
}
