// import * as ImagePicker from 'expo-image-picker';
// import TesseractOcr, { LANG_ENGLISH } from 'react-native-tesseract-ocr';

// export const createHomeLogic = (setImage, setIsLoading, setProgress, setText) => {
//   const recognizeTextFromImage = async (path) => {
//     if (setIsLoading) setIsLoading(true);

//     try {

//       await TesseractOcr.recognize(imageSource, LANG_ENGLISH, {});

//       setText(recognizedText);
//     } catch (err) {
//       console.error(err);
//       setText('Failed to recognize text');
//     }

//     if (setIsLoading) setIsLoading(false);
//     if (setProgress) setProgress(0);
//   };

//   const handleChoosePhoto = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const imageUri = result.assets[0].uri;
//       setImage(imageUri);
//       await recognizeTextFromImage(imageUri);
//     }
//   };

//   const handleTakePhoto = async () => {
//     const result = await ImagePicker.launchCameraAsync({
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const imageUri = result.assets[0].uri;
//       setImage(imageUri);
//       await recognizeTextFromImage(imageUri);
//     }
//   };

//   return { handleChoosePhoto, handleTakePhoto };
// };

import * as ImagePicker from 'expo-image-picker';
import TesseractOcr from 'react-native-tesseract-ocr';


export const createHomeLogic = (setImage, setIsLoading, setProgress, setText) => {
  const recognizeTextFromImage = async (path) => {
    if (setIsLoading) setIsLoading(true);

    try {
      if (TesseractOcr && typeof TesseractOcr.recognize === 'function') {
        const recognizedText = await TesseractOcr.recognize(path, LANG_ENGLISH);
        setText(recognizedText);
      } else {
        console.error('TesseractOcr is not properly initialized');
        setText('OCR library not initialized');
      }
    } catch (err) {
      console.error('Error recognizing text:', err);
      setText('Failed to recognize text');
    }

    if (setIsLoading) setIsLoading(false);
    if (setProgress) setProgress(0);
  };

  const handleChoosePhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      setImage(imageUri);
      await recognizeTextFromImage(imageUri);
    }
  };

  const handleTakePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      setImage(imageUri);
      await recognizeTextFromImage(imageUri);
    }
  };

  return { handleChoosePhoto, handleTakePhoto };
};
