import styled from 'styled-components'

export const NavContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: #161616;
    opacity: 1;
    position: fixed;
    top; 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: none;

    nav {
        width: 100%;
        height: 100%;
        margin: auto;
        // position: absolute;
        // top: 50%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

    } 
    
        .hover-this {
            transition: all 0.3s ease;
            margin: 20px;

        }

        span {
            display: inline-block;
            font-family: "MonumentExtended UltraBold";
            font-size: 2rem;
            color: #fff;
            text-transform: uppercase;
            pointer-events: none;
            transition: transform 0.1s linear;
        }
        .cursor {
            pointer-events: none;
            position: fixed;
            padding: 0.3rem;
            background-color: #fff;
            border-radius: 50%;
            mix-blend-mode: difference;
            transition: transform 0.3s ease;
            left: ${props => props.cursorStyleLeft};
            top: ${props => props.cursorStyleTop};
        }

        .hover-this:hover ~ .cursor {
            transform: translate(-50%, -50%) scale(8)
        }

`;

