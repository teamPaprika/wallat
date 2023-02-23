// @flow
import * as React from 'react';

import { Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const AppleLogo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" fill="url(#pattern0)" />
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_13234_72418" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_13234_72418"
        width="100"
        height="100"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAM3ElEQVR4nO2dd3hUVRrG33PLzKQnBAIkBClKBCIQEAQBEYEVsCzoAqsPNlRcFOkEF1Z3LDRBASFSFwu4roEFlRKRB5BA6NKbQIAkxIQAaZMyM7ec/UOzDzX3zi0zyTi//xjOfb8v951zzj3lngECBAgQIECAAAECBAgQwLsQXyegFmoHhzKuGwS5G0BawyU3gItEgYEFAkJAIINDJTjiAEEFrMiDjR4Ex+4EL+wjdsi+/hvUUGMNoa8jHhbmVZThMRTTBBTSEAgaxXgA0cSBOswJhNCNsMnLyDTkGZmvUdQoQ+hruAcc+08Uyv2RS6NATQrEAIgjVxHDrEGI9B6ZilyTInmMzw2hAMFEZjwuYxSy5XhIXk6AB9CIyUYceYdMl77wcvRb8JkhdBBYxDHvI5uOwhUa4qs8biCWFCOezEWo/L6v+hyfGEKTmfE4Sz/AVWrzRXxFGpJSNGFGkg+lFd4O7VVD6GS+PbKl75AlN/JmXE0QAHczZ1GHe4rMdh/3ZlivQCexS3BIegWVvu+3PMIKitbMx2SePMEb4Uy/OTQZjfArs7tW1IrqaMGcw71yVzIRBWaGYcwUp2+xQ3CanK/1ZgDAGfluZJBsOoV7yMwwphlCJzLJOCB9jSLKmxXD61yjVuwTf6KT+DfNCmFKk0VHMotxTB5eOyYrNMAD6ML1IFPFdKOlOaMF6Vh2BX6Whpo2yvY1BEArdpUZZgAGN1l0FLPQ781IYleRBdJgs0IYZgh9ixmPo/Lf/NqMtuxqMs88M6rC6IZOZgdjr/QfuGvZGEMtBEA7NpV8Ig3xRihdUDsa4BDJQiG1GJFQjaOqZsyXBnkjnP5OPZPZj0LZO2YEEwl1cQkRzM8IpvvgIidBpAtwIgexcEFEQxCuMVxyZ1SSJJTJHXEFjVFCtf2dXqwZ14fUDB3Pfo590gtGJXNbgomExsxeRGIqmSVt1CJB/84OQBHGIUfuglKV5vjAjKqwmqCT+XbYLxyE06R+oy6pRBOyCEXyZPI5nEZIUjtsKGFm4CJ9rdqZZh+ZURVaE/R5JgsX5MZGJgMACIKM5uxKSNIrZInmRdtqoXZYUMwuwWnpOZTf9KTpQzOqwnsMncyPxg5hrtHJoCmTg/pyTzILmYZr3wZqt7TCOXEzsuRYAD43oyoFj6AUBK8yhfhFjjQ0iwR2LZZKTxN4fyRDR7Lf4Zj0JNr61gxAiyE/WZ+AgO+xUQQOGLAAbgFFW2YK+Vierl9MO3QS9yCZKe7yZQ6AFkO2W3YDpDMA4KQMrBWASo3RWQCJzBiyQJ6nUcHv8MgQut32CEC33PBhMQVWiUCWh1O7BEAi8z75VH7Hswv9G0/nsobf8kkkAYbxQHfWM3vbsF8HzLgV1beQ7kE4XNZ8AEF3LJQpA6tFwKHQL8eSy/iGNvRFB17TUV9DnLYhqM4MAGjOAG/wQItqZK2giKGPBMy4PeoNYeizqsqFEmAoD/yJu716S/ZfZD5Oqo77B0NVk0W3IRSMtRC/LV6qJ5cC3whA4e+VIYK4EEvDzBqB+wPqagixdoenZgBAHAFetwBtfg9zF1keMKN61E5L99QcwQZgMA80k67gojhWs84fBJVT0eRh3X1wR24hGS+69IncmYnz7R+bpa0VGyOc44PcJwCAkYjrH69+uEfpGsU+hFIQpFsdAPTtUGeQQLq7zujSqIaGyUdr9FNbMFtJn7OmcXa7vdoRtHIfkhEUD71mANlmmlEbqJCCiLVRaVulcsqGCLSF7mzITdMtf1DKBdvDSmWUDSEGGELJz7o1/IBSIayDUhk1htTTnYlMftGt4Qe4REsDpTIqxiEkVHcmHM7r1vADBMqHKZVRMzBUFFGEdRbr1vADBGpRfDhSYQjVX0MiUKZbww9wSWywUhlTX9gJcCOUKE8dqulD9H+7S6C/lvkBPCMpLnarqSEO3ZlINuN2qNRieCpUKJVR04foryEimunW8AM4VlS8l8qGUHJFdyYsvVe3hh8Qylf8qlRGjSEGzEHR9vo1aj9WIhxWKqNsCGPAKJuSXro1/ACRWDOUyigb8lDlJQDlOnNpTHdaE3Rq1GosjBunpDaKc3qKC1SEgNLt5ARAO2lNRqQMtpbHTQbOmfYuydD4NXPM0j7mSHj+SHHraD0ad4dklaWNelpxgU7dJod060xQJGtJ5Bq1YmZZEnLEUDm4bnHk8m4Z+h+jvcjwxTMi0rO7FZYI4boG0b1iMvavnDBC8UutLoiEbVqSOC7UwdiSrjglRKGM8kzzEqnGLbMqQSr5uXrNAIAwrnyzmnIqA7l2Aup3i1AAqc7mmOLohCLZ+v/Pz4sRz6WmDmLV6vgau32Q5XBxK3X70aqBIxIExrJQTVlVhpCeKAOwU03ZCsphRlkSVlS0gHxTi3hZDrJmhlz6TI1OTaAgqlNqdkWc7hdaW4afLVo2atQlNWXVV0VC/q1U5LwUjtGlXbHLfed1mANC3aHvfdclSXVcH/FByqQHN+U/9KQRWnFBBaqaK8ATQyzOVAB3nIvZ6o5Fcmln5EvVzzC7KEuKGaumt2m9ByV7S+9bWyEF6X6hlSMSbEy56l3+qg0hnVEKSr6/+XM3ZTG3vA3mlLWFi6rrHs6IkQ2mru+yRm1sbzNszvwfDxS1iTFCq23kqdyFYyapHlx7+vSw5Pp/5MnBmODojC2uOA9lgD1C/YHTNnae6fGFJjMhxZ7yQ36P3kbpNQvOSvGkvJZX2nYBpMtuoT7mld2Hch3nk/GQ8bDl0sjRjx30KGmzmJIyZcLKnIGz3AYdTNE4OLdir71vKEBUb+Lz+PlaYrhpyyvuxXRHe11mAIAABunuuAUfbbz/A11CBjAxxT77q5wBhpkBAIlhpz/1xAxA42vRY9b3dGSKEYYdfkwAdLRe+f6dfhkDQLz7Ig+lIG8umLFpzaV+fSg17lCK+OA8575fo8Ox5H6Pdvt7XEMIAW1PipKNPE+DAtjnqvfkpPU9smdv6uC1tZPVaYltJm3okesMy+pjY4zdB94h6uh7npoB6DhaY8r6rheOCPWaaL3+TgQRkXbmCr51NC3/q731CbfR+gBwIrW1ZUuYbcVuV4NBDsoTAIh2RuDQyRdwxVVXt37LsLP5W99+uqGWazXP0bTmyh4PI4LhzUsl5cg2IXZgXmZsyewNHVOGr3tCceuMWlJTW1vmpXX4ZK4truRHZ/zgKjMA4JqtBIn3LUJCuL71OAvjRnxowV+0Xq+r5fk0rcPSjc74V/RoKBFKBLkVV7S3EV8+bdijR9Zr0Vi8qd2Aq4Jt/GmxTpciaql2sGShDMRz/bH/qrbVhj4NMlZ/OW6E5sPOdHcFb6/vfuGQEG1403U7ohmn2Jh1ZEVBOBTKuA4EsdJBhnVnNg2uyDtQbJMjWTZWFIKbOwlJqiBcpyLZ0j5HCmtcKFs9OsCMoUD9y4lYf8Gz4xVbhZ3J33JUboRVgzWfOaLbkC8zmsfsuNo8J08O9rsj/uoXNsPms0MhyMp+xliviT3rbL9n7lj7RT0xdc/zP981s6AnnzckxIT+xNdcrnMevVstRBhf/e4dnhHRK3rXS3rNAH47/kU3//2q4PSYF0NKMsXwvjdPudd2yq0VaF7vIOSSJigRIm75f0Io+tTb8dHCcRNnGxHPsMWidSvz97zxYmj0BTH8AepnpjhZEXXrHkNURSQuO29cWugdk7HiiwkjRxgVy/A7tzSt7bJ1ziYv+1tNAQBOZmDJ7oEdeT1BCEXfmPRvl49/c6CRMUy5a3M23j9nuyt2jOiHm+sJgJj8RNnmDl+WMjr5NTP0TWFRWttxW92NZlfIvF9VlVBGoH0sOZNe7nd0lhn6pt6sLzcnPpVeGft1vuQfj8TxbJnrUf7Snwf0O73JrBimf3tX/NCy4Qmh7p7jYrTxR8p6kQ78lXMJtpJuz/Y+ftnMOF5rTpakJS3a6o4dXlbLmrBwxk1787kpw/ofMe1Xda7Hqzfnsw3t2v1Cw9ceF+p4ZapFD4RQtOevXryHVDw2tP8hr53v5ZNv6+K0pFFHhOjp2VKoYTO5RtKCK3F0tFwZ88yjx5d7O7bvmg8KMmtDp+TzNHxyjhga7rM8rqMFV1KSwBTNHd7/8LvEyyuXVdSI9nzJD+1GXxTDxp4Sou4SvDx2sRAJLfnii4ls8bRn+h5b6tXgt6FGGFLF/E1tmrpFmz2XBj2eKUTWkUxKj4OMFlzx1Xi2fG241fHuC73OBH6+W4mUba0b0Erb8EJqfbxAsrXMo8EhLpnTlK8FEuK5MkcDpvJYBHFuIBHyshFdj5r6i51aqbGG3IzdbmfqPbDuQYGShwhIq3LKxDopH8EAQU6QYAagFtBKlkilHFAeBDE/iIgHLYSmv9T38AFv72YJECBAgAABAgQIECBAgNrC/wBsi3M5Gc70EAAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);

const AppleSignin = () => {
  const googleSignin = () => {
    // if (typeof window !== 'undefined') {
    //     window.gtag('event', 'google-signin', { type: 'click google signin' });
    // }
    // firebase
    //     .auth()
    //     .signInWithPopup(provider)
    //     .then(result => {
    //         /** @type {firebase.auth.OAuthCredential} */
    //         const { credential } = result;
    //         // console.log(credential);
    //
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         const token = credential.accessToken;
    //         // The signed-in user info.
    //         const { user } = result;
    //         sendSignupAutoEmail(user.uid, user.email, user.displayName).then(() => true);
    //     })
    //     .catch(error => {
    //         // Handle Errors here.
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // The email of the user's account used.
    //         const { email } = error;
    //         // The firebase.auth.AuthCredential type that was used.
    //         const { credential } = error;
    //         // ...
    //     });
  };

  return (
    <Button
      onClick={googleSignin}
      style={{
        width: '360px',
        height: '48px',
        backgroundColor: '#1A1B21',
        display: 'flex',
        justifyContent: 'flex-start',
        borderRadius: '12px',
        padding: '40px',
        gap: '20px',
        // boxShadow: '0px 2px 3px rgba(36, 47, 83, 0.15)',
      }}
    >
      <AppleLogo />
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: '500',
          fontStyle: 'inter',
          color: '#fff',
        }}
      >
        Continue with Apple
      </Typography>
    </Button>
  );
};

export default AppleSignin;
