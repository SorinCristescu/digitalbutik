/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useRef, useEffect, useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap'
import gsap from 'gsap'

//Components
import Header from "../header"
import Footer from "../footer"
import MenuButton from "../menuButton"
import Scrolldown from "../scrolldown"
import Media from "../media"
import Menu from "../menu"
import Logo from '../../images/logo-white.svg';
// Styles
import "./layout.css"
import { LayoutContainer, SplashLogo } from './style'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [showNavigation, setShowNavigation] = useState(false);
  // let logoBigElement = useRef(null);
  let main = useRef(null);

  console.log(showNavigation)

  useEffect(() => {
  //   gsap.to([logoBigElement], 1, {
  //     delay: 2,
  //     ease: "SlowMo.InOut",
  //     width: '50px',
  //     top: '14px',
  //     opacity: 1
  // });
  gsap.from([main], 1, {
    delay: 6.5,
    ease: "SlowMo.InOut",
    y: '50',
    opacity: 0
});
  }, [ main])

  return (
    <LayoutContainer>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MenuButton setShowNavigation={setShowNavigation} showNavigation={showNavigation}/>
      <Menu showNavigation={showNavigation}/>


      
      <Timeline
        // target={
        //   <div style={{ width: '300px', height: '300px', border: '1px solid white', zIndex: '1'}}/>
        // }
        >
          <Tween 
            delay={4}
            duration={1.5}
            from={{
              scale: '3',
              top: '45%',
              opacity: '1',
            }} 
            to={{
              scale: '1',
              top: '15%',
              opacity: '0',
            }} 
            >
            <SplashLogo>
              <svg width="66px" height="63px" viewBox="0 0 66 63" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Design-System" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Desktop-HD-Copy-5" stroke="#FFFFFF" strokeWidth="2.5">
                        <g id="logo-white">
                            <g id="db" transform="translate(12.091603, 22.000000)">
                              <Tween
                                duration={1.5}
                                from={{
                                  svgDraw: 0,
                                }}
                                to={{
                                  svgDraw: 1,
                                }}
                              >
                                <path d="M4.76063633e-13,-2.13162821e-14 L4.76063633e-13,20.2857444 C2.79513835,20.2857444 6.20295085,20.2857444 10.2234375,20.2857444 C14.7683127,20.2857444 19.1210146,15.5442577 19.1210146,10.1428722 C19.1210146,4.74148671 13.9548392,0.790283479 9.54959346,1.10166406 C7.90276911,1.10166406 6.43720421,1.10166406 5.15289875,1.10166406 L5.15289875,15.1180895 C6.73394013,15.1180895 8.42411972,15.1180895 10.2234375,15.1180895 C10.921697,15.1180895 13.9548392,13.6501765 13.9548392,10.6800148 C13.9548392,7.70985309 11.2162577,6.32295476 10.2234375,6.32295476 C8.74755887,6.32295476 7.20237183,6.32295476 5.5878764,6.32295476" id="d"></path>
                              </Tween>
                              <Tween
                                delay={1.5}
                                duration={1.5}
                                from={{
                                  svgDraw: 0,
                                  }}
                                to={{
                                  svgDraw: 1,
                                  }}
                                  >
                                <path d="M23.2763359,1.30637255 L32.3123596,1.30637255 C38.8567199,1.37508908 42.1289,3.58852579 42.1289,7.94668268 C42.1289,12.3048396 39.7953543,14.6085523 35.128263,14.8578208 L24.4951979,14.8578208 L24.4951979,6.53952572 L35.128263,6.53952572 C39.7953543,7.14907579 42.1289,9.63292927 42.1289,13.9910862 C42.1289,18.3492431 38.8567199,20.4708206 32.3123596,20.3558188 L23.2763359,20.3558188" id="b"></path>                                
                              </Tween>
                            </g>
                            <g id="lines">
                            <Tween
                                delay={3}
                                duration={1}
                                from={{
                                  svgDraw: [0, 0.5],
                                  }}
                                to={{
                                  svgDraw: [1, 0],
                                  }}
                                  >
                                <path d="M0.195779168,62.7118902 L65.7468258,62.7118902" id="lowerline"></path>
                              </Tween>
                              <Tween
                                delay={3}
                                duration={1}
                                from={{
                                  svgDraw: [0, 0.5],
                                  }}
                                to={{
                                  svgDraw: [1, 0],
                                  }}
                                  >
                                <path d="M0.195779168,0.288109756 L65.7468258,0.288109756" id="upperline"></path>
                              </Tween>
                            </g>
                        </g>
                    </g>
                </g>
              </svg>
            </SplashLogo>

          </Tween>


      </Timeline>
      
      <main ref={el => main = el}>{children}</main>

            <Scrolldown/>

        <Media/>
      <Footer/>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
