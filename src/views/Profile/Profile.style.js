import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  headerProfile: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    height: 132,
    backgroundColor: '#078BFB',
  },
  userInfo: {
    marginLeft: 10,
  },
  fontUserName: {
    fontFamily: 'poppins-bold',
    fontSize: 16,
    color: '#fff',
  },
  fontCity: {
    fontFamily: 'poppins-bold',
    fontSize: 14,
    color: '#fff',
  },
  fontInfo: {
    fontFamily: 'poppins-bold',
    fontSize: 12,
    color: '#fff',
  },
  img: {
    width: 64,
    height: 64,
    backgroundColor: '#fff',
    borderRadius: 120,
    marginBottom: 20,
  },
});
