import { StyleSheet } from "react-native";
import COLORS from '../../../utils/colors';


const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor:COLORS.white
    },
    textStyle: {
        fontFamily: 'Inter',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500'
    },
    imageStyle: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    welComStyle:{
        marginVertical:20,
        fontFamily: 'Inter',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '600',
        color:COLORS.darkprimariColor, 

    },
    LoginTextStyle:{
        fontFamily: 'Inter',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '400',
        color:COLORS.darkprimariColor, 
    },
    textInput: {
        marginVertical: 8,
        backgroundColor: 'transparent',
        height:60,
        borderColor:COLORS.darkprimariColor
      },

      rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'space-between',
      },

      forgotPasswordContainer: {
        marginRight:20,
      },
      forgotPasswordText: {
        color: COLORS.darkprimariColor,
        fontSize: 16,
        textDecorationLine: 'underline',
        fontFamily: 'Inter',
      },
      signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: '5%',
      },
      signUpLink: {
        color: COLORS.primariColor,
      
      },
});


export default styles