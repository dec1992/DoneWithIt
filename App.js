import React from "react";
import { View } from "react-native";

import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <AppTextInput icon="email" placeholder="email" />
      <AppPicker icon="apps" placeholder="category" />
    </Screen>
  );
}
