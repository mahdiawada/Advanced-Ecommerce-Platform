import '../css/Nav.css';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
        ...theme.applyStyles('dark', {
          color: 'inherit',
        }),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function Nav() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {cartItems} = useContext(CartContext);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
    const handleClose = () => {
            setAnchorEl(null);
        };
    return (
        <>
            <div className='z-10 w-full h-20 bg-white flex justify-between items-center fixed border-b border-b-gray-400 top-0 px-4 md:px-10'>
                <Link to={'/'}>
                <h1 className='m-0 text-3xl font-extrabold'>TechEco</h1>
                </Link>
                <ul className='hidden md:flex md:gap-2 lg:gap-9 '>
                    <Link to={'/category/laptops'}>
                    <li className='hover:text-blue-500 hover:duration-100 box-border p-1 cursor-pointer'>
                        <LaptopMacOutlinedIcon className='mx-1' />Laptops
                    </li>
                    </Link>
                    <Link to={'/category/phones'}>
                    <li className='hover:text-blue-500 hover:duration-100 box-border p-1'>
                        <PhoneAndroidOutlinedIcon className='mx-1' />Phones
                    </li>
                    </Link>
                    <Link to={'/category/desktops'}>
                    <li className='hover:text-blue-500 hover:duration-100 box-border p-1'>
                        <DesktopWindowsOutlinedIcon className='mx-1' />Desktops
                    </li>
                    </Link>
                </ul>
                <div className='flex gap-3'>
                <ul className='flex gap-3 items-center'>
                    <li className=''>
                      <PersonOutlineOutlinedIcon/>
                    </li>
                    <Link to={'/cart'}>
                        <li className=''>
                          <Badge badgeContent={cartItems.length} color="primary">
                            <ShoppingBagOutlinedIcon />
                          </Badge>
                        </li>
                    </Link>
                    <button className='bg-gray-200 p-2 rounded-2xl hover:shadow-2xl hidden md:block duration-100'>Logout</button>
                </ul>
                <div className='flex justify-center items-center gap-4 md:hidden'>
                    <button className='text-lg'>
                        <MenuIcon   id="demo-customized-button"
                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    variant="contained"
                                    onClick={handleClick}
                                    /> 
                        <StyledMenu
                                id="demo-customized-menu"
                                slotProps={{
                                list: {
                                    'aria-labelledby': 'demo-customized-button',
                                },
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}>
                                  <Link to={'/category/laptops'}>
                                <MenuItem onClick={handleClose} disableRipple>
                                <LaptopMacOutlinedIcon />
                                Laptops
                                </MenuItem>
                                </Link>
                                <Link to={'/category/phones'}>
                                <MenuItem onClick={handleClose} disableRipple>
                                <PhoneAndroidOutlinedIcon />
                                Phones
                                </MenuItem>
                                </Link>
                                <Link to={'/category/desktops'}>
                                <MenuItem onClick={handleClose} disableRipple>
                                <DesktopWindowsOutlinedIcon />
                                Desktop
                                </MenuItem>
                                </Link>
                                <Divider sx={{ my: 0.5 }} />
                                <MenuItem onClick={handleClose} disableRipple>
                                <LogoutIcon />
                                Logout
                                </MenuItem>
                        </StyledMenu>
                    </button>
                </div>
                </div>
            </div>
        </>
    );
}