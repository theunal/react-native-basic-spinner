import * as React from 'react';
import { StyleSheet, View, Dimensions, ActivityIndicator } from 'react-native';

const ReactNativeBasicSpinner = () => {
  return (
    <>
      <View style={styles.loadingBackground} />
      <View style={styles.loadingCardContainer}>
        <View style={styles.loadingCard}>
          <ActivityIndicator
            size={'large'}
            color='black'
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  loadingBackground: {
    zIndex: 999, // ios
    elevation: 999, // androis
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: 'black',
    opacity: 0.7,
    position: 'absolute'
  },
  loadingCardContainer: {
    zIndex: 1000, // ios
    elevation: 1000, // androis
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingCard: {
    width: Dimensions.get('screen').width / 4,
    height: Dimensions.get('screen').height / 8,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ReactNativeBasicSpinner
