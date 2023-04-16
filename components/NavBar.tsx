import React, { useState } from "react";
import Image from "next/image";
import ExpandableSearch from "./ExpandableSearch";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {};

const NavBar = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const showMenu = Boolean(anchorEl);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton aria-label="logo">Logo</IconButton>
            <ExpandableSearch />
          </Box>
          <Box>
            {/* Hamburger menu */}
            <IconButton
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setAnchorEl(e.currentTarget)
              }
            >
              <MenuIcon />
            </IconButton>
            {/* Avatar */}
            <IconButton
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                setAnchorEl(e.currentTarget)
              }
            >
              <Avatar>H</Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={showMenu}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => setAnchorEl(null)}>Home</MenuItem>
              <MenuItem>Blog</MenuItem>
              <MenuItem>Sign in / Sign up</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
