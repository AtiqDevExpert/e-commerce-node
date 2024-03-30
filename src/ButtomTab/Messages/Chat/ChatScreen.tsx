import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  SafeAreaView,
  Platform,
} from 'react-native';
import {FormInput} from '../../../utilis/Text_input';
import KeyboardStickyView from 'rn-keyboard-sticky-view';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  ProfileBackIcon,
  ProfileDotsIcon,
} from '../../../Svgs/Profile/ProfileVectors';
import BottomSheet from './ButtomSheet/BottomSheet';
import {MassageSendIcon, MassagePlusIcon} from '../../../Svgs/Facility/Icons';
const ChatScreen: React.FC<any> = ({navigation, route}) => {
  const [item, setItem] = useState(route.params.item);
  const [dataa, setDataa] = useState('');
  const refRBSheet = useRef();
  const rbsheetOpen = () => {
    refRBSheet.current.open();
  };

  const [chatUser] = useState({
    name: 'Robert Henry',
    last_seen: 'Active Now',
  });
  const [currentUser] = useState({
    name: 'John Doe',
  });
  const data = [
    {
      image: require('./images/camera.png'),
      text: 'Camera',
    },
    {
      image: require('./images/document.png'),
      text: 'Document',
    },
  ];

  const [messages, setMessages] = useState([
    {
      sender: 'John Doe',
      message: 'Hey Trey, would our training still hold',
      day: 'Today',
      time: '6:01 PM',
    },
    {
      sender: 'Robert Henry',
      message: 'Hey bro, i would be available this evening by 6pm😎',
      time: '6:02 PM',
    },
    {
      sender: 'John Doe',
      message: 'Yea sure that’s great.',
      time: '6:02 PM',
    },
    {
      sender: 'John Doe',
      message: `See you soon bro`,
      time: '6:02 PM',
    },
    {
      sender: 'John Doe',
      message: `See you soon bro`,
      time: '6:02 PM',
    },
    {
      sender: 'John Doe',
      message: `See you soon bro`,
      time: '6:02 PM',
    },
    {
      sender: 'Robert Henry',
      message: `See you soon bro`,
      time: '6:03 PM',
    },
    {
      sender: 'John Doe',
      message: `That's great, when are you coming?`,
      time: '6:03 PM',
    },
    {
      sender: 'Robert Henry',
      message: `This weekend.`,
      time: '6:03 PM',
    },
    {
      sender: 'Robert Henry',
      message: `Around 4 to 6 PM.`,
      time: '6:04 PM',
    },
    {
      sender: 'Robert Henry',
      message: `This weekend.`,
      time: '6:03 PM',
    },
    {
      sender: 'Robert Henry',
      message: `Around 4 to 6 PM.`,
      time: '6:04 PM',
    },
    {
      sender: 'John Doe',
      message: `Great, don't forget to bring me some mangoes.`,
      time: '6:05 PM',
    },

    {
      sender: 'Robert Henry',
      message: `Sure!`,
      time: '6:05 PM',
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');
  function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  function sendMessage() {
    if (inputMessage === '') {
      return setInputMessage('');
    }
    let t = getTime(new Date());
    setMessages([
      ...messages,
      {
        sender: currentUser.name,
        message: inputMessage,
        time: t,
      },
    ]);
    setInputMessage('');
  }
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 5,
        }}>
        <View style={styles.headerLeft}>
          <ProfileBackIcon
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          />
          <Image style={styles.userProfileImage} source={item.image} />

          <View style={{paddingLeft: 10, justifyContent: 'center'}}>
            <Text style={{color: '#000', fontWeight: '700', fontSize: 15}}>
              {item.name}
            </Text>
            {/* <Text style={{color: '#4AB5E3', fontWeight: '300', fontSize: 11}}>
              {chatUser.last_seen}
            </Text> */}
          </View>
        </View>

        <TouchableOpacity>
          <ProfileDotsIcon style={styles.dotsIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <FlatList
            style={{backgroundColor: '#E5E5E5'}}
            inverted={true}
            initialScrollIndex={0}
            data={JSON.parse(JSON.stringify(messages)).reverse()}
            renderItem={({item}) => (
              <View style={{margin: 8}}>
                <View
                  style={{
                    maxWidth: Dimensions.get('screen').width * 0.8,
                    backgroundColor:
                      item.sender == currentUser.name ? '#F2F3F5' : '#4AB5E3',
                    alignSelf:
                      item.sender === currentUser.name
                        ? 'flex-end'
                        : 'flex-start',
                    marginHorizontal: 10,
                    padding: 10,
                    borderRadius: 8,
                    borderTopLeftRadius:
                      item.sender === currentUser.name ? 8 : 0,
                    borderTopRightRadius:
                      item.sender === currentUser.name ? 0 : 8,
                  }}>
                  <Text
                    style={{
                      color:
                        item.sender === currentUser.name
                          ? '#798293'
                          : '#FFFFFF',
                      fontSize: 16,
                    }}>
                    {item.message}
                  </Text>
                  <Text
                    style={{
                      color: '#333',
                      fontSize: 14,
                      alignSelf: 'flex-end',
                    }}>
                    {item.time}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 5,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 5,
          }}>
          <MassagePlusIcon style={styles.plusIcon} onPress={rbsheetOpen} />
        </TouchableOpacity>
        <View style={styles.messageInputView}>
          <KeyboardStickyView
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
            }}>
            <TextInput
              defaultValue={inputMessage}
              style={styles.messageInput}
              placeholder="Type your message"
              onChangeText={text => setInputMessage(text)}
              placeholderTextColor="#798293"
              onSubmitEditing={() => {
                sendMessage();
              }}
            />
            <TouchableOpacity
              style={styles.messageSendView}
              onPress={() => {
                sendMessage();
              }}>
              <MassageSendIcon style={styles.sendIcon} />
            </TouchableOpacity>
          </KeyboardStickyView>
        </View>
      </View>
      {Platform.OS === 'ios' ? <KeyboardSpacer /> : null}
      <RBSheet
        ref={refRBSheet}
        keyboardAvoidingViewEnabled={true}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {backgroundColor: 'rgba(0,0,0,0.4)'},
          draggableIcon: {backgroundColor: '#D7DADF'},
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: '#FFFFFF',
            height: '19%',
          },
        }}>
        <BottomSheet
          onPress={() => refRBSheet.current.close()}
          data={data}
          setDataa={setDataa}
          closeCenter={() => refRBSheet.current.close()}
        />
      </RBSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginBottom: 10,
  },
  userProfileImage: {
    height: 30,
    width: 30,
    aspectRatio: 1,
    borderRadius: 80,
  },
  container: {
    backgroundColor: '#000',
    justifyContent: 'center',
    flex: 1,
  },
  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    borderColor: '#798293',
    borderWidth: 0.5,
    width: '80%',
    height: 50,
    // marginBottom: 5,
  },
  messageInput: {
    // height: 50,
    flex: 1,
    paddingHorizontal: 10,
    color: '#000',
    justifyContent: 'center',
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  backIcon: {
    width: 18,
    height: 18,
    marginHorizontal: 10,
  },
  dotsIcon: {
    width: 18,
    height: 18,
    marginHorizontal: 10,
  },
  plusIcon: {
    height: 48,
    width: 48,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  sendIcon: {
    height: 32,
    width: 32,
    paddingHorizontal: 8,
  },
  or: {
    color: '#08101F',
    fontSize: 12,
    alignSelf: 'center',
    paddingHorizontal: 5,
  },
  leftLine: {
    backgroundColor: '#F2F3F5',
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  rightLine: {
    backgroundColor: '#F2F3F5',
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  lineView: {
    flexDirection: 'row',
    // marginTop: 30,
  },
});
export default ChatScreen;
