import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import gsap from 'gsap'

//Components
import Logo from '../../images/logo-white.svg';
import Headroom from 'react-headroom'

// Styles
import { HeaderContainer, LogoImage } from './style'

const Header = ({ siteTitle }) => {
  let logoElement = useRef(null);

  useEffect(() => {
    gsap.from([logoElement], .5, {
      delay: 5,
      ease: "SlowMo.InOut",
      opacity: 0
  });
  }, logoElement)

  return (
    <Headroom>
      <HeaderContainer>
        <Link to="/">
          <LogoImage ref={el => logoElement = el } src={Logo} alt="logo"/>
        </Link>

      </HeaderContainer>
    </Headroom>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
