/* eslint-disable no-unused-vars */
import React from "react";
import "./resetPassword.css";
import Grid from "@material-ui/core/Grid";
import { Paper, TextField, Typography, Button, Snackbar } from "@material-ui/core";
import * as routes from '../constants/routes';
import { Redirect, Switch } from "react-router-dom";

class ResetPassword extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            confirmPassword: "",
            error: false,
            reset: false,
            errorMessage: "",
            redirect: false,
        }
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onReset = () => {
        if (this.state.password !== this.state.confirmPassword ) {
            this.setState({
                error: true,
                errorMessage: "Passwords do not match"
            });
        }
        else if (this.state.password === "" || this.state.confirmPassword === "" || (this.state.password === "" && this.state.confirmPassword === "")) {
            this.setState({
                error: true,
                errorMessage: "Password cannot be empty"
            });
        }
        else {
            this.setState({
                reset: true,
                error: false,
                password: "",
                confirmPassword: ""
            });
        }
    };

    handleClose = () => {
        this.setState({
            error: false,
            password: "",
            confirmPassword: "",
            reset: false,
        });
    };

    closeSuccessMessage = () => {
        this.setState({
            reset: false,
            password: "",
            confirmPassword: "",
            redirect: true,
        });
    };

    render(){

        if (this.state.redirect) {
            return <Redirect to={routes.LANDING} />
        }

        return(
            
            <div className="container">
                <Grid container direction="row" alignItems="center" justify="center">
                    
                    <Paper className="resetPasswordpaper">

                        <form noValidate autoComplete="off">

                            <Grid item xs={12} md={12} className="gridItem">
                                <img src={require("../assets/logo.jpg")} alt="logo" className="logo"/>
                            </Grid>

                            <Grid item xs={12} md={12} className="gridItem">
                                <Typography variant="h5" component="h5" className="titleResetPassword">RESET PASSWORD</Typography>
                            </Grid>

                            <Grid item xs={12} md={12} className="gridItem">
                                <TextField required id="standard-required" label="Password" type="password" value={this.state.password} name="password" error={this.state.error} onChange={this.handleChange} />
                            </Grid> 

                            <Grid item xs={12} md={12} className="gridItem">
                                <TextField required id="standard-required" label="Confirm Password" type="password" value={this.state.confirmPassword} name="confirmPassword" error={this.state.error} onChange={this.handleChange} />
                            </Grid>              

                            <Grid item xs={12} md={12} className="gridItem">
                                
                            </Grid>

                            <Grid item xs={12} md={12} className="gridItem">
                                <Button variant="contained" className="btnResetPassword" onClick={this.onReset} >Reset</Button>
                            </Grid>     

                        </form>

                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            autoHideDuration={6000}
                            open={this.state.error}
                            className="errorMessage"
                            onClick={this.handleClose}
                            message={<span id="message-id"> {this.state.errorMessage} </span>}
                        />

                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            autoHideDuration={6000}
                            open={this.state.reset}
                            onClick={this.closeSuccessMessage}
                            message={<span id="message-id">Password reset. Click on this message to be redirected to the login page</span>}
                        />

                    </Paper>

                </Grid>
            </div>
        );
    }
};

export default ResetPassword;