import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const {user, loginUser, isLoding, authError} = useAuth()

    // const location = useLocation();
    // const history = useHistory()

    const handleonBlur= e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleLogin= e =>{
        loginUser(loginData.email, loginData.password)
        e.preventDefault()
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt: 8}} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Login
                    <form onSubmit={handleLogin}>
                    <TextField 
                    sx={{width: '75%', m: 1}}
                    id="standard-basic" 
                    label="Your Email" 
                    type="email"
                    name="email"
                    onBlur={handleonBlur}
                    variant="standard" />
                    <TextField 
                    sx={{width: '75%', m: 1}}
                    id="standard-basic" 
                    label="Password" 
                    type="password"
                    name="password"
                    onBlur={handleonBlur}
                    variant="standard" />
                    {/* Sigin Button  */}
                    <Button sx={{width: '75%', m: 1}} type="submit" variant="contained">Sign in</Button>
                    {/* ========================= */}

                    {/* Register Button  */}
                    <NavLink to='/register'
                    style={{textDecoration: 'none'}}
                    >
                    <Button sx={{width: '75%', m: 1, }} variant="text">New User? Please Register</Button>
                    </NavLink>
                    {/* ========================= */}
                    </form>
                    {isLoding && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Typography>
                </Grid>
                <Grid item sx={{mt: 8}} xs={12} md={6}>
                    <img style={{width: '100%'}} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;