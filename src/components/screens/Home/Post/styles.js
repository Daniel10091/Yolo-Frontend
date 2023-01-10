import { StyleSheet } from 'react-native';
import { Theme } from '../../../../constans';

const Colors = Theme.Colors;
const Sizes = Theme.Sizes;

const styles = StyleSheet.create({
  post: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: Colors.EerieBlack_3,
    borderRadius: Sizes.FeedPostRadius,
    borderWidth: 1,
    borderColor: Colors.Onyx,
  },
  postHeader: {
    paddingHorizontal: Sizes.FeedPostHeaderPadding,
    paddingVertical: Sizes.FeedPostHeaderPadding,
  },
  postHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Sizes.FeedPostOptionButtonSpace,
    borderRadius: Sizes.FeedPostOptionButtonRadius,
  },
  postOptionButtonIcon: {
    fontSize: Sizes.FeedPostOptionButtonIconSize,
    color: Colors.White,
  },
  postOptionButtonIconImg: {
    width: '80%',
    height: '80%',
  },
  postOptionButtonIconShare: {
    fontSize: Sizes.FeedPostOptionButtonIconSize - 1,
  },
  postOptionButtonSpan: {
    marginLeft: 4,
    fontSize: 12,
    color: Colors.White,
  },
  menuLikeOptions: {
    position: 'absolute',
    top: -60,
    left: 0,
    borderRadius: 50,
    zIndex: 100,
    overflow: 'hidden',
  },
  menuLikeOptionsBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  menuLikeOptionsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  menuLikeButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuLikeButtonIcon: {
    width: '90%',
    height: '90%',
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
