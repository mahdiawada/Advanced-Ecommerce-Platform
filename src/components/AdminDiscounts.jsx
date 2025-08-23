import PercentIcon from '@mui/icons-material/Percent';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';

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

export default function AdminDiscounts() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <>
        <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Discounts</h1>
            <div className="flex flex-col gap-2">
                <p className="text-gray-500">Create and manage discount codes for your customers</p>
                <button className="p-2 w-40 bg-blue-600 rounded-2xl text-white font-medium">Create Discount</button>
            </div>
        </div>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <div className="w-full h-35 border rounded-2xl bg-white shadow border-gray-300 box-border p-6 flex flex-col justify-between">
                <div className='flex justify-between'>
                    <p className='font-medium text-gray-600'>Active Discounts</p>
                    <LocalOfferOutlinedIcon sx={{color:'green'}}/>
                </div>
                <h1 className='text-2xl font-bold'>3</h1>
            </div>
            <div className="w-full h-35 border rounded-2xl bg-white shadow border-gray-300 box-border p-6 flex flex-col justify-between">
                <div className='flex justify-between'>
                    <p className='font-medium text-gray-600'>Total Discounts</p>
                    <PercentIcon sx={{color:'blue'}}/>
                </div>
                <h1 className='text-2xl font-bold'>4</h1>
            </div>
            <div className="w-full h-35 border rounded-2xl bg-white shadow border-gray-300 box-border p-6 flex flex-col justify-between">
                <div className='flex justify-between'>
                    <p className='font-medium text-gray-600'>Expired This Month</p>
                    <CalendarTodayIcon sx={{color:'red'}}/>
                </div>
                <h1 className='text-2xl font-bold'>1</h1>
            </div>
            <div className="w-full h-35 border rounded-2xl bg-white shadow border-gray-300 box-border p-6 flex flex-col justify-between">
                <div className='flex justify-between'>
                    <p className='font-medium text-gray-600'>Total Usage</p>
                    <PeopleOutlineIcon sx={{color:'purple'}}/>
                </div>
                <h1 className='text-2xl font-bold'>924</h1>
            </div>
        </div>
        <div className='w-full h-auto border overflow-auto bg-white rounded-2xl border-gray-300 shadow box-border p-4 flex flex-col gap-3.5'>
            <h1 className='font-medium'>Discount Codes</h1>
            <table className="table-auto w-full border-collapse rounded-2xl shadow overflow-hidden">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Code</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Type</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Value</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Usage</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Valid Until</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="text-sm">
                        <tr className="odd:bg-white even:bg-gray-50">
                        <td className="px-6 py-4">WELCOME20</td>
                        <td className="px-6 py-4">Welcome Discount</td>
                        <td className="px-6 py-4">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-300 text-gray-700">
                            Percentage
                            </span>
                        </td>
                        <td className="px-6 py-4">20%</td>
                        <td className="px-6 py-4">234</td>
                        <td className="px-6 py-4">12/31/2024</td>
                        <td className="px-6 py-4">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            Active
                            </span>
                        </td>
                        <td>
                            <div className='flex justify-center'>
                                <IconButton 
                                    id="demo-customized-button"
                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    variant="contained"
                                    onClick={handleClick}>
                                    <MoreHorizIcon/>
                                </IconButton>
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
                                    <MenuItem onClick={handleClose} disableRipple>
                                    <EditIcon />
                                    Edit Discount
                                    </MenuItem>
                                    <Divider sx={{ my: 0.5 }} />
                                    <MenuItem onClick={handleClose} disableRipple>
                                    <DeleteOutlineIcon />
                                    Delete Discount
                                    </MenuItem>
                                </StyledMenu>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}