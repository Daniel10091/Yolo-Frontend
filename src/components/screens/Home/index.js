import * as React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Theme, Mocks } from '../../../constans';

import Header from './Header';
import { AppProperties } from '../../../../resources/app.properties';

import TimelineItem from '../../modules/TimelineItem';
import Post from './Post';

export default function HomeScreen () {

  const [ timeline, setTimeline ] = React.useState([]);

  async function listAllPeople () {
    await fetch(AppProperties.serveUrl + '/user/listAll')
      .then(response => response.json())
      .then(data => {
        setTimeline(data)
      })
      .catch(error => console.log(error.message))
  }

  React.useEffect(() => {
    
    listAllPeople();

  }, []);

  return (
    <ScrollView 
      style={styles.container} 
      showsVerticalScrollIndicator={false}
    >
      
      {/* Header */}
      
      <Header />

      {/* Timeline */}

      <View style={styles.timelineContainer}>
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          style={styles.timelineScrollContent} 
          contentContainerStyle={styles.timelineContentContainer}
          horizontalScrollIndicatorInsets={{ right: 1 }}
        >
          <TouchableOpacity 
            style={styles.timeline} 
            activeOpacity={0.8}
          >
            <View style={styles.timelineContent}>
              <LinearGradient 
                colors={[Theme.Colors.Capri, Theme.Colors.EletricViolet]} 
                style={styles.timelineBackground} 
              />
              <View style={styles.timelineAvatarContent}>
                <Image style={styles.timelineAvatar} source={require('../../../assets/images/avatars/person-female-7.jpg')} />
              </View>
              <View style={styles.timelineAddIconContent}>
                <AntDesign style={styles.timelineAddIcon} name='plus' />
              </View>
            </View>
            <View style={styles.timelineUserNameContainer}>
              <Text style={styles.timelineUserName} numberOfLines={1}>Amanda</Text>
            </View>
          </TouchableOpacity>

          {/* {Mocks.Users.map(user => <TimelineItem key={user.id} data={user} />)} */}
          {timeline.map(user => <TimelineItem key={user.code} data={user} />)}

        </ScrollView>
      </View>

      {/* Feed */}

      <View style={styles.feedContainer}>
        
      {Mocks.Posts.map(post => <Post key={post.id} data={post} /> )}

      </View>

    </ScrollView>
  );
}
