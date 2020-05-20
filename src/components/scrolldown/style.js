import styled from 'styled-components'

export const ScrolldownContainer = styled.div`
    width: 200px;
    height: 200px;
    position: fixed;
    bottom: -10%;
    left: 50%;
    opacity: 1;

      
    .circular-text {
        position: absolute;
        top: 0%;
        left: 0%;
        transform: translate(-50%, -50%);
        color: grey;
        font-size: 10px;
        font-weight: 800;
        font-family: "Montserrat";
        text-transform: uppercase;
        transition: 0.5s ease-out;
        // -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);

    }

    .arrow {
        position: absolute;
        top: 0%;
        left: 0%;
        transform: translate(-50%, -50%);
        color: grey;
    }
}
`;