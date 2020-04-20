import React from 'react';
import { View,StyleSheet, Dimensions} from 'react-native';
import {
    TopNavigation,
    Input,
    TopNavigationAction,
    Button,Datepicker
} from '@ui-kitten/components';
import Modal from 'react-native-modalbox';
import { DeleteIcon } from '../Share/IconComponent';
const numeric = ['age', 'weight', 'height'];
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default ({
    isOpen,
    label,
    value = null,
    name,
    setValues,
    handleCancleModal,
    handleDoneModal
}) => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            style={styles.Modal}
            position="center"
            backdrop={true}
            isOpen={isOpen}
        >
            <View>
                <TopNavigation
                    title={label}
                    titleStyle={styles.TopNavigation}
                    alignment="center"
                    leftControl={
                        <TopNavigationAction
                            icon={DeleteIcon}
                            onPress={handleCancleModal}
                        />
                    }
                />
                <View style={styles.View}>
                    {name==='birthday'? (
                        <Datepicker
                        date={value}
                        onSelect={(value) =>setValues(value)}
                      />
                    )
                    : (<Input
                        // label={label}
                        value={value + ''}
                        keyboardType={
                            numeric.includes(name) 
                                ? 'numeric'
                                : name === 'phone'
                                ? 'phone-pad' //de nhap sdt
                                : 'default'
                        }
                        style={styles.Input}
                        onChangeText={setValues}
                        placeholder={label}
                    />)}
                    
                    <Button style={styles.Input} onPress={handleDoneModal}>
                        Xác nhận
                    </Button>
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    Modal: {
        // borderRadius: Platform.OS === 'ios' ? 20 : 6,
        shadowRadius: 10,
        width: width - 40,
        height: height / 3
    },
    TopNavigation: { fontWeight: 'bold', fontSize: 20 },
    View: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    Input: { margin: 10 }
})
