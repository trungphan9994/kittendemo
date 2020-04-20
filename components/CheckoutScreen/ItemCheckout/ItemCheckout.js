import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { format_number } from '../../FormatNumber'
import styles from './styles';
const ItemCheckout = ({ item}) => {

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <Layout style={styles.Layout}>
                <Image style={styles.headerImage} source={{ uri: item.url }} />
                <Layout style={styles.Layout}>
                    <Layout style={styles.Layout1}>
                        <Text category="h6">
                        {item.name}
                    </Text>
                    </Layout>
                    <Layout style={styles.count}>
                        <Text style={styles.priceText} category="h6">
                            {format_number(item.price / item.count)} đ
                        </Text>
                        <Text category="h6">
                            x {item.count}
                        </Text>
                    </Layout>
                </Layout>
            </Layout>
        </SafeAreaView>
    );
};

export default ItemCheckout;
