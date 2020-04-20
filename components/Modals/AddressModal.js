import React, { useState, useCallback, useEffect } from 'react';
import { BackIcon } from '../Share/IconComponent';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TopNavigation, TopNavigationAction, Input, Button, Divider, Select, CheckBox, Modal, Text } from '@ui-kitten/components';
import callApi from "../../utils/callApi"
const { width, height } = Dimensions.get("window")
const AddressModal = ({ isOpen, handleCancleModalChangeAddress,
    handleDoneModalChangeAddress, formAddress, lable }) => {
    const [tmpAddress, setTmpAddress] = useState(formAddress);
    console.log("tmpAddress init", tmpAddress)
    const [selectedCity, setSelectedCity] = React.useState(formAddress.city);
    const [selectedDistrict, setSelectedDistrict] = React.useState(formAddress.district);
    const [selectedWard, setSelectedWard] = React.useState(formAddress.ward);
    const [cities, setCities] = React.useState([]);
    const [districts, setDistricts] = React.useState([]);
    const [wards, setWards] = React.useState([]);
    useEffect(() => {
        if (tmpAddress.city !== '') {
            fetchDistricts(tmpAddress.city.id)
        }
        if (tmpAddress.district !== '') {
            fetchWards(tmpAddress.district.id)
        }
        fetchCity();
    }, []);
    const fetchWards = async (idDistrict) => {
        try {
            let { data } = await callApi("GET", `https://thongtindoanhnghiep.co/api/district/${idDistrict}/ward`);
            let tmpData = data.map(({ Title, ID }) => ({ text: Title, id: ID }));
            console.log(tmpData);
            setWards(tmpData);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchDistricts = async (idCity = 0) => {
        try {
            let { data } = await callApi("GET", `https://thongtindoanhnghiep.co/api/city/${idCity}/district`);
            let tmpData = data.map(({ Title, ID }) => ({ text: Title, id: ID }));
            setDistricts(tmpData);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchCity = async () => {
        try {
            let { data: { LtsItem } } = await callApi("GET", "https://thongtindoanhnghiep.co/api/city");
            let newList = LtsItem.map(({ Title, ID }) => {
                return { text: Title, id: ID };
            })
            setCities(newList);
        } catch (error) {
            console.log(error);
        }
    }
    const handleInputChange = useCallback((name, value) => {
        return setTmpAddress((formDataState) => ({
            ...formDataState,
            [name]: value
        }));
    }, []);
    const { name, phone, address, city, district, ward, defaultAdress } = tmpAddress;
    const saveAddress = useCallback(() => {
        console.log("tmpAddress Luu", tmpAddress)
        handleDoneModalChangeAddress(tmpAddress)
    }, [tmpAddress])
    return (
        <Modal
            // animationType="slide" transparent={false}

            backdropStyle={styles.backdrop}
            visible={isOpen}>
            <View style={styles.View}>
                <TopNavigation
                    title={lable}
                    titleStyle={styles.TopNavigation}
                    alignment="center"
                    leftControl={
                        <TopNavigationAction
                            icon={BackIcon}
                            onPress={handleCancleModalChangeAddress}
                        />
                    }

                />
                <Divider />
                <View style={styles.Body}>
                    <Input
                        label="TÊN NGƯỜI NHẬN"
                        value={name}
                        placeholder="Tên người nhận"
                        style={[styles.Input, styles.bold]}
                        onChangeText={(value) =>
                            handleInputChange('name', value)
                        }
                    />
                    <Input
                        label="SỐ ĐIỆN THOẠI"
                        value={phone}
                        placeholder="Số điện thoại"
                        keyboardType='phone-pad'
                        style={[styles.Input, styles.bold]}
                        onChangeText={(value) =>
                            handleInputChange('phone', value)
                        }
                    />
                    <Input
                        label="ĐỊA CHỈ NHẬN HÀNG"
                        value={address}
                        placeholder="Địa chỉ nhận hàng"
                        style={[styles.Input, styles.bold]}
                        onChangeText={(value) =>
                            handleInputChange('address', value)
                        }
                    />
                    <View style={[styles.Input, styles.bold]}>
                        <Text appearance='hint' style={[ styles.bold]}>TỈNH/ THÀNH</Text>
                        <Select
                            style={[styles.Input, styles.bold]}
                            placeholder="Chọn tỉnh/ thành"
                            data={cities}
                            selectedOption={selectedCity}
                            onSelect={(Option) => {
                                console.log("Thanh pho", Option)
                                fetchDistricts(Option.id)
                                setSelectedCity(Option);
                                handleInputChange('city', Option)

                            }}
                        />
                        <Text appearance='hint' style={[ styles.bold]}>QUẬN/ HUYỆN</Text>
                        <Select
                            style={[styles.Input, styles.bold]}
                            placeholder="Chọn quận/ huyện"
                            data={districts}
                            selectedOption={selectedDistrict}
                            onSelect={(Option) => {
                                console.log("Districts", Option)
                                fetchWards(Option.id)
                                setSelectedDistrict(Option);
                                handleInputChange('district', Option)
                            }}
                        />
                        <Text appearance='hint' style={[ styles.bold]}>PHƯỜNG/ XÃ</Text>
                        <Select
                            style={[styles.Input, styles.bold]}
                            placeholder="Chọn phường/ xã"
                            data={wards}
                            selectedOption={selectedWard}
                            onSelect={(Option) => {
                                console.log("Phường", Option)
                                setSelectedWard(Option);
                                handleInputChange('ward', Option)
                            }}
                        />
                    </View>
                    <CheckBox
                        text="Đặt làm địa chỉ mặc định"
                        checked={defaultAdress}
                        onChange={(value) => handleInputChange('defaultAdress', value)}
                    />
                </View>
                <Button style={styles.button} onPress={saveAddress}>Lưu</Button>
            </View>
        </Modal>
    );
};

export default AddressModal;
const styles = StyleSheet.create({
    View: {
        height: height - 30,
    },
    TopNavigation: { fontWeight: 'bold', fontSize: 20 },
    ViewChild: {
        flex: 1
    },
    Input: {
        marginBottom: 8,
        width: width - 40
    },
    Body: {
        flex: 1,
        marginLeft: 24,
        marginRight: 24,
        marginTop: 20
    },
    button: {
        backgroundColor: '#1654B4',
        borderRadius: 8,
        borderColor: '#1654B4',
        marginLeft: 24,
        marginRight: 24,
        marginTop: 14,
        marginBottom: 14
    },
    backdrop: {
        backgroundColor: 'white',

    },
    bold: {
        fontWeight: 'bold', fontSize: 12
    }
})
