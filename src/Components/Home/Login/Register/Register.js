import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    // const history = useHistory()

    // const {user, registerUser, isLoding, authError}= useAuth();

    const handleonBlur= e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleLogin= e =>{
        if(loginData.password !== loginData.password2){
            alert('Your password did not match')
            return;
        }

        // registerUser(loginData.email, loginData.password,loginData.name, history)

        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt: 8}} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Register
                    { <form onSubmit={handleLogin}>
                    <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Your Name" 
                        name="name"
                        onBlur={handleonBlur}
                        variant="standard" 
                    />
                    <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Your Email" 
                        type="email"
                        name="email"
                        onBlur={handleonBlur}
                        variant="standard" 
                    />
                    <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Password" 
                        type="password"
                        name="password"
                        onBlur={handleonBlur}
                        variant="standard" 
                    />
                    <TextField 
                        sx={{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="conform password" 
                        type="password"
                        name="password2"
                        onBlur={handleonBlur}
                        variant="standard" 
                    />
                    {/* Sigin Button  */}
                    <Button sx={{width: '75%', m: 1}} type="submit" variant="contained">Register</Button>
                    {/* ========================= */}

                    {/* Register Button  */}
                    <NavLink to='/login'
                    style={{textDecoration: 'none'}}
                    >
                    <Button sx={{width: '75%', m: 1, }} variant="text">Already Register? Please Login</Button>
                    </NavLink>
                    {/* ========================= */}
                    </form>}
                    {/* {isLoding && <CircularProgress />}
                    {user?.email && <Alert severity="success">Registration successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>} */}
                </Typography>
                </Grid>
                <Grid item sx={{mt: 8}} xs={12} md={6}>
                {/* <img style={{width: '100%', height: '100%'}} src={registerBanner} alt="" /> */}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;