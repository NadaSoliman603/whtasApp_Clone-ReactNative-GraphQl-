import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex:1,
    flexDirection: 'column',
    width: "100%",
    // justifyContent: 'space-between',
    padding: 10,
  },
  lefContainer: {
    // width: "100%",
    // flexDirection: 'row',
    // flex:1,
    // justifyContent: "space-between"
    
  },
  midContainer: {
    // flex:1,
    // backgroundColor:"red",
    flexDirection:"row",
    width:"65%",
    justifyContent: "space-between"

  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  meaasge:{
    paddingRight:30,
    width:"70%"
  },
  lastMessage: {
    fontSize: 16,
    color: 'grey',
    // maximumValue:4
  },
  time: {
    fontSize: 14,
    color: 'grey'
  },
});

export default styles;
