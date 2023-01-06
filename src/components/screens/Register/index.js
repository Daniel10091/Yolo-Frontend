import * as React from 'react';
import { View } from 'react-native';

export default function RegisterScreen () {
  
  function passwordGenerator () {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return password;
  }

  React.useEffect(() => {

    const password = passwordGenerator();
    console.log(password);

  }, [])

  return (
    <View/>
  );
}
