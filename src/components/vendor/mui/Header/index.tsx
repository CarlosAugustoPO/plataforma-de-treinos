import sleep from 'src/lib/utils/sleep/index';
import relogin from 'src/lib/fetchers/session/relogin/index';
import updateLogonTokenFields from 'src/lib/fetchers/users/update/jwtKeyField/index';
import LogoutIcon from '@mui/icons-material/Logout';
import logout from 'src/lib/fetchers/session/logout/index';
import { APP_NAME } from 'src/lib/utils/constants/index';
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
import useStatus from 'src/lib/hooks/useStatus';
import useSession from 'src/lib/hooks/useSession';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
import { putAlert } from 'src/reducers/alert/index';
import { useAppSelector } from 'src/lib/hooks/useRedux';
import { selectVisit } from 'src/reducers/visit/index';
import type VisitData from 'src/types/VisitData';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function PrimarySearchAppBar(): JSX.Element {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { settings, saveSettings } = useSettings();
  const [anchorEl, setAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const status = useStatus();
  const session = useSession();
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

  const sairDeste = async () => {
    dispatch(
      putAlert({
        content: {
          message: 'Saindo da áera de usuário',
          severity: 'warning',
          duration: 3000,
          show: true,
        },
      }),
    );
    const result = await logout({
      redirect: false,
      callbackUrl: '/entrar',
    });
    router.push(result.url);
    handleMobileMenuClose();
    handleMenuClose();
  };

  const visit: VisitData = useAppSelector(selectVisit);
  const sairTodos = async () => {
    handleMobileMenuClose();
    handleMenuClose();
    const email = session?.user?.email as string;

    dispatch(
      putAlert({
        content: {
          message: 'Saindo da áera de usuário',
          severity: 'warning',
          duration: 3000,
          show: true,
        },
      }),
    );
    await updateLogonTokenFields({
      email,
      logoutRequestId: 'none',
    });
  };

  const sairOutros = async () => {
    handleMobileMenuClose();
    handleMenuClose();
    const email = session?.user?.email as string;

    dispatch(
      putAlert({
        content: {
          message: 'Saindo dos outros dispositivos',
          severity: 'success',
          duration: 3000,
          show: true,
        },
      }),
    );

    await updateLogonTokenFields({
      email,
      logoutRequestId: visit.data?.visit_id,
    });
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
        {status === 'unauthenticated'
          ? 'Entrar'
          : 'Acessar Painel'}
      </MenuItem>
      {status === 'unauthenticated' ? (
        <MenuItem onClick={handleCadastar}>
          <IconButton size="large" color="headerIcons">
            <RegItem />
          </IconButton>
          Cadastrar
        </MenuItem>
      ) : (
        <div>
          <MenuItem onClick={sairDeste}>
            <IconButton size="large" color="headerIcons">
              <LogoutIcon />
            </IconButton>
            Sair deste dispotivo
          </MenuItem>
          <MenuItem onClick={sairOutros}>
            <IconButton size="large" color="headerIcons">
              <LogoutIcon />
            </IconButton>
            Sair dos outros dispositivos
          </MenuItem>
          <MenuItem onClick={sairTodos}>
            <IconButton size="large" color="headerIcons">
              <LogoutIcon />
            </IconButton>
            Sair de todos os dispositivos
          </MenuItem>
        </div>
      )}
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
      <ElevationScroll>
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
      </ElevationScroll>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
