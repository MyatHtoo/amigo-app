import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_WEB_ID,
  scopes: ['profile', 'email'], // what API you want to access on behalf of the user, default is email and profile
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  forceCodeForRefreshToken: false,
  iosClientId: process.env.EXPO_PUBLIC_IOS_ID,
});

const GoogleLogin = async () => {
  // check if users' device has google play services
  await GoogleSignin.hasPlayServices();

  // initiates signIn process
  const userInfo = await GoogleSignin.signIn();
  return userInfo;
};

// const processUserData = async (idToken: string, user: any) => {
//   const res = await fetch("http://172.25.116.112:4000/auth/google", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ idToken }),
//   });

//   const data = await res.json();

//   if (!res.ok) {
//     throw new Error(data.error);
//   }

//   console.log("APP TOKEN:", data.token);
//   console.log("USER:", data.user);

//   // Save token securely
//   // await SecureStore.setItemAsync("token", data.token);
// };


const googleSignIn = async () => {
  try {
    const response = await GoogleLogin();

    console.log(response.data);
    // retrieve user data
    // const { idToken, user } = response.data ?? {};
    // if (idToken) {
    //   await processUserData(idToken, user); // Server call to validate the token & process the user data for signing In
    // }
  } catch (error) {
    console.log('Error', error);
  }
};

export default function GoogleAuth() {
  return (
    <GoogleSigninButton onPress={googleSignIn} />
  )
}