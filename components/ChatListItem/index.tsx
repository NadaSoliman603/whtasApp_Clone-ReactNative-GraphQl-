
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import moment from 'moment';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Text, View } from '../../components/Themed';
import { ChatRoom, MainTabParamList } from "../../types"
import styles from "./style";
export type ChatListItemProps = {
    chatRoom: ChatRoom,
}
export type Nav = {
    key: string,
    name: string,
    params: Object
}

export default function ChatListItem(props: ChatListItemProps) {
    const navigation = useNavigation()
    const chats = props.chatRoom
    const handelNavigatinToChatRoom = () => {
        navigation.navigate<any>("ChatRoom", { id: chats.users[1].id, name: chats.users[1].name })
    }
    // return (
    //     <TouchableWithoutFeedback onPress={handelNavigatinToChatRoom}>
    //         <View style={styles.container}>
    //             <View style={styles.lefContainer}>
    //                 <Image source={{ uri: chats.users[1].imageUri }} style={styles.avatar} />
    //                 <View style={styles.midContainer}>
    //                     <Text style={styles.username}>{chats.users[1].name}</Text>
    //                     <Text
    //                         numberOfLines={2}
    //                         style={styles.lastMessage}>
    //                         {chats.lastMessage.content}
    //                     </Text>
    //                 </View>
    //             </View>

    //             <Text style={styles.time}>
    //             {moment(chats.lastMessage.createdAt).format("DD/MM/YYYY")}
    //             {chats.lastMessage && moment(chats.lastMessage.createdAt).format("DD/MM/YYYY")}
    //             </Text>
    //         </View>
    //     </TouchableWithoutFeedback>
    // );


    return (
        <TouchableWithoutFeedback onPress={handelNavigatinToChatRoom}>
            <View style={{ flexDirection: "row" }}>
                <Image source={{ uri: chats.users[1].imageUri }} style={styles.avatar} />

                <View style={styles.container}>

                    <View style={styles.lefContainer}>
                        <View style={styles.midContainer}>
                            <Text style={styles.username}>{chats.users[1].name}</Text>
                            <Text style={styles.time}>
                                {chats.lastMessage && moment(chats.lastMessage.createdAt).format("DD/MM/YYYY")}
                            </Text>
                        </View>
                    </View>


                    <View style={styles.meaasge}>
                        <Text
                            numberOfLines={2}
                            style={styles.lastMessage}>
                            {chats.lastMessage.content}

                        </Text>
                    </View>



                </View>
            </View>
        </TouchableWithoutFeedback>
    );

}

