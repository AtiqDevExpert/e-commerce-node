import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {EmailHighlightIcon, EmailIcon, ArrowIcon} from '../../SVG/SvgIcons';
import Button from '../../component/Button/button';

import styles from './style';

const ResetPassword = ({navigation}) => {
  const [Efocus, setEFocus] = useState(false);

  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.view}>
        <ScrollView>
          <TouchableOpacity onPress={() => navigation.goBack('login')}>
            <ArrowIcon style={styles.arrowicon} />
          </TouchableOpacity>
          <Text style={styles.topText}>Reset password</Text>
          <Text style={styles.detailtext}>
            Enter the email associated with your account{'\n'} and we’ll send
            you instructions to reset your password
          </Text>
          <Text style={styles.textemail}>Email</Text>
          <View
            style={[
              styles.forminputView,
              {borderColor: Efocus ? '#000' : '#F2F3F5'},
            ]}>
            {!Efocus ? (
              <EmailIcon style={styles.userIcon} />
            ) : (
              <EmailHighlightIcon style={styles.userIcon} />
            )}
            <TextInput
              placeholder={'Enter your email'}
              placeholderTextColor="#798293"
              onChangeText={text => {
                setEFocus(text);
              }}
              style={{
                height: 50,
                borderRadius: 10,
                fontSize: 15,
                color: 'black',
              }}
            />
          </View>
          <Button
            onPress={() => navigation.navigate('resend')}
            text={'Continue'}
            color={Efocus ? '#fff' : '#4AB5E3'}
            backgroundColor={Efocus ? '#000' : null}
            fontSize={15}
            height={50}
            width={'80%'}
            borderWidth={1}
            marginTop={50}
            marginBottom={10}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default ResetPassword;
