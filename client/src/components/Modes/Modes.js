import React, { useState } from 'react';
import '../../App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles} from './themes';

const StyleApp = styled.div`

color: {props => props.theme.fontcolor};
`;


function Modes() {

  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light'? setTheme('dark') : setTheme('light');
};

return (
  <div className='dark-light'>

  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
  <GlobalStyles/>
  <StyleApp/>
  <button className="" onClick={() => themeToggler()}>Theme</button>
  </ThemeProvider>

  </div>    
    );
  }
  
  export default Modes;
  