import { StyleSheet } from 'react-native';
import { Theme } from '../../../constans';

const Colors = Theme.Colors;
const Sizes = Theme.Sizes;

const styles = StyleSheet.create({
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
});

export default styles;
