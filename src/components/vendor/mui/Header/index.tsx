import { APP_NAME } from 'src/lib/utils/constants.js';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import LoginItem from '@mui/icons-material/Login';
import RegItem from '@mui/icons-material/HowToReg';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useSettings from 'src/lib/hooks/useSettings';
import { THEMES } from 'src/lib/utils/constants';
import Logo from 'src/components/Logo/index';
import { useRouter } from 'next/router';

export default function PrimarySearchAppBar() {
  const router = useRouter();
  const { settings, saveSettings } = useSettings();
  const [anchorEl, setAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const setLightTheme = () => {
    saveSettings({ theme: THEMES.LIGHT });
    handleMobileMenuClose();
    handleMenuClose();
  };
  const setDarkTheme = () => {
    saveSettings({ theme: THEMES.DARK });
    handleMobileMenuClose();
    handleMenuClose();
  };

  const handleCadastar = () => {
    router.push('/cadastrar');
    handleMobileMenuClose();
    handleMenuClose();
  };

  const handleEntrar = () => {
    router.push('/entrar');
    handleMobileMenuClose();
    handleMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleEntrar}>
        <IconButton size="large" color="headerIcons">
          <LoginItem />
        </IconButton>
        Entrar
      </MenuItem>
      <MenuItem onClick={handleCadastar}>
        <IconButton size="large" color="headerIcons">
          <RegItem />
        </IconButton>
        Cadastrar
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {settings.theme === THEMES.DARK ? (
        <MenuItem onClick={setLightTheme}>
          <IconButton
            size="large"
            aria-label="change theme"
            color="headerIcons"
          >
            <Brightness7Icon />
          </IconButton>
          <Typography color="headerText.main">
            Trocar para tema claro
          </Typography>
        </MenuItem>
      ) : (
        <MenuItem onClick={setDarkTheme}>
          <IconButton
            size="large"
            aria-label="change theme"
            color="headerIcons"
          >
            <Brightness4Icon />
          </IconButton>
          <Typography color="headerText.main">
            Trocar para tema escuro
          </Typography>
        </MenuItem>
      )}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="headerIcons"
        >
          <AccountCircle />
        </IconButton>
        <Typography color="headerText.main">
          Painel de Usuário
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        enableColorOnDark
        color="appbar"
        sx={{ backgroundImage: 'none' }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            onClick={() => router.push('/')}
            sx={{ ml: -2.2 }}
          >
            <Logo />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
            fontFamily="Carter One"
            color="headerTitle.main"
          >
            {APP_NAME}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="headerIcons"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: -0.5,
            }}
          >
            <IconButton
              size="small"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="headerIcons"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {settings.theme === THEMES.DARK ? (
              <IconButton
                size="large"
                onClick={setLightTheme}
                aria-label="change theme"
                color="headerIcons"
              >
                <Brightness7Icon />
              </IconButton>
            ) : (
              <IconButton
                size="large"
                onClick={setDarkTheme}
                aria-label="change theme"
                color="headerIcons"
              >
                <Brightness4Icon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
