import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem, styled } from "@mui/material";


const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color: #4a4a4a; 
`;

const HeaderMenu = ({setOpenDrawer}) => {

const [open, setOpen] = useState(null);

const handleClose = () => {
    setOpen(null);
}

const handleClick = (e) => {
    setOpen(e.currentTarget);
}

  return (
    <>
      <MoreVertIcon onClick={handleClick}/>
      <Menu
        open={open}
        keepMounted
        onClose={handleClose}
        anchorEl={open}
        getContentAnchorE1={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
      >
        <MenuOption onClick={()=>{handleClose(); setOpenDrawer(true);}}>
          Profile
        </MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
