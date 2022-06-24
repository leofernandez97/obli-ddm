import React, { useContext } from "react";
import { View, FlatList, Alert, StyleSheet, Text } from "react-native";
import { ListItem, Button, Icon, Avatar } from "react-native-elements";
import vehiContext from "../provider/VehiculosProvider";

const vehiculoList = (props) => {
  const { state, dispatch } = useContext(UsersContext);

  function confirmUserDeletion(vehiculo) {
    Alert.alert("Borrar Auto", "Esta seguro?", [
      {
        text: "SI",
        onPress() {
          dispatch({
            type: "deleteVehiculo",
            payload: vehiculo,
          });
        },
      },
      {
        text: "No",
      },
    ]);
  }

  function getActions(vehiculo) {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate("vehiculoForm", vehiculo)}
          icon={<Icon name="edit" size={25} color="green" />}
          buttonStyle={{
            minHeight: "100%",
            minWidth: "50%",
            backgroundColor: "light-gray",
          }}
        />
        <Button
          onPress={() => confirmVehiculoDeletion(vehiculo)}
          icon={<Icon name="delete" size={25} color="red" />}
          buttonStyle={{
            minHeight: "100%",
            minWidth: "50%",
            backgroundColor: "gray",
          }}
        />
      </>
    );
  }

  function getVehiculoItem({ item: vehiculo }) {
    return (
      <ListItem.Swipeable
        key={vehiculo.id}
        bottomDivider
        rightContent={getActions(user)}
        rightStyle={styles.buttonContainer}
        onPress={() => props.navigation.navigate("vehiculoForm", vehiculo)}
      >      <Avatar rounded source={{  }} />
        <ListItem.Content>
       <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem.Swipeable>

    );
  }

  return (
    <View>
      {state.vehiculo.length == 0 && (
        <View
          style={{
            textAlignVertical: "center",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text>No hay vehiculos</Text>
        </View>
      )}
      <FlatList
        keyExtractor={(vehiculo) => vehiculo.Matricula.toString()}
        data={state.vehiculo}
        renderItem={getVehiculoItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
  },
});

export default UserList;