import { FormControl, RadioGroup, FormControlLabel, Radio, AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from './download.jpg';
import CustomDialog from './CustomDialog';

const Dashboard = ({userId}) => {
    const [status, setStatus] = useState(null);
    const [dialog, setDialog] = useState(false);
    const [newStatus, setNewStatus] = useState(null);
    let history = useHistory();

    const handleLogout = (e) => {
        e.preventDefault();
        history.push("/");
    }

    const handleChangeStatus = (newStatus) => {
        setNewStatus(newStatus);
        setDialog(true);
    }

    const handleClick = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:80/mobileselfencryption/users.php", {
            "userId": userId,
            "isActive": newStatus==="lost" ? "false" : "true"
        })
        .then(res => {
            console.log(res);
            if (res.data.success == 1) {
                setStatus(newStatus);
            }
            setDialog(false);
        })
        .catch(err => {
            console.log(err);
            setDialog(false);
        });
    }

    useEffect(() => {
        Axios.post("http://localhost:80/mobileselfencryption/users.php", {
            "userId": userId
        })
        .then(res => {
            console.log(res);
            if (res.data.success == 1) {
                if(res.data.data.isActive == "true"){
                    setStatus("found");
                }else{
                    setStatus("lost");
                }
            } else {
                console.log(res.data.message);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div className="App">
            <React.Fragment>
                <CustomDialog
                    isOpen={dialog}
                    onClose={e => setDialog(false)}
                    title="Change device status"
                    content={`Do you want to report your device as ${newStatus}?`}
                    onClick={e => handleClick(e)}
                />
            </React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="end" color="inherit">
                        <Button style={{color: 'white'}} onClick={e => handleLogout(e)}>Logout</Button>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <br />
                <p>
                Select the status of your device
                </p>
                <FormControl component="fieldset">
                <RadioGroup aria-label="status" name="status1" value={status} onChange={e => handleChangeStatus(e.target.value)}>
                    <FormControlLabel value="lost" control={<Radio />} label="Lost" />
                    <FormControlLabel value="found" control={<Radio />} label="Found" />
                </RadioGroup>
                </FormControl>
            </header>
        </div>
    );
};

export default Dashboard;