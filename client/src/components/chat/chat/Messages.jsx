import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from '../../../context/AccountProvider';

import React from "react";
import Footer from "./Footer";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 78.5vh;
  overflow-y: scroll;
`;

const Messages = ({person}) => {

  const {account} = useContext(AccountContext);

  const sendText = (e) => {
    console.log(e);
    const code = e.keyCode || e.which;
    if(code === 13){
      let message = {
        senderId: account.sub,
        receiverId: person.sub
        // conversationId: 
      }
    }
  };

  return (
    <Wrapper>
      <Component>

      </Component>
      <Footer sendText={sendText} />
    </Wrapper>
  );
};

export default Messages;
