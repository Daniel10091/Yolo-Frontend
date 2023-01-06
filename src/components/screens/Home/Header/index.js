import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

export default function Header () {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <View style={styles.headerColumn}>
          <TouchableOpacity 
            style={styles.headerProfileButton} 
            activeOpacity={0.6}
          >
            <Image 
              style={styles.headerProfileImage} 
              source={require('../../../../assets/images/avatars/person-female-7.jpg')} 
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerColumn}>
          <View style={styles.appLogo}>
            <Text style={styles.appLogoText}>Yolo</Text>
          </View>
        </View>
        <View style={styles.headerColumn}>
          <TouchableOpacity 
            style={styles.headerMessageButton} 
            activeOpacity={0.6}
          >
            <AntDesign style={styles.headerMessageIcon} name="message1" />
            <View style={styles.headerMessageNotifications} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
