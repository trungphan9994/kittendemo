import React, { useCallback, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import {
    Layout,
    TopNavigation,
    TopNavigationAction, Divider
} from '@ui-kitten/components';
import { BackIcon, PlusCircleIcon } from '../Share/IconComponent';
import AddressModal from '../Modals/AddressModal.js';
import ItemAddress from './ItemAddress';
const listaddress = [
    { id: 1, name: 'Nguyễn Văn Anh', phone: '0902345897', address: '234 Kênh Tân Hoá ', city: {id:'4',text:'Hồ Chí Minh'}, district:{id:'79',text:'Quận Tân Phú'}, ward: {id:'16304',text: 'Phường Tân Thới Nhất'}, defaultAdress: true },
    { id: 2, name: 'Nguyễn Văn Ba', phone: '0902435869', address: '900-902 Nguyễn Văn Linh', city: {id:'4',text:'Hồ Chí Minh'}, district:{id:'31',text:'Quận 7'}, ward: {id:'292',text: 'Phường Tân Phong'}, defaultAdress: false },
    { id: 3, name: 'Nguyễn Văn Bốn', phone: '0902322834', address: '234 Lê Thánh Tôn', city: {id:'13',text:'Bến Tre'}, district: {id:'42',text:'Thành phố Bến Tre'}, ward:{id:'2842',text: 'Phường 2'}, defaultAdress: false }
];
const initAddress = { id: "", name: '', phone: '', address: '', city: '', district: '', ward: '', defaultAdress: false };
const AddressScreen = ({ navigation }) => {
    //call list address
    const navigateBack = useCallback(() => {
        navigation.goBack()
    }, [navigation]);
    const BackAction = useCallback(
        () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />,
        [navigateBack]
    );
    const [datalistaddress, setListAddress] = useState(listaddress)
    const [modalvisible, setModalvisible] = useState(false);
    const [formAddress, setformAddress] = useState(initAddress);
    const [lable,setlable] = useState("Thêm địa chỉ");
    const handleCancleModalChangeAddress = useCallback(() => {
        setModalvisible(false);
    }, [])
    const handleDoneModalChangeAddress = useCallback((address) => {
        setModalvisible(false);
        if (!address.id) {
            console.log("add");
            let tmp = datalistaddress;
            if (address.defaultAdress) {
                tmp = datalistaddress.map((item) => {
                    item.defaultAdress = false;
                    return item;
                })
            }
            tmp.push(address);
            setListAddress(tmp)
            // setListAddress((list) => ([...list, address]))
        } else {
            console.log("edit");
            let index = datalistaddress.findIndex(item => item.id === address.id);
            if (index !== -1) {
                let tmp = datalistaddress;
                if (address.defaultAdress) {
                    tmp = datalistaddress.map((item) => {
                        item.defaultAdress = false;
                        return item;
                    })
                }
                tmp[index] = address
                setListAddress(tmp)
            }
        }
    }, [datalistaddress])
    const handleDefaultAdress = useCallback((id) => {
        console.log('change default address', id)
        let list = [...datalistaddress];
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                list[i].defaultAdress = true;
            } else {
                list[i].defaultAdress = false;
            }
        }
        setListAddress(list)
    }, [datalistaddress])
    const handleDeleteAdress = useCallback((id) => {
        console.log(id)
        // let list = [...listaddress];
        let tmpList = datalistaddress;
        let index = tmpList.findIndex(item => item.id === id);
        if (index !== -1) {
            tmpList.splice(index, 1);
            setListAddress(tmpList.filter(ids => ids !== id));
        }
    }, [datalistaddress])
    return (
        <Layout style={styles.Layout}>
            {
                modalvisible && <AddressModal
                    lable={lable}
                    isOpen={true}
                    handleCancleModalChangeAddress={handleCancleModalChangeAddress}
                    handleDoneModalChangeAddress={handleDoneModalChangeAddress}
                    formAddress={formAddress}
                />
            }
            <TopNavigation title='Sổ địa chỉ' titleStyle={{ fontWeight: 'bold', fontSize: 20 }} alignment='center' leftControl={BackAction()}
                rightControls={
                    <TopNavigationAction
                        icon={PlusCircleIcon}
                        onPress={() => { setformAddress(initAddress), setModalvisible(true),setlable("Thêm địa chỉ") }}
                    />
                }
            />
            <Divider />
            

            <FlatList
                data={datalistaddress}
                keyExtractor={(item) => typeof item.id === "number" ? item.id.toString() : item.id}
                renderItem={({ item }) => <ItemAddress
                    item={item}
                    setModalvisible={setModalvisible}
                    setformAddress={setformAddress}
                    setlable={setlable}
                    handleDefaultAdress={handleDefaultAdress}
                    handleDeleteAdress={handleDeleteAdress} />}
            />
        </Layout>
    );
};

export default AddressScreen;
const styles = StyleSheet.create({
    Layout: { flex: 1 },
    // TopNavigation: { marginTop: 20 },
    titleStyle: { fontWeight: 'bold', fontSize: 20 }
})
