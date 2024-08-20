import { StyleSheet } from "react-native";
import COLORS from '../../../utils/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500'
  },
  imageStyle: {
    width: '100%',
    height: '50%',
    aspectRatio: 1,
  },
  welComStyle: {
    marginTop: 30,
    marginVertical: 10,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
    color: COLORS.darkprimariColor,

  },
  LoginTextStyle: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400',
    color: COLORS.darkprimariColor,
    marginBottom: 20,
  },
  textInput: {
    marginVertical: 8,
    backgroundColor: 'transparent',
    height: 60,
    borderColor: COLORS.darkprimariColor
  },

  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },

  forgotPasswordContainer: {
    marginLeft: '65%',
  },
  forgotPasswordText: {
    color: COLORS.darkprimariColor,
    fontSize: 12,
    textDecorationLine: 'underline',

  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',

  },
  signUpLink: {
    color: COLORS.primariColor,

  },
  buttonContainer: {
    marginVertical: 20,
    alignItems: 'center',
    width: '100%',
    height: 48
  },

  signupContainer: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 12,
    color: COLORS.textColor,
  },
  signUpLink: {
    fontSize: 12,
    color: COLORS.primary,
    textDecorationLine: 'underline',
  },
  input: {
    height: 46,
    width: '90%',
    maxWidth: 312,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 50,
},


});


export default styles