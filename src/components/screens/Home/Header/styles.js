import { StyleSheet } from 'react-native';
import { Theme } from '../../../../constans';

const Colors = Theme.Colors;
const Sizes = Theme.Sizes;

const styles = StyleSheet.create({
  headerContainer: {
    height: Sizes.headerHeight,
    justifyContent: 'flex-end',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: Sizes.headerPaddingHorizontal,
  },
  headerColumn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  headerProfileButton: {
    width: Sizes.headerButtonsSize,
    height: Sizes.headerButtonsSize,
    borderRadius: Sizes.headerButtonsSize / 3.6,
  },
  headerProfileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: Sizes.headerButtonsSize / 3.6,
  },
  
  appLogo: {
    alignItems: 'center',
  },
  appLogoText: {
    fontSize: Sizes.headerLogoSize,
    fontWeight: 'bold',
    color: Colors.EletricViolet,
  },

  headerMessageButton: {
    width: Sizes.headerButtonsSize,
    height: Sizes.headerButtonsSize,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Sizes.headerButtonsSize / 3.6,
  },
  headerMessageIcon: {
    fontSize: 24,
    color: Colors.White,
  },
  headerMessageNotifications: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: Sizes.headerMessageNotificationsIconSize,
    height: Sizes.headerMessageNotificationsIconSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DeepPink,
    borderRadius: Sizes.headerMessageNotificationsIconRadius,
    borderWidth: 2,
    borderColor: Colors.White,
  },
});

export default styles;
