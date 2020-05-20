import React, {useRef, useEffect} from "react";

import { Controller, Scene } from 'react-scrollmagic';
import gsap from 'gsap';


//Components
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import IntroSection from '../components/introSection'
import ProjectListItem from '../components/projectListItem'
import Mobile from "../images/mobile.svg"
import UXUI from "../images/ux-ui.svg"
import Web from "../images/web.svg"
import FadeInOutOnScroll from '../components/animation/fadeInOutOnScroll'
import MoveFromLeftToRight from '../components/animation/moveFromLeftToRight'
import GrowWidthOnScroll from '../components/animation/growWidthOnScroll'
// Styles
import styled from 'styled-components'
import Grid from 'styled-components-grid'

const PageContainer = styled.div`
    width: 100%;
`;

const Section = styled.section`
    width: 100%;
    max-width: 1025px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .row {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .column {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 30px;
    }

    .line {
      width: 100%;
      height: 2px;
      border: 1px solid white;
      margin-bottom: 30px;
      opacity: 1;
    }

    .left-container {
      width: 50%;
      height: 100%;
      position: relative;
    }

    .right-container {
      width: 50%;
      height: 100%;
      padding: 30px 0 0 0;
    }

    h1 {
      text-transform: uppercase;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: white;
      -webkit-text-fill-color: transparent;
    }

    h6 {
      text-align: left;
    }

    .img-expertises {
      width: auto;
      height: 100px;
      margin: 20px auto;
    }

    .section-counter {
      -webkit-text-stroke-color: #3A393A;
      position: absolute;
      top: 0;
      left: 0;
    }
    .section-title {
      position: absolute;
      top: 80px;
      left: 0;
    }
`;

