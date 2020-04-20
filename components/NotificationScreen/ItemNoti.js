import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Text } from 'react-native';
import { Layout, Divider, Icon } from '@ui-kitten/components';
const ItemNoti = ({ item, navigation, Timestamp }) => {

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <Layout style={styles.Layout}>
                <Icon width={24} height={24} name='bell-outline' fill="#1654B4" />
                <Layout style={styles.Layout1}>
                    <Text style={[styles.headerText, styles.fontSize, { fontWeight: 'bold' }]} >
                        {item.name}
                    </Text>
                    <Text
                        style={[styles.headerText, styles.fontSize, { color: 'grey' }]}
                    >
                        {(item.time).toLocaleString()}
                    </Text>
                </Layout>
            </Layout>
            <Divider style={{ marginBottom: 10, marginTop: 10 }} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    SafeAreaView: { flex: 1, backgroundColor: 'white' },
    Layout: { flexDirection: 'row', marginLeft: 10, marginRight: 10 },
    Layout1: { flexDirection: 'column' },
    headerText: {
        marginLeft: 4
    },
    fontSize: { fontSize: 14 }
});
export default ItemNoti;
