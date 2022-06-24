import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Icon } from "react-native-elements";
import UserForm from "../screens/UserForm";
import UserList from "../screens/UserList";
import VehiculoForm from "../screens/UserForm";
import VehiculoList from "../screens/vehiculoList";
const Stack = createStackNavigator();

const Navigation = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({ navigation }) => {
              return {
                title: "Usuarios",
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate("UserForm")}
                    type="clear"
                    icon={<Icon name="add" size={25} color="white" />}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title: "Agregar Usuarios",
            }}
          />
        </Stack.Navigator>
        <Stack.Navigator
          initialRouteName="vehiculoList"
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name="vehiculoList"
            component={VehiculoList}
            options={({ navigation }) => {
              return {
                title: "Vehiculos",
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate("VehiculoForm")}
                    type="clear"
                    icon={<Icon name="add" size={25} color="white" />}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="VehiculoForm"
            component={VehiculoForm}
            options={{
              title: "Agregar Vehiculo",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default Navigation;
