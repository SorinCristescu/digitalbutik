import React, {useRef, useEffect}  from 'react'
import PropTypes from "prop-types"
import gsap from 'gsap'

//Components


// Styles 
import {MenuContainer} from './style'

const MenuButton = ({setShowNavigation, showNavigation}) => {
    let menu = useRef(null);


    useEffect(() => {
      gsap.from([menu], 1, {
        delay: 5,
        ease: "SlowMo.InOut",
        x: '-50px',
        opacity: 0
    });
    }, menu)


    return (
        <MenuContainer onClick={() => setShowNavigation(!showNavigation)} ref={el => menu = el } >
            <div className="burger-button">
                <div className="line first-line"></div>
                <div className="line second-line"></div>
                <div className="line third-line"></div>
            </div>

            <p>menu</p>            
        </MenuContainer>
    )
}

MenuButton.propTypes = {
    
  }

export default MenuButton
