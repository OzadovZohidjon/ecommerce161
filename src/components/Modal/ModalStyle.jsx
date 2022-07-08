import styled from 'styled-components'
import { Box } from '../Box'

export const ModalStyle = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.open ? '1' : '0')};
    transition: all 0.3s ease;
`
export const ModalPanelStyle = styled.div`
    position: absolute;
    top: 0;
    right: ${(props) => (props.open ? 0 : '-100%')};
    background-color: #fff;
    height: 100%;
    width: 450px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
`

export const ModalPanelMid = styled.div`
    flex: 1 1 auto;
    width: 100%;
    overflow-y: scroll;
`
