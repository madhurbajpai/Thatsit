import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import Cheader from './Cheader'
import Messages from './Messages';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { getConversation } from '../../../service/api';
const ChatBox = () => {
    const {person, account} = useContext(AccountContext);

    useEffect(()=>{
      const getConversationDetails = async () => {
        let data = await getConversation({senderId: account.sub, receiverId: person.sub});
        console.log(data);
      }
      getConversationDetails();
    }, [person.sub]);

  return (
    <Box>
         <Cheader person={person}/>
         <Messages person={person}/>
    </Box>
  )
}

export default ChatBox