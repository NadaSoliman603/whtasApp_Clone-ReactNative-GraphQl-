import { StyleSheet, FlatList, ImageBase, ImageBackground } from 'react-native';
import ChatListItem from '../components/ChatListItem';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import chat_Room_dymyData from "../assets/dumy_data/ChatRooms"

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <FlatList
        data={chat_Room_dymyData}
        renderItem={({ index, item }) => (
          <ChatListItem chatRoom={item} />
        )}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
