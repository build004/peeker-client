import styled from 'styled-components/native';
import { backgroundColor } from './variables';

const Container = styled.View`
    flex: 1;
    padding-top: 15px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${backgroundColor};
`
Container.extend`
`

export default Container;