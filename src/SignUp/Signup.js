import React from "react";
import "./Signup.css";
import { Grid, Paper, TextField, Button, Typography, Snackbar } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import * as routes from "../constants/routes";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            username: "",
            error: false,
            submit: false,
            redirect: false,
        };
    };  

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleClose = () => {
        this.setState({
            error: false,
            password: "",
            email: "",
            username: "",
            confirmPassword: "",
            submit: false,
        });
    };

    onSubmit = () => {
        let re = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/, 'igm');
        let valid = re.test(this.state.email);
        if (this.state.email === "" || this.state.username === "" || this.state.password === "" || this.state.confirmPassword === "") {
            this.setState({
                error: true,
                errorMessage: "Fields cannot be empty",
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        }
        else if (!valid) {
            this.setState({
                email: "",
                password: "",
                error: true,
                errorMessage: "Invalid email"
            });
        }
        else if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                error: true,
                errorMessage: "Passwords do not match",
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }
        else if (this.state.password.length < 8) {
            this.setState({
                error: true,
                errorMessage: "Password has to be atleast 8 characters long",
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }
        else {
            this.setState({
                submit: true,
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
        }
    };

    onCloseSuccessMessage = () => {
        this.setState({
            redirect: true,
        })
    };

    render() {

        if (this.state.redirect) {
            return <Redirect to={routes.LANDING} />
        }

        return(
            <div className="container">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Paper className="paperSignup">

                        <Grid item xs={12} md={12} className="gridItem">
                            <img src={require("../assets/logo.jpg")} alt="logo" className="logo"/>
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <Typography variant="h5" component="h5" className="title">SIGN UP</Typography> 
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <TextField required id="standard-required" label="Username" value={this.state.username} name={"username"} onChange={this.handleChange} />
                        </Grid>

                        <Grid item xs={12} md={12} className="gridItem">
                            <TextField required id="standard-required" label="Email Address" value={this.state.email} name={"email"} onChange={this.handleChange} />
                        </Grid>       

                        <Grid item xs={12} md={12} className="gridItem">
                            <TextField required id="standard-required" label="Password" type="password" value={this.state.password} name={"password"} onChange={this.handleChange} />
                        </Grid> 

                         <Grid item xs={12} md={12} className="gridItem">
                            <TextField required id="standard-required" label="Confirm Password" type="password" value={this.state.confirmPassword} name={"confirmPassword"} onChange={this.handleChange} />
                        </Grid>       

                        <Grid item xs={12} md={12} className="gridItem">
                            
                        </Grid>

                        <Grid item sx={12} md={12} className="gridItem">
                            <Button variant="contained" className="btn" onClick={this.onSubmit}>Sign Up</Button>
                        </Grid>    

                        <Grid item xs={12} md={12} className="alignText linkSignup">
                            <Link to={routes.LANDING}> <Typography variant="body2" component="p">Already have an account?</Typography> </Link>
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
                            message={<span id="message-id">Successfully created account. Click on this message to be redirected to the login page!</span>}
                        />

            </div>
        )
    }
};

export default Signup;