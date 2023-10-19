import { useContext, useState } from 'react'
import { useForm, Head, Link } from '@inertiajs/react'
import { useTheme } from '@mui/material/styles'
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  MenuList,
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
  ListItemButton,
  Drawer,
  Paper,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
import LogoutIcon from '@mui/icons-material/Logout'
import LightModeIcon from '@mui/icons-material/LightMode'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import SpeedIcon from '@mui/icons-material/Speed'
import ChecklistIcon from '@mui/icons-material/Checklist'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

const appName = import.meta.env.VITE_APP_NAME

import { ColorModeContext } from '../contexts/ColorModeContext'

const Authenticated = ({ user, children, displayTitle }) => {
  const theme = useTheme()
  const { colorMode } = useContext(ColorModeContext)

  const { post } = useForm()
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const open = Boolean(anchorEl)

  const navMenu = [
    {
      text: 'Dashboard',
      route: 'dashboard',
      icon: <SpeedIcon />,
    },
    {
      text: 'My Tasks',
      route: 'tasks.index',
      icon: <ChecklistIcon />,
    },
    {
      text: 'New Task',
      route: 'tasks.create',
      icon: <AddCircleOutlineIcon />,
    },
  ]

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const handleMenuToggle = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    handleMenuClose()
    post(route('logout'))
  }

  const handleColorModeToggle = () => {
    colorMode.toggleColorMode()
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {appName}
      </Typography>
      <Divider />
      <List>
        {navMenu.map((menuItem) => (
          <ListItem key={menuItem.route} disablePadding>
            <ListItemButton component={Link} href={route(menuItem.route)}>
              <ListItemIcon>{menuItem?.icon}</ListItemIcon>
              <ListItemText primary={menuItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Head title={displayTitle} />
      <Box
      // sx={{
      //   display: 'flex',
      //   minHeight: '100vh',
      // }}
      >
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: {
                  sm: 'none',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: 'flex' }}>
              <Typography
                variant="h6"
                component={Link}
                href="/"
                sx={{
                  display: { xs: 'none', sm: 'block', marginRight: 10 },
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: '#fff',
                }}
              >
                {appName}
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                {navMenu.map((menuItem) => (
                  <Button
                    component={Link}
                    sx={{ color: '#fff' }}
                    href={route(menuItem.route)}
                    key={menuItem.route}
                  >
                    {menuItem.text}
                  </Button>
                ))}
              </Box>
            </Box>
            <Box sx={{ ml: 'auto' }}>
              <IconButton color="inherit" onClick={handleColorModeToggle}>
                {theme.palette.mode === 'light' ? (
                  <Brightness4Icon />
                ) : (
                  <LightModeIcon />
                )}
              </IconButton>
              <IconButton color="inherit" onClick={handleMenuToggle}>
                <Avatar sx={{ width: 32, height: 32 }} />
              </IconButton>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleMenuClose}
              onClick={handleMenuClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    width: 200,
                    maxWidth: '100%',
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuList>
                <MenuItem>
                  <Typography>Hi, {user.name}</Typography>
                </MenuItem>

                <Divider />
                <MenuItem
                  onClick={handleMenuClose}
                  component={Link}
                  href={route('profile.edit')}
                >
                  <ListItemIcon>
                    <Person2OutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </MenuItem>
              </MenuList>
            </Menu>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 240,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box sx={{ p: 2, minWidth: '100%' }}>
          <Toolbar />
          <Paper sx={{ p: 2 }}>{children}</Paper>
        </Box>
      </Box>
    </>
  )
}

export default Authenticated
