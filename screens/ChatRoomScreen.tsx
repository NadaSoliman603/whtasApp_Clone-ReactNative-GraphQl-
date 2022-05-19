import { Text, View } from "../components/Themed";
import { FlatList, ImageBackground } from 'react-native';
import ChatMessage from "../components/ChateMessage";
import chtaroomData from "../assets/dumy_data/Chats"
import InputBox from "../components/InpuBox/InputBox";

function ChatRoomScreen() {
    return ( 
<ImageBackground style={{ width: "100%", height:  "100%" }} 
      source={require('../assets/images/BG.png')}
      >
           <FlatList
                data={chtaroomData.messages}
                renderItem={({index,item})=><ChatMessage message={item}  />}
            />
            <InputBox/>
      </ImageBackground>           

     );
}

export default ChatRoomScreen;
