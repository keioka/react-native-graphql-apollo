import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  header: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#078BFB',
    width: '100%',
  },
  fontTitle: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'poppins-bold',
  },
  fontSectionTitle: {
    color: '#0F273D',
    fontSize: 14,
    fontFamily: 'poppins-bold',
  },
  content: {
    flex: 2,
    alignSelf: 'center',
    width: '90%',
    paddingTop: 20,
  },
  question: {
    marginTop: 10,
  },
  answer: {
    height: 128,
    width: 128,
    margin: 3,
    padding: 14,
    borderRadius: 4,
    backgroundColor: '#242424',
  },
});
