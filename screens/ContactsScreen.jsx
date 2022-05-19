import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import users from "../assets/dumy_data/Users"
import ContactListItem from "../components/ContactListItem";

function ContactsScreen() {
    return ( 
        <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ index, item }) => (
          <ContactListItem user={item} />
        )}
      />
      </View>
     );
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });
  
export default ContactsScreen;

