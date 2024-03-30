import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal
} from 'react-native';
import React, { useState } from 'react';
import {
  EditProfileBusinessIcon,
  EditProfileCircle,
  ProfileBackIcon,
  EditProfileEmailIcon,
  EditProfilePhoneIcon,
  EditProfileAddressIcon,
  ProfileDotsIcon,
  EditProfileBusinessHighLightIcon,
  EditProfileEmailHighLightIcon,
  EditProfilePhoneHighLightIcon,
  EditProfileAddressHighLightIcon,
} from '../../SVG/Profile/ProfileVectors';
import Button from '../../component/Button/button';
import { FormInput } from '../../utilis/Text_input';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import ImagePicker from 'react-native-image-crop-picker';
import { CrossIcon } from '../../SVG/Home/Svgs/Icons';
import PickerButton from '../../component/Button/pickerButton';
const EditProfile = () => {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState(false);
  const [text, setText] = useState('Add Profile Picture');
  const [image, setImage] = useState('');
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const takePhotoFromCamera = () => {
    setVisible(false);
    ImagePicker.openCamera({
      width: 100,
      height: 100,
      cropping: true,
    }).then(image => {
      setImage(image.path);
      setText('Change Profile Picture');
    });
  };
  const takePhotoFromGallery = () => {
    setVisible(false);
    ImagePicker.openGallery({
      width: 100,
      height: 100,
      cropping: true,
    }).then(image => {
      setImage(image.path);
      setText('Change Profile Picture');
    });
  };


  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 30,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#ffff',
        }}>
        <ProfileBackIcon
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Edit Profile</Text>
        <ProfileDotsIcon style={styles.dotsIcon} />
      </View>

      <ScrollView>
        <View style={styles.subContainer}>
          {image === '' ? (
            <View
              style={{
                overflow: 'hidden',
                width: 100,
                height: 100,
                borderRadius: 100,
              }}>
              <EditProfileCircle style={styles.circle} />
            </View>
          ) : (
            <>
              <View
                style={{
                  overflow: 'hidden',
                  borderRadius: 100,
                  width: 100,
                  height: 100,
                }}>
                <Image source={{ uri: image }} style={styles.circle} />
              </View>
            </>
          )}
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text style={styles.addLogo}>{text}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Business Name</Text>
          <Text style={styles.maxNumber}>Max 50 character (0/50)</Text>
        </View>
        <View
          style={[
            styles.forminputView,
            { borderColor: name ? '#000' : '#F2F3F5' },
          ]}>
          {!name ? (
            <EditProfileBusinessIcon style={styles.userIcon} />
          ) : (
            <EditProfileBusinessHighLightIcon style={styles.userIcon} />
          )}
          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => {
              setName(text);
            }}
            style={{
              height: 50,
              borderRadius: 10,
              fontSize: 15,
              color: 'black',
            }}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>Email</Text>
          <TouchableOpacity>
            <Text style={styles.verifyEmail}>Verify Email</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.forminputView,
            { borderColor: email ? '#000' : '#F2F3F5' },
          ]}>
          {!email ? (
            <EditProfileEmailIcon style={styles.userIcon} />
          ) : (
            <EditProfileEmailHighLightIcon style={styles.userIcon} />
          )}
          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => setEmail(text)}
            style={{ height: 50, borderRadius: 10, fontSize: 15, color: 'black' }}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>Phone Number</Text>
        </View>
        <View
          style={[
            styles.forminputView,
            { borderColor: phone ? '#000' : '#F2F3F5' },
          ]}>
          {!phone ? (
            <EditProfilePhoneIcon style={styles.userIcon} />
          ) : (
            <EditProfilePhoneHighLightIcon style={styles.userIcon} />
          )}
          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => setPhone(text)}
            style={{ height: 50, borderRadius: 10, fontSize: 15, color: 'black' }}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>Address</Text>
        </View>
        <View
          style={[
            styles.forminputView,
            { borderColor: address ? '#000' : '#F2F3F5' },
          ]}>
          {!address ? (
            <EditProfileAddressIcon style={styles.userIcon} />
          ) : (
            <EditProfileAddressHighLightIcon style={styles.userIcon} />
          )}
          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => setAddress(text)}
            style={{ height: 50, borderRadius: 10, fontSize: 15, color: 'black' }}
          />
        </View>
        {/* <Modal isVisible={visible}>
          <View style={styles.ModalView}>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.modalIcon}>
              <CrossIcon style={styles.modalIcon} />
            </TouchableOpacity>

            <Text style={{ color: '#08101F' }}> Click your desired Button </Text>
            <View style={styles.ModalBtnView}>
              <PickerButton
                text={'Open camera'}
                color={'#08101F'}
                fontSize={15}
                height={45}
                width={'40%'}
                marginTop={50}
                backgroundColor="#fff"
                borderWidth={1}
                borderColor="#9BA2AE"
                marginBottom={10}
                onPress={takePhotoFromCamera}
              />

              <PickerButton
                text={'Open Gallery'}
                color={'#08101F'}
                fontSize={15}
                height={45}
                width={'40%'}
                marginTop={50}
                backgroundColor="#fff"
                borderWidth={1}
                borderColor="#9BA2AE"
                marginBottom={10}
                onPress={takePhotoFromGallery}
              />
            </View>
          </View>
        </Modal> */}
      </ScrollView>
      <View>
        <Button
          text={'Update Detail'}
          color={'#fff'}
          fontSize={15}
          height={50}
          width={'80%'}
          // marginTop={'60%'}
          marginBottom={10}
          backgroundColor={
            name && email && phone && address && image ? '#4AB5E3' : '#9BA2AE'
          }
          disabled={name && email && phone && address && image ? false : true}
        // onPress={onChangeHandler}
        />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
