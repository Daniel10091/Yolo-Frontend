import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import { Theme } from '../../../constans';

export default function TimelineItem ( props ) {

  const data = props.data;

  return (
    <TouchableOpacity
      style={styles.timeline}
      activeOpacity={0.8}
    >
      <View style={styles.timelineContent}>
        <LinearGradient
          colors={[Theme.Colors.DeepPink, Theme.Colors.EletricViolet]}
          style={styles.timelineBackground} 
        />
        <View style={styles.timelineAvatarContent}>
          {/* <Image style={styles.timelineAvatar} source={{uri: data.avatar}} /> */}
          <Image style={styles.timelineAvatar} source={{
            uri: data.gender == 'F' ? 
              'http://cfm038:19000/src/assets/images/avatars/person-female-' + data.code + '.jpg' : 
              'http://cfm038:19000/src/assets/images/avatars/person-male-' + data.code + '.jpg'
          }} 
          />
        </View>
      </View>
      <View style={styles.timelineUserNameContainer}>
        <Text style={styles.timelineUserName} numberOfLines={1}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
}
