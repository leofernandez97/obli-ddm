import React, { useContext } from "react";
import { View, FlatList, Alert, StyleSheet, Text } from "react-native";
import { ListItem, Button, Icon, Avatar } from "react-native-elements";
import UsersContext from "../provider/UserProvider";

const UserList = (props) => {
  const { state, dispatch } = useContext(UsersContext);

  function confirmUserDeletion(user) {
    Alert.alert("Borrar Usuario", "Esta seguro?", [
      {
        text: "SI",
        onPress() {
          dispatch({
            type: "deleteUser",
            payload: user,
          });
        },
      },
      {
        text: "No",
      },
    ]);
  }

  function getActions(user) {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate("UserForm", user)}
          icon={<Icon name="edit" size={25} color="green" />}
          buttonStyle={{
            minHeight: "100%",
            minWidth: "50%",
            backgroundColor: "light-gray",
          }}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
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

  function getUserItem({ item: user }) {
    return (
      <ListItem.Swipeable
        key={user.id}
        bottomDivider
        rightContent={getActions(user)}
        rightStyle={styles.buttonContainer}
        onPress={() => props.navigation.navigate("UserForm", user)}
      >
        <Avatar rounded source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem.Swipeable>
    );
  }

  return (
    <View>
      {state.users.length == 0 && (
        <View
          style={{
            textAlignVertical: "center",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text>No hay usuarios</Text>
        </View>
      )}
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
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