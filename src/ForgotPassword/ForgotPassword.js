import React from "react";
import "./forgotPassword.css";
import Grid from "@material-ui/core/Grid";
import { Paper, TextField,Typography, Button, Snackbar } from "@material-ui/core";
import * as routes from '../constants/routes';
import { Redirect } from "react-router-dom";

class ForgotPassword extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            submit: false,
            error: false,
            errorMessage: ""
        }
    };

    onSubmit = () => {
        let re = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/, 'igm');
        if (this.state.email !== "" && re.test(this.state.email) ) {
            this.setState({
                submit: true,
            });
        }
        else if (this.state.email === "" ) {
            this.setState({
                error: true,
                errorMessage: "Email cannot be empty"
            })
        }
        else {
            this.setState({
                error: true,
                errorMessage: "Invalid email"
            });
        }
    };

    handleChange = event => {
        this.setState({
            error: false,
            submit: false,
            [event.target.name]: event.target.value,
        });
    };

    handleClose = () => {
        this.setState({
            error: false,
            email: "",
            submit: false,
        });
    };

    onCloseSuccessMessage = () => {
        this.setState({
            submit: false,
            redirect: true,
        })
    };
    
    render(){

        if (this.state.redirect) {
            return <Redirect to={routes.RESETPASSWORD} />
        }

        return(
            <div className="container">
                <Grid container direction="row" alignItems="center" justify="center">
                    
                    <Paper className="forgotPasswordpaper">

                        <Grid item xs={12} md={12} className="gridItem">
                            <img src={require("../assets/logo.jpg")} alt="logo" className="logo"/>
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <Typography variant="h5" component="h5" className="titleForgotPassword">FORGOT PASSWORD</Typography>
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <TextField required id="standard-required" label="Email Address" value={this.state.email} name={"email"} onChange={this.handleChange}/>
                        </Grid>              

                        <Grid item xs={12} md={12} className="gridItem">
                            
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <Button variant="contained" className="btnForgotPassword" onClick={this.onSubmit}>Submit</Button>
                        </Grid>     

                    </Paper>

                </Grid>

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
                    open={this.state.submit}
                    onClick={this.onCloseSuccessMessage}
                    message={<span id="message-id">Instructions has been sent to your mail. Please check your mail for directions.</span>}
                />

            </div>
        );
    }
};

export default ForgotPassword;