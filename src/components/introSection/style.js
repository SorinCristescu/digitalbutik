import styled from 'styled-components'

export const IntroContainer = styled.div`
        width: 100%;
        height: 100%;
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