const IndexPage = () => {
  // let helloLine = useRef(null);
  // let philosopfyLine = useRef(null);
  // let whatWeDoLine = useRef(null);
  // let expertisesLine = useRef(null);

  // useEffect(() => {
  //   gsap.from([helloLine, philosopfyLine, whatWeDoLine, expertisesLine ], 1, {
  //     delay: 5,
  //     ease: "SlowMo.InOut",
  //     width: '0%',
  //     opacity: 0
  // });

  // }, [helloLine, philosopfyLine, whatWeDoLine, expertisesLine])


  return (
    <Layout>
    <SEO title="Home" />
    <PageContainer>
      <Section>
        <h1>A digital studio</h1>
        <p>digital products and user experiences, designed to connect</p>
      </Section>

      <Section>

        <div className="row">
          <div className="left-container">
            <div className="line"></div>
            <FadeInOutOnScroll
                    scrollDuration={600}
                    indicators={false}
                    triggerHook={0.8}
                    pin={false}
                    animationDuration={1.4}
                    animationPosition='-=0.8'
            >
            <h3>hello,</h3>
            </FadeInOutOnScroll>
            {/* <p>welcome to digitalbutik</p> */}
            <FadeInOutOnScroll
                    scrollDuration={600}
                    indicators={false}
                    triggerHook={0.8}
                    pin={false}
                    animationDuration={1.4}
                    animationPosition='-=0.8'
            >
              <p>digitalbutik is a close-knit family of creatives based in beautiful Copenhagen, Denmark.
                We are a hard-working, collaborative bunch that use our collective experiences, design and technical expertise to solve real-world problems, by creating meaningful, compelling content for all mediums.
                We are an unusual bunch of creatives who share one vision - building digital products that stand out of the many.
                We enjoy stepping out of our confort zone and delivery something new and unseen.</p>
              </FadeInOutOnScroll>
          </div>
          <div className="right-container">

          </div>
        </div>
      </Section>

      <Section>
        {/* <IntroSection
                sectionTitle="our philosophy" 
                sectionCounter="01" 
                sectionText="digitalbutik is a close-knit family of creatives based in beautiful Copenhagen, Denmark.
                We are a hard-working, collaborative bunch that use our collective experiences, design and technical expertise to solve real-world problems, by creating meaningful, compelling content for all mediums.
                We are an unusual bunch of creatives who share one vision - building digital products that stand out of the many.
                We enjoy stepping out of our confort zone and delivery something new and unseen."
        /> */}
   
      </Section>
      <Section>
      <div className="line"></div>
        <div className="row">

          <div className="left-container">
            <h1 className="section-counter">02</h1>
            <h3 className="section-title">what we do</h3>
          </div>
          <div className="right-container">
            <p>In today's digital revolution, many are building software because they can. 
                Few are building software because they should. DigitalButik help you create something meaningful, because your business is important for us and we promise ourself to create products people actually want and need.</p>
          </div>
        </div>
      </Section>
      <Section>
      <div className="line"></div>
      <div className="row">

          <div className="left-container">
            <h1 className="section-counter">03</h1>
            <h3 className="section-title">expertises</h3>
          </div>
          <div className="right-container">
          <p>digitalbutik is a close-knit family of creatives based in beautiful Copenhagen, Denmark.
              We are a hard-working, collaborative bunch that use our collective experiences, design and technical expertise to solve real-world problems, by creating meaningful, compelling content for all mediums.
              We are an unusual bunch of creatives who share one vision - building digital products that stand out of the many.
              We enjoy stepping out of our confort zone and delivery something new and unseen.</p>
          </div>
        </div>
        <Grid
                wrap={{xs: true, sm: false, md: false, lg: false, xl: false}} 
                halign="center" 
                valign="center">
                <Grid.Unit 
                  size={{xs: 1, sm: 1/3, md: 1/3, lg: 1/3, xl: 1/3}} 
                  visible={{xs: true, sm: true, md: true, lg: true, xl: true}}>
                    <div className="column">
                      <img className="img-expertises" src={UXUI} alt="web"/>
                    <h5>UX & UI Design</h5>
                    <p>Designing outstanding visuals and hi-standard brand guidelines for new companies and those who choose to rebrand</p>
                    </div>

                </Grid.Unit>
                <Grid.Unit
                  size={{xs: 1, sm: 1/3, md: 1/3, lg: 1/3, xl: 1/3}} 
                  visible={{xs: true, sm: true, md: true, lg: true, xl: true}}>
                    <div className="column">
                    <img className="img-expertises" src={Web} alt="web"/>
                    <h5>Web Development</h5>
                    <p>Developing top class mobile friendly websites with outstanding design and right content approach</p>
                    </div>
                </Grid.Unit>
                <Grid.Unit
                  size={{xs: 1, sm: 1/3, md: 1/3, lg: 1/3, xl: 1/3}} 
                  visible={{xs: true, sm: true, md: true, lg: true, xl: true}}>
                    <div className="column">
                    <img className="img-expertises" src={Mobile} alt="web"/>
                    <h5>Mobile Development</h5>
                    <p>Developing modern and easy to use apps for iOS and Android with any kind of functional</p>
                    </div>

                </Grid.Unit>  
            </Grid> 
      </Section>
      <Section>
      <div className="line"></div>
      <div className="row">

          <div className="left-container">
            <h1 className="section-counter">04</h1>
            <h3 className="section-title">creations</h3>
          </div>
          <div className="right-container">
          <p>digitalbutik is a close-knit family of creatives based in beautiful Copenhagen, Denmark.
              We are a hard-working, collaborative bunch that use our collective experiences, design and technical expertise to solve real-world problems, by creating meaningful, compelling content for all mediums.
              We are an unusual bunch of creatives who share one vision - building digital products that stand out of the many.
              We enjoy stepping out of our confort zone and delivery something new and unseen.</p>
          </div>
        </div>
        {/* <ProjectListItem
          projectTitle="first project"
          projectCateg="web development"/> */}
        {/* <ProjectListItem
          projectTitle="second project"
          projectCateg="mobile development"/>
        <ProjectListItem
          projectTitle="third project"
          projectCateg="UX/UI design"/> */}
      </Section>
    </PageContainer>
  </Layout>
  )
}

export default IndexPage
