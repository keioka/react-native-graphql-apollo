import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  header: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    height: 65,
    padding: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {

  },
  userImage: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  question: {
    position: 'absolute',
    top: 90,
  },
  questionTitle: {
    fontSize: 24,
    fontFamily: 'poppins-bold',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  fontUsername: {
    color: '#fff',
    marginLeft: 7,
    fontFamily: 'poppins-semibold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  footerTitle: {
    color: '#fff',
    fontSize: 16,
  },
  footerQuestionBySection: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'flex-end',
  },
  footerQuestionByLabel: {
    fontSize: 12,
    color: '#fff',
  },
  footerQuestionByName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  footerActionSection: {
    marginTop: 0,
    flexDirection: 'row',
  },
  footerComment: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 50,
    color: '#fff',
    height: 42,
    paddingLeft: 15,
    paddingRight: 15,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});
