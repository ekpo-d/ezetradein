import { StyleSheet } from 'react-native';
import globalStyles from '../base/global';
import placeholders from '../base/placeholders';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  viewWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    ...globalStyles.m_b_md,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    color: placeholders.almostBlack,
    fontSize: 18,
    marginBottom: 4,
  },
  typeText: {
    color: placeholders.darkGray,
    fontSize: 14,
    textAlign: 'right',
  },
  ratingText: {
    ...globalStyles.m_r_sm,
    color: placeholders.gold,
    fontSize: 14,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
  },
  imageTextWrapper: {
    ...globalStyles.p_xs,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 5,
  },
  imageText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  optionsText: {
    color: placeholders.darkGray,
    fontSize: 12,
    textAlign: 'center',
  },
  linkText: {
    color: placeholders.darkGray,
    fontSize: 16,
    textAlign: 'left',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: placeholders.lightGray,
  },
  map: {
    marginBottom: 70,
    height: 200,
    borderRadius: 5,
  },
  bottom: {
    paddingBottom: 20,
    backgroundColor: 'white',
    bottom: 0,
  },
  bottomText: {
    textAlign: 'center',
    color: placeholders.gold,
  },
});
