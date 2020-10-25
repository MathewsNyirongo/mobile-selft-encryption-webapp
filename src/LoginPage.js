import React, { useState } from 'react';
import { AppBar, Button, Grid, Paper, TextField, Toolbar, Typography } from '@material-ui/core';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    let history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:80/mobileselfencryption/index.php', {
            'email': username,
            'password': password
        })
        .then(res => {
            if(res.data.success === 1){
                history.push(`/user/${res.data.user_id}/dashboard`);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            <AppBar position="static" alignitems="center" color="primary">
                <Toolbar>
                <Grid container justify="center" wrap="wrap">
                    <Grid item>
                    <Typography variant="h6">Mobile Self Encryption Web Portal</Typography>
                    </Grid>
                </Grid>
                </Toolbar>
            </AppBar>
            <Grid container spacing={0} justify="center" direction="row">
                <Grid item>
                <Grid container direction="column" justify="center" spacing={2} className="login-form">
                    <Paper elevation={2} variant="elevation" className="login-background">
                    <Grid item>
                        <Typography variant="h5" component="h1">
                        Sign in
                        </Typography>
                    </Grid>
                    <Grid item>
                        <form>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                            <TextField
                                type="email"
                                placeholder="Email"
                                fullWidth
                                name="username"
                                variant="outlined"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                                autoFocus
                            />
                            </Grid>
                            <Grid item>
                            <TextField
                                type="password"
                                placeholder="Password"
                                fullWidth
                                name="password"
                                variant="outlined"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                            </Grid>
                            <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className="button-block"
                                onClick={e => handleLogin(e)}
                            >
                                Login
                            </Button>
                            </Grid>
                        </Grid>
                        </form>
                    </Grid>
                    </Paper>
                </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default LoginPage;