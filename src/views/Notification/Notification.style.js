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
    justifyContent: 'center',
    alignItems: 'center',
    height: 182,
    backgroundColor: '#078BFB',
  },
  userInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  fontUserName: {
    fontFamily: 'poppins-bold',
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
