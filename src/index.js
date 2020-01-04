import React from 'react';
import styled from 'styled-components';
import Draggable from '../src/Draggable';
import Droppable from '../src/Droppable';
import { findByLabelText } from '@testing-library/react';

const Wrapper = styled.div`
    width: 100%;
    padding: 32px;
    display: flex;
    justify-content: center;
`;

const Item = style.div`
    padding: 8px;
    color: #555;
    background-color: white;
    border-radius: 3px;
`;

const droppableStyle = {
    backgroundColor: '#555',
    width: '250px',
    height: '400px',
    margin: '32px'
};
