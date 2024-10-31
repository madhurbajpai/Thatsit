import React, { useEffect, useState } from "react";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import { uploadFile } from "../../../service/api";
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

const Footer = ({sendText, setValue, value, file, setFile}) => {

  useEffect(() => {
    const getImage = async () => {
      if(file) {
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        await uploadFile(data);
      }
    }
    getImage();
  }, [file])
  
  const onFileChange = (e) => {
      setFile(e.target.files[0]);
      setValue(e.target.files[0].name);
    }

  return (
    <Container>
      <EmojiEmotionsOutlinedIcon />
      <label htmlFor="fileInput" style={{cursor: 'pointer'}}>
        <ClipIcon />
      </label>
      <input 
        type="file"
        id="fileInput"
        style={{display: 'none'}}
        onChange={(e) => onFileChange(e)}
      />
      <Search>
        <InputField placeholder="Type a message" 
        onChange={(e)=> setValue(e.target.value)}
        onKeyPress={(e)=> sendText(e)}
        value={value}
        />
      </Search>
      <MicIcon />
    </Container>
  );
};

export default Footer;
