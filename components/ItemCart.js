import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity, View } from 'react-native';
import { Divider, Icon, Layout, Text, Button } from '@ui-kitten/components';
const { width, height } = Dimensions.get('window');

export const ItemCart = (item) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                <Image
                    style={styles.headerImage}
                    source={{ uri: 'https://cdn.shop.prusa3d.com/1311-thickbox_default/original-prusa-i3-mk3-3d-printer.jpg' }}
                />
                <Layout style={{ flexDirection: 'column', justifyContent: 'flex-start', marginLeft: 10 }} >
                    <Text
                        style={styles.headerText}
                        category='h5'>
                        IN 3D DSF
                        </Text>
                    <Text
                        style={styles.headerText}
                        appearance='hint'
                        category='h6'>
                        Category
                        </Text>
                    <Text
                        style={{
                            marginLeft: 8,
                            marginVertical: 6,
                            fontWeight: 'bold'
                        }}
                        category='h5'>
                        590,000đ
                        </Text>
                    <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, marginLeft: 8, alignItems: 'center' }}>
                        <Layout style={[styles.buttonIconContainer]}>
                            <Icon name='minus' width={32} height={32} fill='#FFFFFF' onPress={() => alert('Minus')} />
                        </Layout>
                        <Text category='h5' style={{ marginLeft: 10, marginRight: 10 }}>1</Text>
                        <Layout style={[styles.buttonIconContainer]}>
                            <Icon name='plus' width={32} height={32} fill='#FFFFFF' onPress={() => alert('Plus')} />
                        </Layout>
                    </Layout>
                </Layout>
                <Icon name='close' width={32} height={32} fill='#BDBDBD' onPress={() => alert('Delete')} />
            </Layout>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    headerText: {
        marginLeft: 8,
        marginVertical: 2
    },
    headerImage: {
        resizeMode: 'cover',
        height: (height / 2) / 2,
        width: (width / 3),
    },
    buttonIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 32, height: 32,
        borderRadius: 32,
        backgroundColor:"#E0E0E0"
    },
});