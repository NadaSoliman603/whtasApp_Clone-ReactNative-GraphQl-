import { Text, View } from "../components/Themed";
import { FlatList, ImageBackground } from 'react-native';
import ChatMessage from "../components/ChateMessage";
import chtaroomData from "../assets/dumy_data/Chats"
import BG from '../assets/images/BG.png';

function ChatRoomScreen() {
    return ( 
<ImageBackground style={{ width: "100%", height:  "100%" }} 
      source={BG}
      >
           <FlatList
                data={chtaroomData.messages}
                renderItem={({index,item})=><ChatMessage message={item}  />}
            />
      </ImageBackground>           

     );
}

export default ChatRoomScreen;
