import React, { useContext } from 'react'
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { HomeIcon } from '../../media/Icons';

import { Wrapper } from './NavigationCSS';

const Navigation = ({ toggleTheme }) => {

  const { colors, title } = useContext(ThemeContext);

  return (
    <Wrapper>

      <HomeIcon style={{width: "25px", height: "25px"}} />
      NAVIGATION
      <Switch 
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={colors.secondary}
        offColor="#ff0000"
      />


    </Wrapper>
  )
}

export default Navigation
