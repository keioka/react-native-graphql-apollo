import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 182,
    backgroundColor: '#078BFB',
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
});
