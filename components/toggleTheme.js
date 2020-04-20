import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { Alert } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light, dark } from '@eva-design/eva';
import { AppNavigator } from './AppNavigator';
import { ThemeContext } from '../theme-context';
import SplashScreen from 'react-native-splash-screen';
import GlobalContext from "../context/global";
const themes = { light, dark };

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, [])
    const [theme, setTheme] = useState('light');
    const [cartList, setCartList] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    const changeIsAuth = useCallback((status)=>{
        setIsAuth(status)
    },[isAuth])
    const handleRemoveCart = useCallback(()=>{
        setCartList([]);
    },[cartList])
    const removeCartItem = useCallback((id) => {
        let tmpList = cartList;
        let index = tmpList.findIndex(item => item.id === id);
        if (index !== -1) {
            tmpList.splice(index, 1);
            setCartList(tmpList.filter(ids=>ids!==id));
        }
    }, [cartList]);
    const addCartItem = useCallback((product, isBuy) => {
        let index = cartList.findIndex(item => item.id === product.id);
        if (index === -1) {
            if (!isBuy) {
                Alert.alert("Sản phẩm đã được thêm vào giỏ hàng")
            }
            setCartList((currentCart) => ([...currentCart, { ...product, count: 1 }]))
        }
    }, [cartList]);
    const changeCartItem = useCallback((id, number) => {

        let tmpData = [...cartList];
        let index = tmpData.findIndex(item => item.id === id);
        if (index !== -1) {
            if (tmpData[index].count === 1 && number === -1) {
                return;
            }
            let price = tmpData[index].price / tmpData[index].count;
            tmpData[index].count += number;
            tmpData[index].price = price * tmpData[index].count;
            setCartList(tmpData)
        }
    }, [cartList]);
    const currentTheme = useMemo(() => themes[theme], [theme]);
    const toggleTheme = useCallback(() => {
        setTheme((currentThemeState) =>
            currentThemeState === 'light' ? 'dark' : 'light'
        );
    }, []);

    return (
        <React.Fragment>
            <IconRegistry icons={EvaIconsPack} />
            <GlobalContext.Provider value={{
                toggleTheme, cartList,
                removeCartItem, addCartItem, changeCartItem,handleRemoveCart,isAuth,changeIsAuth
            }}>
                <ApplicationProvider mapping={mapping} theme={currentTheme}>
                    <AppNavigator />
                </ApplicationProvider>
            </GlobalContext.Provider>
        </React.Fragment>
    );
};

export default App;