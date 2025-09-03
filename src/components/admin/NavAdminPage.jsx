import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const location = useLocation();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
      <div>
         <div className='flex w-full h-20 box-border p-5 items-center gap-2 border-b border-b-gray-100 '>
         <div className='p-2 bg-blue-600 text-white font-bold text-xl w-10 flex items-center justify-center rounded-xl'>T</div>
         <h1 className='text-3xl font-bold'>TechEco</h1>
      </div>
      <Divider />
       <div className='flex flex-col p-1.5 gap-2'>
         <Link to={'/admin'}>
         <div className={`flex items-center rounded-2xl p-3 gap-2 hover:bg-gray-200 duration-150 ${location.pathname === "/admin" ? "bg-blue-100 text-blue-900" : "bg-white"}`}><DashboardOutlinedIcon/><p className='text-l font-extralight'>Dashboard</p></div>
         </Link>
         <Link to={'/admin/products'}>
         <div className={`flex items-center rounded-2xl p-3 gap-2 hover:bg-gray-200 duration-150 ${location.pathname === "/admin/products" ? "bg-blue-100 text-blue-900" : "bg-white"}`}><Inventory2OutlinedIcon/><p className='text-l font-extralight'>Products</p></div>
         </Link>
         <Link to={'/admin/featured'}>
         <div className={`flex items-center rounded-2xl p-3 gap-2 hover:bg-gray-200 duration-150 ${location.pathname === "/admin/featured" ? "bg-blue-100 text-blue-900" : "bg-white"}`}><StarBorderIcon/><p className='text-l font-extralight'>Featured Products</p></div>
         </Link>
         <Link to={'/admin/discounts'}>
         <div className={`flex items-center rounded-2xl p-3 gap-2 hover:bg-gray-200 duration-150 ${location.pathname === "/admin/discounts" ? "bg-blue-100 text-blue-900" : "bg-white"}`}><LocalOfferOutlinedIcon/><p className='text-l font-extralight'>Discounts</p></div>
         </Link>
         <Link to={'/admin/orders'}>
         <div className={`flex items-center rounded-2xl p-3 gap-2 hover:bg-gray-200 duration-150 ${location.pathname === "/admin/orders" ? "bg-blue-100 text-blue-900" : "bg-white"}`}><ShoppingCartOutlinedIcon/><p className='text-l font-extralight'>Orders</p></div>
         </Link>
         <Link to={'/admin/customers'}>
         <div className={`flex items-center rounded-2xl p-3 gap-2 hover:bg-gray-200 duration-150 ${location.pathname === "/admin/customers" ? "bg-blue-100 text-blue-900" : "bg-white"}`}><PeopleOutlineIcon/><p className='text-l font-extralight'>Customers</p></div>
         </Link>
       </div>
      <Divider />
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
         <div className='z-10 w-full h-20 bg-white flex justify-between fixed items-center border-b border-b-gray-400 top-0 px-4 md:px-10'>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to={'/'}>
          <button className='text-black border p-2 border-gray-300 rounded-2xl hover:bg-gray-200 duration-150'>View Store</button>
          </Link>
        </div> 
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true, 
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
