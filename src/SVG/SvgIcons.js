import React from 'react';
import Svg, {Circle, Defs, Path, Rect} from 'react-native-svg';
const ProfileEmailIcon = ({style, onPress}) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.6154 1.73047H2.38462C1.61991 1.73047 1 2.35038 1 3.11508V14.8843C1 15.649 1.61991 16.2689 2.38462 16.2689H17.6154C18.3801 16.2689 19 15.649 19 14.8843V3.11508C19 2.35038 18.3801 1.73047 17.6154 1.73047Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 3.46094L9.11385 10.384C9.36264 10.5912 9.6762 10.7047 10 10.7047C10.3238 10.7047 10.6374 10.5912 10.8862 10.384L19 3.46094"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const LockIcon = ({style, onPress}) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.53809 12.6922C8.53809 12.325 8.68396 11.9728 8.94363 11.7132C9.2033 11.4535 9.55548 11.3076 9.9227 11.3076H19.615C19.9822 11.3076 20.3344 11.4535 20.5941 11.7132C20.8537 11.9728 20.9996 12.325 20.9996 12.6922V19.6153C20.9996 19.9825 20.8537 20.3347 20.5941 20.5944C20.3344 20.854 19.9822 20.9999 19.615 20.9999"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.92285 11.3077V7.84615C9.92285 6.56087 10.4334 5.32824 11.3423 4.41941C12.2511 3.51058 13.4837 3 14.769 3C16.0543 3 17.2869 3.51058 18.1958 4.41941C19.1046 5.32824 19.6152 6.56087 19.6152 7.84615V11.3077"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.76923 20.9999C7.29863 20.9999 8.53846 19.7601 8.53846 18.2307C8.53846 16.7013 7.29863 15.4614 5.76923 15.4614C4.23983 15.4614 3 16.7013 3 18.2307C3 19.7601 4.23983 20.9999 5.76923 20.9999Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.53809 18.2307H15.4612V20.9999"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 18.2307V20.9999"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EyeIcon = ({style, onPress}) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18.6426 6.07048C18.8727 6.32539 19 6.65657 19 6.99994C19 7.34332 18.8727 7.67449 18.6426 7.9294C17.186 9.497 13.8704 12.549 10 12.549C6.12956 12.549 2.81403 9.497 1.35741 7.9294C1.12735 7.67449 1 7.34332 1 6.99994C1 6.65657 1.12735 6.32539 1.35741 6.07048C2.81403 4.50289 6.12956 1.45093 10 1.45093C13.8704 1.45093 17.186 4.50289 18.6426 6.07048Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.0001 9.77436C11.5324 9.77436 12.7746 8.53217 12.7746 6.99985C12.7746 5.46753 11.5324 4.22534 10.0001 4.22534C8.46778 4.22534 7.22559 5.46753 7.22559 6.99985C7.22559 8.53217 8.46778 9.77436 10.0001 9.77436Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const FacebookIcon = ({style, onPress}) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill="#3F51B5"
        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
      />
      <Path
        fill="#FFF"
        d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
      />
    </Svg>
  );
};
const GoogleIcon = ({style, onPress}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={style}
      onPress={onPress}>
      <Path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <Path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <Path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <Path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </Svg>
  );
};
const AppleIcon = ({style, onPress}) => {
  return (
    <Svg
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={style}
      onPress={onPress}>
      <Path d="M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z" />
    </Svg>
  );
};
const UserIcon = ({style}) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.0001 13.3845C13.9119 13.3845 15.4617 11.8347 15.4617 9.92296C15.4617 8.01121 13.9119 6.46143 12.0001 6.46143C10.0884 6.46143 8.53857 8.01121 8.53857 9.92296C8.53857 11.8347 10.0884 13.3845 12.0001 13.3845Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.0874 18.7846C6.70528 17.7704 7.57366 16.9322 8.60907 16.3505C9.64449 15.7689 10.8121 15.4634 11.9997 15.4634C13.1873 15.4634 14.3549 15.7689 15.3903 16.3505C16.4258 16.9322 17.2941 17.7704 17.912 18.7846"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const UserHighlightIcon = ({style}) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.9359 14.7267C13.9242 14.7267 15.5359 13.0985 15.5359 11.09C15.5359 9.08155 13.9242 7.45337 11.9359 7.45337C9.94771 7.45337 8.33594 9.08155 8.33594 11.09C8.33594 13.0985 9.94771 14.7267 11.9359 14.7267Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.3361 22.0001C17.7304 20.8128 16.8128 19.817 15.6839 19.1218C14.5549 18.4266 13.2583 18.0588 11.9361 18.0588C10.614 18.0588 9.31733 18.4266 8.18841 19.1218C7.05948 19.817 6.14185 20.8128 5.53613 22.0001"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.936 17.2481C21.0714 15.7521 21.7698 13.965 21.9521 12.0889C22.1345 10.2128 21.7935 8.32258 20.9678 6.63205C20.1421 4.94151 18.8646 3.51809 17.2798 2.52279C15.695 1.52748 13.8661 1 12 1C10.1339 1 8.305 1.52748 6.72018 2.52279C5.13537 3.51809 3.85788 4.94151 3.03217 6.63205C2.20647 8.32258 1.86551 10.2128 2.04786 12.0889C2.23021 13.965 2.92858 15.7521 4.064 17.2481"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const Lockicon = ({style}) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.53809 12.6922C8.53809 12.325 8.68396 11.9728 8.94363 11.7132C9.2033 11.4535 9.55548 11.3076 9.9227 11.3076H19.615C19.9822 11.3076 20.3344 11.4535 20.5941 11.7132C20.8537 11.9728 20.9996 12.325 20.9996 12.6922V19.6153C20.9996 19.9825 20.8537 20.3347 20.5941 20.5944C20.3344 20.854 19.9822 20.9999 19.615 20.9999"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.92285 11.3077V7.84615C9.92285 6.56087 10.4334 5.32824 11.3423 4.41941C12.2511 3.51058 13.4837 3 14.769 3C16.0543 3 17.2869 3.51058 18.1958 4.41941C19.1046 5.32824 19.6152 6.56087 19.6152 7.84615V11.3077"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.76923 20.9999C7.29863 20.9999 8.53846 19.7601 8.53846 18.2307C8.53846 16.7013 7.29863 15.4614 5.76923 15.4614C4.23983 15.4614 3 16.7013 3 18.2307C3 19.7601 4.23983 20.9999 5.76923 20.9999Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.53809 18.2307H15.4612V20.9999"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 18.2307V20.9999"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const LockHighlightIcon = ({style}) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.76904 12.8461C7.76904 12.3973 7.94734 11.9668 8.26471 11.6495C8.58208 11.3321 9.01252 11.1538 9.46135 11.1538H21.3075C21.7563 11.1538 22.1868 11.3321 22.5041 11.6495C22.8215 11.9668 22.9998 12.3973 22.9998 12.8461V21.3077C22.9998 21.7565 22.8215 22.1869 22.5041 22.5043C22.1868 22.8217 21.7563 23 21.3075 23"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.46143 11.1538V6.92308C9.46143 5.35218 10.0855 3.84562 11.1963 2.73483C12.307 1.62404 13.8136 1 15.3845 1C16.9554 1 18.462 1.62404 19.5727 2.73483C20.6835 3.84562 21.3076 5.35218 21.3076 6.92308V11.1538"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.38462 22.9999C6.25389 22.9999 7.76923 21.4846 7.76923 19.6153C7.76923 17.7461 6.25389 16.2307 4.38462 16.2307C2.51534 16.2307 1 17.7461 1 19.6153C1 21.4846 2.51534 22.9999 4.38462 22.9999Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.76904 19.6152H16.2306V22.9998"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 19.6152V22.9998"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const Eyeicon = ({style, onPress}) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18.6426 6.07048C18.8727 6.32539 19 6.65657 19 6.99994C19 7.34332 18.8727 7.67449 18.6426 7.9294C17.186 9.497 13.8704 12.549 10 12.549C6.12956 12.549 2.81403 9.497 1.35741 7.9294C1.12735 7.67449 1 7.34332 1 6.99994C1 6.65657 1.12735 6.32539 1.35741 6.07048C2.81403 4.50289 6.12956 1.45093 10 1.45093C13.8704 1.45093 17.186 4.50289 18.6426 6.07048Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.0001 9.77436C11.5324 9.77436 12.7746 8.53217 12.7746 6.99985C12.7746 5.46753 11.5324 4.22534 10.0001 4.22534C8.46778 4.22534 7.22559 5.46753 7.22559 6.99985C7.22559 8.53217 8.46778 9.77436 10.0001 9.77436Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EmailHighlightIcon = ({style}) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20.4615 4H3.53846C2.68879 4 2 4.68879 2 5.53846V18.6154C2 19.4651 2.68879 20.1538 3.53846 20.1538H20.4615C21.3112 20.1538 22 19.4651 22 18.6154V5.53846C22 4.68879 21.3112 4 20.4615 4Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2 5.9231L11.0154 13.6154C11.2918 13.8457 11.6402 13.9718 12 13.9718C12.3598 13.9718 12.7082 13.8457 12.9846 13.6154L22 5.9231"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const HideEyeIcon = ({style, onPress}) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20.9694 9.61255C21.6137 10.189 22.1562 10.7486 22.5632 11.1894C22.8443 11.5009 23 11.9057 23 12.3254C23 12.7451 22.8443 13.1499 22.5632 13.4614C20.7828 15.3774 16.7305 19.1075 12 19.1075H11.3218"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.69298 17.6324C4.72894 16.5324 2.95429 15.1241 1.43684 13.4613C1.15565 13.1498 1 12.745 1 12.3253C1 11.9057 1.15565 11.5009 1.43684 11.1893C3.21714 9.27338 7.26947 5.54321 12 5.54321C13.8647 5.58219 15.6897 6.08944 17.307 7.01833"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21.3257 3L2.6748 21.6509"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.60925 14.7161C8.97243 14.0831 8.61267 13.2233 8.60889 12.3254C8.60889 11.426 8.96616 10.5635 9.60211 9.92755C10.2381 9.2916 11.1006 8.93433 12 8.93433C12.8979 8.93811 13.7576 9.29787 14.3907 9.93469"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.95 14.021C14.6482 14.5369 14.2153 14.9639 13.6953 15.2587"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const EmailIcon = ({style}) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20.4615 4H3.53846C2.68879 4 2 4.68879 2 5.53846V18.6154C2 19.4651 2.68879 20.1538 3.53846 20.1538H20.4615C21.3112 20.1538 22 19.4651 22 18.6154V5.53846C22 4.68879 21.3112 4 20.4615 4Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2 5.9231L11.0154 13.6154C11.2918 13.8457 11.6402 13.9718 12 13.9718C12.3598 13.9718 12.7082 13.8457 12.9846 13.6154L22 5.9231"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ArrowIcon = ({style}) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8 1L1.16831 7.62308C1.11518 7.67142 1.07283 7.72981 1.04388 7.79464C1.01494 7.85947 1 7.92936 1 8C1 8.07064 1.01494 8.14054 1.04388 8.20536C1.07283 8.27019 1.11518 8.32858 1.16831 8.37692L8 15"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export {
  ProfileEmailIcon,
  EyeIcon,
  LockIcon,
  FacebookIcon,
  GoogleIcon,
  AppleIcon,
  UserIcon,
  LockHighlightIcon,
  Lockicon,
  UserHighlightIcon,
  Eyeicon,
  EmailHighlightIcon,
  HideEyeIcon,
  EmailIcon,
  ArrowIcon,
};
