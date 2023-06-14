import { Button, ButtonProps } from 'react-bootstrap';
import styled from 'styled-components';

export const MyButton = styled(Button)<ButtonProps>`
      color: palevioletred;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
      background-color: ${(props) =>
        props.variant === 'danger' ? 'pink' : 'blue'}
`;
