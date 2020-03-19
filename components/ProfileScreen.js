import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Image, ScrollView, View,StatusBar } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Card, Button } from '@ui-kitten/components';
const { width, height } = Dimensions.get('window');
const BackIcon = (style) => (
    <Icon {...style} name='arrow-back' />
);
const circleNumberSize = (height / 10) * 4 - 40;
export const ProfileScreen = ({ navigation }) => {

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar barStyle ="light-content" backgroundColor="#000"/>
            <TopNavigation style ={{marginTop:20}} title='Profile' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()} />
            <Layout style={{ width: width, height: height / 4, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f7f8fb' }}>
                <View style={{paddingTop:10,paddingBottom:10}} >
                    <Image style={styles.circleNumber}
                        source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg' }}
                    ></Image>
                    <View style={styles.icon}>
                        <Icon name='camera' fill='black' width={28} height={28} onPress={()=>alert('Choose Image')} />
                    </View>

                </View>
            </Layout>
            <Layout>
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text
                        style={styles.headerText}
                        appearance='hint'
                        category='s1'>
                        First Name
                    </Text>
                    <Text
                        style={styles.headerText}
                        category='s1'>
                        Jennifer
                    </Text>
                </Layout>
                <Divider />
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text
                        style={styles.headerText}
                        appearance='hint'
                        category='s1'>
                        Last Name
                    </Text>
                    <Text
                        style={styles.headerText}
                        category='s1'>
                        Christino
                    </Text>
                </Layout>
                <Divider />
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text
                        style={styles.headerText}
                        appearance='hint'
                        category='s1'>
                        Gender
                    </Text>
                    <Text
                        style={styles.headerText}
                        category='s1'>
                        Female
                    </Text>
                </Layout>
                <Divider />
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text
                        style={styles.headerText}
                        appearance='hint'
                        category='s1'>
                        Age
                    </Text>
                    <Text
                        style={styles.headerText}
                        category='s1'>
                        25
                    </Text>
                </Layout>
                <Divider />
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text
                        style={styles.headerText}
                        appearance='hint'
                        category='s1'>
                        Weight
                    </Text>
                    <Text
                        style={styles.headerText}
                        category='s1'>
                        48 kg
                    </Text>
                </Layout>
                <Divider />
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text
                        style={styles.headerText}
                        appearance='hint'
                        category='s1'>
                        Height
                    </Text>
                    <Text
                        style={styles.headerText}
                        category='s1'>
                        160 cm
                    </Text>
                </Layout>
            </Layout>
            <Layout style={{ height: 30, backgroundColor: '#f7f8fb' }}></Layout>
            <Layout>
                <Divider />
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text
                        style={styles.headerText}
                        appearance='hint'
                        category='s1'>
                        Email
                    </Text>
                    <Text
                        style={styles.headerText}
                        category='s1'>
                        JenChristino@gmail.com
                    </Text>
                </Layout>
                <Divider />
                <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text
                        style={styles.headerText}
                        appearance='hint'
                        category='s1'>
                        Phone Number
                    </Text>
                    <Text
                        style={styles.headerText}
                        category='s1'>
                        +84 927381022
                    </Text>
                </Layout>
                <Divider />
            </Layout>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    headerText: {
        marginHorizontal: 24,
        marginVertical: 4,
        marginTop: 12,
        marginBottom: 12
    },
    headerImage: {
        resizeMode: 'cover',
        height: (height / 2) / 2,
    },
    circleNumber: {
        width: circleNumberSize - 90,
        height: circleNumberSize - 90,
        borderRadius: (circleNumberSize - 90) / 2,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 10,
        shadowRadius: 20,

        elevation: 15,
    },
    icon: {
        position: 'absolute',
        top: 110,
        left: 100,
        width: circleNumberSize/4,
        height: circleNumberSize/4,
        borderRadius:(circleNumberSize/4)/2,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 10,
        shadowRadius: 20,

        elevation: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f8fb'
    }
});