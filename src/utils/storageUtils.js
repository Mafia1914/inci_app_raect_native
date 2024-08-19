import * as SecureStore from 'expo-secure-store';


export const saveEmailToStorage = async (email) => {
    try {
        if (!email) {
            throw new Error('No email provided');
        }
        await SecureStore.setItemAsync('user_email', email);
        console.log('Email saved to secure storage:', email);
    } catch (error) {
        console.error('Failed to save email to secure storage:', error.message);
    }
};


export const getemailStorage = async () => {
    try {
        const storedEmail = await SecureStore.getItemAsync('user_email');
        if (!storedEmail) {
            console.log('No email found in secure storage.');
        } else {
            console.log('Retrieved email from secure storage:', storedEmail);
        }
        return storedEmail;
    } catch (error) {
        console.error('Failed to retrieve email from secure storage:', error.message);
        return null;
    }
};


export const deleteEmailFromStorage = async () => {
    try {
        await SecureStore.deleteItemAsync('user_email');
        console.log('Email removed from secure storage.');
    } catch (error) {
        console.error('Failed to delete email from secure storage:', error.message);
    }
};
