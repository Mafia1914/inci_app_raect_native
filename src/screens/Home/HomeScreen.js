import { View, Text } from 'react-native'
import React from 'react'
import BottomContainer from './Components/bottomConatiner'

export default function HomScreen() {
  return (
    <View>
   <BottomContainer/>
    </View>
  )
}


// import React, { useState, useEffect, useRef } from 'react';
// import { Button, StyleSheet, Text, View, Image, Alert, Platform } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import TesseractOcr from 'react-native-tesseract-ocr';
// import * as ImagePicker from 'react-native-image-picker';
// import { PermissionsAndroid } from 'react-native';

// const HomScreen = () => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [imageUri, setImageUri] = useState(null);
//   const [text, setText] = useState('');
//   const cameraRef = useRef(null); 

//   useEffect(() => {
//     const getPermissions = async () => {
//       if (Platform.OS === 'android') {
//         await requestCameraPermission();
//         await requestStoragePermission();
//       }
     
//       setHasPermission(true);
//     };

//     getPermissions();
//   }, []);

//   const requestCameraPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Camera Permission',
//           message: 'This app needs access to your camera.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('You can use the camera');
//         setHasPermission(true);
//       } else {
//         console.log('Camera permission denied');
//         setHasPermission(false);
//       }
//     } catch (err) {
//       console.warn(err);
//       setHasPermission(false);
//     }
//   };

//   const requestStoragePermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//         {
//           title: 'Storage Permission',
//           message: 'This app needs access to your storage.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('You can access the storage');
//       } else {
//         console.log('Storage permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   const recognizeTextFromImage = async (uri) => {
//     try {
//       const recognizedText = await TesseractOcr.recognize(uri, 'ENG');
//       setText(recognizedText);
//     } catch (error) {
//       console.error(error);
//       setText('Failed to recognize text');
//     }
//   };

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       try {
//         const options = { quality: 0.5, base64: true };
//         const data = await cameraRef.current.takePictureAsync(options);
//         setImageUri(data.uri);
//         await recognizeTextFromImage(data.uri);
//       } catch (error) {
//         console.error(error);
//         Alert.alert('Error', 'Failed to take picture');
//       }
//     } else {
//       Alert.alert('Error', 'Camera is not initialized');
//     }
//   };

//   const choosePhoto = async () => {
//     const options = {
//       mediaType: 'photo',
//       quality: 1,
//     };

//     ImagePicker.launchImageLibrary(options, async (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         const uri = response.assets[0].uri;
//         setImageUri(uri);
//         await recognizeTextFromImage(uri);
//       }
//     });
//   };

//   if (hasPermission === null) {
//     return <Text>Requesting for camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <RNCamera
//         ref={cameraRef}
//         style={styles.preview}
//         type={RNCamera.Constants.Type.back}
//         autoFocus={RNCamera.Constants.AutoFocus.on}
//       />
//       <Button title="Take Picture" onPress={takePicture} />
//       <Button title="Choose Photo" onPress={choosePhoto} />
//       {imageUri && (
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: imageUri }} style={styles.image} />
//           <Text>{text}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   preview: {
//     alignItems: 'center',
//     width: '100%',
//     height: '50%',
//   },
//   imageContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   image: {
//     marginVertical: 15,
//     height: 300,
//     width: 300,
//   },
// });

// export default HomScreen;






