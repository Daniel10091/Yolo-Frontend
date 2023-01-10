import * as React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { BlurView } from 'expo-blur';

import styles from './styles';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Theme, Mocks } from '../../../../constans';

export default function Post ({ data }) {
  
  const [ likedMenuVisible, setLikedMenuVisible ] = React.useState(false);
  const [ liked, setLiked ] = React.useState(null);
  const [ showComment, setShowComment ] = React.useState(false);

  const likeIcons = [
    {
      name: 'beating-heart',
      source: require('../../../../assets/icons/beating-heart.png')
    },
    {
      name: 'thumbs-up',
      source: require('../../../../assets/icons/thumbs-up.png')
    },
    {
      name: 'smiling-face',
      source: require('../../../../assets/icons/face-with-tears-of-joy.png')
    },
    {
      name: 'hushed-face',
      source: require('../../../../assets/icons/hushed-face.png')
    },
    {
      name: 'crying-face',
      source: require('../../../../assets/icons/crying-face.png')
    },
    {
      name: 'pouting-face',
      source: require('../../../../assets/icons/pouting-face.png')
    },
  ]

  return (
    <View key={data.id} style={styles.post}>
      <View style={styles.postHeader}>
        {
          Mocks.Users.filter(user => user.id === data.userId).map(user => 
            <View key={user.id} style={styles.postHeaderContent}>
              <Image 
                style={styles.postUserAvatar} 
                source={{uri: user.avatar}} 
              />
              <View style={styles.postUserDetails}>
                <Text style={styles.postUserName}>
                  {Mocks.Users.filter(user => user.id === data.userId).map(user => user.name)}
                </Text>
                <Text style={styles.postUserUsername}>
                  {Mocks.Users.filter(user => user.id === data.userId).map(user => user.username)}
                </Text>
              </View>
            </View>
          )
        }
      </View>
      <View style={styles.postContent}>
        <Image 
          style={[styles.postImage, {
            height: (Dimensions.get('window').width - (Theme.Sizes.FeedPaddingHorizontal + 2)),
          }]} 
          source={{uri: data.content}} 
        />
      </View>
      <View style={styles.postFooter}>
        <View style={styles.postOptionsMenu}>
          <TouchableOpacity 
            style={styles.postOptionButton} 
            onPress={() => {
              likedMenuVisible ? setLikedMenuVisible(false) : setLikedMenuVisible(true)
            }} 
            activeOpacity={0.8}
          >
            {
              liked !== null ?  
                <Image style={styles.postOptionButtonIconImg} source={liked} /> : 
                <Ionicons style={styles.postOptionButtonIcon} name="heart-outline" />
            }
            {/* <Text style={styles.postOptionButtonSpan}>{data.likes.length}</Text> */}
          </TouchableOpacity>

          <View style={[styles.menuLikeOptions, {
            display: likedMenuVisible ? 'flex' : 'none',
          }]}>
            <BlurView intensity={40} tint="light" style={styles.menuLikeOptionsBg} />
              <View style={styles.menuLikeOptionsContent}>
                {likeIcons.map(item => 
                  <TouchableOpacity 
                    key={item.name}
                    style={styles.menuLikeButton} 
                    onPress={() => {
                      if (liked === item.source) 
                        setLiked(null);
                      else setLiked(item.source);
                      setLikedMenuVisible(false);
                    }} 
                    activeOpacity={0.8}
                  >
                    <Image style={styles.menuLikeButtonIcon} source={item.source} />
                  </TouchableOpacity>
                )}
              </View>
          </View>

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
          <Text 
            style={[styles.postDescriptionText, {
              width: showComment ? '100%' : '80%',
            }]} 
            numberOfLines={showComment ? null : 1} 
            onPress={() => setShowComment(!showComment)}
          >{data.description}</Text>
        </View>
        <View style={styles.postCommentsContent}>
          <View style={styles.postCommentsContent}>

          </View>
        </View>
      </View>
    </View>
  );
}
