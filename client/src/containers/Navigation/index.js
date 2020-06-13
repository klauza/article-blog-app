import React, { useRef, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

// other
import Switch from 'react-switch';
import { useSpring, animated } from 'react-spring';

// media & css
import { ThemeContext } from 'styled-components';
import { HomeIcon } from '../../media/Icons';
import { Wrapper } from './NavigationCSS';


// ---
const Navigation = ({ toggleTheme }) => {

  const articlesGroup = useRef();

  const { colors, title } = useContext(ThemeContext);

  const [toggle, setToggle] = useState(false);

  // const props = useSpring({opacity: toggle ? 1 : 0 })

  const toggleNavGroup = (e) => {
    articlesGroup.current.classList.toggle('toggle');
    // e.stopPropagation();
    // setToggle(!toggle);
  }

  return (
    <>

    <Wrapper>
      <div className="nav nav-container">
        <NavLink to="/" className="nav--element navlink-1">
          <HomeIcon style={{width: "25px", height: "25px"}} />
          <span>Home</span>
        </NavLink>

        <div className="nav--element navlink-2" 
          // onTouchEnd={eventNav}
          onPointerEnter={toggleNavGroup}
          onPointerLeave={toggleNavGroup}

        >
          <HomeIcon style={{width: "25px", height: "25px"}} />
          <span>Articles</span>

          <animated.div className="articles-group" ref={articlesGroup}>

            <NavLink to="/articles/all">
              <HomeIcon style={{width: "25px", height: "25px"}} />
              <span>All</span>
            </NavLink>

            <NavLink to="/articles/programming">
              <HomeIcon style={{width: "25px", height: "25px"}} />
              <span>Programming</span>
            </NavLink>

            <NavLink to="/articles/other">
              <HomeIcon style={{width: "25px", height: "25px"}} />
              <span>Other</span>
            </NavLink>

          </animated.div>

          
          
        </div>
        

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

      </div>
    </Wrapper>
    </>
  )
}

export default Navigation
