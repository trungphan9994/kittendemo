import React, { useCallback, useMemo } from 'react';
import { TouchableOpacity, Dimensions, View, StyleSheet } from 'react-native';
import { Divider, Layout, Text, Select, Icon, Datepicker } from '@ui-kitten/components';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Input = ({
    name,
    value,
    setCurrentField,
    setTmpValues,
    lable,
    handleChangeData
}) => {

    const gender = useMemo(
        () => [
            { value: 1, text: 'Nam' },
            { value: 0, text: 'Nữ' }
        ],
        []
    );
    const showTextFiled = useCallback((value, name) => {
        if (name === 'birthday') {
            var mm = value.getMonth() + 1;
            var dd = value.getDate();
            var yy = value.getFullYear();
            value = `${dd}/${mm}/${yy}`
        }
        return `${value} ${
            ['birthday'].includes(name)
                ? ""
                : ''
            }`;
    }, []);
    return (
        <>
            <TouchableOpacity
                onPress={() => {
                    if (name !== 'gender' && name !== 'phone' && name !== 'email') {
                        setCurrentField(name);
                        setTmpValues(value);
                        //show model neys !=gender
                    }
                }}
                activeOpacity={0.5}
            >
                <Layout style={styles.Layout1}>
                    <Text
                        style={styles.headerText}
                        appearance="hint"
                        category="s1"
                    >
                        {lable}
                    </Text>
                    {/* view gender */}
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        {name === 'gender' ? (
                            <Select
                                style={{
                                    width: width / 3.2
                                }}
                                data={gender}
                                selectedOption={gender.find(
                                    ({ value: genderValue }) =>
                                        genderValue === value
                                )}
                                onSelect={({ value }) =>
                                    handleChangeData('gender', value)//run o  day thi no chay o cai cha truyenf vo
                                }
                            />
                        ) : (
                                //view con lai
                                <Text style={styles.text} category="s1">
                                    {showTextFiled(value, name)}
                                </Text>
                            )}
                    </View>
                    {name !== 'gender'
                        ? <Icon name='arrow-ios-forward' style={{ width: 32 }} width={32} height={32} fill='#C5CEE0' />
                        : <></>
                    }
                    {/* <Icon name='arrow-ios-forward' style={{ width: 32 }} width={32} height={32} fill='#C5CEE0' /> */}

                </Layout>
            </TouchableOpacity>
            <Divider />
            {name === 'height' && <Layout style={styles.LayoutBreak} />}
        </>
    );
};

export default Input;
const styles = StyleSheet.create({
    SafeAreaView: { flex: 1, backgroundColor: 'white' },
    // TopNavigation: { marginTop: 20 },
    titleStyleTopNavigation: { fontWeight: 'bold', fontSize: 20 },
    headerText: {
        marginHorizontal: 24,
        marginVertical: 4,
        marginTop: 12,
        marginBottom: 12,
        fontSize:14
    },
    text: {
        // marginHorizontal: 24,
        marginVertical: 4,
        marginTop: 12,
        marginBottom: 12,
        fontSize: 14
    },
    Layout: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f8fb'
    },
    View: { paddingTop: 10, paddingBottom: 10 },
    Layout1: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    LayoutBreak: {
        height: 30,
        backgroundColor: '#f7f8fb'
    },
    button: {
        backgroundColor: '#1654B4',
        borderRadius: 8,
        borderColor: '#1654B4',
        marginLeft: 24,
        marginRight: 24,
        marginTop: 14,
        marginBottom: 14
    }
})
