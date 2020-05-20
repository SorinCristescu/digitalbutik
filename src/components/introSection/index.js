import React from 'react'
import PropTypes from "prop-types"

import FadeInOutOnScroll from '../animation/fadeInOutOnScroll'
import MoveFromLeftToRight from '../animation/moveFromLeftToRight'
import GrowWidthOnScroll from '../animation/growWidthOnScroll'

import { IntroContainer } from './style'


const IntroSection = (props) => {
    const {
        sectionTitle, 
        sectionCounter, 
        sectionText,
    } = props

    return (
        <IntroContainer>
            <GrowWidthOnScroll
                scrollDuration={600}
                indicators={true}
                triggerHook={0.8}
                pin={false}
                animationDuration={1.4}
                animationPosition='-=0.8'
            >
                <div className="line"></div>
            </GrowWidthOnScroll>
            <div className="row">
                <div className="left-container">
                    <MoveFromLeftToRight
                        scrollDuration={600}
                        indicators={false}
                        triggerHook={0.8}
                        pin={false}
                        animationDuration={2}
                        animationPosition='-=0.8'
                    >
                        <h1 className="section-counter">{sectionCounter}</h1>
                    </MoveFromLeftToRight>
                    <MoveFromLeftToRight
                            scrollDuration={600}
                            indicators={false}
                            triggerHook={0.6}
                            pin={false}
                            animationDuration={2}
                            animationPosition='-=0.8'
                    >
                        <h3 className="section-title">{sectionTitle}</h3>
                    </MoveFromLeftToRight>
                </div>
                <div className="right-container">
                    <FadeInOutOnScroll
                                scrollDuration={600}
                                indicators={false}
                                triggerHook={0.5}
                                pin={false}
                                animationDuration={1.4}
                                animationPosition='-=0.8'
                        >
                        {sectionText}
                    </FadeInOutOnScroll>
                </div>
            </div>
        </IntroContainer>
    )
}

IntroSection.propTypes = {
    sectionTitle: PropTypes.string,
    sectionText: PropTypes.string,
    sectionCounter: PropTypes.string,
  }

export default IntroSection
