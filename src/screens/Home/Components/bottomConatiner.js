// import React, { useState } from 'react';
// import { StyleSheet, View, Button, Image, Dimensions, Text } from 'react-native';
// import { createHomeLogic } from '../Data/HomeLogiecs'; 

// const BottomContainer = () => {
//   const [image, setImage] = useState(null);
//   const [text, setText] = useState('');
//   const { handleChoosePhoto, handleTakePhoto } = createHomeLogic(setImage, null, null, setText);

//   return (
//     <View style={styles.body}>
//       <View style={styles.container}>
//         <Button title="Choose Photo" onPress={handleChoosePhoto} />
//         <Button title="Take Photo" onPress={handleTakePhoto} />
//         {image && <Image source={{ uri: image }} style={styles.image} />}
//         {text ? <Text style={styles.text}>{text}</Text> : null}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   body: {
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     borderColor: 'black',
//     borderWidth: 1,
//     height: Dimensions.get('screen').height - 20,
//     width: Dimensions.get('screen').width,
//   },
//   container: {
//     alignItems: 'center',
//     padding: 16,
//   },
//   image: {
//     width: 300,
//     height: 300,
//     marginTop: 20,
//     resizeMode: 'cover',
//   },
//   text: {
//     marginTop: 20,
//     fontSize: 16,
//     color: 'black',
//     textAlign: 'center',
//   },
// });

// export default BottomContainer;




// // import React, { useState } from 'react';
// // import { Button, StyleSheet, Text, View, Image } from 'react-native';
// // import { createHomeLogic } from '../Data/HomeLogiecs'; 

// // const BottomContainer = () => {
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [progress, setProgress] = useState(0);
// //   const [imgSrc, setImgSrc] = useState(null);
// //   const [text, setText] = useState('');

// //   const { handleChoosePhoto, handleTakePhoto } = createHomeLogic(
// //     setImgSrc,
// //     setIsLoading,
// //     setProgress,
// //     setText
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Tesseract OCR example</Text>
// //       <Text style={styles.instructions}>Select an image source:</Text>
// //       <View style={styles.options}>
// //         <View style={styles.button}>
// //           <Button
// //             disabled={isLoading}
// //             title="Camera"
// //             onPress={handleTakePhoto}
// //           />
// //         </View>
// //         <View style={styles.button}>
// //           <Button
// //             disabled={isLoading}
// //             title="Picker"
// //             onPress={handleChoosePhoto}
// //           />
// //         </View>
// //       </View>
// //       {imgSrc && (
// //         <View style={styles.imageContainer}>
// //           <Image style={styles.image} source={{ uri: imgSrc }} />
// //           {isLoading ? (
// //             <Text>Loading...</Text> 
// //           ) : (
// //             <Text>{text}</Text>
// //           )}
// //         </View>
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',

// //   },
// //   options: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     padding: 10,
// //   },
// //   button: {
// //     marginHorizontal: 10,
// //     color: 'balck',
// //   },
// //   imageContainer: {
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   image: {
// //     marginVertical: 15,
// //     height: 300,
// //     width: 300,
// //   },
// //   title: {
// //     fontSize: 20,
// //     textAlign: 'center',
// //     margin: 10,
// //   },
// //   instructions: {
// //     textAlign: 'center',
// //     color: '#333333',
// //     marginBottom: 5,
// //   },
// // });

// // export default BottomContainer;

