import React, { useRef, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

// other
import Switch from 'react-switch';
import { useSpring, animated } from 'react-spring';

// media & css
import { ThemeContext } from 'styled-components';
import { HomeIcon } from '../../media/Icons';
import { Wrapper, ProgressIndicator } from './NavigationCSS';


// ---
const Navigation = ({ toggleTheme }) => {

  const articlesGroup = useRef();

  const theBar = useRef();

  const { colors, title } = useContext(ThemeContext);

  const [toggle, setToggle] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 998 ? true : false);

  const [width, setWidth] = useState(isMobile ? "0%" : "100%");
  const [height, setHeight] = useState(isMobile ? "100%" : "0%");

  // const props = useSpring({opacity: toggle ? 1 : 0 })



  React.useEffect(()=>{
    window.addEventListener("resize", updateMobileDetector);

    return () => {
      window.removeEventListener("resize", updateMobileDetector)
    }

  }, [isMobile])
  
  React.useEffect(()=>{
    // console.log(window)
    window.addEventListener('scroll', scrollIndicator);

    return () => {
      window.removeEventListener('scroll', scrollIndicator);
    };
  }, [isMobile])


  const updateMobileDetector = () =>{ 
    const screenWidth = window.innerWidth;

    if(isMobile && screenWidth > 998){
      console.log('update to pc')
      setHeight(width);
      setWidth('100%');
      setIsMobile(false);
    }

    if(!isMobile && screenWidth <= 998){
      console.log('update to mobile');
      setWidth(height);
      setHeight('100%');
      setIsMobile(true);
    }
  }
  const toggleNavGroup = (e) => {
    articlesGroup.current.classList.toggle('toggle');
    // e.stopPropagation();
    // setToggle(!toggle);
  }


  const scrollIndicator = () => {
    // window.innerWidth <= 998 
    console.log('fire')
    
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    // console.log(window.innerWidth <= 998 ? "yes" : "no")
    // isMobile ? theBar.current.style.width = scrolled + "%" : theBar.current.style.height = scrolled + "%";
    isMobile ? setWidth(scrolled + "%") : setHeight(scrolled + "%");
  }

  console.log('width: ',width, 'height: ',height)


  return (

    <Wrapper>
      <ProgressIndicator 
        // style={{height: isMobile ? "5px" : "100%", width: isMobile ? "100%" : "5px"}} 
        isMobile={isMobile} 
        width={width} 
        height={height} 
        className="progress-container"
      >
        <div style={{height: height, width: width}}  className="progress-bar" ref={theBar}></div>
      </ProgressIndicator>

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
          width={35}
          handleDiameter={20}
          onColor={colors.secondary}
          offColor="#ff0000"
        />

      </div>
    </Wrapper>
  )
}

export default Navigation
