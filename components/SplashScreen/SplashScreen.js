import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, Dimensions, Image, View } from 'react-native';
import Splash from './SplashScreen.png'
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
    bg: {
        flex: 1
    }
})
const { width, height } = Dimensions.get('window')
const SplashScreen = () => {
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         gotoHome();
    //     },3000)
    // },[])
    const navigation = useNavigation()
    const gotoHome = () => {
        navigation.navigate('DrawerNavigator')
    }
    const gotoOrderManagerment = () => {
        navigation.navigate('OrderManagementScreen', { isFromCheckout: false })
    }
    const gotoIntroApp = () => {
        navigation.navigate('IntroScreen')
    }
    return (
        // <View>
        <>
            <ImageBackground style={styles.bg} source={Splash} />
            <Text style={{
                position: 'absolute', fontWeight: "bold", fontSize: 25, color: '#1654B4',
                top: height / 4, right: width / 4.5, height: 120, width: 120, borderRadius: 1000, borderWidth: 0,
                backgroundColor: 'transparent'
            }}
                onPress={gotoHome}
            ></Text>
            <Text style={{
                position: 'absolute', fontWeight: "bold", fontSize: 25, color: '#1654B4',
                top: height / 2.7, left: width / 6, height: 130, width: 130, borderRadius: 1000, borderWidth: 0,
                backgroundColor: 'transparent'
            }}
                onPress={gotoOrderManagerment}
            ></Text>
            <Text style={{
                position: 'absolute', fontWeight: "bold", fontSize: 25, color: '#1654B4',
                bottom: height / 3, right: width / 4.5, height: 130, width: 130, borderRadius: 1000, borderWidth: 0,
                backgroundColor: 'transparent'
            }}
                onPress={gotoHome}
            ></Text>
            <Text style={{
                position: 'absolute',
                bottom: height / 5.8, left: width / 5, height: 130, width: 130, borderRadius: 1000, borderWidth: 0,
                backgroundColor: 'transparent'
            }}
                onPress={gotoIntroApp}
            ></Text>
        </>
        // </View>

    )
}
export default SplashScreen;