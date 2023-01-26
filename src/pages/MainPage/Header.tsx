import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {useNavigate} from 'react-router-dom';


import Logo from '../../img/Logo.png';




const settings = ['Logout'];

function ResponsiveAppBar() {

    const LS = localStorage;

    const LVID = LS.getItem('LVUSER');

    const LVTYPEID = LS.getItem('LVTYPEUSER');

    const navigate = useNavigate();


    const navigateLoginPage = () => {
        navigate('/login');
    };
    

    const pages = [
        { page: 'แผนที่', link: 'map' },
        { page: 'ประวัติรถ', link: 'history' },
        { page: 'ข้อมูลรถ', link: 'cardetail' },
        { page: 'เติมเครดิต', link: 'credit' }, // เห็นเฉพาะเจ้าของปั้ม
        { page: 'ข้อมูลลูกค้า', link: 'customer' },
        { page: 'ข้อมูลสถานี', link: 'station' },
        // {page:'ข้อมูลสถานี', link: "stationinformation"},
        { page: 'Serivce', link: 'service' },
        { page: 'ข้อมูลผู้ใช้งาน', link: 'userdetail' }
    ];

    const pagesLV2 = [
        { page: 'แผนที่', link: 'map' },
        { page: 'ประวัติรถ', link: 'history' },
        { page: 'ข้อมูลรถ', link: 'cardetail' },
        // {page:'ข้อมูลสถานี', link: "stationinformation"},
        { page: 'ข้อมูลผู้ใช้งาน', link: 'userdetail' }
    ];

    const pagesLV3 = [
        { page: 'แผนที่', link: 'map' },
        { page: 'ประวัติสถานี', link: 'history' },
        {page:'ข้อมูลสถานี', link: "stationinformation"},
        { page: 'Serivce', link: 'service' },
        { page: 'ข้อมูลผู้ใช้งาน', link: 'userdetail' }
    ];

    const pagesLV4 = [
        { page: 'แผนที่', link: 'map' },
        { page: 'ประวัติรถ', link: 'history' },
        { page: 'ข้อมูลรถ', link: 'cardetail' },
        { page: 'ข้อมูลลูกค้า', link: 'customer' },
        { page: 'ข้อมูลสถานี', link: 'station' },
        // {page:'ข้อมูลสถานี', link: "stationinformation"},
        { page: 'Serivce', link: 'service' },
    ];

    const pagesLV5 = [
        { page: 'แผนที่', link: 'map' },
        { page: 'ประวัติรถ', link: 'history' },
        { page: 'ข้อมูลรถ', link: 'cardetail' },
        // {page:'ข้อมูลสถานี', link: "stationinformation"},
    ];

    const pagesLV6 = [
        { page: 'แผนที่', link: 'map' },
        { page: 'ประวัติสถานี', link: 'history' },
        {page:'ข้อมูลสถานี', link: "stationinformation"},
        { page: 'Serivce', link: 'service' },
    ];

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    


    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        navigateLoginPage();
    };



    return (
        <AppBar position="static" style={{ backgroundColor: 'white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={Logo} style={{ marginRight: '3vw' }} />
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                        >

                            {LVID == "1" && LVTYPEID == "1" && pages.map(({ page, link }) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))
                            }

                            {LVID == "1" && LVTYPEID != "1" && pagesLV4.map(({ page, link }) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))
                            }
                            {LVID == "2" && pagesLV2.map(({ page, link }) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                            {LVID == "3" && pagesLV3.map(({ page, link }) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {LVID == "1" && LVTYPEID == "1" && pages.map(({ page, link }) => (
                            <div style={{ margin: '0vw 2vw' }}>
                                <Button key={page} onClick={handleCloseNavMenu} href={link} sx={{ my: 2, color: 'black', display: 'block' }}>
                                    {page}
                                </Button>
                            </div>
                        ))}
                        {LVID == "1" && LVTYPEID != "1" &&  pagesLV4.map(({ page, link }) => (
                            <div style={{ margin: '0vw 2vw' }}>
                                <Button key={page} onClick={handleCloseNavMenu} href={link} sx={{ my: 2, color: 'black', display: 'block' }}>
                                    {page}
                                </Button>
                            </div>
                        ))}
                        {LVID == "2" && LVTYPEID == "1" && pagesLV2.map(({ page, link }) => (
                            <div style={{ margin: '0vw 2vw' }}>
                                <Button key={page} onClick={handleCloseNavMenu} href={link} sx={{ my: 2, color: 'black', display: 'block' }}>
                                    {page}
                                </Button>
                            </div>
                        ))}
                        {LVID == "2" && LVTYPEID != "1" && pagesLV5.map(({ page, link }) => (
                            <div style={{ margin: '0vw 2vw' }}>
                                <Button key={page} onClick={handleCloseNavMenu} href={link} sx={{ my: 2, color: 'black', display: 'block' }}>
                                    {page}
                                </Button>
                            </div>
                        ))}
                        {LVID == "3" && LVTYPEID == "1" && pagesLV3.map(({ page, link }) => (
                            <div style={{ margin: '0vw 2vw' }}>
                                <Button key={page} onClick={handleCloseNavMenu} href={link} sx={{ my: 2, color: 'black', display: 'block' }}>
                                    {page}
                                </Button>
                            </div>
                        ))}
                        {LVID == "3" && LVTYPEID != "1" && pagesLV6.map(({ page, link }) => (
                            <div style={{ margin: '0vw 2vw' }}>
                                <Button key={page} onClick={handleCloseNavMenu} href={link} sx={{ my: 2, color: 'black', display: 'block' }}>
                                    {page}
                                </Button>
                            </div>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
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
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
