import React, {useRef, useEffect}   from 'react'
import gsap from 'gsap'
import { Link } from 'gatsby'

import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
import LogoGithub from 'react-ionicons/lib/LogoGithub'

import { MediaContainer } from './style'

const Media = () => {
    let media = useRef(null);

    useEffect(() => {
        gsap.from([media], 1, {
          delay: 5,
          ease: "SlowMo.InOut",
          x: '50px',
          opacity: 0,
          stagger: 0.2,
      });
      }, media)

    return (
        <MediaContainer ref={el => media = el } >
            <a href="https://www.google.com/">
            <LogoFacebook fontSize="20px" color="#fff" />
            </a>
            <a href="https://www.google.com/">
            <LogoInstagram fontSize="20px" color="#fff" />
            </a>
            <a href="https://www.google.com/">
            <LogoLinkedin fontSize="20px" color="#fff" />
            </a>
            <a href="https://www.google.com/">
            <LogoGithub fontSize="20px" color="#fff" />
            </a>
        </MediaContainer>
    )
}

export default Media
