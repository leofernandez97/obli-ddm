import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import VehiContext from "../provider/UserProvider";

const vehiculoForm = ({ route, navigator }) => {
  const [vehiculo, setVehiculo] = useState(route.params ? route.params : {});
  const { dispatch } = useContext(UserContext);

  return (
    <View style={styles.form}>
      <Text>Marca</Text>
      <TextInput
        style={styles.input}
        onChangeText={(Marca) => setVehiculo({ ...vehiculo, Marca })}
        placeholder="Marca"
        value={vehiculo.Marca}
      />
      <Text>Color</Text>
      <TextInput
        style={styles.input}
        onChangeText={(Color) => setVehiculo({ ...vehiculo, Color })}
        placeholder="Color"
        value={vehiculo.Color}
      />
      <Text>Avatar</Text>
      <TextInput
        style={styles.input}
        onChangeText={(avatarUrl) => setVehiculo({ ...vehiculo, Matricula })}
        placeholder="Url de Avatar"
        value={vehiculo.Matricula}
      />

      <Button title="Guardar vehiculo" onPress={() => {
        dispatch({
          type: vehiculo && vehiculo.id ? "updateVehiculo" : "createVehiculo",
          payload: vehiculo,
        });
        navigator.goBack();
      }} />
    </View>
  );
};

export default VehiculoForm;

const styles = StyleSheet.create({
    form: {
        padding: 15
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20
    }
});
