import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import UserContext from "../provider/UserProvider";

const UserForm = ({ route, navigator }) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const { dispatch } = useContext(UserContext);

  return (
    <View style={styles.form}>
      <Text>Nombre</Text>
      <TextInput
        style={styles.input}
        onChangeText={(name) => setUser({ ...user, name })}
        placeholder="Nombre"
        value={user.name}
      />
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Email"
        value={user.email}
      />
      <Text>Avatar</Text>
      <TextInput
        style={styles.input}
        onChangeText={(avatarUrl) => setUser({ ...user, avatarUrl })}
        placeholder="Url de Avatar"
        value={user.avatarUrl}
      />

      <Button title="Guardar Usuario" onPress={() => {
        dispatch({
          type: user && user.id ? "updateUser" : "createUser",
          payload: user,
        });
        navigator.goBack();
      }} />
    </View>
  );
};

export default UserForm;

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
