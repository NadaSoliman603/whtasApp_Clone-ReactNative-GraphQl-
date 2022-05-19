import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "../Themed";
import styles from './styles';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function NewMessageButton() {
    const navigation = useNavigation()
    const onClick = () => {
        navigation.navigate("Contacts")
    }
    return (
            <View style={styles.container}>
                 <TouchableOpacity onPress={onClick}>
                <MaterialCommunityIcons
                    name="message-reply-text"
                    size={28}
                    color="white"
                />
                </TouchableOpacity>
            </View>
    );
}

export default NewMessageButton;