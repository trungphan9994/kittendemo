import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    SafeAreaView: { flex: 1, backgroundColor: 'white' },
    Layout: { flex: 1, flexDirection: 'row',marginLeft:10,marginRight:10 },
    Layout1: { flex: 1, flexDirection: 'column', marginLeft: 5,justifyContent:'center' },
    headerText: {
        marginLeft: 4
    },
    count:{ 
        alignItems: 'flex-end',
    },
    priceText: {
        marginVertical: 2,
        fontWeight: 'bold'
    },
    countText: { marginLeft: 10, marginRight: 10 },
    headerImage: {
        resizeMode: 'cover',
        height: 60,
        width: 60
    },
});
