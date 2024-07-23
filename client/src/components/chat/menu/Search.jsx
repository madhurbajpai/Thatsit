import { Box, styled } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const Component = styled(Box)`
    backgroud: #fff;
    height: 45px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
`;

const Wrapper = styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 0 13px;
    width: 100%;
    border-radius: 10px;
`;

const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    color: #919191;
    padding: 6px 8px
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    height: 15px;
    padding-left: 65px;
    font-size: 14px;
`;

const Search = ({setText}) => {
  return (
    <Component>
        <Wrapper>
            <Icon>
                <SearchIcon fontSize='small'/>
            </Icon>
            <InputField 
                placeholder='Search or start new chat'
                onChange={(e)=>setText(e.target.value)}
            />
        </Wrapper>
    </Component>
  )
}

export default Search