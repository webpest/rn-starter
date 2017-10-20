import React from "react";
import { Provider } from "react-redux";
import { Navigation } from "react-native-navigation";

import { registerScreens } from "./screens";
// import configureStore from './store/configureStore';

// const store = configureStore();

registerScreens();
const navigatorStyle = {
  statusBarColor: "black",
  statusBarTextColorScheme: "light",
  navigationBarColor: "black",
  navBarBackgroundColor: "#0a0a0a",
  navBarTextColor: "white",
  navBarButtonColor: "white",
  tabBarButtonColor: "red",
  tabBarSelectedButtonColor: "red",
  tabBarBackgroundColor: "white",
  topBarElevationShadowEnabled: false,
  navBarHideOnScroll: true,
  tabBarHidden: true,
  drawUnderTabBar: true,
};

Navigation.startSingleScreenApp({
  screen: {
    screen: "rn.HomeScreen", // unique ID registered with Navigation.registerScreen
    title: "Home", // title of the screen as appears in the nav bar (optional)
    navigatorStyle, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
});
