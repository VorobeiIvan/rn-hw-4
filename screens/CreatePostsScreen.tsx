import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Camera, CameraView } from 'expo-camera';
import * as Location from 'expo-location';
import * as MediaLibrary from 'expo-media-library';

const CreatePostsScreen = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [coords, setCoords] = useState(null);

  // Запит на дозволи
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const mediaLibraryStatus = await MediaLibrary.requestPermissionsAsync();
      setHasMediaLibraryPermission(mediaLibraryStatus.status === 'granted');

      // Отримання геолокації
      await getLocation();
    })();
  }, []);

  // Функція для зйомки фото
  const takePhoto = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setPhotoUri(photo.uri);
      if (hasMediaLibraryPermission) {
        await MediaLibrary.saveToLibraryAsync(photo.uri);
      } else {
        Alert.alert('Помилка', 'Немає дозволу на збереження фото в медіа-бібліотеку.');
      }
    }
  };

  // Отримання геолокації
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Помилка', 'Доступ до геолокації був відхилений.');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setCoords({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    setLocation(`${location.coords.latitude}, ${location.coords.longitude}`); // Optionally set location input
  };

  // Публікація посту
  const publishPost = () => {
    if (title && photoUri) { // Make location optional
      console.log('Post published:', { title, location, photoUri, coords });
      navigation.navigate('PostsScreen'); // Переходить на екран PostsScreen після публікації
    } else {
      Alert.alert('Помилка', 'Будь ласка, заповніть всі поля.');
    }
  };

  if (hasCameraPermission === null) {
    return <Text>Запит на доступ до камери...</Text>;
  }
  if (hasCameraPermission === false) {
    return <Text>Доступ до камери заборонено.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Створити публікацію</Text>

      {/* Камера або зображення */}
      <View style={styles.photoContainer}>
        {photoUri ? (
          <Image source={{ uri: photoUri }} style={styles.photo} />
        ) : (
          <CameraView style={styles.camera} ref={setCameraRef}>
            <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
              <Text style={styles.captureText}>Завантажте фото</Text>
            </TouchableOpacity>
          </CameraView>
        )}
      </View>

      {/* Поля для введення */}
      <TextInput
        style={styles.input}
        placeholder="Назва..."
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Місцевість (не обов'язково)..."
        value={location}
        onChangeText={setLocation}
      />

      {/* Кнопка для публікації */}
      <TouchableOpacity style={styles.publishButton} onPress={publishPost}>
        <Text style={styles.publishButtonText}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  photoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  camera: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
  },
  captureText: {
    color: '#fff',
    fontSize: 16,
  },
  photo: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  publishButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  publishButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreatePostsScreen;
