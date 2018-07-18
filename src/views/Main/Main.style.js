import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#078BFB',
    height: 1,
    width: '100%',
    color: '#fff'
  },
  title: {
    color: '#fff',
    fontSize: 30
  },
  content: {
    flex: 4,
    alignSelf: 'center',
    width: '90%',
  },
  question: {

  },
  answer: {
    height: 48,
    margin: 10,
    padding: 14,
    borderRadius: 4,
    backgroundColor: '#242424'
  }
});
