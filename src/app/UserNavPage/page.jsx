"use client"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Avatar, Box, Button, IconButton, InputBase, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import logo from './images/quizWhiteLogo.png';

const pages = ['Home', 'course', 'Learning'];
const settings = ['Logout'];

export default function UserNavPage({setSeach}) {

  const router = useRouter()

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  };

  const handleCloseNavMenu = (idx) => {
    if (idx === 0) {
      router.push('/ViewAllProduct')
    }
  };

  const handleCloseUserMenu = (idx) => {
    setAnchorElUser(null);
    if (idx == 0) {
      router.push('/login')
      localStorage.removeItem('buy');
    }
  };

  const navToHome = () => {
    router.push('/HomePage')
  }

  return (
    <AppBar position="static"  sx={{ p:"0 22px",backgroundColor: "#7F56D9", boxShadow: "10", position: "fixed", display: { xs: "none", md: "flex" }, zIndex: "10" }}>
        <Toolbar disableGutters>
          <Image
            src={logo}
            width={55}
            height={55}
            alt="Picture of the author"
            style={{ cursor: "pointer" }}
            onClick={navToHome}
          />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml:"20px" }}>
            {pages.map((page, idx) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(idx)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            component="form"
            sx={{ ml: "300px", p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, backgroundColor: "white", borderRadius: "10px" }}
          >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Find course"
              onChange={e => setSeach(e.target.value)}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
          <Box sx={{ ml: "680px" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, idx) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(idx)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
    </AppBar>

  )
}
