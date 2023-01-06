import { StyleSheet } from 'react-native';
import { Theme } from '../../../constans';

const Colors = Theme.Colors;
const Sizes = Theme.Sizes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  timelineContainer: {
    marginTop: Sizes.timelineMarginTop,
  },
  timelineScrollContent: {
    
  },
  timelineContentContainer: {
    paddingHorizontal: Sizes.timelinePaddingHorizontal,
    paddingVertical: Sizes.timelinePaddingVertical,
  },

  timeline: {
    width: Sizes.timelineSize + 22,
    alignItems: 'center',
    borderRadius: Sizes.timelineRadius,
  },
  timelineContent: {
    width: Sizes.timelineSize,
    height: Sizes.timelineSize,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Sizes.timelineRadius - 2,
  },
  timelineBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Sizes.timelineSize,
    height: Sizes.timelineSize,
    borderRadius: Sizes.timelineRadius,
  },
  timelineAvatarContent: {
    width: Sizes.timelineSize - 4,
    height: Sizes.timelineSize - 4,
    backgroundColor: Colors.EerieBlack_3,
    borderRadius: Sizes.timelineRadius - 2,
  },
  timelineAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: Sizes.timelineRadius - 2,
  },
  timelineAddIconContent: {
    position: 'absolute',
    right: Sizes.timelineAddPosition,
    bottom: Sizes.timelineAddPosition,
    width: Sizes.timelineAddSize,
    height: Sizes.timelineAddSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Capri,
    borderRadius: Sizes.timelineAddIconRadius,
  },
  timelineAddIcon: {
    fontSize: Sizes.timelineAddIconSize,
    color: Colors.White,
  },
  timelineUserNameContainer: {
    alignItems: 'center',
    marginTop: Sizes.timelineUserNameMarginTop,
  },
  timelineUserName: {
    fontSize: Sizes.timelineFontSize,
    color: Colors.White,
  },

  // Feed
  feedContainer: {
    flex: 1,
    paddingHorizontal: Sizes.FeedPaddingHorizontal,
    paddingVertical: Sizes.FeedPaddingVertical,
  },

  post: {
    width: '100%',
    backgroundColor: Colors.EerieBlack_3,
    borderRadius: Sizes.FeedPostRadius,
    borderWidth: 1,
    borderColor: Colors.Onyx,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Sizes.FeedPostHeaderPadding,
    paddingVertical: Sizes.FeedPostHeaderPadding,
  },
  postUserAvatar: {
    width: Sizes.FeedPostUserAvatarSize,
    height: Sizes.FeedPostUserAvatarSize,
    borderRadius: Sizes.FeedPostUserAvatarSize / 4,
  },
  postUserDetails: {
    marginLeft: 10,
  },
  postUserName: {
    fontSize: Sizes.FeedPostUserNameSize,
    color: Colors.White,
  },
  postUserUsername: {
    marginTop: 2,
    fontSize: Sizes.FeedPostUserUsernameSize,
    color: Colors.SonicSilver,
  },
  postContent: {
    flex: 1,
  },
  postImage: {
    width: '100%',
    resizeMode: 'cover',
    overflowScrolling: 'touch',
    WebkitOverflowScrolling: 'touch',
  },
  postFooter: {
    paddingHorizontal: Sizes.FeedPostFooterPadding,
    paddingVertical: Sizes.FeedPostFooterPadding,
    paddingBottom: Sizes.FeedPostFooterPaddingBottom,
  },
  postOptionsMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postOptionButton: {
    width: Sizes.FeedPostOptionButtonSize,
    height: Sizes.FeedPostOptionButtonSize,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Sizes.FeedPostOptionButtonSpace,
    borderRadius: Sizes.FeedPostOptionButtonRadius,
  },
  postOptionButtonIcon: {
    fontSize: Sizes.FeedPostOptionButtonIconSize,
    color: Colors.White,
  },
  postOptionButtonIconShare: {
    fontSize: Sizes.FeedPostOptionButtonIconSize - 1,
  },
  postDescriptionContent: {
    marginTop: Sizes.FeedPostFooterPadding,
  },
  postDescriptionText: {
    fontSize: Sizes.FeedPostDescriptionTextSize,
    color: Colors.White,
  },
});

export default styles;
