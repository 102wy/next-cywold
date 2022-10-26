import React from 'react';
import { SubTitleWrap } from './styles';

const SubTitle = ({ title, subtitle }) => {
    return (
        <SubTitleWrap>
            <h6>{title}</h6>
            <p>{subtitle || ''}</p>
        </SubTitleWrap>
    );
};

export default SubTitle;