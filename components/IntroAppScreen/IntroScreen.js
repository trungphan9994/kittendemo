import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, Dimensions, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Splash from './bgscreen.png'
const styles = StyleSheet.create({
    bg: {
        flex: 1
    }
})
const { width, height } = Dimensions.get('window')
const IntroScreen = () => {
    const navigation = useNavigation()
    return (
        // <View>
        <>
            <ImageBackground style={styles.bg} source={Splash} />
            <View style={{ flex: 1, position: 'absolute', width: width, height: height }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>

                    <Image style={{ width: 200, height: 200 }} source={require('./logo.png')}></Image>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Bản quyền thuộc về GS Nguyễn Xuân Hùng.</Text>
                </View>
            </View>

        </>
        // <View style={{ flex: 1, backgroundColor: '#1654B4' }}>
        //     <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>

        //         <Image style={{ width: 200, height: 200 }} source={require('./logo.png')}></Image>
        //         <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Bản quyền thuộc về GS Nguyễn Xuân Hùng.</Text>
        //     </View>
        // </View>
        // </View>

    )
}
export default IntroScreen;