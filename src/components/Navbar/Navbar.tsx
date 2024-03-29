import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./Navbar.css"
import { activePage, LoginData, CustomState } from '../utils';

interface NavbarProps {
    loginState: CustomState<LoginData>,
    activePageState: CustomState<activePage>,
}

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar(props: NavbarProps): JSX.Element {
    const { loginState, activePageState } = props;
    function handleClick(page: activePage) {
        activePageState.set(page);
    }


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
    };



    return (
        // <AppBar position="static" sx={{ backgroundColor: 'rgba(23, 69, 83, 0.8)', boxShadow: 'none', height: '7%' }}>

        <div className="navbarContainer">
            <div className="navbarHeader">
                {/* Add an if statement */}

                <h1><img src="lilleaf.png" alt="" />FlashHub</h1>

                <div className="navbarToolBar">

                    {(() => {
                        switch (activePageState.get()) {
                            case "login":
                                return <button onClick={() => handleClick("home")}>  Get Started  </button>;
                            default:
                                const items = [

                                    (<Box sx={{ flexGrow: 0 }}>
                                        <div className="burgerMenu" onClick={handleOpenUserMenu}>
                                            <div className="burgerLine"></div>
                                            <div className="burgerLine"></div>
                                            <div className="burgerLine"></div>
                                        </div>

                                        <Menu
                                            sx={{
                                                mt: '30px',

                                            }}
                                            id="menu-appbar"
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            open={Boolean(anchorElUser)}
                                            onClose={handleCloseUserMenu}
                                        >
                                            {/* Attempting to add code here */}
                                            {settings.map((setting) => (
                                                <MenuItem key={setting} onClick={handleClick.bind(null, "profile")}
                                                    sx={{
                                                        '&:hover': {
                                                            backgroundColor: '#fff4f2',
                                                        },
                                                        '&': {
                                                            padding: '15px 40px',
                                                        },
                                                    }}>
                                                    <Typography textAlign="center">{setting}</Typography>
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </Box>),
                                ]
                                return items;
                        }
                    })()}

                </div>




            </div>
            <hr />
        </div >
    );
}

