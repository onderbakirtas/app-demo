import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Page } from '@/components';
import { padding } from '@/utils/helpers';
import RNLocation from 'react-native-location';
import { SliderBox } from 'react-native-image-slider-box';
interface Location {
  accuracy: number;
  altitude: number;
  altitudeAccuracy: number;
  course: number;
  courseAccuracy: number;
  fromMockProvider: boolean;
  latitude: number;
  longitude: number;
  speed: number;
  speedAccuracy: number;
  timestamp: number;
}

export default function Index() {
  const [viewLocation, isViewLocation] = useState({} as Location);
  RNLocation.configure({
    distanceFilter: 0,
  });
  const permissionHandle = async () => {
    console.log('here');
    let location: any;
    let permission = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    });

    console.log('here2');
    console.log(permission);
    if (permission) {
      let cPerm = await RNLocation.getCurrentPermission();
      console.log('cp; ', cPerm);
      location = await RNLocation.getLatestLocation({ timeout: 100 });
      console.log('location', location);
      isViewLocation(location);
    }
  };
  const imagesList = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree', // Network image
    // require('./assets/images/girl.jpg')
  ];
  return (
    <Page style={styles.page}>
      <Button onPress={permissionHandle} title="Get Location" />
      <Text>Latitude: {viewLocation.latitude} </Text>
      <Text>Longitude: {viewLocation.longitude}</Text>
      <View style={styles.slider}>
        <SliderBox images={imagesList} />
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  page: {
    ...padding(20, 20, 20, 20),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },

  slider: {
    backgroundColor: 'red',
  },
});
