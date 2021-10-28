import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "../navigation/routes";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.ACCOUNT}
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.MESSAGES}
      component={MessagesScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
