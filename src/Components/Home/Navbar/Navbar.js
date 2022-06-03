import { Button } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navbar.css';

const Navbar = () => {
    const { user, logOut } = useAuth();
    
    return (
        <div className="navbar">
            <div className="logo">
                <img src="https://png.pngtree.com/template/20190928/ourmid/pngtree-gold-furniture-lamp-chair-interior-logo-design-template-inspirat-image_312127.jpg" alt="" />
            </div>
            <nav className="n-link">
                <Link to='/home'>Home</Link>
                <Link to='/footer'>About</Link>
                <Link to='/'>Product</Link>
                <Link to='/home'>Contuct Us</Link>
            </nav>
            <div>
                {
                    user?.email ?
                        <Button onClick={logOut} color="inherit" style={{fontWeight: 'bold'}}>Logout</Button>
                        :
                        <NavLink to='/login' style={{textDecoration: 'none', color: 'navy', fontWeight: 'bold'}}>
                            <Button color="inherit" style={{fontWeight: 'bold', color:"navy"}}>Login</Button>
                        </NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;