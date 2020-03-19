import React,{useEffect} from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light, dark } from '@eva-design/eva';
import { AppNavigator } from './AppNavigator';
import { ThemeContext } from '../theme-context';
import SplashScreen from 'react-native-splash-screen';

const themes = { light, dark };

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  },[])

  const [theme, setTheme] = React.useState('light');
  const currentTheme = themes[theme];

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack}/>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider mapping={mapping} theme={currentTheme}>
          <AppNavigator/>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export default App;