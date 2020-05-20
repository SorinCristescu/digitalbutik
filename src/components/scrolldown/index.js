import React, {useRef, useEffect} from 'react'
import PropTypes from "prop-types"
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap'

import gsap from 'gsap'

//Components
import CircleType from 'circletype';
import IosArrowRoundDown from 'react-ionicons/lib/IosArrowRoundDown'


// Styles  
import {ScrolldownContainer} from './style'

const Scrolldown = () => {
    let scrolldown = useRef(null);
    let rotated = useRef(null)

    useEffect(() => {
        gsap.from([scrolldown], 1, {
            delay: 5.5,
            ease: "SlowMo.InOut",
            y: '50px',
            opacity: 0
          })
        const circleType = new CircleType(rotated).radius(65);
        
    }, [rotated, scrolldown])


    return (

                <ScrolldownContainer ref={el => scrolldown = el} >
                    {/* <Controller>
                        <Scene 
                            duration={2000}
                            indicators={false}
                            triggerHook='0.8' >
                            <Tween
                            from={{
                                rotation: '0',
                            }}
                            to={{
                                rotation: '360',
                            }}
                            > */}
                                <div className="circular-text">
                                    <span ref={el => rotated = el}> digital butik - digital butik - digital butik - digital butik - </span>
                                </div>
                        {/* </Tween>
                    </Scene>
                </Controller> */}
                    <div className="arrow">
                        <IosArrowRoundDown fontSize="60px" color="grey" />
                    </div>            
                </ScrolldownContainer>


    )
}

Scrolldown.propTypes = {
     
}

export default Scrolldown
