import React, { useState } from "react";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import { Box, InputBase, styled } from "@mui/material";

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 18px;
  width: calc(85%);
  padding: 4px;
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 10px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`;

const ClipIcon = styled(AttachFileIcon)`
  transform: rotate(40deg);
`;

const Footer = ({sendText}) => {

const [text, setText] = useState('');

  return (
    <Container>
      <EmojiEmotionsOutlinedIcon />
      <ClipIcon />
      <Search>
        <InputField placeholder="Type a message" 
        onChange={(e)=> setText(e.target.value)}
        onKeyPress={(e)=> sendText(e)}
        />
      </Search>
      <MicIcon />
    </Container>
  );
};

export default Footer;
