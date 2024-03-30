import React, { useState, useEffect } from "react";
import { Button, Platform, StyleSheet, Switch, Text, View } from "react-native";

const Settings = () => {
  const [pickerMode, setPickerMode] = useState(false);
  const [inline, setInline] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [resend, setResend] = useState();
  const [login, setLogin] = useState();
  const [checkBlock, setCheckBlock] = useState();
  const [interval, setInterval] = useState();

  // useEffect(() => {
  //   if (timeLeft === 0) {
  //     console.log("TIME LEFT IS 0");
  //     // setResend(true);
  //     // setTimeLeft(null);
  //     if (login) {
  //       setLogin(false);
  //       // checkBlock();
  //     }
  //   }

  // //   // exit early when we reach 0
  // //   if (!timeLeft) return;

  // //   // save intervalId to clear the interval when the
  // //   // component re-renders
  // //   const intervalId = setInterval(() => {
  // //     setTimeLeft(timeLeft - 1);
  // //     if (login) {
  // //       setTimeFormat(msToTime(timeLeft * 1000));
  // //     }
  // //   }, 1000);

  // //   // clear interval on re-render to avoid memory leaks
  // //   return () => clearInterval(intervalId);
  // //   // add timeLeft as a dependency to re-rerun the effect
  // //   // when we update it
  // }, [timeLeft]);

  // useEffect(() => {
  //   getLoginInfo()
  //   console.log("Function Runnig")
  // }, []);
  // const getLoginInfo = async () => {
  //   const isLogin = await AsyncStorage.getItem("IS_LOGIN");
  //   if (isLogin === "true") {
  //     setLogin(true);
  //     const time = await AsyncStorage.getItem("TIME");
  //     var sec = new Date().getTime();
  //     var diff = Number(time) - Number(sec);
  //     if (diff > 1000) {
  //       setTimeLeft(Math.trunc(diff / 1000));
  //       setTimeFormat(msToTime(diff));
  //     } else {
  //       setLogin(false);
  //       try {
  //         var val = "false";
  //         await AsyncStorage.setItem("IS_LOGIN", val);
  //       } catch (e) {
  //         console.error(e);
  //       }
  //     }
  //   }
  // };

  return (
    <View style={style.root}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inlineSwitchContainer: {
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
  },
  inlineSwitchText: {
    fontSize: 18,
    marginRight: 8,
  },
});

export default Settings;
/* import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import UserInactivity from 'react-native-user-inactivity';

export default () => {
  const [active, setActive] = useState(true);
  const [timer, setTimer] = useState(2000);

  return (
    <View style={{ flex: 1 }}>
      <UserInactivity
        isActive={active}
        timeForInactivity={timer}
        onAction={isActive => { setActive(isActive); }}
        style={{ flex: 1, paddingTop: '10%' }}
      >
        <Button id="btn-1" title="1 Press this to simulate activity" />
        <Button id="btn-2" title="2 Press this to simulate activity" />
        <Text id="text-1" style={{ textAlign: 'center' }}>Type below to simulate activity</Text>
        <TextInput
          id="text-input-1"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChange={() => { setActive(true); }}
          textContentType="creditCardNumber"
          value={timer.toString(10)}
          onChangeText={text => setTimer(Number.parseInt(text || 0, 10))}
        />
      </UserInactivity>
      <View style={{ flex: 3, backgroundColor: '#fcfcaa', }}>
        <Text style={{ textAlign: 'center' }}>{active ? 'ACTIVE' : 'NOT ACTIVE'}</Text>
        <Button title="Manually set to Active" onPress={() => { setActive(true); }} />
      </View>
    </View>
  );
} */
// import React, {
//   useState,
//   useEffect,
//   useCallback,
//   useRef,
//   Fragment,
// } from 'react';
// import moment from 'moment';

// const SessionTimeout = () => {
//   const [events, setEvents] = useState(['click', 'load', 'scroll']);
//   const [second, setSecond] = useState(0);
//   const [isOpen, setOpen] = useState(false);
//   const {
//     authState: { isAuthenticated },
//     logout,
//   } = useAuth();

//   let timeStamp;
//   let warningInactiveInterval = useRef();
//   let startTimerInterval = useRef();

//   // start inactive check
//   let timeChecker = () => {
//     startTimerInterval.current = setTimeout(() => {
//       let storedTimeStamp = sessionStorage.getItem('lastTimeStamp');
//       warningInactive(storedTimeStamp);
//     }, 60000);
//   };

//   // warning timer
//   let warningInactive = (timeString) => {
//     clearTimeout(startTimerInterval.current);

//     warningInactiveInterval.current = setInterval(() => {
//       const maxTime = 2;
//       const popTime = 1;

//       const diff = moment.duration(moment().diff(moment(timeString)));
//       const minPast = diff.minutes();
//       const leftSecond = 60 - diff.seconds();

//       if (minPast === popTime) {
//         setSecond(leftSecond);
//         setOpen(true);
//       }

//       if (minPast === maxTime) {
//         clearInterval(warningInactiveInterval.current);
//         setOpen(false);
//         sessionStorage.removeItem('lastTimeStamp');
//         logout();
//       }
//     }, 1000);
//   };

//   // reset interval timer
//   let resetTimer = useCallback(() => {
//     clearTimeout(startTimerInterval.current);
//     clearInterval(warningInactiveInterval.current);

//     if (isAuthenticated) {
//       timeStamp = moment();
//       sessionStorage.setItem('lastTimeStamp', timeStamp);
//     } else {
//       clearInterval(warningInactiveInterval.current);
//       sessionStorage.removeItem('lastTimeStamp');
//     }
//     timeChecker();
//     setOpen(false);
//   }, [isAuthenticated]);

//   // handle close popup
//   const handleClose = () => {
//     setOpen(false);

//     resetTimer();
//   };

//   useEffect(() => {
//     events.forEach((event) => {
//       window.addEventListener(event, resetTimer);
//     });

//     timeChecker();

//     return () => {
//       clearTimeout(startTimerInterval.current);
//       //   resetTimer();
//     };
//   }, [resetTimer, events, timeChecker]);

//   console.log(second);

//   if (!isOpen) {
//     return null;
//   }

//   // change fragment to modal and handleclose func to close
//   // return <Fragment />;
// };

// export default SessionTimeout;
