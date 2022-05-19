import { Text, View } from "../Themed";

import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
    Entypo,
    Fontisto,
} from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import { useState } from "react";

function InputBox() {
    const [message, setMessage] = useState("")
    const onChangeVlue = (value: string) => {
        setMessage(value)
    }
    const onMicrophonePress = ()=>{
        console.warn('Microphone')
    }

    const onSendPress = ()=>{
        //conecte to the Backend 
    }
    const handleSendMS = () => {
        if (message) {
            onSendPress();
        } else {
            onMicrophonePress();
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                <TextInput
                    value={message}
                    multiline
                    placeholder={"Type a message"}
                    style={styles.textInput}
                    onChangeText={onChangeVlue}

                />
                <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
                {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon} />}
            </View>

            <TouchableOpacity onPress={handleSendMS}>
                <View style={styles.buttonContainer}>
                    {message
                        ? <MaterialIcons name="send" size={26} color="white" />
                        : <MaterialCommunityIcons name="microphone" color="#fff" size={28} />
                    }
                </View>
            </TouchableOpacity>

        </View>
    );
}

export default InputBox;
