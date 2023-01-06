import * as React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { Theme, Mocks } from '../../../constans';

import Header from './Header';
import TimelineItem from '../../modules/TimelineItem';
import { AppProperties } from '../../../../resources/app.properties';

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
        
      {Mocks.Posts.map(post => 
        <View key={post.id} style={styles.post}>
          <View style={styles.postHeader}>
            <Image 
              style={styles.postUserAvatar} 
              source={{uri: Mocks.Users.filter(user => user.id === post.userId).forEach(user => user.avatar)}} 
            />
            <View style={styles.postUserDetails}>
              <Text style={styles.postUserName}>
                {Mocks.Users.filter(user => user.id === post.userId).forEach(user => user.name)}
              </Text>
              <Text style={styles.postUserUsername}>
                {Mocks.Users.filter(user => user.id === post.userId).forEach(user => user.username)}
              </Text>
            </View>
          </View>
          <View style={styles.postContent}>
            <Image 
              style={[styles.postImage, {height: (Dimensions.get('window').width - (Theme.Sizes.FeedPaddingHorizontal + 2))}]} 
              source={{uri: post.content}} 
            />
          </View>
          <View style={styles.postFooter}>
            <View style={styles.postOptionsMenu}>
              <TouchableOpacity 
                style={styles.postOptionButton} 
                onPress={() => ''} 
                activeOpacity={0.8}
              >
                <Ionicons style={styles.postOptionButtonIcon} name="heart-outline" />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.postOptionButton} 
                onPress={() => ''} 
                activeOpacity={0.8}
              >
                <Ionicons style={styles.postOptionButtonIcon} name="chatbox-outline" />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.postOptionButton} 
                onPress={() => ''} 
                activeOpacity={0.8}
              >
                <Ionicons style={[styles.postOptionButtonIcon, styles.postOptionButtonIconShare]} name="paper-plane-outline" />
              </TouchableOpacity>
            </View>
            <View style={styles.postDescriptionContent}>
              <Text style={styles.postDescriptionText}>
                {post.description}
              </Text>
            </View>
          </View>
        </View>
      )}

      </View>

    </ScrollView>
  );
}
