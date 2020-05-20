import React, {useRef, useEffect, useState} from 'react'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import gsap from 'gsap'
import {SizeMe} from 'react-sizeme'

//Components


// Styles
import { NavContainer } from './style'

const Menu = ({ showNavigation }) => {
  let navWrapper = useRef(null)
  let link = useRef(null)
  let cursor = useRef(null)
  let span = useRef(null)

  const [xMove, setXMove] = useState(null);
  const [yMove, setYMove] = useState(null);
  const [stateCursorStyleLeft, setCursorStyleLeft] = useState(null);
  const [stateCursorStyleTop, setCursorStyleTop] = useState(null);
  const [stateOffsetWidth, setOffsetWidth] = useState(null);
  const [stateOffsetHeight, setOffsetHeight] = useState(null);

  const animateit = (e) => {
    
    const { offsetX: x, offsetY: y} = e.nativeEvent
    // setOffsetWidth(offsetHeight)
    // setOffsetHeight(offsetHeight)
    // const { offsetWidth: width, offsetHeight: height} = this

    const move = 25
    const xMove = x/stateOffsetWidth*(move*2)-move
    const yMove = y/stateOffsetHeight*(move*2)-move
    setXMove(stateOffsetWidth)
    setYMove(stateOffsetHeight)

    console.log(stateOffsetWidth)
  }

  const editCursor = (e) => {
    const {
      clientX: x,
      clientY: y
    } = e
    const cursorStyleLeft = x + 'px'
    const cursorStyleTop = y + 'px'

    setCursorStyleLeft(cursorStyleLeft)
    setCursorStyleTop(cursorStyleTop)
    console.log(cursorStyleLeft, cursorStyleTop)
    console.log('state', stateCursorStyleLeft, stateCursorStyleTop)
  }

  useEffect(() => {
    if(showNavigation) {
      gsap.to([navWrapper], 1, {
        delay: 0,
        ease: "SlowMo.InOut",
        width: '100%',
        opacity: showNavigation ? 1 : 0,
    });
    } else {
      gsap.to([navWrapper], 1, {
        delay: 0,
        ease: "SlowMo.InOut",
        width: '0%',
        opacity: 0,
    });
    }

  //  animateit()
  //  editCursor()
  

    window.addEventListener('mousemove', editCursor)

  


  }, [navWrapper, link, cursor, span, editCursor ])



    return (
        <NavContainer 
          ref={el => navWrapper = el}
          cursorStyleLeft={stateCursorStyleLeft}
          cursorStyleTop={stateCursorStyleTop}
          // editCursorStyleLeft={(e) => editCursorStyleLeft(e)}
          // editCursorStyleTop={(e) => editCursorStyleTop(e)}
          >
          <nav>

              <Link 
                ref={el => link = el} 
                className="hover-this" 
                to="/about-us"
                onMouseLeave={(e) => animateit.bind(this, e)}
                onMouseMove={(e) => {
                  animateit(e)
                }}
                >
                <span ref={el => span = el }>about us</span>
              </Link>


              <Link ref={el => link = el} className="hover-this"  to="/our-work">
                <span ref={el => span = el}>our work</span>
              </Link>


              <Link ref={el => link = el} className="hover-this"  to="/our-services">
                <span ref={el => span = el}>our service</span>
              </Link>

              <Link ref={el => link = el} className="hover-this"  to="/our-process">
                <span ref={el => span = el}>our process</span>                
              </Link>

              <Link ref={el => link = el} className="hover-this"  to="/contact">
                <span ref={el => span = el}>contact</span>  
              </Link>
              <div ref={el => cursor = el} className="cursor"></div>
          </nav>

      </NavContainer>
    )
}

export default Menu
