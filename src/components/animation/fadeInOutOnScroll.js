import React from 'react'
import PropTypes from "prop-types"
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap'

const FadeInOutOnScroll = (props) => {
    const {
        scrollDuration,
        indicators,
        triggerHook,
        pin,
        children,
        animationDuration,
        animationPosition
     } = props
    return (
        <Controller>
            <Scene
                duration={scrollDuration}
                indicators={indicators}
                triggerHook={triggerHook}
                pin={pin}>
                <Tween 
                    duration={animationDuration}
                    position={animationPosition}
                    from={{
                        autoAlpha: 0,
                        y: '100',
                    }}
                    ease="Power4.easeOut">
                    {children}
                </Tween>

            </Scene>           
        </Controller>
    )
}

FadeInOutOnScroll.propTypes = {
    children: PropTypes.node.isRequired,
    scrollDuration: PropTypes.number.isRequired,
    indicators: PropTypes.bool.isRequired,
    triggerHook: PropTypes.number.isRequired,
    pin: PropTypes.bool,
    animationDuration: PropTypes.number,
    animationPosition: PropTypes.string
  }

export default FadeInOutOnScroll
