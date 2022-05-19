


import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import moment from 'moment';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Text, View } from '../Themed';
// import {  User } from "../../types"
import styles from "./styles";

export type User  = {
    id:string , 
    name:string,
    status:string,
    imageUri:string
  }
export type ChatListItemProps = {
    user: User,
}
export default function ContactListItem(props: ChatListItemProps) {
    const navigation = useNavigation()
    const user = props.user
    console.log(user)
    const handelNavigatinToChatRoom = ()=>{
        // navigation.navigate<any>("ChatRoom" , {id: chats.users[1].id ,name: chats.users[1].name })
    }
    return (
        <TouchableWithoutFeedback onPress={handelNavigatinToChatRoom}>
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                        <Text
                            numberOfLines={2}
                            style={styles.lastMessage}>
                            {user.status ?user.status : "Hey there , i ame use whatsApp" }
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );

}



