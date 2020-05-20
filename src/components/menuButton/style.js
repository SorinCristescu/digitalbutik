import styled from 'styled-components'

export const MenuContainer = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 45%;
    left: 50px;
    opacity: 1;


    .burger-button {
        width: 30px;
        height: 30px;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        position: relative; 
    }

    .line {
        height: 2px;
        border: 1px solid white;;
        margin: 3px 0;
    }

    .first-line {
        width: 14px;
    }

    .second-line {
        width: 20px;
    }

    .third-line {
        width: 8px;
    }

    p {
        font-family: 'Montserrat', sans-serif; 
        font-size: 12px;
        font-weight: 800;
        text-transform: uppercase;
        transform-origin: 0 0;
        transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        -o-transform: rotate(-90deg);
        filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
        position: absolute;
        bottom: -5px;
        right: 30px;

    }
`;