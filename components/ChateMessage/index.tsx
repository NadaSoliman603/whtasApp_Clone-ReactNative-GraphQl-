import moment from "moment";
import { Message, UserMessage } from "../../types";
import { Text, View } from "../Themed";
import styles from "./styles";

export type ChatMessageProps = {
    message: UserMessage
}
function ChatMessage(props: ChatMessageProps) {

    const message = props.message

    const isMyMessage: boolean = message.user.id === "u1"
    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    backgroundColor: isMyMessage ? '#DCF8C5' : 'white',
                    marginLeft: isMyMessage ? 50 : 0,
                    marginRight: isMyMessage ? 0 : 50,
                }
            ]}>
                {!isMyMessage && <Text style={styles.name}>{message.user.name}</Text>}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>

            </View>
        </View>
    );
}

export default ChatMessage;

