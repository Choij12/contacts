import { StatusBar } from 'expo-status-bar';
import React, { useEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {

  useEffect((() => {

const getContacts = asnyc () => {
  let { status } = await Contacts.requestPermissionsAsync();
  if (status === 'granted') {
    let contactList = await Contacts.getContactsAsync();
    setContacts(contactList.data);
  }
};

getContadcts();

  }, []));

  return (
    <View style={styles.container}>
      <FlatList
      data={contacts}
      keyExtractor={contact => contact.id}
      renderItem={({ item })}
      return <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
