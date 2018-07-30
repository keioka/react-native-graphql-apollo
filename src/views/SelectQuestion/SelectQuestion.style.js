import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    width: '100%',
    backgroundColor: '#fff',
  },
  content: {
    height: 'auto',
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 182,
    backgroundColor: '#078BFB',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 402,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    top: 60,
    left: 20,
    height: 280,
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#424242',
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 1 },
  },
  fontCardTitle: {
    fontSize: 18,
    fontFamily: 'poppins-bold',
  },
  btnSelect: {
    position: 'absolute',
    bottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 82,
    height: 82,
    backgroundColor: '#078BFB',
    borderRadius: 82,
    shadowColor: '#424242',
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 1 },
  },

});
