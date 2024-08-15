
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native'; 
import { forgetPasswordEmail } from '../../../redux/Actions/action'; 

const handleForgeValidation = async (email, setEmailError,dispatch) => {

    const navigation = useNavigation(); 

    setEmailError('');
    let errors = {};
    if (!email) {
        errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid.';
    }
    if (errors.email) {
        setEmailError(errors.email);
        return; 
    }
    
    try {

        await dispatch(forgetPasswordEmail({ email })).unwrap();
    
        Alert.alert('Forget Password Successful');
        navigation.reset(Login);
    } catch (error) {
        Alert.alert('Error', error.message || 'User does not exist');
    }
};

export default handleForgeValidation;
